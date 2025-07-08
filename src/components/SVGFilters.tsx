export default function SVGFilters() {
  return (
    <svg className="absolute w-0 h-0">
      {/* Filtro para um ruído de granulação forte e presente.
          A CORREÇÃO: O filtro original apenas gerava o ruído, mas não o combinava
          com o formato do texto. O resultado era que o ruído substituía o texto
          ou agia como um fundo.
          Agora, o filtro segue 3 passos:
          1. Gera o ruído com feTurbulence.
          2. Recorta esse ruído usando a forma do texto (SourceAlpha) como máscara.
          3. Mescla o ruído recortado com a cor original do texto (SourceGraphic). */}
      <filter id="grainy-text-filter" x="0" y="0" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="1.2" // Frequência ajustada para melhor performance em mobile
          numOctaves="4"      // Oitavas reduzidas para otimização
          stitchTiles="stitch"
          result="noise"      // Damos um nome ao resultado para usá-lo no próximo passo
        />
        {/* Usa o canal alfa do texto original (SourceAlpha) como uma máscara para o ruído.
            O operador "in" mantém apenas as partes do ruído ("in") que estão DENTRO da máscara ("in2"). */}
        <feComposite in="noise" in2="SourceAlpha" operator="in" result="clippedNoise" />
        {/* Mescla o ruído recortado com a cor original do texto (SourceGraphic). */}
        <feBlend in="SourceGraphic" in2="clippedNoise" mode="multiply" />
      </filter>

      {/* Filtro para uma distorção forte, com aspecto de corrosão granulada */}
      <filter id="distorted-text-filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.06" // Frequência extremamente alta para um ruído "corrosivo"
          numOctaves="2"
          result="turbulence"
        />
        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="8" />
      </filter>
    </svg>
  );
}