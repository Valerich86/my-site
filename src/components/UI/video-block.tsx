"use client";

import { useRef, useEffect, useState } from "react";

interface Props {
  src: string;
}

export default function VideoBlock({ src }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.3,
      },
    );
    observer.observe(video);
    return () => observer.unobserve(video);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.warn("Autoplay blocked", err);
      }
    };
    if (isVisible) {
      playVideo();
    } else {
      video.pause();
      video.currentTime = 0; 
    }
  }, [isVisible]);

  return (
    <div className="w-full rounded-2xl flex flex-col justify-center overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-auto border border-accent-dark rounded-2xl"
        muted
        playsInline
        preload="none"
      >
        <source src={src} type="video/webm" />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
}
