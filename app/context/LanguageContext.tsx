"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type LangCode = "en" | "id" | "ja" | "zh" | "th" | "vi";

interface LanguageContextType {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<LangCode>("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
