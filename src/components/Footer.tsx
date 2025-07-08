import { FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            id="contato"
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden p-6 text-center sm:p-8"
        >
            {/* Imagem de fundo com opacidade e z-0 */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/assets/img/oquesomos-bg.png')`,
                    opacity: 0.2,
                }}
            />

            {/* Conteúdo em z-10 acima do background */}
            <div className="relative z-10 flex flex-col items-center">
                <h2
                    className="font-['var(--font-heading)'] text-5xl leading-tight sm:text-6xl text-grainy-distorted"
                    style={{ color: 'rgb(var(--color-primary))' }}
                >
                    O QUE SOMOS
                </h2>
                <p
                    className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed sm:mt-8 sm:text-xl md:text-2xl"
                    style={{ color: 'rgb(var(--color-text-body))' }}
                >
                    somos a a última esperança, somos um, somos você, somos YZHKA.
                </p>
                <div className="my-10 flex justify-center gap-8 sm:my-12 sm:gap-12 text-grainy-distorted">
                    <a
                        href="https://www.instagram.com/yzhka00/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary transition-transform hover:scale-110"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={44} />
                    </a>
                    <a
                        href="mailto:contato@yzhka00.com"
                        className="text-primary transition-transform hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Email"
                    >
                        <FaEnvelope size={44} />
                    </a>
                </div>
            </div>

            {/* Rodapé fixo dentro do fluxo com z-10 */}
            <div className="absolute bottom-8 text-center">
                <p className="text-base" style={{ color: 'rgb(var(--color-text-body))' }}>
                    © {currentYear} #YZHKA00
                </p>
            </div>
        </footer>
    );
}