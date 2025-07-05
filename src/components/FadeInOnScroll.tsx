'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';

type FadeInOnScrollProps = {
  // A CORREÇÃO: Adicionamos '?' para tornar a propriedade 'children' opcional.
  children?: ReactNode;
  className?: string;
  delay?: number;
};

export default function FadeInOnScroll({ children, className, delay = 0 }: FadeInOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Se por acaso o componente for chamado sem filhos, ele não renderizará nada.
  if (!children) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}