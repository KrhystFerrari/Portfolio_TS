import React from "react";
import { motion } from "framer-motion";

const StarsFallback: React.FC = () => {
  // Gerar posições aleatórias para estrelas
  const stars = [...Array(150)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1] overflow-hidden">
      <style>
        {`
          @keyframes twinkle {
            0%, 100% {
              opacity: 0.2;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
          }
          
          @keyframes shooting-star {
            0% {
              transform: translateX(0) translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateX(-300px) translateY(300px);
              opacity: 0;
            }
          }
          
          .star {
            animation: twinkle var(--duration) ease-in-out infinite var(--delay);
          }
          
          .shooting-star {
            animation: shooting-star 2s linear infinite var(--delay);
          }
        `}
      </style>

      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at top, #0a1a0e 0%, #050510 100%)",
        }}
      />

      {/* Nebula effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(0, 255, 150, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(0, 200, 100, 0.1) 0%, transparent 50%)
          `,
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Estrelas estáticas com twinkle */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            // @ts-expect-error - CSS custom properties
            "--duration": `${star.duration}s`,
            "--delay": `${star.delay}s`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
          }}
        />
      ))}

      {/* Estrelas maiores com cores */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`colored-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 2}px`,
            height: `${Math.random() * 3 + 2}px`,
            background: i % 3 === 0 ? "#00ff96" : i % 3 === 1 ? "#00c878" : "#22c55e",
            boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Estrelas cadentes */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`shooting-${i}`}
          className="absolute shooting-star"
          style={{
            left: `${Math.random() * 50 + 50}%`,
            top: `${Math.random() * 50}%`,
            width: "2px",
            height: "2px",
            background: "white",
            boxShadow: "0 0 10px white, 0 0 20px white, 0 0 30px white",
            // @ts-expect-error - CSS custom properties
            "--delay": `${i * 7}s`,
          }}
        >
          {/* Trail da estrela cadente */}
          <div
            className="absolute h-[2px] bg-gradient-to-r from-white to-transparent"
            style={{
              width: "100px",
              right: "0",
              top: "0",
            }}
          />
        </div>
      ))}

      {/* Constelações decorativas */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        {/* Constelação 1 */}
        <g>
          <line x1="20%" y1="30%" x2="25%" y2="35%" stroke="#00ff96" strokeWidth="0.5" />
          <line x1="25%" y1="35%" x2="22%" y2="40%" stroke="#00ff96" strokeWidth="0.5" />
          <line x1="22%" y1="40%" x2="28%" y2="42%" stroke="#00ff96" strokeWidth="0.5" />
          <circle cx="20%" cy="30%" r="2" fill="#00ff96" />
          <circle cx="25%" cy="35%" r="2" fill="#00ff96" />
          <circle cx="22%" cy="40%" r="2" fill="#00ff96" />
          <circle cx="28%" cy="42%" r="2" fill="#00ff96" />
        </g>

        {/* Constelação 2 */}
        <g>
          <line x1="70%" y1="25%" x2="75%" y2="28%" stroke="#00c878" strokeWidth="0.5" />
          <line x1="75%" y1="28%" x2="73%" y2="33%" stroke="#00c878" strokeWidth="0.5" />
          <line x1="73%" y1="33%" x2="78%" y2="30%" stroke="#00c878" strokeWidth="0.5" />
          <circle cx="70%" cy="25%" r="2" fill="#00c878" />
          <circle cx="75%" cy="28%" r="2" fill="#00c878" />
          <circle cx="73%" cy="33%" r="2" fill="#00c878" />
          <circle cx="78%" cy="30%" r="2" fill="#00c878" />
        </g>

        {/* Constelação 3 */}
        <g>
          <line x1="50%" y1="70%" x2="55%" y2="68%" stroke="#22c55e" strokeWidth="0.5" />
          <line x1="55%" y1="68%" x2="58%" y2="73%" stroke="#22c55e" strokeWidth="0.5" />
          <line x1="50%" y1="70%" x2="48%" y2="75%" stroke="#22c55e" strokeWidth="0.5" />
          <circle cx="50%" cy="70%" r="2" fill="#22c55e" />
          <circle cx="55%" cy="68%" r="2" fill="#22c55e" />
          <circle cx="58%" cy="73%" r="2" fill="#22c55e" />
          <circle cx="48%" cy="75%" r="2" fill="#22c55e" />
        </g>
      </svg>

      {/* Galáxia distante */}
      <motion.div
        className="absolute"
        style={{
          top: "15%",
          right: "20%",
          width: "150px",
          height: "60px",
          background:
            "radial-gradient(ellipse, rgba(0, 255, 150, 0.3) 0%, rgba(0, 255, 150, 0.1) 40%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(3px)",
          transform: "rotate(-30deg)",
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default StarsFallback;
