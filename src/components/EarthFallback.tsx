import React from "react";
import { motion } from "framer-motion";

const EarthFallback: React.FC = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
      <style>
        {`
          @keyframes rotate-earth {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          
          @keyframes cloud-drift {
            0%, 100% {
              transform: rotate(0deg) scale(1.01);
            }
            50% {
              transform: rotate(5deg) scale(1.02);
            }
          }
          
          .earth-sphere {
            animation: rotate-earth 60s linear infinite;
          }
          
          .earth-clouds {
            animation: cloud-drift 10s ease-in-out infinite;
          }
          
          .earth-glow {
            box-shadow: 
              0 0 60px rgba(59, 130, 246, 0.5),
              0 0 100px rgba(59, 130, 246, 0.3),
              inset 0 0 60px rgba(59, 130, 246, 0.2);
          }
        `}
      </style>

      {/* Estrelas de fundo */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Planeta Terra */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Glow externo */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle at 35% 35%, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />

        {/* Esfera principal do planeta */}
        <div className="relative w-80 h-80 rounded-full earth-glow overflow-hidden">
          {/* Continentes e oceanos (gradiente estilizado) */}
          <div className="absolute inset-0 earth-sphere">
            <div
              className="w-full h-full rounded-full"
              style={{
                background: `
                  radial-gradient(circle at 30% 30%, rgba(100, 150, 255, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 70% 40%, rgba(34, 139, 34, 0.8) 0%, transparent 30%),
                  radial-gradient(circle at 40% 70%, rgba(34, 139, 34, 0.7) 0%, transparent 25%),
                  radial-gradient(circle at 80% 80%, rgba(34, 139, 34, 0.6) 0%, transparent 20%),
                  radial-gradient(circle at 20% 50%, rgba(139, 90, 43, 0.5) 0%, transparent 15%),
                  linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)
                `,
              }}
            />

            {/* Textura de profundidade */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: `
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(255, 255, 255, 0.03) 2px,
                    rgba(255, 255, 255, 0.03) 4px
                  )
                `,
              }}
            />
          </div>

          {/* Nuvens */}
          <div className="absolute inset-0 earth-clouds opacity-40">
            <div
              className="w-full h-full rounded-full"
              style={{
                background: `
                  radial-gradient(circle at 45% 35%, rgba(255, 255, 255, 0.6) 0%, transparent 20%),
                  radial-gradient(circle at 60% 60%, rgba(255, 255, 255, 0.4) 0%, transparent 25%),
                  radial-gradient(circle at 25% 75%, rgba(255, 255, 255, 0.5) 0%, transparent 18%),
                  radial-gradient(circle at 80% 25%, rgba(255, 255, 255, 0.3) 0%, transparent 15%)
                `,
              }}
            />
          </div>

          {/* Brilho atmosférico */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.3) 0%, transparent 60%)",
            }}
          />

          {/* Sombra interior */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 65% 65%, transparent 40%, rgba(0, 0, 0, 0.6) 100%)",
            }}
          />
        </div>

        {/* Anel orbital decorativo */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "450px",
            height: "450px",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 450 450" className="w-full h-full">
            <circle
              cx="225"
              cy="225"
              r="220"
              fill="none"
              stroke="url(#orbit-gradient)"
              strokeWidth="2"
              strokeDasharray="10 20"
              opacity="0.3"
            />
            <defs>
              <linearGradient id="orbit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#915EFF" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#f272c8" />
              </linearGradient>
            </defs>
          </svg>

          {/* Satélite orbitando */}
          <motion.div
            className="absolute w-3 h-3 bg-purple-500 rounded-full"
            style={{
              top: "10px",
              left: "50%",
              boxShadow: "0 0 10px rgba(145, 94, 255, 0.8)",
            }}
          />
        </motion.div>

        {/* Partículas espaciais */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 2 === 0 ? "#915EFF" : "#f272c8",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(1px)",
            }}
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default EarthFallback;
