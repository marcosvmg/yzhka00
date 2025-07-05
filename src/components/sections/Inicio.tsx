export default function Inicio() {
  return (
    // Usamos 'min-h-screen' para garantir que a seção ocupe pelo menos toda a altura da tela
    <section
      id="inicio"
      className="flex min-h-screen w-full flex-col items-center justify-center p-4 text-center text-grainy text-distorted "
    >
      <h1
        // Classes responsivas: o texto começa em 6xl e aumenta em telas maiores
        className="font-['var(--font-heading)'] text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
        style={{ color: 'rgb(var(--color-primary))' }}
      >
        #YZHKA00
      </h1>
      <p
        // O mesmo padrão responsivo para o parágrafo
        className="mt-6 max-w-2xl text-lg sm:text-xl md:text-2xl italic"
        style={{ color: 'rgb(var(--color-text-body))' }}
      >
        Tudo é Duplo; tudo tem polos; tudo tem o seu oposto.
      </p>
    </section>
  );
}