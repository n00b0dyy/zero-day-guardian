import React, { useEffect, useRef } from "react";

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const header = document.querySelector(".header");
    canvas.width = header.offsetWidth;
    canvas.height = header.offsetHeight;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
    const columns = Math.floor(canvas.width / 15);
    const drops = Array(columns).fill(1);

    const speeds = drops.map(() => Math.random() * 1.5 + 0.5);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const colorIntensity = Math.floor(Math.random() * 255);
      ctx.fillStyle = `rgba(0, ${colorIntensity}, 0, 0.8)`;
      ctx.font = "15px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];

        const fontSize = Math.random() * 20 + 10;
        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(text, i * 15, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += speeds[i];
      }
    };

    const interval = setInterval(draw, 50);

    window.addEventListener("resize", () => {
      canvas.width = header.offsetWidth;
      canvas.height = header.offsetHeight;
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default MatrixRain;
