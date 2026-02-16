import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const MatrixGlobe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Globe parameters
    const centerX = canvas.offsetWidth / 2;
    const centerY = canvas.offsetHeight / 2;
    const radius = Math.min(centerX, centerY) * 0.7;

    let rotation = 0;

    // Generate globe points
    const generateGlobePoints = () => {
      const points: Array<{ x: number; y: number; z: number }> = [];
      const latLines = 24;
      const lonLines = 36;

      // Latitude lines
      for (let lat = 0; lat <= latLines; lat++) {
        const theta = (lat * Math.PI) / latLines;
        for (let lon = 0; lon <= lonLines; lon++) {
          const phi = (lon * 2 * Math.PI) / lonLines;
          const x = radius * Math.sin(theta) * Math.cos(phi);
          const y = radius * Math.cos(theta);
          const z = radius * Math.sin(theta) * Math.sin(phi);
          points.push({ x, y, z });
        }
      }

      // Longitude lines
      for (let lon = 0; lon <= lonLines; lon++) {
        const phi = (lon * 2 * Math.PI) / lonLines;
        for (let lat = 0; lat <= latLines; lat++) {
          const theta = (lat * Math.PI) / latLines;
          const x = radius * Math.sin(theta) * Math.cos(phi);
          const y = radius * Math.cos(theta);
          const z = radius * Math.sin(theta) * Math.sin(phi);
          points.push({ x, y, z });
        }
      }

      return points;
    };

    const points = generateGlobePoints();

    // Animate
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      rotation += 0.003;

      // Draw longitude lines
      const lonLines = 36;
      for (let lon = 0; lon < lonLines; lon++) {
        ctx.beginPath();
        const phi = (lon * 2 * Math.PI) / lonLines;

        for (let i = 0; i <= 100; i++) {
          const theta = (i * Math.PI) / 100;
          const x = radius * Math.sin(theta) * Math.cos(phi + rotation);
          const y = radius * Math.cos(theta);
          const z = radius * Math.sin(theta) * Math.sin(phi + rotation);

          // Project 3D to 2D
          const scale = 300 / (300 + z);
          const x2d = x * scale + centerX;
          const y2d = y * scale + centerY;

          if (z > -radius * 0.3) {
            const alpha = (z + radius) / (2 * radius);
            ctx.strokeStyle = `rgba(0, 255, 150, ${alpha * 0.6})`;
            ctx.lineWidth = 1;

            if (i === 0) {
              ctx.moveTo(x2d, y2d);
            } else {
              ctx.lineTo(x2d, y2d);
            }
          }
        }
        ctx.stroke();
      }

      // Draw latitude lines
      const latLines = 12;
      for (let lat = 1; lat < latLines; lat++) {
        ctx.beginPath();
        const theta = (lat * Math.PI) / latLines;

        for (let i = 0; i <= 100; i++) {
          const phi = (i * 2 * Math.PI) / 100 + rotation;
          const x = radius * Math.sin(theta) * Math.cos(phi);
          const y = radius * Math.cos(theta);
          const z = radius * Math.sin(theta) * Math.sin(phi);

          // Project 3D to 2D
          const scale = 300 / (300 + z);
          const x2d = x * scale + centerX;
          const y2d = y * scale + centerY;

          if (z > -radius * 0.3) {
            const alpha = (z + radius) / (2 * radius);
            ctx.strokeStyle = `rgba(0, 255, 150, ${alpha * 0.6})`;
            ctx.lineWidth = 1;

            if (i === 0) {
              ctx.moveTo(x2d, y2d);
            } else {
              ctx.lineTo(x2d, y2d);
            }
          }
        }
        ctx.stroke();
      }

      // Draw glowing points at intersections
      const glowPoints = 150;
      for (let i = 0; i < glowPoints; i++) {
        const point = points[Math.floor((i * points.length) / glowPoints)];
        const x = point.x * Math.cos(rotation) - point.z * Math.sin(rotation);
        const z = point.x * Math.sin(rotation) + point.z * Math.cos(rotation);
        const y = point.y;

        if (z > -radius * 0.3) {
          const scale = 300 / (300 + z);
          const x2d = x * scale + centerX;
          const y2d = y * scale + centerY;
          const alpha = (z + radius) / (2 * radius);

          ctx.beginPath();
          ctx.arc(x2d, y2d, 1.5, 0, 2 * Math.PI);
          ctx.fillStyle = `rgba(0, 255, 150, ${alpha * 0.8})`;
          ctx.fill();

          // Add glow
          const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, 4);
          gradient.addColorStop(0, `rgba(0, 255, 150, ${alpha * 0.4})`);
          gradient.addColorStop(1, "rgba(0, 255, 150, 0)");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x2d, y2d, 4, 0, 2 * Math.PI);
          ctx.fill();
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-full relative"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: "transparent",
        }}
      />
      {/* Outer glow ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow: "inset 0 0 60px rgba(0, 255, 150, 0.1)",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
};

export default MatrixGlobe;
