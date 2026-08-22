import Image from "next/image";

interface Props {
  name: string;
  alt?: string;
  top?: number;
  right?: number;
}

export default function ImageBlock({
  name,
  alt = "Изображение ленивца",
  top = 0,
  right = 0,
}: Props) {
  return (
    <div className="w-full h-screen absolute inset-0">
      <Image
        src={`/images/${name}`}
        loading="eager"
        alt={alt}
        width={100}
        height={100}
        className="object-contain border border-accent-dark rounded-2xl"
      />
    </div>
  );
}
