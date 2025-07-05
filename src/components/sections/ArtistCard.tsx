import Image from 'next/image';
import { FaSoundcloud, FaInstagram } from 'react-icons/fa';

type Artist = {
  name: string;
  description: string;
  imageUrl: string;
  soundcloudUrl: string;
  instagramUrl: string;
};

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-md shadow-lg">
      {/*
        A MÁGICA ACONTECE AQUI:
        - A imagem começa com blur (`blur-sm`).
        - Ao passar o mouse sobre o `group` (o card inteiro), o blur é removido (`group-hover:blur-none`).
        - Adicionamos um leve zoom (`group-hover:scale-105`) para dar mais dinamismo.
        - `transition-all` e `duration-700` garantem uma animação suave.
      */}
      <Image
        src={artist.imageUrl}
        alt={`Foto de ${artist.name}`}
        fill
        className="object-cover transition-all duration-700 ease-in-out blur-sm group-hover:scale-105 group-hover:blur-none"
      />

      {/* Overlay para garantir a legibilidade do texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-100" />

      {/* Conteúdo do card */}
      {/*
        A MÁGICA ACONTECE AQUI TAMBÉM:
        - O conteúdo começa invisível (`opacity-0`).
        - Ao passar o mouse, ele aparece suavemente (`group-hover:opacity-100`).
      */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <h3
          className="font-['var(--font-heading)'] text-4xl uppercase"
          style={{ color: 'rgb(var(--color-text-heading))' }}
        >
          <span className="text-distorted text-grainy">{artist.name}</span>
        </h3>
        <p className="mt-1 text-base">{artist.description}</p>
        <div className="mt-4 flex gap-4 text-2xl">
          <a href={artist.soundcloudUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary"><FaSoundcloud /></a>
          <a href={artist.instagramUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
}