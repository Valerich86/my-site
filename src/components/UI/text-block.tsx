"use client";

import { motion } from "framer-motion";
import { font_default } from "@/lib/fonts";

interface Props {
  text: string;
}

export default function TextBlock({ text }: Props) {
  return (
    <div className="w-full relative z-20">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <pre
          className={`${font_default.className} pointer-events-none select-none whitespace-pre-wrap text-lg`}
        >
          {text}
        </pre>
      </motion.div>
    </div>
  );
}
