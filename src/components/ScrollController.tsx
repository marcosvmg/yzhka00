'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, sections } from '@/context/ScrollContext';

export default function ScrollController({ children }: { children: React.ReactNode }) {
  const { scrollToSection } = useScroll();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const touchStartY = useRef(0); // Para controle de toque no mobile

  useEffect(() => {
    let isThrottled = false;
    const throttleDuration = 1600; // Duração do "cooldown" do scroll

    const handleWheel = (e: WheelEvent) => {
      if (isThrottled) return;
      isThrottled = true;
      setTimeout(() => { isThrottled = false; }, throttleDuration);

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = currentSectionIndex + direction;

      if (nextIndex >= 0 && nextIndex < sections.length) {
        setCurrentSectionIndex(nextIndex);
        scrollToSection(nextIndex);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isThrottled) return;

      const touchEndY = e.changedTouches[0].clientY;
      const direction = touchStartY.current > touchEndY ? 1 : -1; // Swipe para cima = scroll para baixo

      if (Math.abs(touchStartY.current - touchEndY) > 50) { // Apenas se o swipe for longo o suficiente
        isThrottled = true;
        setTimeout(() => { isThrottled = false; }, throttleDuration);

        const nextIndex = currentSectionIndex + direction;
        if (nextIndex >= 0 && nextIndex < sections.length) {
          setCurrentSectionIndex(nextIndex);
          scrollToSection(nextIndex);
        }
      }
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchMove);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchMove);
    };
  }, [currentSectionIndex, scrollToSection]);

  return <>{children}</>;
}
