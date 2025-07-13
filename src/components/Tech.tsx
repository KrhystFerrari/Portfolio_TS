import React from "react";

import { BallCanvas } from "./canvas/index";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useIsMobile } from "../hooks";
import Model3DFallback from "./Model3DFallback";
import type { Technology } from "../types";

const Tech: React.FC = () => {
  const isMobile = useIsMobile(768);

  // Se for mobile, mostrar apenas o fallback único
  if (isMobile) {
    return (
      <div className="flex flex-row flex-wrap justify-center gap-10 min-h-[200px]">
        <Model3DFallback type="tech" className="w-full" />
      </div>
    );
  }

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
