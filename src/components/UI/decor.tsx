"use client";

import { useEffect, useState } from "react";

type Circle = {
  id: number;
  size: number;
  x: number;
  y: number;
};

export default function Decor() {
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    const generateCircles = () => {
      const newCircles = [];
      const count = Math.round(Math.random() * 15 + 5);

      for (let i = 0; i < count; i++) {
        const size = Math.random() * 300 + 10;
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        newCircles.push({
          id: i,
          size,
          x,
          y,
        });
      }

      setCircles(newCircles);
    };

    generateCircles();
  }, []);

  return (
    <div
      className={`fixed inset-0 w-screen h-screen flex justify-center items-center z-10 
      bg-[radial-gradient(circle_at_top_left,#160033_20%,black_60%)]`}
    >
        {circles.map((c, i) => (
          <div
            key={c.id}
            className={
              `absolute shadow-[0px_0px_50px_50px_rgba(22,0,51,0.5)] ${i < 2 && c.size < 100 && "blur-[2px]"}
              bg-[radial-gradient(circle_at_top_left,#381466_10%,black_50%)] rounded-full origin-center`
            }
            style={{
              width: `${c.size}px`,
              height: `${c.size}px`,
              left: `${c.x}%`,
              top: `${c.y}%`,
              transform: `translate(-50%, -50%)`,
            }}
          />
        ))}
    </div>
  );
}
