import Link from 'next/link';

export default function Header() {
  return (
    <header
      className="fixed left-0 top-0 z-50 w-full px-3 py-2 sm:px-6 sm:py-6 lg:px-10 lg:py-8"
      style={{
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)',
      }}
    >
      <Link
        href="/"
        className="flex flex-col leading-tight transition-opacity duration-300 hover:opacity-80"
        style={{
          fontFamily: 'var(--font-heading)',
          color: 'rgb(var(--color-primary))',
        }}
      >
        <span className="text-base font-bold sm:text-2xl">yzhka.com.br</span>
        <span className="text-xs opacity-70 sm:text-base">#yzhka00</span>
      </Link>
    </header>
  );
}
