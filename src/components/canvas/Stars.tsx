import React from "react";

import StarsFallback from "../StarsFallback";

const StarsCanvas: React.FC = () => {
  // Usar fallback elegante (temporariamente em todos os dispositivos para teste)
  return <StarsFallback />;
};

export default StarsCanvas;
