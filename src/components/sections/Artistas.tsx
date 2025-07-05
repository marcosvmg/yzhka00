'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ArtistCard from "@/components/sections/ArtistCard";

const artistsData = [
  {
    name: 'miseryswim',
    description: 'Vibrações etéreas e batidas introspectivas.',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop',
    soundcloudUrl: '#',
    instagramUrl: '#',
  },
  {
    name: 'fm-cinco',
    description: 'Narrativas lo-fi sobre a paisagem urbana.',
    imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop',
    soundcloudUrl: '#',
    instagramUrl: '#',
  },
  {
    name: 'Artista 3',
    description: 'Frequências distorcidas da madrugada.',
    imageUrl: 'https://images.unsplash.com/photo-1617391106329-950f4639903b?q=80&w=1887&auto=format&fit=crop',
    soundcloudUrl: '#',
    instagramUrl: '#',
  },
  {
    name: 'Artista 4',
    description: 'Ecos de um futuro esquecido.',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1887&auto=format&fit=crop',
    soundcloudUrl: '#',
    instagramUrl: '#',
  },
  {
    name: 'Artista 5',
    description: 'Sons para o fim do mundo.',
    imageUrl: 'https://images.unsplash.com/photo-1560251279-b1b3f5291530?q=80&w=1887&auto=format&fit=crop',
    soundcloudUrl: '#',
    instagramUrl: '#',
  }
];

export default function Artistas() {
  // A CORREÇÃO: A opção `loop: true` pode interferir com o cálculo de largura
  // quando queremos mostrar slides parciais. Uma configuração mais robusta para
  // este efeito é desabilitar o loop e usar `containScroll`.
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      id="artistas"
      className="flex min-h-screen w-full flex-col items-center justify-center p-4"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="font-['var(--font-heading)'] text-6xl sm:text-7xl md:text-8xl"
            style={{ color: 'rgb(var(--color-text-heading))' }}
          >
            OS ARTISTAS
          </h2>
          <p
            className="mt-4 text-lg sm:text-xl text-body"
          >
            Vozes que ecoam no subterrâneo.
          </p>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {artistsData.map((artist, index) => (
              // AQUI ESTÁ A CORREÇÃO PRINCIPAL:
              // Aplicamos as classes responsivas diretamente no elemento do slide.
              // - No breakpoint 'md', usamos 'basis-2/5' (40%) para mostrar 2.5 cards.
              // - No breakpoint 'lg', mantemos 'basis-[28.57%]' para mostrar 3.5 cards.
              // Isso cria o efeito de "espiar" o próximo card, incentivando o scroll.
              <div
                className="embla__slide flex-shrink-0 basis-full sm:basis-1/2 md:basis-2/5 lg:basis-[28.57%]"
                key={index}
              >
                {/* Aumentamos o padding para criar mais espaço entre os cards. */}
                <div className="p-4">
                  <ArtistCard artist={artist} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-8">
          <button className="text-4xl text-body transition-colors hover:text-primary" onClick={scrollPrev}>
            {'<'}
          </button>
          <button className="text-4xl text-body transition-colors hover:text-primary" onClick={scrollNext}>
            {'>'}
          </button>
        </div>
      </div>
    </section>
  );
}