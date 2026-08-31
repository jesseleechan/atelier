export type ProductCategory = 'beds' | 'tables' | 'seating' | 'storage';

export interface CollectionProduct {
  id: string;
  slug: string;
  title: string;
  category: ProductCategory;
  categoryLabel: string;
  material: string;
  dimensions: string;
  price: string;
  availability: string;
  image: string;
  imageAlt: string;
}

export const COLLECTION_PRODUCTS: CollectionProduct[] = [
  {
    id: 'collection-01',
    slug: 'caelum-platform-bed',
    title: 'Caelum Platform Bed',
    category: 'beds',
    categoryLabel: 'Beds',
    material: 'American walnut / hand-tufted wool',
    dimensions: 'W 82 × D 88 × H 39 in',
    price: 'From $12,400',
    availability: 'Made to order / 12–14 weeks',
    image: '/images/collection-bed.webp',
    imageAlt: 'Low walnut platform bed with a softly upholstered headboard',
  },
  {
    id: 'collection-02',
    slug: 'rook-dining-table',
    title: 'Rook Dining Table',
    category: 'tables',
    categoryLabel: 'Tables',
    material: 'Ebonized oak / patinated bronze',
    dimensions: 'W 96 × D 42 × H 29 in',
    price: 'From $18,800',
    availability: 'Made to order / 14–16 weeks',
    image: '/images/collection-table.webp',
    imageAlt: 'Dark timber dining table with a hand-finished surface',
  },
  {
    id: 'collection-03',
    slug: 'aster-lounge-chair',
    title: 'Aster Lounge Chair',
    category: 'seating',
    categoryLabel: 'Seating',
    material: 'Bleached ash / woven Danish cord',
    dimensions: 'W 29 × D 33 × H 31 in',
    price: 'From $4,200',
    availability: 'Made to order / 10–12 weeks',
    image: '/images/collection-chair.webp',
    imageAlt: 'Hand-woven lounge chair in pale ash and natural cord',
  },
  {
    id: 'collection-04',
    slug: 'tessera-wall-cabinet',
    title: 'Tessera Wall Cabinet',
    category: 'storage',
    categoryLabel: 'Storage',
    material: 'Fumed oak / cast bronze hardware',
    dimensions: 'W 108 × D 20 × H 82 in',
    price: 'From $24,600',
    availability: 'Commission / 18–22 weeks',
    image: '/images/collection-storage.webp',
    imageAlt: 'Architectural oak wall cabinet with open shelving',
  },
  {
    id: 'collection-05',
    slug: 'orbis-pedestal-table',
    title: 'Orbis Pedestal Table',
    category: 'tables',
    categoryLabel: 'Tables',
    material: 'Honed limestone / blackened steel',
    dimensions: 'Ø 54 × H 29 in',
    price: 'From $15,900',
    availability: 'Made to order / 14–16 weeks',
    image: '/images/project-carnegie-hill.webp',
    imageAlt: 'Round stone pedestal table centered beneath pendant lights',
  },
  {
    id: 'collection-06',
    slug: 'sella-dining-chair',
    title: 'Sella Dining Chair',
    category: 'seating',
    categoryLabel: 'Seating',
    material: 'Oiled walnut / woven paper cord',
    dimensions: 'W 21 × D 23 × H 31 in',
    price: 'From $3,850',
    availability: 'Made to order / 10–12 weeks',
    image: '/images/project-riverside.webp',
    imageAlt: 'Sculptural dining chairs gathered around a dark oval table',
  },
];
