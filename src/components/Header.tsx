import Link from 'next/link';

export default function Header() {
  return (
    <header
      className="fixed left-0 top-0 z-50 w-full px-4 py-3 sm:p-8 lg:p-10"
      style={{
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
      }}
    >
      <Link
        href="/"
        className="flex flex-col text-lg sm:text-2xl font-bold transition-opacity duration-300 hover:opacity-80"
        style={{
          fontFamily: 'var(--font-heading)',
          color: 'rgb(var(--color-primary))',
        }}
      >
        <span>yzhka.com.br</span>
        <span className="opacity-80 text-sm sm:text-base">#yzhka00</span>
      </Link>
    </header>
  );
}
