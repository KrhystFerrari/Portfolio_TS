import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles/index";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = <T extends Record<string, unknown>>(
  Component: React.ComponentType<T>,
  idName: string
) => {
  const HOC: React.FC<T> = (props) => {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component {...props} />
      </motion.section>
    );
  };

  return HOC;
};

export default SectionWrapper;
