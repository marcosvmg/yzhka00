import { FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-12 text-center sm:px-8 sm:py-16"
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
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-0 max-w-lg sm:max-w-3xl">
        <h2
          className="font-['var(--font-heading)'] text-3xl sm:text-6xl leading-tight text-grainy-distorted"
          style={{ color: 'rgb(var(--color-primary))' }}
        >
          O QUE SOMOS
        </h2>
        <p
          className="mx-auto mt-4 max-w-full text-base sm:text-xl md:text-2xl leading-relaxed"
          style={{ color: 'rgb(var(--color-text-body))' }}
        >
          somos a a última esperança, somos um, somos você, somos YZHKA.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6 sm:mt-12 sm:gap-12 text-grainy-distorted">
          <a
            href="https://www.instagram.com/yzhka00/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary transition-transform hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram size={36} />
          </a>
          <a
            href="mailto:contato@yzhka00.com"
            className="text-primary transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope size={36} />
          </a>
        </div>
      </div>

      {/* Rodapé */}
      <div className="absolute bottom-6 sm:bottom-8 text-center z-10 w-full">
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
