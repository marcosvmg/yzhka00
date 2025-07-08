import Link from 'next/link';

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 w-full p-6 sm:p-8 lg:p-10 bg-transparent z-50"
      style={{
        // Adiciona um gradiente sutil no topo para garantir legibilidade sobre qualquer conteúdo
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)'
      }}
    >
      <Link
        href="/"
        className="text-2xl font-bold transition-colors duration-300 hover:opacity-80"
        style={{
          fontFamily: 'var(--font-heading)',
          color: 'rgb(var(--color-primary))'
        }}
      >
        yzhka.com.br <br/><br/>
				#yzhka00
      </Link>
    </header>
  );
}