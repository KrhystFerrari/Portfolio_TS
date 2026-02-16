import React, { useState, useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles/index";
import { getServices } from "../constants/indexMultiLang";
import { translations } from "../constants/translations";
import { useLanguage } from "../hooks/useLanguage";
import { SectionWrapper } from "../hoc";
import type { ServiceCardProps, Service } from "../types";
import { fadeIn, textVariant } from "../utils/motion";

// Futuristic Frontend Icons - Icon data similar to Hero tech stack
const getFrontendIcon = (index: number) => {
  const icons = [
    // Engineering - Circuit pattern
    {
      svg: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="2" />
          <circle cx="6" cy="8" r="1.5" />
          <circle cx="18" cy="8" r="1.5" />
          <circle cx="6" cy="16" r="1.5" />
          <circle cx="18" cy="16" r="1.5" />
          <path
            d="M12 10L6 8M12 10L18 8M12 14L6 16M12 14L18 16"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <rect
            x="9"
            y="9"
            width="6"
            height="6"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            rx="1"
          />
        </svg>
      ),
      color: "#00ff96",
    },
    // Development - Code brackets
    {
      svg: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m7 8-4 4 4 4" />
          <path d="m17 8 4 4-4 4" />
          <path d="m14 4-4 16" />
        </svg>
      ),
      color: "#915EFF",
    },
    // Consulting - Network nodes
    {
      svg: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="6" r="2" />
          <circle cx="6" cy="14" r="2" />
          <circle cx="18" cy="14" r="2" />
          <circle cx="9" cy="20" r="1.5" />
          <circle cx="15" cy="20" r="1.5" />
          <path
            d="M12 8L8 12M12 8L16 12M6 16L9 18.5M18 16L15 18.5"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      ),
      color: "#FF4785",
    },
  ];
  return icons[index];
};

