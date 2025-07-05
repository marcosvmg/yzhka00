'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

type CursorState = 'default' | 'interactive' | 'hidden';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const state = useRef<CursorState>('default');

  useEffect(() => {
    // Ignora tudo em dispositivos de toque para uma melhor experiência mobile
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // --- LEITURA DAS CORES DO TEMA (Método seguro) ---
    const computedStyles = getComputedStyle(document.documentElement);
    const primaryColor = computedStyles.getPropertyValue('--color-primary').trim();
    const headingColor = computedStyles.getPropertyValue('--color-text-heading').trim();

    // Seta a posição inicial para o centro da tela
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    mouse.current = { x: initialX, y: initialY };
    ringPos.current = { x: initialX, y: initialY };

    // GSAP QuickSetter é a forma mais performática de atualizar propriedades CSS
    const dotXSetter = gsap.quickSetter(dot, 'x', 'px');
    const dotYSetter = gsap.quickSetter(dot, 'y', 'px');
    const ringXSetter = gsap.quickSetter(ring, 'x', 'px');
    const ringYSetter = gsap.quickSetter(ring, 'y', 'px');

    // Animação principal que roda a cada frame (sem re-renderizar o React)
    const animate = () => {
      // O anel "persegue" o mouse para um efeito fluido
      ringPos.current.x = gsap.utils.interpolate(ringPos.current.x, mouse.current.x, 0.2);
      ringPos.current.y = gsap.utils.interpolate(ringPos.current.y, mouse.current.y, 0.2);

      // Atualiza as posições dos elementos
      dotXSetter(mouse.current.x);
      dotYSetter(mouse.current.y);
      ringXSetter(ringPos.current.x);
      ringYSetter(ringPos.current.y);
    };

    // Adiciona a função 'animate' ao "ticker" do GSAP, que é um loop otimizado
    gsap.ticker.add(animate);

    // Lógica para mudar o estado do cursor
    const setState = (newState: CursorState) => {
      if (newState === state.current) return;
      state.current = newState;

      if (newState === 'default') {
        gsap.to(dot, { scale: 1, backgroundColor: `rgb(${headingColor})`, duration: 0.3, ease: 'power2.out' });
        gsap.to(ring, { scale: 1, borderColor: `rgba(${primaryColor}, 0.4)`, duration: 0.3, ease: 'power2.out' });
      } else if (newState === 'interactive') {
        gsap.to(dot, { scale: 0, duration: 0.3, ease: 'power2.out' });
        gsap.to(ring, { scale: 2.5, borderColor: `rgba(${primaryColor}, 0.6)`, duration: 0.3, ease: 'back.out(1.7)' });
      }
    };

    // Event listeners
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      const target = e.target as HTMLElement;
      // Atualiza o estado com base no elemento sob o cursor
      setState(target.closest('a, button') ? 'interactive' : 'default');
    };

    const handleMouseDown = () => gsap.to(ring, { scale: ring.style.scale === '2.5' ? 2.2 : 0.9, yoyo: true, repeat: 1, duration: 0.15 });

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);

    // Função de limpeza para remover os listeners quando o componente desmontar
    return () => {
      gsap.ticker.remove(animate);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: 'transform' }} // Otimização para o navegador
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: 'transform' }}
      />
    </>
  );
}