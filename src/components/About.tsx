import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles/index";
import { getServices } from "../constants/indexMultiLang";
import { translations } from "../constants/translations";
import { useLanguage } from "../hooks/useLanguage";
import { SectionWrapper } from "../hoc";
import type { ServiceCardProps, Service } from "../types";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const services = getServices(language);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t.about.intro}</p>
        <h2 className={styles.sectionHeadText}>{t.about.title}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] whitespace-pre-line"
      >
        {t.about.description}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service: Service, index: number) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const AboutWithWrapper = SectionWrapper(About, "about");

export default AboutWithWrapper;
