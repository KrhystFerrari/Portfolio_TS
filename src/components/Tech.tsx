import React from "react";

import { BallCanvas } from "./canvas/index";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import type { Technology } from "../types";

const Tech: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology: Technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

const TechWithWrapper = SectionWrapper(Tech, "");

export default TechWithWrapper;
