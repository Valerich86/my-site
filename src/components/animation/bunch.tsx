"use client";

import { font_accent } from "@/lib/fonts";
import { motion } from "framer-motion";

interface Props {
  text: string;
  mainWords?: number[];
}

export default function Bunch({ text, mainWords = [1] }: Props) {
  const words = text.split(" ");

  const getRandomValue = (
    index: number,
    min: number,
    max: number,
    key: number = 0,
  ): number => {
    const range = max - min + 1;
    const x = (((index * 123 + 456) % range) + range) % range;
    return min + x + key * 30;
  };

  return (
    <div className="w-full flex items-center z-30 pointer-events-none">
      <div
        className={`w-full flex flex-wrap gap-6 justify-center sm:justify-start ${font_accent.className}`}
      >
        {words.map((word, key) => {
          const chars = word
            .split("")
            .map((char) => (char === " " ? "\u00A0" : char));
          return (
            <div className={`inline-flex items-start`} key={key}>
              {chars.map((char, index) => {
                const positionX = index > 10 ? -50 : 50;
                const positionY = -10 - key * 20;
                const rotation = getRandomValue(index, -360, 360, key);

                return (
                  <motion.div
                    key={index}
                    initial={{
                      y: positionY,
                      rotate: rotation,
                    }}
                    whileInView={{ y: 0, rotate: 0, x: 0 }}
                    viewport={{ once: false, amount: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      mass: 1,
                      delay: 0.3 + (key * 0.3 + index * 0.05),
                    }}
                    className={`${mainWords.includes(key) ? "text-accent" : "text-secondary"} 
                    text-4xl lg:text-5xl`}
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
