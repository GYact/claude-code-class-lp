"use server";

import { Resend } from "resend";
import * as z from "zod";
import { EVENT } from "@/lib/event";

const schema = z.object({
  name: z.string().trim().min(1, "お名前を入力してください").max(100),
  email: z.email("有効なメールアドレスを入力してください").max(254),
  phone: z
    .string()
    .trim()
    .max(30, "電話番号が長すぎます")
    .optional()
    .or(z.literal("")),
  experience: z.enum(["none", "touched", "daily"], {
    error: "利用経験を選択してください",
  }),
  note: z
    .string()
    .trim()
    .max(2000, "2000文字以内で入力してください")
    .optional()
    .or(z.literal("")),
});

export type ApplyState = {
  ok: boolean;
  message: string;
  errors?: Partial<
    Record<"name" | "email" | "phone" | "experience" | "note", string[]>
  >;
};

const EXPERIENCE_LABEL: Record<"none" | "touched" | "daily", string> = {
  none: "未経験",
  touched: "触った程度",
  daily: "日常的に使用",
};

export async function submitApplication(
  _prev: ApplyState,
  formData: FormData,
): Promise<ApplyState> {
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return {
      ok: true,
      message: "お申し込みを受け付けました。3日以内にメールでご案内します。",
    };
  }

  const raw = {
    name: formData.get("name") ?? "",
    email: formData.get("email") ?? "",
    phone: formData.get("phone") ?? "",
    experience: formData.get("experience") ?? "",
    note: formData.get("note") ?? "",
  };

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const flattened = z.flattenError(parsed.error);
    return {
      ok: false,
      message: "入力内容をご確認ください。",
      errors: flattened.fieldErrors as ApplyState["errors"],
    };
  }

  const payload: Payload = {
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone || "",
    experienceLabel: EXPERIENCE_LABEL[parsed.data.experience],
    note: parsed.data.note || "",
    submittedAt: new Date().toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
      dateStyle: "medium",
      timeStyle: "short",
    }),
  };

  const [emailResult, slackResult] = await Promise.allSettled([
    sendEmail(payload),
    sendSlack(payload),
  ]);

  if (emailResult.status === "rejected" && slackResult.status === "rejected") {
    console.error("[apply] both notifications failed", {
      email: emailResult.reason,
      slack: slackResult.reason,
    });
    return {
      ok: false,
      message:
        "通知の送信に失敗しました。お手数ですが時間を置いて再度お試しください。",
    };
  }

  if (emailResult.status === "rejected") {
    console.error("[apply] email failed", emailResult.reason);
  }
  if (slackResult.status === "rejected") {
    console.error("[apply] slack failed", slackResult.reason);
  }

  return {
    ok: true,
    message: "お申し込みを受け付けました。3日以内にメールでご案内します。",
  };
}

type Payload = {
  name: string;
  email: string;
  phone: string;
  experienceLabel: string;
  note: string;
  submittedAt: string;
};

async function sendEmail(p: Payload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.NOTIFY_TO_EMAIL;
  if (!apiKey || !from || !to) {
    throw new Error("Resend env vars are not configured");
  }
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: p.email,
    subject: `【申込】${EVENT.title} ${EVENT.dateShort} - ${p.name}`,
    html: renderEmailHtml(p),
    text: renderEmailText(p),
  });
  if (error) {
    throw new Error(`Resend error: ${error.message ?? JSON.stringify(error)}`);
  }
}

async function sendSlack(p: Payload): Promise<void> {
  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url) {
    throw new Error("SLACK_WEBHOOK_URL is not configured");
  }
  const body = {
    text: `:tada: ${EVENT.title} ${EVENT.dateShort} 新規申込: ${p.name}`,
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: `🎉 新規申込: ${EVENT.title} ${EVENT.dateShort}`,
        },
      },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*お名前:*\n${p.name}` },
          { type: "mrkdwn", text: `*メール:*\n${p.email}` },
          { type: "mrkdwn", text: `*電話:*\n${p.phone || "—"}` },
          { type: "mrkdwn", text: `*経験:*\n${p.experienceLabel}` },
          { type: "mrkdwn", text: `*受付:*\n${p.submittedAt}` },
        ],
      },
      ...(p.note
        ? [
            {
              type: "section",
              text: { type: "mrkdwn", text: `*質問・要望:*\n${p.note}` },
            },
          ]
        : []),
    ],
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`Slack webhook failed: ${res.status} ${text}`);
    }
  } finally {
    clearTimeout(timeout);
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderEmailHtml(p: Payload): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 12px;background:#f6f4ef;font-weight:600;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:8px 12px;">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`;
  return `
    <div style="font-family:system-ui,sans-serif;color:#1a1a1a;">
      <h2 style="margin:0 0 16px;">${EVENT.title} ${EVENT.dateShort} お申し込み</h2>
      <table style="border-collapse:collapse;border:1px solid #e5e2db;width:100%;max-width:560px;">
        ${row("お名前", p.name)}
        ${row("メール", p.email)}
        ${row("電話", p.phone || "—")}
        ${row("経験", p.experienceLabel)}
        ${row("質問・要望", p.note || "—")}
        ${row("受付日時", p.submittedAt)}
      </table>
      <p style="margin-top:16px;font-size:13px;color:#666;">このメールは申込フォームから自動送信されました。返信すると申込者へ直接連絡できます。</p>
    </div>`;
}

function renderEmailText(p: Payload): string {
  return [
    `${EVENT.title} ${EVENT.dateShort} お申し込み`,
    "",
    `お名前: ${p.name}`,
    `メール: ${p.email}`,
    `電話:   ${p.phone || "—"}`,
    `経験:   ${p.experienceLabel}`,
    `質問・要望: ${p.note || "—"}`,
    `受付日時: ${p.submittedAt}`,
  ].join("\n");
}
