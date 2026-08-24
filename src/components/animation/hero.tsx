"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function HeroAnimation() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="absolute inset-0 w-full h-full flex justify-center lg:justify-end -z-10">
      <motion.div
        className="h-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.2,
          delay: 1
        }}
      >
        <video
          ref={videoRef}
          className="w-auto h-full object-contain border-none hidden lg:block"
          autoPlay
          loop
          muted
          playsInline
          preload={"none"}
        >
          <source src="/video/puzzle-desktop.webm" type="video/webm" />
          Ваш браузер не поддерживает видео.
        </video>
        <video
          ref={videoRef}
          className="w-auto h-full object-contain translate-y-10 border-none lg:hidden"
          autoPlay
          loop
          muted
          playsInline
          preload={"none"}
        >
          <source src="/video/puzzle-mobile.webm" type="video/webm" />
          Ваш браузер не поддерживает видео.
        </video>
      </motion.div>
    </div>
  );
}
