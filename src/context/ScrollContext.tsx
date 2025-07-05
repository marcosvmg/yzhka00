'use client';

import { createContext, useContext, useState, ReactNode, useCallback, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

interface ScrollContextType {
  scrollToSection: (index: number) => void;
  currentSectionIndex: number;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) throw new Error('useScroll must be used within a ScrollProvider');
  return context;
};

// Definimos nossas seções aqui. Começamos com as que já temos.
export const sections: string[] = ['#inicio', '#artistas', '#manifesto', '#contato'];

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const scrollToSection = useCallback(
    (index: number) => {
      if (isAnimating || index < 0 || index >= sections.length) return;

      setIsAnimating(true);
      setCurrentSectionIndex(index);
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: sections[index], offsetY: 0 },
        ease: 'power3.inOut',
        onComplete: () => setIsAnimating(false),
      });
    },
    [isAnimating],
  );

  // Este efeito adiciona o controle de rolagem pela roda do mouse/trackpad.
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // A linha abaixo é a mais importante: ela previne o comportamento
      // padrão de rolagem do navegador, que estava causando o "bug".
      e.preventDefault();

      // Se uma animação já estiver em progresso, ignoramos novos eventos de scroll.
      if (isAnimating) return;

      const scrollDirection = e.deltaY > 0 ? 1 : -1;
      const nextSectionIndex = currentSectionIndex + scrollDirection;

      scrollToSection(nextSectionIndex);
    };

    // Adicionamos o listener com `{ passive: false }` para permitir o uso de `preventDefault()`.
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isAnimating, currentSectionIndex, scrollToSection]);

  return (
    <ScrollContext.Provider value={{ scrollToSection, currentSectionIndex }}>{children}</ScrollContext.Provider>
  );
};