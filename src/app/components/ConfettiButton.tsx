"use client";
import { useEffect, useState } from "react";

export default function ConfettiButton() {
  const [confetti, setConfetti] = useState<any>(null);

  useEffect(() => {
    import("canvas-confetti").then((mod) => setConfetti(() => mod.default));
  }, []);

  const handleClick = () => {
    if (confetti) {
      confetti({ particleCount: 100, spread: 70 });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-800 transition"
    >
      Nice to meet you! 🎉
    </button>
  );
}
