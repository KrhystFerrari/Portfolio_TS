import React, { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import type { Language } from "../context/LanguageContext";

// Componente para renderizar bandeiras como SVG
const FlagIcon: React.FC<{ country: string; className?: string }> = ({
  country,
  className = "",
}) => {
  const flags = {
    BR: (
      <svg
        className={`inline-block ${className}`}
        width="24"
        height="16"
        viewBox="0 0 24 16"
        fill="none"
      >
        <rect width="24" height="16" fill="#009b3a" rx="2" />
        <polygon points="12,2 22,8 12,14 2,8" fill="#fedf00" />
        <circle cx="12" cy="8" r="3" fill="#002776" />
        <path d="M9 8 Q12 6 15 8 Q12 10 9 8" fill="#fedf00" />
      </svg>
    ),
    US: (
      <svg
        className={`inline-block ${className}`}
        width="24"
        height="16"
        viewBox="0 0 24 16"
        fill="none"
      >
        <rect width="24" height="16" fill="#B22234" rx="2" />
        <rect width="24" height="1.23" y="1.23" fill="white" />
        <rect width="24" height="1.23" y="3.69" fill="white" />
        <rect width="24" height="1.23" y="6.15" fill="white" />
        <rect width="24" height="1.23" y="8.62" fill="white" />
        <rect width="24" height="1.23" y="11.08" fill="white" />
        <rect width="24" height="1.23" y="13.54" fill="white" />
        <rect width="9.6" height="8.77" fill="#3C3B6E" />
      </svg>
    ),
    ES: (
      <svg
        className={`inline-block ${className}`}
        width="24"
        height="16"
        viewBox="0 0 24 16"
        fill="none"
      >
        <rect width="24" height="16" fill="#C60B1E" rx="2" />
        <rect width="24" height="8" y="4" fill="#FFC400" />
        <rect width="24" height="4" fill="#C60B1E" />
        <rect width="24" height="4" y="12" fill="#C60B1E" />
      </svg>
    ),
  };

  return flags[country as keyof typeof flags] || null;
};

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; name: string; country: string }[] = [
    { code: "pt", name: "Português", country: "BR" },
    { code: "en", name: "English", country: "US" },
    { code: "es", name: "Español", country: "ES" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0];

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className="bg-tertiary text-white px-3 py-2 rounded-lg border border-secondary focus:outline-none focus:border-primary cursor-pointer min-w-[120px] text-sm font-medium flex items-center justify-between"
        title="Selecionar idioma / Select language / Seleccionar idioma"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="flex items-center gap-2">
          <FlagIcon country={currentLanguage.country} />
          <span>{currentLanguage.name}</span>
        </span>
        <svg
          className={`w-4 h-4 text-secondary transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-tertiary border border-secondary rounded-lg shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-3 py-2 text-left text-sm flex items-center gap-2 hover:bg-secondary transition-colors first:rounded-t-lg last:rounded-b-lg ${
                lang.code === language ? "bg-secondary" : ""
              }`}
            >
              <FlagIcon country={lang.country} />
              <span className="text-white">{lang.name}</span>
            </button>
          ))}
        </div>
      )}

      {isOpen && (
        <button
          className="fixed inset-0 z-40 bg-transparent border-none cursor-default"
          onClick={() => setIsOpen(false)}
          onKeyDown={handleKeyDown}
          aria-label="Fechar seletor de idioma"
          tabIndex={-1}
        />
      )}
    </div>
  );
};

export default LanguageSelector;
