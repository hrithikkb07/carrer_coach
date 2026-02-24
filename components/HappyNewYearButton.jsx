"use client";

import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";

export default function HappyNewYearButton() {
  const burstCrackers = () => {
    const duration = 2500;
    const end = Date.now() + duration;

    const colors = ["#FFD700", "#FF4D6D", "#4D96FF", "#6BCF63", "#FFFFFF"];

    // Side fireworks loop
    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });

      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    // Center sparkle rain
    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 180,
        startVelocity: 30,
        gravity: 0.9,
        scalar: 1.1,
        origin: { x: 0.5, y: 0.3 },
        colors,
      });
    }, 600);

    // Final MEGA blast 💥
    setTimeout(() => {
      confetti({
        particleCount: 250,
        spread: 360,
        startVelocity: 45,
        gravity: 0.8,
        scalar: 1.3,
        origin: { x: 0.5, y: 0.45 },
        colors,
      });
    }, 1700);
  };

  return (
    <Button
      variant="ghost"
      onClick={burstCrackers}
      className="text-primary font-semibold text-lg hover:scale-105 transition-transform"
    >
      🎆 Happy New Year
    </Button>
  );
}
