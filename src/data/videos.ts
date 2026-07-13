export interface Video {
  /** YouTube video id */
  id: string;
  title: string;
}

export const promoVideo: Video = {
  id: '1x2Z03ETqsk',
  title: 'La Familia Salsa Band — Promo Video 2024',
};

export const concertVideos: Video[] = [
  {
    id: 'io1AfSzkwmk',
    title: 'Vivir Mi Vida — with Roely Matos',
  },
  {
    id: 'HLHDeX_a9jI',
    title: 'With Ondřej Šťastný (bachata guitar) & guests — Terasa Smíchov',
  },
  {
    id: '0OVQcXD3PWo',
    title: 'Instrumental salsa: Via (Al De Lory)',
  },
  {
    id: 'vWuc9JZelvw',
    title: 'Live in Liberec — Salsa MaJa festival',
  },
  {
    id: 'o5ZPZCbPh5I',
    title: 'The salsa party is on! — Sokolov',
  },
];
