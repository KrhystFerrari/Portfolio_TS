import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { useLanguage } from "../hooks/useLanguage";
import TechFallback from "./TechFallback";

const Tech: React.FC = () => {
  const { language } = useLanguage();

  const getTechTitle = () => {
    if (language === "pt") return "Stack Tecnológico:";
    if (language === "en") return "Tech Stack:";
    return "Stack Tecnológico:"; // es
  };

  const getTechSubtitle = () => {
    if (language === "pt") return "Tecnologias que domino";
    if (language === "en") return "Technologies I master";
    return "Tecnologías que domino"; // es
  };

  return (
    <div className="-mt-16">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-[#00ff96]`}>{getTechSubtitle()}</p>
        <h2
          className={`${styles.sectionHeadText} text-center text-white drop-shadow-[0_0_20px_rgba(0,255,150,0.3)]`}
        >
          {getTechTitle()}
        </h2>
      </motion.div>

      <div className="mt-20">
        <TechFallback />
      </div>
    </div>
  );
};

const TechWithWrapper = SectionWrapper(Tech, "tech");

export default TechWithWrapper;
