'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ArtistCard from '@/components/sections/ArtistCard';

const artistsData = [
        {
        name: 'miseryswin',
        description: 'um bom feiticeiro não pode brincar com a sorte.',
        imageUrl: '/assets/artistas/miseryswin.jpeg',
        soundcloudUrl: 'https://soundcloud.com/miseryswin',
        instagramUrl: 'https://www.instagram.com/miseryswin/',
        spotifyUrl: 'https://open.spotify.com/artist/7Mkq73B9ZvHpAgskhiwswj?si=dXZPeKPzSyK1ovB_Zug6Qg',
    },
    {
        name: 'fm-cinco',
        description: 'o indivíduo está de férias.',
        imageUrl: '/assets/artistas/fmcinco.jpg',
        soundcloudUrl: 'https://soundcloud.com/miseryswin',
        instagramUrl: 'https://www.instagram.com/fmcinco/',
        spotifyUrl: 'https://open.spotify.com/artist/6Cx7tvzhROth2WcdTEI32Z',
    },
    {
        name: 'suzy #sortudo',
        description: '#cor-de-rosa.',
        imageUrl: '/assets/artistas/suzysortudo.jpg',
        soundcloudUrl: 'https://soundcloud.com/suzy-legarcon',
        instagramUrl: 'https://www.instagram.com/boasortesuzy/',
        spotifyUrl: 'https://open.spotify.com/artist/7lJ9cxHf6qmdnpFMtRbUqt',
    },
    {
        name: 'jundanxer',
        description: 'eterno buscador.',
        imageUrl: '/assets/artistas/jundanxer.webp',
        soundcloudUrl: 'https://soundcloud.com/jundanxer',
        instagramUrl: 'https://www.instagram.com/jundanxer/',
        spotifyUrl: 'https://open.spotify.com/artist/2VgIVRdiJXGjnHE4lCYJRV',
    },
    {
        name: 'leeroy9k',
        description: 'ecologia da alma.',
        imageUrl: '/assets/artistas/leeroy9k.webp',
        soundcloudUrl: 'https://soundcloud.com/leeroy9k',
        instagramUrl: 'https://www.instagram.com/leeroyninekay/',
        spotifyUrl: 'https://open.spotify.com/artist/2T5HMJfBtede5436npDJxH',
    },
    {
        name: 'dandelionn',
        description: 'único e predestinado.',
        imageUrl: '/assets/artistas/dontgohoney.avif',
        soundcloudUrl: 'https://soundcloud.com/dontgohoney',
        instagramUrl: 'https://www.instagram.com/dandelionndann/',
        spotifyUrl: 'https://open.spotify.com/artist/2dpbNSnLYa6NawGSqNwQ5C',
    },
    {
        name: 'rickdograu',
        description: 'apenas fazendo o que gosto.',
        imageUrl: '/assets/artistas/rickdograu.jpg',
        soundcloudUrl: 'https://soundcloud.com/rickdograu',
        instagramUrl: 'https://www.instagram.com/rickdograu__/',
        spotifyUrl: 'https://open.spotify.com/artist/2AQGbb5fuItJ1Vgp7J77qj',
    },
    {
        name: 'knsevenkay',
        description: 'rivera.',
        imageUrl: '/assets/artistas/knesevenkay.jpg',
        soundcloudUrl: 'https://soundcloud.com/kn7k',
        instagramUrl: 'https://www.instagram.com/knesevenkay/',
        spotifyUrl: 'https://open.spotify.com/artist/3zTy3D5WOHVu8t85wUqO5F',
    },
    {
        name: 'ultraje anis',
        description: 'magician.',
        imageUrl: '/assets/artistas/ultrajeanis.avif',
        soundcloudUrl: 'https://soundcloud.com/beatrizimortal',
        instagramUrl: 'https://www.instagram.com/ultraje.anis/',
    },
];

export default function Artistas() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
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
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-14 sm:px-8 sm:py-20 lg:px-12"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/img/movimento-bg.png')",
          opacity: 0.3,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mb-6 text-center px-2 sm:px-0">
          <h2
            className="font-['var(--font-heading)'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-grainy-distorted"
            style={{ color: 'rgb(var(--color-primary))' }}
          >
            PRINCIPAIS NOMES DO YZHKA
          </h2>
          <p
            className="mt-3 text-base sm:text-lg text-body"
            style={{ color: 'rgb(var(--color-text-body))' }}
          >
            Somos um só.
          </p>
        </div>

        <div className="relative">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container px-2 sm:px-0">
              {artistsData.map((artist, index) => (
                <div
                  key={index}
                  className="embla__slide basis-[85%] sm:basis-1/2 md:basis-2/5 lg:basis-[28.57%] flex-shrink-0"
                >
                  <div className="px-1 sm:px-2">
                    <ArtistCard artist={artist} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 text-4xl text-body transition-all duration-300 hover:text-primary hover:scale-110 z-10"
            onClick={scrollPrev}
            aria-label="Artista Anterior"
          >
            {'<'}
          </button>
          <button
            className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 text-4xl text-body transition-all duration-300 hover:text-primary hover:scale-110 z-10"
            onClick={scrollNext}
            aria-label="Próximo Artista"
          >
            {'>'}
          </button>
        </div>
      </div>
    </section>
  );
}
