import React, { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import type { Language } from "../context/LanguageContext";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: "pt", name: "Português", flag: "🇧🇷" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
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
          <span className="text-lg" aria-label={`Bandeira ${currentLanguage.name}`}>
            {currentLanguage.flag}
          </span>
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
              <span className="text-lg" aria-label={`Bandeira ${lang.name}`}>
                {lang.flag}
              </span>
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
