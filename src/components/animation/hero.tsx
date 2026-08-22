"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroAnimation() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          video.play().catch((e) => {
            console.warn("Autoplay blocked", e);
          });
        } else {
          video.pause();
          video.currentTime = 0;
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(video);

    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 1,
        delay: 0.3,
      }}
      className="w-full h-full xl:w-2/3 flex justify-center items-center overflow-hidden relative z-30"
    >
      <video
        ref={videoRef}
        className="object-cover h-auto w-full border-none rounded-2xl"
        muted
        playsInline
        preload="none"
      >
        <source src="/video/hero.webm" type="video/webm" />
        Ваш браузер не поддерживает видео.
      </video>
    </motion.div>
  );
}
