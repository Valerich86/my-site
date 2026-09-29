"use client";

import { motion } from "framer-motion";
import { font_default } from "@/lib/fonts";
import Decor from "./decor";
import ImageBlock from "./image-block";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

export default function GlassBlock({
  children,
  className="w-full"
}: Props) {
  return (
    <div className={`w-full sm:w-125 lg:w-75 h-75 sm:h-125 lg:h-75 z-20`}>
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
          `text-secondary backdrop-blur-sm relative z-20
          bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2)_20%,rgba(255,255,255,0.1)_60%)]
          w-full h-full py-10 flex items-center px-4 overflow-hidden 
          rounded-2xl border border-accent-dark/20`
        }
      >
        <div className="absolute inset-0 bg-noise-overlay z-10" />
        {children}
      </motion.div>
    </div>
  );
}
