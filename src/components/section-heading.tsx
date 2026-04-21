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
          className={`inline-flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-[0.18em] ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="inline-block w-6 h-px bg-primary" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-3 font-display font-black tracking-[-0.02em] text-[32px] sm:text-[40px] md:text-[48px] leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-foreground/70 text-[15px] md:text-[17px] leading-[1.9]">
          {description}
        </p>
      )}
    </motion.div>
  );
}
