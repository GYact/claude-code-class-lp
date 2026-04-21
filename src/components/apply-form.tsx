"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { submitApplication, type ApplyState } from "@/app/actions/apply";

const INITIAL_STATE: ApplyState = { ok: false, message: "" };

const EXPERIENCE_OPTIONS = [
  { value: "none", label: "未経験" },
  { value: "touched", label: "触った程度" },
  { value: "daily", label: "日常的に使用" },
] as const;

export function ApplyForm() {
  const [state, formAction] = useActionState(submitApplication, INITIAL_STATE);

  if (state.ok) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="mx-auto max-w-xl rounded-2xl border border-primary/40 bg-primary/5 p-8 text-center"
      >
        <CheckCircle2 size={44} className="mx-auto text-primary" />
        <p className="mt-4 font-semibold text-lg">{state.message}</p>
        <p className="mt-3 text-sm text-muted leading-relaxed">
          1時間以内に自動返信メールが届かない場合は、迷惑メールフォルダをご確認のうえ
          <br className="hidden sm:block" />
          <span className="text-foreground/80">
            yukito.go@gugenlab.com
          </span>{" "}
          までご連絡ください。
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="mx-auto max-w-xl text-left space-y-5"
      noValidate
    >
      <TextField
        label="お名前"
        name="name"
        autoComplete="name"
        required
        error={state.errors?.name?.[0]}
      />
      <TextField
        label="メールアドレス"
        name="email"
        type="email"
        autoComplete="email"
        required
        error={state.errors?.email?.[0]}
      />
      <TextField
        label="電話番号"
        hint="任意 / 当日連絡用"
        name="phone"
        type="tel"
        autoComplete="tel"
        error={state.errors?.phone?.[0]}
      />

      <fieldset>
        <legend className="block text-sm font-medium mb-2">
          Claude Code 利用経験 <span className="text-primary">*</span>
        </legend>
        <div className="grid sm:grid-cols-3 gap-2">
          {EXPERIENCE_OPTIONS.map((o, i) => (
            <label
              key={o.value}
              className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-3 cursor-pointer hover:border-primary/60 transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5"
            >
              <input
                type="radio"
                name="experience"
                value={o.value}
                defaultChecked={i === 0}
                required
                className="accent-primary"
              />
              <span className="text-sm">{o.label}</span>
            </label>
          ))}
        </div>
        {state.errors?.experience?.[0] && (
          <p className="mt-1.5 text-xs text-red-400">
            {state.errors.experience[0]}
          </p>
        )}
      </fieldset>

      <div>
        <label htmlFor="note" className="block text-sm font-medium mb-2">
          質問・要望 <span className="text-muted text-xs ml-1">任意</span>
        </label>
        <textarea
          id="note"
          name="note"
          rows={4}
          maxLength={2000}
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40 resize-y"
        />
        {state.errors?.note?.[0] && (
          <p className="mt-1.5 text-xs text-red-400">{state.errors.note[0]}</p>
        )}
      </div>

      <div
        aria-hidden
        className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden"
        tabIndex={-1}
      >
        <label>
          Website (leave empty)
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </label>
      </div>

      {state.message && !state.ok && (
        <p
          role="alert"
          aria-live="polite"
          className="rounded-lg border border-red-500/40 bg-red-500/5 px-4 py-3 text-sm text-red-300"
        >
          {state.message}
        </p>
      )}

      <SubmitButton />

      <p className="text-xs text-muted text-center leading-relaxed">
        送信後3日以内にご案内メールをお送りします。参加費は当日現地にて¥9,900。5日前までキャンセル無料。
      </p>
    </form>
  );
}

function TextField({
  label,
  hint,
  name,
  type = "text",
  required,
  autoComplete,
  error,
}: {
  label: string;
  hint?: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
        {hint && <span className="text-muted text-xs ml-2">{hint}</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
      />
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex w-full items-center justify-center gap-2 h-13 px-8 rounded-full bg-primary hover:bg-primary-bright disabled:opacity-60 disabled:cursor-not-allowed text-background font-semibold transition-all hover:shadow-[0_20px_60px_-10px_rgba(224,123,82,0.6)]"
    >
      {pending ? (
        <>
          <Loader2 size={18} className="animate-spin" />
          送信中…
        </>
      ) : (
        <>
          席を確保する
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </>
      )}
    </button>
  );
}
