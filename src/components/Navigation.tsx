'use client';

import { useScroll } from '@/context/ScrollContext';

const navItems = [
  { targetIndex: 0, symbol: '☉', label: 'início' },
  { targetIndex: 1, symbol: '⚚', label: 'nomes do movimento' },
  { targetIndex: 2, symbol: '✦', label: 'quem somos' },
];

export default function Navigation() {
  const { scrollToSection, currentSectionIndex } = useScroll();

  return (
    <nav className="fixed bottom-14 sm:bottom-10 left-1/2 z-[5000] -translate-x-1/2 px-2">
      <ul className="flex items-center gap-6 sm:gap-10 md:gap-12 px-2 sm:px-0">
        {navItems.map((item) => {
          const isActive = item.targetIndex === currentSectionIndex;
          return (
            <li key={item.targetIndex}>
              <button
                onClick={() => scrollToSection(item.targetIndex)}
                className="group relative flex flex-col items-center focus:outline-none p-2 rounded-md active:ring-2 active:ring-primary"
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
                  className={`nav-label pointer-events-none absolute -top-7 sm:-top-10 md:-top-12 font-['var(--font-body)'] text-sm sm:text-xl text-primary text-grainy-distorted transition-opacity duration-300 ${
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
