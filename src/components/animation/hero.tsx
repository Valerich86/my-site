"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const videos = container.querySelectorAll("video") as NodeListOf<HTMLVideoElement>;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Воспроизводим все видео в контейнере
            videos.forEach((v) => {
              const playPromise = v.play();
              if (playPromise !== undefined) {
                playPromise.catch((e) => {
                  // Автоплей заблокирован браузером — нормально, пользователь кликнет позже
                  console.warn("Autoplay blocked", e);
                });
              }
            });
          } else {
            // Пауза, когда ушли из viewport
            videos.forEach((v) => v.pause());
          }
        });
      },
      {
        root: null,
        threshold: 0.1, // 10% элемента должно быть видно
      }
    );

    observer.observe(container);

    return () => observer.unobserve(container);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full flex justify-center lg:justify-end -z-10"
    >
      <motion.div
        className="h-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Desktop */}
        <video
          className="w-auto h-full object-contain border-none hidden lg:block"
          loop
          muted
          playsInline
          preload="none"
        >
          <source src="/video/cubes-desktop.webm" type="video/webm" />
        </video>

        {/* Mobile */}
        <video
          className="w-auto h-full object-contain translate-y-10 border-none lg:hidden"
          loop
          muted
          playsInline
          preload="none"
        >
          <source src="/video/puzzle-mobile.webm" type="video/webm" />
        </video>
      </motion.div>
    </div>
  );
}
