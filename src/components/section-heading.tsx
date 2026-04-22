"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  titleWidth,
  descriptionWidth,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  titleWidth?: string;
  descriptionWidth?: string;
}) {
  const resolvedTitleWidth =
    titleWidth ??
    (align === "center"
      ? "mx-auto max-w-[16ch] md:max-w-[18ch]"
      : "max-w-[14ch] md:max-w-[16ch]");
  const resolvedDescriptionWidth =
    descriptionWidth ??
    (align === "center" ? "mx-auto max-w-[60ch]" : "max-w-[58ch]");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.22em] text-primary ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="inline-block h-px w-6 bg-primary" />
          {eyebrow}
        </div>
      )}
      <h2
        className={`mt-5 text-balance font-display text-[32px] font-black leading-[1.08] tracking-[-0.04em] text-primary sm:text-[40px] md:text-[48px] ${resolvedTitleWidth}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-[15px] leading-[1.9] text-foreground/76 md:text-[17px] ${resolvedDescriptionWidth}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
