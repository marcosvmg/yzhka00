'use client';

import { createContext, useContext, useEffect, ReactNode } from 'react';

// Usaremos um conjunto inicial de temas robustos e com bom contraste.
const themes = [
  {
    name: 'DECAIMENTO_VERDE',
    'color-primary': '52 211 153',
    'color-text-heading': '229 231 235',
    'color-text-body': '156 163 175',
    'color-background': '15 23 42',
  },
  {
    name: 'SOBRECARGA_ROXA',
    'color-primary': '124 58 237',
    'color-text-heading': '46 22 79',
    'color-text-body': '88 56 127',
    'color-background': '237 233 254',
  },
  {
    name: 'PULSO_AZUL',
    'color-primary': '59 130 246',
    'color-text-heading': '191 219 254',
    'color-text-body': '96 165 250',
    'color-background': '23 31 49',
  },
  {
    name: 'FOGO_SOLAR',
    'color-primary': '249 115 22',
    'color-text-heading': '245 245 244',
    'color-text-body': '168 162 158',
    'color-background': '28 25 23',
  },
  {
    name: 'NEON_NOTURNO',
    'color-primary': '192 38 211',
    'color-text-heading': '224 231 255',
    'color-text-body': '165 180 252',
    'color-background': '30 27 75',
  },
  {
    name: 'OASIS_DIGITAL',
    'color-primary': '20 184 166',
    'color-text-heading': '22 78 99',
    'color-text-body': '14 116 144',
    'color-background': '236 254 255',
  },
  {
    name: 'CEREJA_ATOMICA',
    'color-primary': '220 38 38',
    'color-text-heading': '243 244 246',
    'color-text-body': '156 163 175',
    'color-background': '17 24 39',
  },
];

const ThemeContext = createContext<null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    const root = document.documentElement;
    Object.entries(randomTheme).forEach(([key, value]) => {
      if (key !== 'name') {
        root.style.setProperty(`--${key}`, value);
      }
    });
  }, []);

  return <ThemeContext.Provider value={null}>{children}</ThemeContext.Provider>;
};