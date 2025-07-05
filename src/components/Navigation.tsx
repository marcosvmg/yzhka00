'use client';

import { useScroll } from '@/context/ScrollContext';

const navItems = [
  { targetIndex: 0, symbol: '△', label: 'Início' },
  { targetIndex: 1, symbol: '☿', label: 'Artistas' },
  { targetIndex: 2, symbol: '🜍', label: 'Manifesto' },
  { targetIndex: 3, symbol: '✉', label: 'Contato' },
];

export default function Navigation() {
  const { scrollToSection, currentSectionIndex } = useScroll();

  return (
    <nav className="fixed bottom-10 left-1/2 z-[5000] -translate-x-1/2">
      <ul className="flex items-center gap-10 md:gap-12">
        {navItems.map((item) => {
          const isActive = item.targetIndex === currentSectionIndex;
          return (
            <li key={item.targetIndex}>
              <button
                onClick={() => scrollToSection(item.targetIndex)}
                className="group relative flex flex-col items-center focus:outline-none"
              >
                {/* Ícone movido pra cima com margem negativa */}
                <span
                  className={`nav-symbol mb-6 text-6xl transition-colors duration-300 md:text-7xl text-grainy text-distorted ${
                    isActive ? 'text-primary' : 'text-body group-hover:text-primary'
                  }`}
                >
                  {item.symbol}
                </span>

                {/* Label visível no hover */}
                <span className="nav-label pointer-events-none absolute -top-12 font-['var(--font-body)'] text-2xl text-primary opacity-0 transition-all duration-300 group-hover:-top-14 group-hover:opacity-100">
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
