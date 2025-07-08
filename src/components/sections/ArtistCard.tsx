'use client';

import Image from 'next/image';
import { FaSoundcloud, FaInstagram, FaSpotify } from 'react-icons/fa';

type Artist = {
  name: string;
  description: string;
  imageUrl: string;
  soundcloudUrl: string;
  instagramUrl: string;
  spotifyUrl?: string; // Tornando a URL do Spotify opcional
};

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-md shadow-lg">
      <Image
        src={artist.imageUrl}
        alt={`Foto de ${artist.name}`}
        fill
        className="object-cover transition-all duration-700 ease-in-out blur-xs group-hover:scale-105 group-hover:blur-none"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <h3
          className="font-['var(--font-heading)'] text-4xl uppercase"
          style={{ color: 'rgb(var(--color-accent))' }}
        >
          <span className="text-grainy-distorted">{artist.name}</span>
        </h3>
        <p className="mt-1 text-base">{artist.description}</p>
        <div className="mt-4 flex gap-4 text-2xl text-white">
          <a
            href={artist.soundcloudUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:text-[rgb(var(--color-accent))] hover:scale-110"
          >
            <FaSoundcloud />
          </a>
          <a
            href={artist.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:text-[rgb(var(--color-accent))] hover:scale-110"
          >
            <FaInstagram />
          </a>
          {/* Renderiza o ícone do Spotify apenas se a URL existir */}
          {artist.spotifyUrl && (
            <a
              href={artist.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-[rgb(var(--color-accent))] hover:scale-110"
            >
              <FaSpotify />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
