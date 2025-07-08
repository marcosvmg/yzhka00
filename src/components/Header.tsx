import Link from 'next/link';

export default function Header() {
  return (
    <header
      className="fixed left-0 top-0 z-50 w-full px-6 py-4 sm:p-8 lg:p-10"
      style={{
        // O gradiente sutil garante legibilidade sobre qualquer conteúdo
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
      }}
    >
      <Link
        href="/"
        className="flex flex-col text-xl font-bold transition-colors duration-300 hover:opacity-80 sm:text-2xl"
        style={{
          fontFamily: 'var(--font-heading)',
          color: 'rgb(var(--color-primary))',
        }}
      >
        <span>yzhka.com.br</span>
        <span className="opacity-80">#yzhka00</span>
      </Link>
    </header>
  );
}