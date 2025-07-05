export default function SVGFilters() {
  return (
    <svg className="absolute w-0 h-0">
      {/* Filtro para um ruído de granulação forte e presente */}
      <filter id="grainy-text-filter" x="0" y="0" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="2" // Frequência muito alta para um grão fino e intenso
          numOctaves="6"       // Mais oitavas para um ruído mais rico e detalhado
          stitchTiles="stitch"
        />
        {/* Desatura o ruído para que ele seja em tons de cinza, não colorido */}
        <feColorMatrix type="saturate" values="0" />
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