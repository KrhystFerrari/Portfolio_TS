import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles/index";
import { getExperiences } from "../constants/indexMultiLang";
import { useLanguage } from "../hooks/useLanguage";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import type { ExperienceCardProps, Experience } from "../types";

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point: string, index: number) => (
          <li
            key={`${experience.company_name}-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
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
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>{getCompaniesSubtitle()}</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>{getExperienceTitle()}</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience: Experience) => (
            <ExperienceCard key={experience.company_name} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

const ExperienceWithWrapper = SectionWrapper(ExperienceSection, "work");

export default ExperienceWithWrapper;
