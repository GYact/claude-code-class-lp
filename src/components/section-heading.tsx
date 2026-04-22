"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
}) {
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
      <h2 className="mt-5 max-w-[12ch] text-balance font-display text-[34px] font-black leading-[1.06] tracking-[-0.04em] text-primary sm:text-[42px] md:text-[52px]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-[62ch] text-[15px] leading-[1.9] text-foreground/76 md:text-[17px]">
          {description}
        </p>
      )}
    </motion.div>
  );
}
