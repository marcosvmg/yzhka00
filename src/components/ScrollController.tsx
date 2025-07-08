'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, sections } from '@/context/ScrollContext';

export default function ScrollController({ children }: { children: React.ReactNode }) {
  const { scrollToSection } = useScroll();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const touchStartY = useRef<number | null>(null);
  const isThrottled = useRef(false);
  const throttleDuration = 700; // Reduzi o cooldown para mais responsividade

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isThrottled.current) return;
      isThrottled.current = true;
      setTimeout(() => { isThrottled.current = false; }, throttleDuration);

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
      if (isThrottled.current || touchStartY.current === null) return;

      const touchCurrentY = e.touches[0].clientY;
      const diff = touchStartY.current - touchCurrentY;

      if (Math.abs(diff) > 40) {
        isThrottled.current = true;
        setTimeout(() => { isThrottled.current = false; }, throttleDuration);

        const direction = diff > 0 ? 1 : -1;
        const nextIndex = currentSectionIndex + direction;

        if (nextIndex >= 0 && nextIndex < sections.length) {
          setCurrentSectionIndex(nextIndex);
          scrollToSection(nextIndex);
        }
        touchStartY.current = null; // Reset para evitar múltiplos triggers no mesmo swipe
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [currentSectionIndex, scrollToSection]);

  return <>{children}</>;
}
