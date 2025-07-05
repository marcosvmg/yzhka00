import { FaSoundcloud, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="flex min-h-screen w-full flex-col items-center justify-center text-center p-4">
      <div className="flex flex-col items-center">
        <h2
          className="font-['var(--font-heading)'] text-6xl sm:text-7xl"
          style={{ color: 'rgb(var(--color-text-heading))' }}
        >
          <span className="text-grainy text-distorted">CONTATO</span>
        </h2>
        <div className="my-12 flex justify-center gap-12">
          <a href="#" className="text-primary transition-transform hover:scale-110 text-grainy text-distorted" aria-label="SoundCloud">
            <FaSoundcloud size={48} />
          </a>
          <a href="#" className="text-primary transition-transform hover:scale-110 text-grainy text-distorted" aria-label="Instagram">
            <FaInstagram size={48} />
          </a>
          <a href="mailto:contato@yzhka00.com" className="text-primary transition-transform hover:scale-110 text-grainy text-distorted" aria-label="Email">
            <FaEnvelope size={48} />
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 text-center">
        <p className="text-base text-body">
          © {currentYear} #YZHKA00
        </p>
      </div>
    </footer>
  );
}