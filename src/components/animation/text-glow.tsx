"use client";

import { font_accent } from "@/lib/fonts";
import { motion } from "framer-motion";

interface Props {
  text: string;
  breakAfterWordIndex?: number[];
}

export default function TextGlow({ text, breakAfterWordIndex }: Props) {
  const words = text.split(" ");

  // Вставляем маркер переноса в нужном месте
  if (breakAfterWordIndex !== undefined && breakAfterWordIndex.length) {
    breakAfterWordIndex.forEach((element) => {
      words.splice(element + 1, 0, "__BREAK__");
    });
  }

  return (
    <div className="w-full flex justify-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration: 1}}
        className="w-full flex flex-wrap gap-6 justify-center sm:justify-start"
      >
        {words.map((word, key) => {
          if (word === "__BREAK__") {
            return <div key={key} className="w-full" />;
          }

          const chars = word
            .split("")
            .map((char) => (char === " " ? "\u00A0" : char));

          return (
            <div className="inline-flex items-start" key={key}>
              {chars.map((char, index) => (
                <div
                  key={index}
                  className={`text-secondary text-3xl lg:text-5xl animate-hero`}
                  style={{
                    animationDelay: `${0.3 + (key * 0.3 + index * 0.05)}s`,
                  }}
                >
                  <span className={font_accent.className}>{char}</span>
                </div>
              ))}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
