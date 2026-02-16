import React from "react";

import EarthFallback from "../EarthFallback";

const EarthCanvas: React.FC = () => {
  // Usar fallback elegante (temporariamente em todos os dispositivos para teste)
  return (
    <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
      <EarthFallback />
    </div>
  );
};

export default EarthCanvas;
