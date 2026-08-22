"use client";

import { font_accent, font_logo } from "@/lib/fonts";
import { motion } from "framer-motion";

interface Props {
  text: string;
  mainWords?: number[];
  position?: "left" | "right" | "center";
}

export default function Opening({
  text,
  mainWords = [1],
  position = "left",
}: Props) {
  const words = text.split(" ");

  return (
    <div className="w-full flex items-center z-30 pointer-events-none">
      <div
        className={`w-full flex flex-wrap gap-6 justify-center
          ${position === "left" && "sm:justify-start"} 
          ${position === "right" && "sm:justify-end"}`}
      >
        {words.map((word, key) => {
          const chars = word
            .split("")
            .map((char) => (char === " " ? "\u00A0" : char));
          return (
            <div
              className={`inline-flex items-start ${font_accent.className}`}
              key={key}
            >
              {chars.map((char, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ rotateY: 360 }}
                    whileInView={{ rotateY: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
                      mass: 1,
                      delay: 0.3 + (key * 0.3 + index * 0.05),
                    }}
                    style={{ zIndex: index * 10 }}
                    className={`${mainWords.includes(key) ? "text-accent" : "text-secondary"} 
                    text-2xl lg:text-6xl`}
                  >
                    {char}
                  </motion.div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
