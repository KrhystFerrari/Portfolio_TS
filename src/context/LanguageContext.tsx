import React, { createContext, useState, useMemo } from "react";
import type { ReactNode } from "react";

export type Language = "pt" | "en" | "es";

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("pt");

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
