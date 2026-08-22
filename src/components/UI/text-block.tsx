"use client";

import { motion } from "framer-motion";
import { font_default } from "@/lib/fonts";
import Decor from "./decor";
import ImageBlock from "./image-block";

interface Props {
  text: string;
  animate?: boolean;
  textColor?:
    | "text-primary"
    | "text-secondary"
    | "text-accent-dark"
    | "text-neutral";
  bgColor?:
    | "bg-primary"
    | "bg-secondary"
    | "bg-accent-dark"
    | "bg-neutral"
    | "bg-transparent";
}

export default function TextBlock({
  text,
  animate = true,
  textColor = "text-secondary",
  bgColor = "bg-transparent",
}: Props) {
  return (
    <div className="w-full relative z-20">
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 1,
        }}
        className={
          `text-secondary backdrop-blur-sm relative 
          bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2)_20%,rgba(255,255,255,0.1)_60%)]
          w-full py-10 flex items-center px-4 overflow-hidden 
          rounded-2xl border border-accent-dark/20`
        }
      >
        <div className="absolute inset-0 bg-noise-overlay z-10" />
          <pre className={`${font_default.className} pointer-events-none whitespace-pre-wrap text-lg`}>
            {text}
          </pre>
      </motion.div>
    </div>
  );
}
