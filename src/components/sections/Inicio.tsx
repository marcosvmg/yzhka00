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

  const resetRotation = () => {
    const container = containerRef.current;
    if (!container) return;
    container.style.setProperty('--rotate-x', '0deg');
    container.style.setProperty('--rotate-y', '0deg');
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    updateRotation(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      updateRotation(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-14 sm:px-16 sm:py-28 lg:px-32"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/img/main-bg.png')`,
          opacity: 0.2,
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col-reverse items-center gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* Imagem */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetRotation}
          onTouchMove={handleTouchMove}
          onTouchEnd={resetRotation}
          onTouchCancel={resetRotation}
          className="group relative h-[260px] w-full max-w-[280px] [perspective:1000px] sm:h-[500px] sm:max-w-[400px] md:h-[650px] lg:h-[850px] lg:max-w-none"
          style={{ touchAction: 'none' }}
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

        {/* Texto */}
        <div className="text-center px-2 sm:px-0 lg:text-left">
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none font-['var(--font-heading)'] text-[5rem] leading-none opacity-10 sm:text-[10rem] md:text-[15rem] lg:text-[25rem] text-grainy-distorted"
              style={{ color: 'rgb(var(--color-text-subtle))' }}
            >
              ISCA
            </div>
            <h1
              style={{ color: 'rgb(var(--color-primary))' }}
              className="relative z-10 font-['var(--font-heading)'] text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-tight text-grainy-distorted"
            >
              #YZHKA00
            </h1>
          </div>
          <p
            style={{ color: 'rgb(var(--color-text-body))' }}
            className="mx-auto mt-4 max-w-xs text-base italic sm:mt-8 sm:text-xl md:text-2xl lg:mx-0"
          >
            a última esperança
          </p>
        </div>
      </div>
    </section>
  );
}
