'use client';

import { useScroll } from '@/context/ScrollContext';

const navItems = [
  { targetIndex: 0, symbol: '☉', label: 'início' },
  { targetIndex: 1, symbol: '⚚', label: 'artistas' },
  { targetIndex: 2, symbol: '✦', label: 'contato' },
];

export default function Navigation() {
  const { scrollToSection, currentSectionIndex } = useScroll();

  return (
    <nav className="fixed bottom-6 sm:bottom-10 left-1/2 z-[5000] -translate-x-1/2">
      <ul className="flex items-center gap-6 sm:gap-10 md:gap-12 px-4">
        {navItems.map((item) => {
          const isActive = item.targetIndex === currentSectionIndex;
          return (
            <li key={item.targetIndex}>
              <button
                onClick={() => scrollToSection(item.targetIndex)}
                className="group relative flex flex-col items-center focus:outline-none"
                aria-label={`Ir para a seção ${item.label}`}
              >
                <span
                  className={`nav-symbol text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-grainy-distorted transition-colors duration-300 ${
                    isActive ? 'text-primary' : 'text-body group-hover:text-primary'
                  }`}
                >
                  {item.symbol}
                </span>

                <span
                  className={`nav-label pointer-events-none absolute -top-8 sm:-top-10 md:-top-12 font-['var(--font-body)'] text-base sm:text-xl text-primary text-grainy-distorted transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
