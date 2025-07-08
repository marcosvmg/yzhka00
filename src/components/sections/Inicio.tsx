'use client';

import Image from 'next/image';
import { useRef, MouseEvent, TouchEvent, useEffect, useState } from 'react';
import { useThemeContext } from '@/context/ThemeContext';

export default function Inicio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useThemeContext();
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (theme) {
      const src = theme.imagePath;
      setImageSrc(src);
    }
  }, [theme]);

  // Função unificada para calcular e aplicar a rotação
  const updateRotation = (clientX: number, clientY: number) => {
    const container = containerRef.current;
    if (!container) return;
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const rotateX = (y / height - 0.5) * -30;
    const rotateY = (x / width - 0.5) * 30;
    container.style.setProperty('--rotate-x', `${rotateX}deg`);
    container.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  // Função unificada para resetar a rotação
  const resetRotation = () => {
    const container = containerRef.current;
    if (!container) return;
    container.style.setProperty('--rotate-x', '0deg');
    container.style.setProperty('--rotate-y', '0deg');
  };

  // Manipuladores de eventos
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    updateRotation(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      // Previne o scroll da página enquanto interage com a imagem
      e.preventDefault();
      updateRotation(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-20 sm:px-16 sm:py-28 lg:px-32"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center "
        style={{
          backgroundImage: `url('/assets/img/main-bg.png')`,
          opacity: 0.2,
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="text-center lg:text-left">
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none font-['var(--font-heading)'] text-[12rem] leading-none opacity-10 sm:text-[15rem] md:text-[20rem] lg:text-[25rem] text-grainy-distorted"
              style={{ color: 'rgb(var(--color-text-subtle))' }}
            >
              ISCA
            </div>
            <h1
              style={{ color: 'rgb(var(--color-primary))' }}
              className="relative z-10 font-['var(--font-heading)'] text-6xl leading-tight sm:text-7xl md:text-9xl lg:text-[10rem] text-grainy-distorted"
            >
              #YZHKA00
            </h1>
          </div>
          <p
            style={{ color: 'rgb(var(--color-text-body))' }}
            className="mx-auto mt-8 max-w-2xl text-xl italic sm:mt-12 sm:text-2xl md:text-3xl lg:mx-0"
          >
            A realidade é uma tela, e a vibração é o pincel. Nossas frequências
            definem a textura da existência. Buscamos a ressonância na
            dissonância, a clareza no ruído.
          </p>
        </div>
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetRotation}
          onTouchMove={handleTouchMove}
          onTouchEnd={resetRotation}
          onTouchCancel={resetRotation}
          className="group relative h-[450px] w-full [perspective:1000px] sm:h-[600px] md:h-[700px] lg:h-[850px]"
        >
          <div
            className="h-full w-full transition-transform duration-300 ease-out group-hover:scale-105"
            style={{
              transform: 'rotateX(var(--rotate-x, 0)) rotateY(var(--rotate-y, 0))',
              transformStyle: 'preserve-3d',
            }}
          >
            {imageSrc && (
              <Image
                key={imageSrc}
                src={imageSrc}
                alt="Imagem conceitual do movimento YZHKA00"
                fill
                className="rounded-md object-contain"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}