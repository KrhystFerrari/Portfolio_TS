import React from "react";

import HeroFallback from "../HeroFallback";

const ComputersCanvas: React.FC = () => {
  // Usar fallback elegante (temporariamente em todos os dispositivos para teste)
  return <HeroFallback />;
};

export default ComputersCanvas;
