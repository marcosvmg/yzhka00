'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ArtistCard from "@/components/sections/ArtistCard";

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
      className="relative overflow-hidden flex min-h-screen w-full flex-col items-center justify-center p-4"
    >
      {/* Estrutura de background reutilizada do componente Inicio */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/img/movimento-bg.png')",
          opacity: 0.3, // Opacidade para mesclar com a cor do tema
        }}
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="font-['var(--font-heading)'] text-6xl sm:text-7xl md:text-8xl text-grainy-distorted"
            style={{ color: 'rgb(var(--color-primary))' }}
          >
            PRINCIPAIS NOMES DO MOVIMENTO
          </h2>
          <p
            className="mt-4 text-lg sm:text-xl text-body"
          >
            Somos um só.
          </p>
        </div>

        {/* A CORREÇÃO: Envolvemos o carrossel e os botões em um container relativo */}
        <div className="relative">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {artistsData.map((artist, index) => (
                <div
                  className="embla__slide flex-shrink-0 basis-full sm:basis-1/2 md:basis-2/5 lg:basis-[28.57%]"
                  key={index}
                >
                  <div className="p-4">
                    <ArtistCard artist={artist} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* A CORREÇÃO: Botões posicionados absolutamente nas laterais em telas maiores */}
          <button className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 text-4xl text-body transition-all duration-300 hover:text-primary hover:scale-110 z-10" onClick={scrollPrev}>
            {'<'}
          </button>
          <button className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 text-4xl text-body transition-all duration-300 hover:text-primary hover:scale-110 z-10" onClick={scrollNext}>
            {'>'}
          </button>
        </div>
      </div>
    </section>
  );
}