const ServiceCard: React.FC<ServiceCardProps & { sectionVisible: boolean }> = ({
  index,
  title,
  description,
  sectionVisible,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [displayedDescription, setDisplayedDescription] = useState("");
  const [cardVisible, setCardVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const iconData = getFrontendIcon(index);

  // Show card with staggered animation when section becomes visible
  useEffect(() => {
    if (!sectionVisible) return;

    const timer = setTimeout(() => {
      setCardVisible(true);
    }, index * 300); // Staggered card appearance

    return () => clearTimeout(timer);
  }, [sectionVisible, index]);

  // Start typing animation after card becomes visible
  useEffect(() => {
    if (!cardVisible) return;

    const timer = setTimeout(() => {
      setIsTyping(true);
    }, 1200); // Start typing after card entrance

    return () => clearTimeout(timer);
  }, [cardVisible]);

  // Title typing effect
  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < title.length) {
      const timeout = setTimeout(
        () => {
          setDisplayedText(title.slice(0, displayedText.length + 1));
        },
        40 + Math.random() * 30
      );
      return () => clearTimeout(timeout);
    } else {
      // Start description typing after title is complete
      const timeout = setTimeout(() => {
        setShowDescription(true);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, isTyping, title]);

  // Description typing effect
  useEffect(() => {
    if (!showDescription) return;

    if (displayedDescription.length < description.length) {
      const timeout = setTimeout(
        () => {
          setDisplayedDescription(description.slice(0, displayedDescription.length + 1));
        },
        15 + Math.random() * 20
      );
      return () => clearTimeout(timeout);
    }
  }, [displayedDescription, showDescription, description]);

  return (
    <div
      ref={cardRef}
      className="w-full md:w-[calc(50%-0.75rem)] md:max-w-none lg:w-auto lg:flex-1 lg:min-w-0 lg:max-w-sm"
    >
      <AnimatePresence>
        {cardVisible && (
          <Tilt
            className="w-full group"
            options={{
              max: 8,
              scale: 1.02,
              speed: 300,
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.8,
                rotateX: 45,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
              }}
              exit={{
                opacity: 0,
                y: -60,
                scale: 0.8,
                rotateX: -45,
              }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                opacity: { duration: 0.6 },
                scale: { duration: 0.6, delay: 0.1 },
              }}
              className="relative w-full h-96 bg-[#0d1117] border-2 border-[#00ff96]/30 rounded-lg overflow-hidden cursor-pointer"
              style={{
                boxShadow: "0 0 20px rgba(0, 255, 150, 0.1)",
                transformStyle: "preserve-3d",
              }}
              whileHover={{
                borderColor: iconData.color,
                boxShadow: `0 0 30px ${iconData.color}40`,
                scale: 1.02,
                rotateY: 5,
              }}
            >
              {/* Scanline effect */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff96]/5 to-transparent h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  animation: "terminalScan 3s linear infinite",
                }}
              />

              {/* Terminal-style header */}
              <div className="bg-[#161b22] px-3 py-2 flex items-center gap-1.5 border-b border-[#00ff96]/20">
                <div className="w-2 h-2 rounded-full bg-red-500/70" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                <div className="w-2 h-2 rounded-full bg-green-500/70" />
                <span className="ml-2 text-[9px] text-[#00ff96]/60 font-mono">
                  service_{String(index + 1).padStart(2, "0")}.exe
                </span>
              </div>

              {/* Content container */}
              <div className="relative z-10 flex flex-col h-[calc(100%-36px)] p-4 pb-3">
                {/* Terminal prompt */}
                <div className="w-full mb-3 font-mono text-xs">
                  <div className="text-[#00ff96]/70 mb-1">
                    <span className="text-[#00ff96]">user@portfolio:~$</span> cat service_info.txt
                  </div>
                </div>

                {/* Service icon and loading */}
                <div className="flex items-center gap-3 mb-4 w-full">
                  <motion.div
                    className="relative w-8 h-8 rounded border border-[#00ff96]/40 p-1.5 flex items-center justify-center"
                    style={{
                      backgroundColor: "#0d1117",
                      boxShadow: `0 0 8px ${iconData.color}20`,
                    }}
                    whileHover={{
                      borderColor: iconData.color,
                      boxShadow: `0 0 15px ${iconData.color}60`,
                    }}
                  >
                    <div
                      className="text-[#00ff96] transition-colors duration-200"
                      style={{ color: iconData.color }}
                    >
                      {iconData.svg}
                    </div>
                  </motion.div>

                  <div className="font-mono text-xs text-[#00ff96]/60">
                    {cardVisible && isTyping ? (
                      <div className="flex items-center gap-1">
                        <span>Loading...</span>
                        <div className="flex gap-1">
                          <div
                            className="w-1 h-1 bg-[#00ff96] rounded-full animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          ></div>
                          <div
                            className="w-1 h-1 bg-[#00ff96] rounded-full animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          ></div>
                          <div
                            className="w-1 h-1 bg-[#00ff96] rounded-full animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          ></div>
                        </div>
                      </div>
                    ) : (
                      <span>{cardVisible ? "Initializing..." : "Standby"}</span>
                    )}
                  </div>
                </div>

                {/* Title output */}
                <div className="w-full mb-4">
                  <div className="font-mono text-xs text-[#00ff96]/50 mb-1">
                    <span className="text-[#00ff96]">{">"}</span> Title:
                  </div>
                  <h3 className="text-[#00ff96] text-sm font-bold font-mono leading-tight min-h-[20px]">
                    {displayedText}
                    {isTyping && displayedText.length < title.length && (
                      <span className="animate-pulse">_</span>
                    )}
                  </h3>
                </div>

                {/* Description output */}
                <div className="w-full mb-4 flex-1">
                  <div className="font-mono text-xs text-[#00ff96]/50 mb-2">
                    <span className="text-[#00ff96]">{">"}</span> Description:
                  </div>
                  <div className="text-gray-300 text-xs leading-relaxed font-mono overflow-hidden">
                    {showDescription && (
                      <p className="break-words">
                        {displayedDescription}
                        {displayedDescription.length < description.length && (
                          <span className="text-[#00ff96] animate-pulse">_</span>
                        )}
                      </p>
                    )}
                  </div>
                </div>

                {/* Status indicator */}
                <div className="w-full flex items-center justify-between pt-2 border-t border-[#00ff96]/10 mt-auto">
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${displayedDescription.length === description.length ? "bg-[#00ff96] animate-pulse" : "bg-yellow-500 animate-pulse"}`}
                    ></div>
                    <span className="text-[8px] text-[#00ff96]/60 font-mono uppercase">
                      {displayedDescription.length === description.length ? "READY" : "LOADING"}
                    </span>
                  </div>
                  <div className="text-[8px] text-[#00ff96]/40 font-mono">
                    [{displayedDescription.length}/{description.length}]
                  </div>
                </div>
              </div>

              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0, 255, 150, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 150, 0.1) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
            </motion.div>

            {/* CSS animations */}
            <style>{`
          @keyframes terminalScan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
          
          @keyframes matrix-entrance-glitch {
            0% { 
              transform: translate(0) scale(1);
              filter: brightness(1) contrast(1);
            }
            10% { 
              transform: translate(-3px, 2px) scale(1.02);
              filter: brightness(1.2) contrast(1.5);
              box-shadow: 0 0 30px rgba(0, 255, 150, 0.6), inset 0 0 20px rgba(0, 255, 150, 0.2);
            }
            20% { 
              transform: translate(3px, -2px) scale(0.98);
              filter: brightness(1.5) contrast(2);
              box-shadow: 0 0 40px rgba(0, 255, 150, 0.8), inset 0 0 30px rgba(0, 255, 150, 0.3);
            }
            30% { 
              transform: translate(-2px, 3px) scale(1.01);
              filter: brightness(1.8) contrast(1.2);
            }
            40% { 
              transform: translate(2px, -1px) scale(0.99);
              filter: brightness(1.3) contrast(1.8);
            }
            60% { 
              transform: translate(-1px, 2px) scale(1.005);
              filter: brightness(1.1) contrast(1.3);
            }
            80% { 
              transform: translate(1px, -1px) scale(1.002);
              filter: brightness(1.05) contrast(1.1);
            }
            100% { 
              transform: translate(0) scale(1);
              filter: brightness(1) contrast(1);
              box-shadow: 0 0 20px rgba(0, 255, 150, 0.1);
            }
          }

          @keyframes background-matrix-glitch {
            0% { 
              background: transparent;
              transform: scale(1);
              filter: brightness(1) contrast(1);
            }
            10% { 
              background: radial-gradient(circle, rgba(0,255,150,0.15) 20%, transparent 70%);
              transform: scale(1.01);
              filter: brightness(1.3) contrast(1.5) hue-rotate(10deg);
            }
            25% { 
              background: radial-gradient(circle, rgba(0,255,150,0.2) 30%, rgba(0,100,200,0.1) 60%, transparent 80%);
              transform: scale(0.99);
              filter: brightness(1.8) contrast(2) hue-rotate(-5deg);
            }
            40% { 
              background: radial-gradient(circle, rgba(0,255,150,0.25) 15%, rgba(255,0,100,0.05) 45%, transparent 75%);
              transform: scale(1.02);
              filter: brightness(2.1) contrast(2.5) hue-rotate(15deg);
            }
            60% { 
              background: radial-gradient(circle, rgba(0,255,150,0.18) 25%, transparent 70%);
              transform: scale(1.005);
              filter: brightness(1.5) contrast(1.3) hue-rotate(-3deg);
            }
            80% { 
              background: radial-gradient(circle, rgba(0,255,150,0.1) 20%, transparent 65%);
              transform: scale(1.001);
              filter: brightness(1.2) contrast(1.1) hue-rotate(2deg);
            }
            100% { 
              background: transparent;
              transform: scale(1);
              filter: brightness(1) contrast(1) hue-rotate(0deg);
            }
          }

          @keyframes matrix-bg-pulse {
            0%, 100% { 
              opacity: 0.3;
              background: radial-gradient(circle, rgba(0,255,150,0.08) 0%, rgba(0,255,150,0.04) 50%, transparent 70%);
            }
            50% { 
              opacity: 0.8;
              background: radial-gradient(circle, rgba(0,255,150,0.2) 0%, rgba(0,255,150,0.1) 40%, rgba(0,255,150,0.05) 70%, transparent 90%);
            }
          }

          @keyframes matrix-bg-flash {
            0%, 90%, 100% { 
              opacity: 0;
            }
            95% { 
              opacity: 1;
              background: radial-gradient(circle, rgba(0,255,150,0.4) 20%, rgba(0,255,150,0.2) 50%, transparent 80%);
            }
          }

          @keyframes collective-matrix-glitch {
            0% {
              opacity: 0;
              transform: scale(1);
            }
            10% {
              opacity: 1;
              background: rgba(0, 255, 150, 0.15);
              transform: scale(1.02);
            }
            20% {
              background: rgba(0, 255, 150, 0.25);
              transform: scale(0.99);
            }
            30% {
              background: rgba(0, 255, 150, 0.3);
              transform: scale(1.01);
            }
            50% {
              background: rgba(0, 255, 150, 0.2);
              transform: scale(1);
            }
            70% {
              background: rgba(0, 255, 150, 0.1);
            }
            100% {
              opacity: 0;
              background: transparent;
              transform: scale(1);
            }
          }

          @keyframes collective-border-glitch {
            0% {
              opacity: 0;
              transform: translate(0, 0);
            }
            10% {
              opacity: 1;
              transform: translate(-4px, 3px);
              filter: brightness(1.5);
            }
            20% {
              opacity: 0.8;
              transform: translate(5px, -4px);
              filter: brightness(2);
            }
            30% {
              opacity: 1;
              transform: translate(-3px, 4px);
              filter: brightness(1.8);
            }
            40% {
              opacity: 0.9;
              transform: translate(4px, -2px);
              filter: brightness(1.6);
            }
            60% {
              opacity: 0.6;
              transform: translate(-2px, 2px);
              filter: brightness(1.3);
            }
            80% {
              opacity: 0.3;
              transform: translate(1px, -1px);
              filter: brightness(1.1);
            }
            100% {
              opacity: 0;
              transform: translate(0, 0);
              filter: brightness(1);
            }
          }

          @keyframes collective-content-shake {
            0% {
              transform: translate(0, 0);
              filter: brightness(1);
            }
            10% {
              transform: translate(-3px, 2px);
              filter: brightness(1.3) contrast(1.2);
            }
            20% {
              transform: translate(4px, -3px);
              filter: brightness(1.5) contrast(1.4);
            }
            30% {
              transform: translate(-3px, 3px);
              filter: brightness(1.4) contrast(1.3);
            }
            40% {
              transform: translate(3px, -2px);
              filter: brightness(1.3) contrast(1.2);
            }
            50% {
              transform: translate(-2px, 2px);
              filter: brightness(1.2) contrast(1.1);
            }
            65% {
              transform: translate(2px, -1px);
              filter: brightness(1.1) contrast(1.05);
            }
            80% {
              transform: translate(-1px, 1px);
              filter: brightness(1.05) contrast(1.02);
            }
            100% {
              transform: translate(0, 0);
              filter: brightness(1) contrast(1);
            }
          }
        `}</style>
          </Tilt>
        )}
      </AnimatePresence>
    </div>
  );
};

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const services = getServices(language);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [allCardsVisible, setAllCardsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for the entire About section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !sectionVisible) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.1 } // Lower threshold to trigger earlier
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionVisible]);

  // Trigger collective glitch effect after all cards are rendered
  useEffect(() => {
    if (!sectionVisible) return;

    // Wait for all cards to appear (last card at 600ms + entrance animation ~1500ms)
    const timer = setTimeout(() => {
      setAllCardsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [sectionVisible]);

  return (
    <div ref={sectionRef}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[#00ff96]`}>{t.about.intro}</p>
        <h2
          className={`${styles.sectionHeadText} text-white drop-shadow-[0_0_20px_rgba(0,255,150,0.3)]`}
        >
          {t.about.title}
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-300 text-[17px] max-w-5xl leading-[30px] whitespace-pre-line"
      >
        {t.about.description}
      </motion.p>

      <div className="mt-20 relative">
        {/* Collective glitch overlay */}
        {allCardsVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 -mx-8 pointer-events-none z-10"
            style={{
              animation: "collective-matrix-glitch 1s ease-out forwards",
            }}
          />
        )}

        <div
          className={`flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center gap-4 md:gap-6 max-w-6xl mx-auto relative ${
            allCardsVisible ? "collective-content-shake" : ""
          }`}
          style={{
            animation: allCardsVisible ? "collective-content-shake 1s ease-out forwards" : "none",
          }}
        >
          {services.map((service: Service, index: number) => (
            <ServiceCard
              key={service.title}
              index={index}
              title={service.title}
              description={service.description}
              sectionVisible={sectionVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutWithWrapper = SectionWrapper(About, "about");

export default AboutWithWrapper;
