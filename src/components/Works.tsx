import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

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
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const tiltOptions: TiltOptions = {
    max: 45,
    scale: 1,
    speed: 450,
  };

  // Determine if it's a GitHub link or web link
  const isGitHubLink = source_code_link.includes("github.com");
  const linkType = isGitHubLink ? "source code" : "website";
  const linkLabel = isGitHubLink ? `View source code for ${name}` : `Visit website for ${name}`;
  const hasValidLink = source_code_link && source_code_link !== "#";

  return (
    <Tilt options={tiltOptions} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
      <div className="relative w-full h-[190px]">
        <img src={image} alt="project_image" className="w-full h-full object-cover rounded-2xl" />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          {hasValidLink && (
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              aria-label={linkLabel}
              title={`${linkLabel} - ${source_code_link}`}
            >
              {isGitHubLink ? (
                <img src={github} alt={linkType} className="w-1/2 h-1/2 object-contain" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-1/2 h-1/2 text-white"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              )}
            </a>
          )}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};

const Works: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const projects = getProjects(language);
  const [showAll, setShowAll] = useState(false);

  const INITIAL_CARDS_COUNT = 6;
  const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_CARDS_COUNT);
  const hasMoreProjects = projects.length > INITIAL_CARDS_COUNT;

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
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{t.projects.subtitle}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t.projects.title}:</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {getProjectsDescription()}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {displayedProjects.map((project: Project, index: number) => (
          <motion.div
            key={`project-${index}-${showAll ? "expanded" : "collapsed"}`}
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            initial="hidden"
            animate="show"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>

      {hasMoreProjects && (
        <div className="mt-12 flex justify-center">
          <motion.button
            onClick={handleToggleProjects}
            className="bg-tertiary hover:bg-[#915EFF] transition-all duration-300 ease-in-out
                       px-8 py-3 rounded-full text-white font-semibold text-[16px] 
                       shadow-lg hover:shadow-xl
                       border border-[#915EFF] hover:border-white
                       flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {getButtonText()}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300"
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path d="M6 9l6 6 6-6" />
            </motion.svg>
          </motion.button>
        </div>
      )}
    </>
  );
};

const WorksWithWrapper = SectionWrapper(Works, "");

export default WorksWithWrapper;
