import { FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="relative overflow-hidden flex min-h-screen w-full flex-col items-center justify-center text-center p-4"
    >
      {/* Imagem de fundo com opacidade e z-0 */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/img/oquesomos-bg.png')`,
          opacity: 0.1,
        }}
      />

      {/* Conteúdo em z-10 acima do background */}
      <div className="relative z-10 flex flex-col items-center">
        <h2
          className="font-['var(--font-heading)'] text-6xl sm:text-7xl text-grainy-distorted"
          style={{ color: 'rgb(var(--color-primary))' }}
        >
          O QUE SOMOS
        </h2>
        <p
          className="mt-8 text-xl sm:text-2xl leading-relaxed max-w-3xl mx-auto"
          style={{ color: 'rgb(var(--color-text-body))' }}
        >
          somos a a última esperança, somos um, somos você, somos YZHKA.
        </p>
        <div className="my-12 flex justify-center gap-12">
          <a
            href="https://www.instagram.com/yzhka00/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary transition-transform hover:scale-110 text-grainy-distorted"
            aria-label="Instagram"
          >
            <FaInstagram size={48} />
          </a>
          <a
            href="mailto:contato@yzhka00.com"
            className="text-primary transition-transform hover:scale-110 text-grainy-distorted"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope size={48} />
          </a>
        </div>
      </div>

      {/* Rodapé fixo dentro do fluxo com z-10 */}
      <div className="absolute bottom-8 text-center">
        <p className="text-base text-body">© {currentYear} #YZHKA00</p>
      </div>

      {/* Título extra opcional (mantido, mas vazio) */}
      <div className="w-full max-w-4xl text-center">
        <h2
          className="font-['var(--font-heading)'] text-6xl sm:text-7xl md:text-8xl"
          style={{ color: 'rgb(var(--color-text-heading))' }}
        ></h2>
      </div>
    </footer>
  );
}
