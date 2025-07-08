'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Definimos uma interface para o objeto de tema para garantir a tipagem correta
interface Theme {
  name: string;
  'color-primary': string;
  'color-text-heading': string;
  'color-text-body': string;
  'color-background': string;
  'color-svg': string;
  imagePath: string;
  'color-accent': string; // A nova cor de destaque
}

// A interface para o valor do nosso contexto
interface ThemeContextType {
  theme: Theme | null;
}

const themes: Theme[] = [
  {
    name: 'DECAIMENTO_VERDE',
    'color-primary': '52 211 153',
    'color-text-heading': '229 231 235',
    'color-text-body': '156 163 175',
    'color-background': '15 23 42',
    'color-svg': '52 211 153',
    imagePath: '/assets/img/main-decaimento_verde.png',
    'color-accent': '74 222 128', // green-400
  },
  {
    name: 'SOBRECARGA_ROXA',
    'color-primary': '124 58 237',
    'color-text-heading': '46 22 79',
    'color-text-body': '88 56 127',
    'color-background': '237 233 254',
    'color-svg': '124 58 237',
    imagePath: '/assets/img/main-sobrecarga_roxa.png',
    'color-accent': '217 70 239', // fuchsia-500
  },
  {
    name: 'PULSO_AZUL',
    'color-primary': '59 130 246',
    'color-text-heading': '191 219 254',
    'color-text-body': '96 165 250',
    'color-background': '23 31 49',
    'color-svg': '59 130 246',
    imagePath: '/assets/img/main-pulso_azul.png',
    'color-accent': '34 211 238', // cyan-400
  },
  {
    name: 'FOGO_SOLAR',
    'color-primary': '249 115 22',
    'color-text-heading': '245 245 244',
    'color-text-body': '168 162 158',
    'color-background': '28 25 23',
    'color-svg': '249 115 22',
    imagePath: '/assets/img/main-fogo_solar.png',
    'color-accent': '234 179 8', // yellow-500
  },
  {
    name: 'NEON_NOTURNO',
    'color-primary': '192 38 211',
    'color-text-heading': '224 231 255',
    'color-text-body': '165 180 252',
    'color-background': '30 27 75',
    'color-svg': '192 38 211',
    imagePath: '/assets/img/main-neon_noturno.png',
    'color-accent': '236 72 153', // pink-500
  },
  {
    name: 'OASIS_DIGITAL',
    'color-primary': '20 184 166',
    'color-text-heading': '22 78 99',
    'color-text-body': '14 116 144',
    'color-background': '236 254 255',
    'color-svg': '20 184 166',
    imagePath: '/assets/img/main-oasis_digital.png',
    'color-accent': '132 204 22', // lime-500
  },
  {
    name: 'CEREJA_ATOMICA',
    'color-primary': '220 38 38',
    'color-text-heading': '243 244 246',
    'color-text-body': '156 163 175',
    'color-background': '17 24 39',
    'color-svg': '220 38 38',
    imagePath: '/assets/img/main-cereja_atomica.png',
    'color-accent': '239 68 68', // red-500
  },
];

const ThemeContext = createContext<ThemeContextType>({ theme: null });

// A CORREÇÃO: Garantimos que o nome do hook exportado é 'useThemeContext'
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [activeTheme, setActiveTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    setActiveTheme(randomTheme);

    const root = document.documentElement;
    Object.entries(randomTheme).forEach(([key, value]) => {
      if (key !== 'name') {
        root.style.setProperty(`--${key}`, String(value));
      }
    });
  }, []);

  return <ThemeContext.Provider value={{ theme: activeTheme }}>{children}</ThemeContext.Provider>;
};