"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextValue {
  isLight: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isLight, setIsLight] = useState(false);

  // Apply the class to <html> so every page's CSS variables update together,
  // not just whichever page owns the toggle button.
  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", isLight);
  }, [isLight]);

  const toggleTheme = () => setIsLight((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}