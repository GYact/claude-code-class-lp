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
          className={`inline-flex items-center gap-2 text-primary text-[11px] font-mono uppercase tracking-[0.22em] ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="inline-block w-6 h-px bg-primary" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 max-w-[12ch] text-balance font-display text-[32px] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[40px] md:text-[48px]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-[62ch] text-[15px] leading-[1.9] text-foreground/72 md:text-[17px]">
          {description}
        </p>
      )}
    </motion.div>
  );
}
