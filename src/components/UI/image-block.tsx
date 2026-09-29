'use client';

import Image from "next/image";

interface Props {
  src: string;
  alt?: string;
}

export default function ImageBlock({
  src,
  alt = "Изображение",
}: Props) {
  return (
    <div className="h-75 sm:h-125 lg:h-75 w-full flex items-center overflow-hidden relative border border-accent-dark rounded-2xl">
      <Image
        src={src}
        loading="eager"
        alt={alt}
        width={100}
        height={100}
        quality={100}
        className="object-cover h-full w-full rounded-2xl select-none grayscale-50"
      />
      <div className="absolute inset-0 pointer-events-none w-full h-full select-none img-overlay"/>
    </div>
  );
}
