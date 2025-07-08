'use client';

import Image from 'next/image';
import { useRef, MouseEvent, useEffect, useState } from 'react';
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

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = (y / height - 0.5) * -30;
    const rotateY = (x / width - 0.5) * 30;
    container.style.setProperty('--rotate-x', `${rotateX}deg`);
    container.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    const container = containerRef.current;
    if (!container) return;
    container.style.setProperty('--rotate-x', '0deg');
    container.style.setProperty('--rotate-y', '0deg');
  };

  return (
    <section
      id="inicio"
      // 1. Adicionamos 'relative' e 'overflow-hidden' para conter o fundo
      className="relative overflow-hidden flex min-h-screen w-full items-center justify-center px-6 py-28 sm:px-16 lg:px-32"
    >
      {/* 2. Div para a imagem de fundo da seção */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center "
        style={{
          backgroundImage: `url('/assets/img/main-bg.png')`,
          opacity: 0.2, // Opacidade para mesclar com a cor do tema
        }}
      />

      {/* 3. Container do conteúdo principal com 'relative' e 'z-10' para ficar na frente */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="text-center lg:text-left">
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none font-['var(--font-heading)'] text-[15rem] leading-none opacity-10 md:text-[20rem] lg:text-[25rem] text-grainy-distorted"
              style={{ color: 'rgb(var(--color-text-subtle))' }}
            >
              ISCA
            </div>
            <h1
              style={{ color: 'rgb(var(--color-primary))' }}
              className="relative z-10 font-['var(--font-heading)'] text-7xl leading-tight sm:text-8xl md:text-9xl lg:text-[10rem] text-grainy-distorted"
            >
              #YZHKA00
            </h1>
          </div>
          <p
            style={{ color: 'rgb(var(--color-text-body))' }}
            className="mx-auto mt-12 max-w-2xl text-xl italic sm:text-2xl md:text-3xl lg:mx-0"
          >
            A ÚLTIMA ESPERANÇA
          </p>
        </div>
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="group relative h-[600px] w-full [perspective:1000px] sm:h-[700px] md:h-[800px] lg:h-[850px]"
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