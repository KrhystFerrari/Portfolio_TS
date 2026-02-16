import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import {
  reactjs,
  typescript,
  tailwind,
  nextjs,
  storybook,
  html,
  css,
  vitejs,
  javascript,
  redux,
  mui,
} from "../assets";

const HeroFallback: React.FC = () => {
  const { language } = useLanguage();
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(true);

  // Títulos que alternam por idioma
  const titles = useMemo(() => {
    const titlesByLanguage = {
      pt: ["Desenvolvedor Front-end", "Engenheiro Front-end", "Consultor Front-end"],
      en: ["Front-end Developer", "Front-end Engineer", "Front-end Consultant"],
      es: ["Desarrollador Front-end", "Ingeniero Front-end", "Consultor Front-end"],
    };
    return titlesByLanguage[language as keyof typeof titlesByLanguage] || titlesByLanguage.en;
  }, [language]);

  // Comandos que serão "digitados" no terminal
  const commands = useMemo(
    () => [
      "$ npm install react typescript",
      "$ yarn add framer-motion three tailwindcss",
      "$ git commit -m 'new features'",
      "$ npm run build --production",
      "$ yarn test --coverage",
      "$ git push origin main",
    ],
    []
  );

  // Partículas de código no background
  const codeParticles = useMemo(() => {
    const symbols = ["</>", "{}", "[]", "()", "=>", "==", "!=", "&&", "||", "++", "--"];
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 5,
      size: 12 + Math.random() * 20,
    }));
  }, []);

  // Efeito de digitação
  useEffect(() => {
    const currentCommand = commands[currentCommandIndex];
    const typingSpeed = 50 + Math.random() * 50;

    if (displayedText.length < currentCommand.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentCommand.slice(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      // Comando completo, aguarda e passa para o próximo
      const timeout = setTimeout(() => {
        setCommandHistory([...commandHistory, currentCommand]);
        setDisplayedText("");
        setCurrentCommandIndex((currentCommandIndex + 1) % commands.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, currentCommandIndex, commandHistory, commands]);

  // Reseta o índice do título quando o idioma muda
  useEffect(() => {
    setCurrentTitleIndex(0);
  }, [language]);

  // Efeito de alternância de títulos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, [titles.length]);

  // Esconde o botão de scroll quando o usuário rola a página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(false);
      } else {
        setShowScrollButton(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const viewProjectsText =
    language === "pt" ? "Ver Projetos" : language === "es" ? "Ver Proyectos" : "View Projects";
  const contactText = language === "pt" ? "Contato" : language === "es" ? "Contacto" : "Contact";

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a0a0f]">
      <style>
        {`
          @keyframes glitch {
            0%, 100% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
          }

          @keyframes matrix-glitch {
            0% { 
              transform: translate(0);
              text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
            }
            20% { 
              transform: translate(-3px, 0);
              text-shadow: -3px 0 10px rgba(255, 0, 0, 0.5), 3px 0 10px rgba(0, 255, 0, 0.5);
            }
            40% { 
              transform: translate(3px, 0);
              text-shadow: 3px 0 10px rgba(0, 255, 0, 0.5), -3px 0 10px rgba(255, 0, 0, 0.5);
            }
            60% { 
              transform: translate(0, -2px);
              text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
            }
            80% { 
              transform: translate(0, 2px);
            }
            100% { 
              transform: translate(0);
              text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
            }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); opacity: 0.3; }
            50% { transform: translateY(-20px); opacity: 0.8; }
          }

          @keyframes scan {
            0% { top: 0%; }
            100% { top: 100%; }
          }

          .terminal-glow {
            box-shadow: 0 0 30px rgba(0, 255, 150, 0.3),
                        0 0 60px rgba(0, 255, 150, 0.2),
                        inset 0 0 30px rgba(0, 255, 150, 0.1);
          }

          .text-glow {
            text-shadow: 0 0 10px currentColor,
                        0 0 20px currentColor,
                        0 0 30px currentColor;
          }

          .scanline {
            position: absolute;
            width: 100%;
            height: 2px;
            background: linear-gradient(transparent, rgba(0, 255, 150, 0.5), transparent);
            animation: scan 8s linear infinite;
            pointer-events: none;
          }
        `}
      </style>

      {/* Partículas de código flutuando */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {codeParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute font-mono font-bold text-[#00ff96]/20"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              fontSize: `${particle.size}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
          >
            {particle.symbol}
          </motion.div>
        ))}
      </div>

      {/* Grid futurista no fundo */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 150, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 150, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Container principal */}
      <div className="absolute inset-0 flex items-center justify-center pt-12 pb-20 sm:pt-32 md:pt-28 lg:py-0">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Terminal - Aparece depois no mobile, antes no desktop */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Terminal Window */}
            <div className="relative terminal-glow rounded-lg overflow-hidden border-2 border-[#00ff96]/30 bg-[#0d1117]/95 backdrop-blur-sm">
              {/* Scanline effect */}
              <div className="scanline" />

              {/* Terminal Header */}
              <div className="bg-[#161b22] px-3 md:px-4 py-2 md:py-3 flex items-center gap-2 border-b border-[#00ff96]/20">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 md:ml-3 text-[10px] md:text-xs text-[#00ff96]/60 font-mono">
                  terminal@portfolio:~
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-3 md:p-4 lg:p-6 font-mono text-xs md:text-sm min-h-[180px] md:min-h-[220px] lg:min-h-[400px] max-h-[200px] md:max-h-[250px] lg:max-h-[500px] overflow-hidden">
                {/* Histórico de comandos */}
                {commandHistory.slice(-3).map((cmd, i) => (
                  <motion.div
                    key={`${cmd}-${commandHistory.length - 3 + i}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.5, y: 0 }}
                    className="mb-2 md:mb-3 text-[#00ff96]/50"
                  >
                    <div className="break-all">{cmd}</div>
                    <div className="text-[#00ff96]/30 text-[10px] md:text-xs mt-1">✓ success</div>
                  </motion.div>
                ))}

                {/* Comando atual sendo digitado */}
                <div className="text-[#00ff96] text-sm md:text-base flex items-center gap-2">
                  <span className="break-all">{displayedText}</span>
                  <motion.span
                    className="inline-block w-1.5 md:w-2 h-4 md:h-5 bg-[#00ff96] flex-shrink-0"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </div>

                {/* Efeito glitch ocasional */}
                <motion.div
                  className="absolute inset-0 bg-[#00ff96]/5 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{
                    duration: 0.1,
                    repeat: Infinity,
                    repeatDelay: 5,
                  }}
                />
              </div>
            </div>

            {/* Glow effect abaixo do terminal */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-[#00ff96]/30 blur-3xl" />
          </motion.div>

          {/* Conteúdo principal - Aparece primeiro no mobile, depois no desktop */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 order-1 lg:order-2"
          >
            {/* Nome e título */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-4 md:mb-6 lg:mb-8"
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 md:mb-4 text-white"
                style={{
                  textShadow: "0 0 20px rgba(145, 94, 255, 0.5), 0 0 40px rgba(145, 94, 255, 0.3)",
                }}
              >
                <span className="text-[#915EFF]">Krhyst</span>
                <br />
                <span>Ferrari</span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#00ff96] font-mono relative h-[28px] sm:h-[32px] md:h-[36px] lg:h-[40px] overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTitleIndex}
                    className="text-glow absolute left-0 top-0"
                    initial={{
                      opacity: 0,
                      y: 20,
                      filter: "blur(4px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      y: -20,
                      filter: "blur(4px)",
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    style={{
                      animation: "matrix-glitch 0.3s ease-in-out 2.5s",
                    }}
                  >
                    {titles[currentTitleIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.p>

              <motion.p
                className="text-gray-400 mt-3 md:mt-4 text-sm md:text-base lg:text-lg max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {language === "pt"
                  ? "Transformando ideias em código e código em experiências interativas."
                  : language === "es"
                    ? "Transformando ideas en código y código en experiencias interactivas."
                    : "Transforming ideas into code and code into interactive experiences."}
              </motion.p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <a href="#work">
                <motion.button
                  className="px-6 py-3 md:px-8 md:py-4 bg-[#00ff96] text-black font-bold rounded-lg text-sm md:text-base border-2 border-[#00ff96]"
                  initial={{ boxShadow: "0 0 20px rgba(0, 255, 150, 0.5)" }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#00d97e",
                    borderColor: "#00d97e",
                    boxShadow: "0 0 30px rgba(0, 255, 150, 0.8)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                >
                  {viewProjectsText}
                </motion.button>
              </a>

              <a href="#contact">
                <motion.button
                  className="px-6 py-3 md:px-8 md:py-4 border-2 border-[#00ff96] text-[#00ff96] font-bold rounded-lg text-sm md:text-base"
                  initial={{
                    backgroundColor: "transparent",
                    boxShadow: "0 0 20px rgba(0, 255, 150, 0.3)",
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(0, 255, 150, 0.1)",
                    boxShadow: "0 0 30px rgba(0, 255, 150, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                >
                  {contactText}
                </motion.button>
              </a>
            </motion.div>

            {/* Tech stack icons - oculto em tablet e mobile */}
            <motion.div
              className="hidden lg:flex flex-wrap gap-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[
                { icon: reactjs, name: "React", color: "#61DAFB" },
                { icon: typescript, name: "TypeScript", color: "#3178C6" },
                { icon: nextjs, name: "Next.js", color: "#000000" },
                { icon: tailwind, name: "Tailwind", color: "#06B6D4" },
                { icon: redux, name: "Redux", color: "#764ABC" },
                { icon: javascript, name: "JavaScript", color: "#F7DF1E" },
                { icon: html, name: "HTML", color: "#E34F26" },
                { icon: css, name: "CSS", color: "#1572B6" },
                { icon: mui, name: "Material UI", color: "#007FFF" },
                { icon: vitejs, name: "Vite", color: "#646CFF" },
                { icon: storybook, name: "Storybook", color: "#FF4785" },
              ].map((tech, i) => (
                <motion.div
                  key={tech.name}
                  className="relative w-9 h-9 rounded-lg bg-[#0d1117] border-2 border-[#00ff96]/30 p-1.5 flex items-center justify-center cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    borderColor: "#00ff96",
                    boxShadow: `0 0 10px ${tech.color}20`,
                  }}
                  transition={{
                    delay: 1.2 + i * 0.08,
                    duration: 0.15,
                    borderColor: { duration: 0.1 },
                    boxShadow: { duration: 0.1 },
                    scale: { duration: 0.1 },
                  }}
                  whileHover={{
                    scale: 1.15,
                    borderColor: tech.color,
                    boxShadow: `0 0 20px ${tech.color}80`,
                  }}
                >
                  <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - posicionado absolutamente */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.div
            key="scroll-indicator"
            className="absolute xs:bottom-6 bottom-24 w-full flex justify-center items-center z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#about">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#00ff96] flex justify-center items-start p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-[#00ff96] mb-1"
                />
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroFallback;
