import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants";
import type { Technology } from "../types";

const TechFallback: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology: Technology, index: number) => (
        <motion.div
          key={technology.name}
          className="relative w-28 h-28 flex justify-center items-center group cursor-pointer"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 20 }}
          transition={{
            delay: index * 0.08,
            duration: 0.6,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.15,
            y: -10,
            transition: { duration: 0.3 },
          }}
        >
          {/* Matrix glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[#00ff96] opacity-0 blur-xl group-hover:opacity-60 transition-opacity duration-300"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          {/* Círculo de fundo Matrix */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[#0d1117] border-2 border-[#00ff96]/30 group-hover:border-[#00ff96] transition-colors duration-300"
            animate={{
              boxShadow: [
                "0 0 20px rgba(0, 255, 150, 0.3)",
                "0 0 30px rgba(0, 255, 150, 0.5)",
                "0 0 20px rgba(0, 255, 150, 0.3)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          {/* Matrix grid overlay */}
          <div
            className="absolute inset-0 rounded-full opacity-10 pointer-events-none overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 255, 150, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 150, 0.2) 1px, transparent 1px)",
              backgroundSize: "10px 10px",
            }}
          />

          {/* Ícone da tecnologia */}
          <motion.div
            className="relative z-10 w-16 h-16"
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,255,150,0.6)] group-hover:drop-shadow-[0_0_16px_rgba(0,255,150,0.9)] transition-all duration-300"
            />
          </motion.div>

          {/* Partículas Matrix orbitando */}
          {[...new Array(3)].map((_, i) => (
            <motion.div
              key={`particle-${technology.name}-${i}`}
              className="absolute w-1 h-1 rounded-full bg-[#00ff96] shadow-[0_0_4px_rgba(0,255,150,0.8)]"
              style={{
                top: "50%",
                left: "50%",
              }}
              animate={{
                rotate: [0, 360],
                x: [0, 50 * Math.cos((i * 2 * Math.PI) / 3), 0],
                y: [0, 50 * Math.sin((i * 2 * Math.PI) / 3), 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear",
              }}
            />
          ))}

          {/* Nome da tecnologia - Matrix theme */}
          <motion.div
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ y: -10, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
          >
            <span className="text-[#00ff96] text-xs font-mono font-bold bg-[#0d1117]/90 px-3 py-1 rounded-full backdrop-blur-sm border border-[#00ff96]/30 shadow-[0_0_10px_rgba(0,255,150,0.3)]">
              {technology.name}
            </span>
          </motion.div>

          {/* Anel orbital Matrix */}
          <motion.div
            className="absolute inset-0 rounded-full border border-[#00ff96]/20"
            style={{
              width: "140%",
              height: "140%",
              top: "-20%",
              left: "-20%",
            }}
            animate={{
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      ))}

      <style>
        {`
          @keyframes orbit {
            from {
              transform: rotate(0deg) translateX(50px) rotate(0deg);
            }
            to {
              transform: rotate(360deg) translateX(50px) rotate(-360deg);
            }
          }

          @keyframes matrix-glitch {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(-2px, 2px); }
            50% { transform: translate(2px, -2px); }
            75% { transform: translate(-2px, -2px); }
          }
        `}
      </style>
    </div>
  );
};

export default TechFallback;
