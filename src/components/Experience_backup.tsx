import React, { useState, useEffect, useRef } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion, AnimatePresence } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles/index";
import { getExperiences } from "../constants/indexMultiLang";
import { useLanguage } from "../hooks/useLanguage";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import type { ExperienceCardProps, Experience } from "../types";

const FlipIcon: React.FC<{ icon: string; secondaryIcon: string; companyName: string }> = ({
  icon,
  secondaryIcon,
  companyName,
}) => {
  return (
    <div className="w-full h-full flex justify-center items-center perspective-1000">
      <style>
        {`
          @keyframes flip {
            0%, 45% {
              transform: rotateY(0deg);
            }
            50%, 95% {
              transform: rotateY(180deg);
            }
            100% {
              transform: rotateY(360deg);
            }
          }
          
          .flip-container {
            animation: flip 4s ease-in-out infinite;
            transform-style: preserve-3d;
            position: relative;
            width: 60%;
            height: 60%;
          }
          
          .flip-front, .flip-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .flip-back {
            transform: rotateY(180deg);
          }

          @keyframes matrix-icon-glow {
            0%, 100% {
              filter: drop-shadow(0 0 8px rgba(0, 255, 150, 0.6));
            }
            50% {
              filter: drop-shadow(0 0 16px rgba(0, 255, 150, 0.9));
            }
          }

          .flip-container img {
            animation: matrix-icon-glow 2s ease-in-out infinite;
          }
        `}
      </style>
      <div className="flip-container">
        <div className="flip-front">
          <img src={icon} alt={companyName} className="w-full h-full object-contain" />
        </div>
        <div className="flip-back">
          <img
            src={secondaryIcon}
            alt={`${companyName} partner`}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const ExperienceCard: React.FC<ExperienceCardProps & { index: number }> = ({
  experience,
  index,
}) => {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [isTypingTitle, setIsTypingTitle] = useState(false);
  const [showPoints, setShowPoints] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for individual card
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !cardVisible) {
          // Delay based on index to stagger animations
          setTimeout(() => {
            setCardVisible(true);
          }, index * 2000);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [cardVisible, index]);

  // Start typing animation only when card becomes visible
  useEffect(() => {
    if (!cardVisible) return;

    const timer = setTimeout(() => {
      setIsTypingTitle(true);
    }, 600);

    return () => clearTimeout(timer);
  }, [cardVisible]);

  // Typing effect for title
  useEffect(() => {
    if (!isTypingTitle) return;

    if (displayedTitle.length < experience.title.length) {
      const timeout = setTimeout(
        () => {
          setDisplayedTitle(experience.title.slice(0, displayedTitle.length + 1));
        },
        30 + Math.random() * 40
      );
      return () => clearTimeout(timeout);
    } else {
      // Show points after title is complete
      const timer = setTimeout(() => {
        setShowPoints(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isTypingTitle, displayedTitle, experience.title]);

  return (
    <div ref={cardRef}>
      <VerticalTimelineElement
        contentStyle={{
          background: "#0d1117",
          color: "#fff",
          border: "2px solid rgba(0, 255, 150, 0.3)",
          boxShadow: "0 0 20px rgba(0, 255, 150, 0.15)",
          borderRadius: "8px",
        }}
        contentArrowStyle={{
          borderRight: "7px solid rgba(0, 255, 150, 0.3)",
        }}
        date={experience.date}
        iconStyle={{
          background: "#0d1117",
          border: "3px solid #00ff96",
          boxShadow: "0 0 20px rgba(0, 255, 150, 0.5), inset 0 0 10px rgba(0, 255, 150, 0.2)",
        }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            {experience.secondaryIcon ? (
              <FlipIcon
                icon={experience.icon}
                secondaryIcon={experience.secondaryIcon}
                companyName={experience.company_name}
              />
            ) : (
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="w-[60%] h-[60%] object-contain"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(0, 255, 150, 0.6))",
                }}
              />
            )}
          </div>
        }
      >
        <div className="relative">
          {/* Scanline effect */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff96]/5 to-transparent h-full opacity-60 pointer-events-none"
            style={{
              animation: "experienceScan 4s linear infinite",
            }}
          />

          {/* Terminal header */}
          <div className="bg-[#161b22] -mx-5 -mt-5 px-3 py-2 mb-4 flex items-center gap-1.5 border-b border-[#00ff96]/20">
            <div className="w-2 h-2 rounded-full bg-red-500/70" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <div className="w-2 h-2 rounded-full bg-green-500/70" />
            <span className="ml-2 text-[9px] text-[#00ff96]/60 font-mono">
              experience_{String(index + 1).padStart(2, "0")}.log
            </span>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Terminal prompt */}
            <div className="font-mono text-[10px] text-[#00ff96]/70 mb-3">
              <span className="text-[#00ff96]">root@career:~$</span> cat job_details.txt
            </div>

            {/* Title with typing effect */}
            <h3 className="text-[#00ff96] text-[22px] font-bold font-mono mb-2 min-h-[30px]">
              {displayedTitle}
              {isTypingTitle && displayedTitle.length < experience.title.length && (
                <span className="animate-pulse">_</span>
              )}
            </h3>

            {/* Company name */}
            <p className="text-gray-300 text-[15px] font-semibold font-mono mb-4 flex items-center gap-2">
              <span className="text-[#00ff96]">@</span>
              {experience.company_name}
            </p>

            {/* Points */}
            <AnimatePresence>
              {showPoints && (
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-5 space-y-3"
                >
                  {experience.points.map((point: string, pointIndex: number) => (
                    <motion.li
                      key={`${experience.company_name}-point-${pointIndex}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: pointIndex * 0.1 }}
                      className="text-gray-300 text-[13px] pl-1 tracking-wide font-mono flex items-start gap-2"
                    >
                      <span className="text-[#00ff96] mt-1 flex-shrink-0">›</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Matrix grid overlay */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 255, 150, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 150, 0.1) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        {/* CSS animations */}
        <style>{`
          @keyframes experienceScan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
        `}</style>
      </VerticalTimelineElement>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const { language } = useLanguage();
  const experiences = getExperiences(language);

  const getCompaniesSubtitle = () => {
    let subtitle;
    if (language === "pt") {
      subtitle = "Empresas onde atuei";
    } else if (language === "en") {
      subtitle = "Companies I worked for";
    } else {
      subtitle = "Empresas donde trabajé";
    }
    return subtitle;
  };

  const getExperienceTitle = () => {
    let title;
    if (language === "pt") {
      title = "Experiências Profissionais:";
    } else if (language === "en") {
      title = "Work Experience:";
    } else {
      title = "Experiencia Profesional:";
    }
    return title;
  };

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-[#00ff96]`}>
          {getCompaniesSubtitle()}
        </p>
        <h2
          className={`${styles.sectionHeadText} text-center text-white drop-shadow-[0_0_20px_rgba(0,255,150,0.3)]`}
        >
          {getExperienceTitle()}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col relative">
        {/* Matrix rain effect overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 255, 150, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 150, 0.15) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <VerticalTimeline lineColor="rgba(0, 255, 150, 0.3)">
          {experiences.map((experience: Experience, index: number) => (
            <ExperienceCard key={experience.company_name} experience={experience} index={index} />
          ))}
        </VerticalTimeline>
      </div>

      {/* Global CSS for timeline customization */}
      <style>{`
        .vertical-timeline::before {
          background: linear-gradient(
            to bottom,
            rgba(0, 255, 150, 0.1) 0%,
            rgba(0, 255, 150, 0.3) 50%,
            rgba(0, 255, 150, 0.1) 100%
          );
          box-shadow: 0 0 10px rgba(0, 255, 150, 0.5);
        }

        .vertical-timeline-element-date {
          color: #00ff96 !important;
          font-family: 'Courier New', monospace !important;
          font-weight: bold !important;
          text-shadow: 0 0 10px rgba(0, 255, 150, 0.5);
        }

        @media only screen and (min-width: 1170px) {
          .vertical-timeline-element-date {
            color: #00ff96 !important;
          }
        }
      `}</style>
    </div>
  );
};

const ExperienceWithWrapper = SectionWrapper(ExperienceSection, "work");

export default ExperienceWithWrapper;
