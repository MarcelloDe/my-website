"use client"; // Required for Next.js event handling

import confetti from "canvas-confetti";

const ConfettiButton = () => {
  const handleClick = () => {
    confetti({ particleCount: 100, spread: 70 });
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-800 transition"
    >
      Nice to meet you! 🎉
    </button>
  );
};

export default ConfettiButton;
