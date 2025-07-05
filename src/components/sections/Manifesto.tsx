export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="flex min-h-screen w-full items-center justify-center px-4 py-24 sm:p-8"
    >
      <div className="w-full max-w-4xl text-center">
        {/* O efeito de grão é aplicado apenas no título principal da seção */}
        <h2
          // CORREÇÃO: Havia um erro de digitação ('text-grain'). Corrigido para 'text-grainy'
          // e combinado com 'text-distorted' dentro de um <span> para consistência e
          // para garantir que o filtro afete apenas o texto.
          className="font-['var(--font-heading)'] text-6xl sm:text-7xl md:text-8xl"
          style={{ color: 'rgb(var(--color-text-heading))' }}
        >
          <span className="text-grainy text-distorted">O MANIFESTO</span>
        </h2>
        <p
          className="mt-8 text-xl sm:text-2xl leading-relaxed max-w-3xl mx-auto"
          style={{ color: 'rgb(var(--color-text-body))' }}
        >
          A realidade é uma tela, e a vibração é o pincel. Nossas frequências definem a textura da existência. Buscamos a ressonância na dissonância, a clareza no ruído. O que está em cima reflete o que está embaixo, e nossa arte é o espelho.
        </p>
      </div>
    </section>
  );
}