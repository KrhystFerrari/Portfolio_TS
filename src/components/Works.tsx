import React, { useState, useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles/index";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { getProjects } from "../constants/indexMultiLang";
import { useLanguage } from "../hooks/useLanguage";
import { translations } from "../constants/translations";
import { fadeIn, textVariant } from "../utils/motion";
import type { Project, TiltOptions } from "../types";

interface ProjectCardProps {
  name: string;
  description: string;
  tags: Array<{
    name: string;
    color: string;
  }>;
  image: string;
  source_code_link: string;
  index: number;
  sectionVisible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  index,
  sectionVisible,
}) => {
  const [cardVisible, setCardVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [displayedName, setDisplayedName] = useState("");
  const [isTypingName, setIsTypingName] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const tiltOptions: TiltOptions = {
    max: 25,
    scale: 1.02,
    speed: 400,
  };

  // Show card with staggered animation when section becomes visible
  useEffect(() => {
    if (!sectionVisible) return;

    const timer = setTimeout(() => {
      setCardVisible(true);
    }, index * 200); // Staggered card appearance

    return () => clearTimeout(timer);
  }, [sectionVisible, index]);

  // Start typing animation after card becomes visible
  useEffect(() => {
    if (!cardVisible) return;

    const timer = setTimeout(() => {
      setIsTypingName(true);
    }, 800);

    return () => clearTimeout(timer);
  }, [cardVisible]);

  // Typing effect for project name
  useEffect(() => {
    if (!isTypingName) return;

    if (displayedName.length < name.length) {
      const timeout = setTimeout(
        () => {
          setDisplayedName(name.slice(0, displayedName.length + 1));
        },
        30 + Math.random() * 40
      );
      return () => clearTimeout(timeout);
    }
  }, [isTypingName, displayedName, name]);

  // Determine if it's a GitHub link or web link
  const isGitHubLink = source_code_link.includes("github.com");
  const linkType = isGitHubLink ? "source code" : "website";
  const linkLabel = isGitHubLink ? `View source code for ${name}` : `Visit website for ${name}`;
  const hasValidLink = source_code_link && source_code_link !== "#";

  return (
    <div ref={cardRef} className="w-full sm:w-[360px] md:w-[calc(50%-0.875rem)] lg:w-[360px]">
      <AnimatePresence mode="wait">
        {cardVisible && (
          <Tilt options={tiltOptions}>
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
              }}
              className="relative w-full bg-[#0d1117] border-2 border-[#00ff96]/30 rounded-lg overflow-hidden group min-h-[500px] flex flex-col"
              style={{
                boxShadow: "0 0 20px rgba(0, 255, 150, 0.1)",
                transformStyle: "preserve-3d",
              }}
              whileHover={{
                borderColor: "#00ff96",
                boxShadow: "0 0 40px rgba(0, 255, 150, 0.4)",
                scale: 1.03,
              }}
            >
              {/* Scanline effect */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff96]/5 to-transparent h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
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
                  project_{String(index + 1).padStart(2, "0")}.exe
                </span>

                {/* Link button in header */}
                {hasValidLink && (
                  <a
                    href={source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto w-6 h-6 rounded flex justify-center items-center cursor-pointer bg-[#00ff96]/10 hover:bg-[#00ff96]/30 border border-[#00ff96]/30 hover:border-[#00ff96] transition-all duration-300"
                    aria-label={linkLabel}
                    title={linkLabel}
                    style={{
                      boxShadow: "0 0 10px rgba(0, 255, 150, 0.2)",
                    }}
                  >
                    {isGitHubLink ? (
                      <img
                        src={github}
                        alt={linkType}
                        className="w-3.5 h-3.5 object-contain brightness-0 invert opacity-70"
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5 text-[#00ff96]"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                    )}
                  </a>
                )}
              </div>

              {/* Image container with Matrix overlay */}
              <div className="relative w-full h-[190px] overflow-hidden bg-[#0a0a0f]">
                <motion.img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                  style={{
                    filter: imageLoaded ? "brightness(0.8) contrast(1.1)" : "brightness(0.3)",
                  }}
                  onLoad={() => setImageLoaded(true)}
                  whileHover={{
                    scale: 1.1,
                    filter: "brightness(1) contrast(1.2)",
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Matrix grid overlay on image */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0, 255, 150, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 150, 0.2) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* Loading effect */}
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex gap-1">
                      <div
                        className="w-2 h-2 bg-[#00ff96] rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-[#00ff96] rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-[#00ff96] rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Content container */}
              <div className="relative p-5 flex-1 flex flex-col">
                {/* Terminal prompt */}
                <div className="font-mono text-[10px] text-[#00ff96]/70 mb-3">
                  <span className="text-[#00ff96]">root@portfolio:~$</span> cat project_info.txt
                </div>

                {/* Project name with typing effect */}
                <h3 className="text-[#00ff96] font-bold text-[20px] font-mono mb-3 min-h-[28px] leading-tight">
                  {displayedName}
                  {isTypingName && displayedName.length < name.length && (
                    <span className="animate-pulse">_</span>
                  )}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-[14px] leading-relaxed mb-4 font-mono flex-1">
                  {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {tags.map((tag) => (
                    <span
                      key={`${name}-${tag.name}`}
                      className="px-2 py-1 text-[11px] font-mono bg-[#00ff96]/10 border border-[#00ff96]/30 rounded text-[#00ff96] hover:bg-[#00ff96]/20 hover:border-[#00ff96] transition-all duration-300"
                      style={{
                        boxShadow: "0 0 5px rgba(0, 255, 150, 0.1)",
                      }}
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* CSS animations */}
              <style>{`
                @keyframes terminalScan {
                  0% { transform: translateY(-100%); }
                  100% { transform: translateY(100%); }
                }
              `}</style>
            </motion.div>
          </Tilt>
        )}
      </AnimatePresence>
    </div>
  );
};

const Works: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const projects = getProjects(language);
  const [showAll, setShowAll] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [allCardsVisible, setAllCardsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const INITIAL_CARDS_COUNT = 3;
  const initialProjects = projects.slice(0, INITIAL_CARDS_COUNT);
  const extraProjects = projects.slice(INITIAL_CARDS_COUNT);
  const hasMoreProjects = projects.length > INITIAL_CARDS_COUNT;

  // Intersection Observer for the entire Works section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !sectionVisible) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [sectionVisible]);

  // Trigger collective glitch effect after initial cards are rendered
  useEffect(() => {
    if (!sectionVisible) return;

    const cardsToRender = Math.min(INITIAL_CARDS_COUNT, projects.length);
    const lastCardDelay = (cardsToRender - 1) * 200;
    const timer = setTimeout(() => {
      setAllCardsVisible(true);
    }, lastCardDelay + 1200);

    return () => clearTimeout(timer);
  }, [sectionVisible, projects.length]);

  const getProjectsDescription = () => {
    if (language === "pt") {
      return "Os projetos a seguir mostram minhas habilidades e experiência por meio de exemplos do mundo real do meu trabalho. Cada projeto é brevemente descrito com links para repositórios de código e demonstrações ao vivo. Isso reflete minha capacidade de resolver problemas complexos, trabalhar com diferentes tecnologias e gerenciar projetos de forma eficaz.";
    } else if (language === "en") {
      return "The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.";
    } else {
      return "Los siguientes proyectos muestran mis habilidades y experiencia a través de ejemplos del mundo real de mi trabajo. Cada proyecto se describe brevemente con enlaces a repositorios de código y demostraciones en vivo. Refleja mi capacidad para resolver problemas complejos, trabajar con diferentes tecnologías y gestionar proyectos de manera efectiva.";
    }
  };

  const getButtonText = () => {
    if (language === "pt") {
      return showAll ? "Ver menos" : "Ver mais projetos";
    } else if (language === "en") {
      return showAll ? "Show less" : "View more projects";
    } else {
      return showAll ? "Ver menos" : "Ver más proyectos";
    }
  };

  const handleToggleProjects = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div ref={sectionRef}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[#00ff96]`}>{t.projects.subtitle}</p>
        <h2
          className={`${styles.sectionHeadText} text-white drop-shadow-[0_0_20px_rgba(0,255,150,0.3)]`}
        >
          {t.projects.title}:
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-300 text-[17px] max-w-3xl leading-[30px]"
        >
          {getProjectsDescription()}
        </motion.p>
      </div>

      <div className="mt-20 relative">
        {/* Collective glitch overlay */}
        {allCardsVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 -mx-8 pointer-events-none z-10"
            style={{
              animation: "collective-matrix-glitch 1.2s ease-out forwards",
            }}
          />
        )}

        <div
          className={`flex flex-wrap gap-7 justify-center relative ${
            allCardsVisible ? "collective-content-shake" : ""
          }`}
          style={{
            animation: allCardsVisible ? "collective-content-shake 1.2s ease-out forwards" : "none",
          }}
        >
          {/* Initial cards - always rendered with stable keys */}
          {initialProjects.map((project: Project, index: number) => (
            <ProjectCard
              key={`project-${project.name}-${index}`}
              {...project}
              index={index}
              sectionVisible={sectionVisible}
            />
          ))}

          {/* Extra cards - smoothly animated in/out */}
          <AnimatePresence mode="sync">
            {showAll &&
              extraProjects.map((project: Project, index: number) => (
                <ProjectCard
                  key={`project-${project.name}-${index + INITIAL_CARDS_COUNT}`}
                  {...project}
                  index={index + INITIAL_CARDS_COUNT}
                  sectionVisible={sectionVisible}
                />
              ))}
          </AnimatePresence>
        </div>
      </div>

      {hasMoreProjects && (
        <div className="mt-12 flex justify-center">
          <motion.button
            onClick={handleToggleProjects}
            className="relative bg-[#0d1117] hover:bg-[#161b22] transition-all duration-300 ease-in-out
                       px-8 py-3 rounded-lg text-[#00ff96] font-bold text-[16px] font-mono
                       border-2 border-[#00ff96]/30 hover:border-[#00ff96]
                       flex items-center gap-3 group overflow-hidden"
            style={{
              boxShadow: "0 0 20px rgba(0, 255, 150, 0.2)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 255, 150, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Button scanline effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ff96]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                animation: "buttonScan 2s linear infinite",
              }}
            />

            <span className="relative z-10">
              {">"} {getButtonText()}
            </span>

            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10 transition-transform duration-300"
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path d="M6 9l6 6 6-6" />
            </motion.svg>
          </motion.button>
        </div>
      )}

      {/* CSS animations */}
      <style>{`
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

        @keyframes buttonScan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};

const WorksWithWrapper = SectionWrapper(Works, "work");

export default WorksWithWrapper;
