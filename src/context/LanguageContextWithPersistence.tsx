import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import type { ReactNode } from "react";

export type Language = "pt" | "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Função para obter o idioma inicial
  const getInitialLanguage = (): Language => {
    // 1. Verificar localStorage
    const savedLanguage = localStorage.getItem("portfolio-language") as Language;
    if (savedLanguage && ["pt", "en", "es"].includes(savedLanguage)) {
      return savedLanguage;
    }

    // 2. Verificar idioma do navegador
    const browserLanguage = navigator.language.toLowerCase();
    if (browserLanguage.startsWith("pt")) return "pt";
    if (browserLanguage.startsWith("en")) return "en";
    if (browserLanguage.startsWith("es")) return "es";

    // 3. Idioma padrão
    return "pt";
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  // Efeito para salvar idioma no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  // Efeito para detectar mudanças no idioma do navegador
  useEffect(() => {
    const handleLanguageChange = () => {
      const savedLanguage = localStorage.getItem("portfolio-language");
      if (!savedLanguage) {
        // Se não há idioma salvo, usar o do navegador
        const browserLanguage = navigator.language.toLowerCase();
        if (browserLanguage.startsWith("pt")) setLanguage("pt");
        else if (browserLanguage.startsWith("en")) setLanguage("en");
        else if (browserLanguage.startsWith("es")) setLanguage("es");
      }
    };

    window.addEventListener("languagechange", handleLanguageChange);
    return () => window.removeEventListener("languagechange", handleLanguageChange);
  }, [setLanguage]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
