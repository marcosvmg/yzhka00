import { FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-10 text-center sm:p-8"
    >
      {/* Imagem de fundo com opacidade */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/img/oquesomos-bg.png')`,
          opacity: 0.2,
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center px-2 sm:px-0">
        <h2
          className="font-['var(--font-heading)'] text-4xl sm:text-6xl leading-tight text-grainy-distorted"
          style={{ color: 'rgb(var(--color-primary))' }}
        >
          O QUE SOMOS
        </h2>
        <p
          className="mx-auto mt-5 max-w-md text-base sm:max-w-3xl sm:mt-8 sm:text-xl md:text-2xl leading-relaxed"
          style={{ color: 'rgb(var(--color-text-body))' }}
        >
          somos a a última esperança, somos um, somos você, somos YZHKA.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-8 sm:mt-12 sm:gap-12 text-grainy-distorted">
          <a
            href="https://www.instagram.com/yzhka00/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary transition-transform hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram size={36} className="sm:size-[44px]" />
          </a>
          <a
            href="mailto:contato@yzhka00.com"
            className="text-primary transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope size={36} className="sm:size-[44px]" />
          </a>
        </div>
      </div>

      {/* Rodapé */}
      <div className="absolute bottom-4 sm:bottom-8 text-center z-10">
        <p
          className="text-sm sm:text-base"
          style={{ color: 'rgb(var(--color-text-body))' }}
        >
          © {currentYear} #YZHKA00
        </p>
      </div>
    </footer>
  );
}
