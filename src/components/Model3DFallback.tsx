import React from "react";
import { useLanguage } from "../hooks";
import { translations } from "../constants/translations";
import { logo } from "../assets";

interface Model3DFallbackProps {
  type: "hero" | "tech" | "earth" | "stars";
  className?: string;
}

const Model3DFallback: React.FC<Model3DFallbackProps> = ({ type, className = "" }) => {
  const { language } = useLanguage();
  const t = translations[language];

  const renderFallback = () => {
    switch (type) {
      case "hero":
        return (
          <div className={`flex flex-col items-center justify-center h-full ${className}`}>
            <img
              src={logo}
              alt="Krhyst Ferrari Logo"
              className="w-32 h-32 object-contain mb-4 opacity-70"
            />
            <p className="text-secondary text-sm text-center max-w-xs">
              {t.model3d.fallbackMessage}
            </p>
          </div>
        );

      case "tech":
        return (
          <div className={`flex flex-col items-center justify-center min-h-[200px] ${className}`}>
            <img
              src={logo}
              alt="Krhyst Ferrari Logo"
              className="w-24 h-24 object-contain mb-4 opacity-70"
            />
            <p className="text-secondary text-sm text-center max-w-xs">
              {t.model3d.fallbackMessage}
            </p>
          </div>
        );

      case "earth":
        return (
          <div className={`flex flex-col items-center justify-center h-full ${className}`}>
            <img
              src={logo}
              alt="Krhyst Ferrari Logo"
              className="w-28 h-28 object-contain mb-4 opacity-70"
            />
            <p className="text-secondary text-sm text-center max-w-xs">
              {t.model3d.fallbackMessage}
            </p>
          </div>
        );

      case "stars":
        return (
          <div className={`w-full h-auto absolute inset-0 z-[-1] ${className}`}>
            <div className="flex items-center justify-center h-full">
              <img
                src={logo}
                alt="Krhyst Ferrari Logo"
                className="w-16 h-16 object-contain opacity-30"
              />
            </div>
          </div>
        );

      default:
        return (
          <div className={`flex flex-col items-center justify-center h-full ${className}`}>
            <img
              src={logo}
              alt="Krhyst Ferrari Logo"
              className="w-24 h-24 object-contain mb-4 opacity-70"
            />
            <p className="text-secondary text-sm text-center">{t.model3d.fallbackMessage}</p>
          </div>
        );
    }
  };

  return renderFallback();
};

export default Model3DFallback;
