"use client";

import { useEffect, useCallback, useState } from "react";

const PARTICLE_COUNT = 8;
const DURATION = 400;

interface Spark {
  id: number;
  x: number;
  y: number;
}

let nextId = 0;

export default function ClickSpark() {
  const [sparks, setSparks] = useState<Spark[]>([]);

  const handleClick = useCallback((e: MouseEvent) => {
    const id = nextId++;
    setSparks((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => s.id !== id));
    }, DURATION);
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [handleClick]);

  return (
    <div className="fixed inset-0 z-9999 pointer-events-none" aria-hidden>
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="absolute"
          style={{ top: spark.y, left: spark.x }}
        >
          {Array.from({ length: PARTICLE_COUNT }, (_, i) => (
            <div
              key={i}
              className="spark-particle"
              style={{ "--spark-angle": `${(360 / PARTICLE_COUNT) * i}deg` } as React.CSSProperties}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
