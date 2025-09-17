export interface MamaFua {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  distance: string;
  price: string;
  specialties: string[];
  image: string;
}

export const mockMamaFuas: MamaFua[] = [
  {
    id: '1',
    name: 'Grace Wanjiku',
    rating: 4.9,
    reviews: 124,
    distance: '0.5 km',
    price: 'KES 150/load',
    specialties: ['Delicate fabrics', 'Ironing', 'Same-day service'],
    image: '/images/Grace Wanjiku.png',
  },
  {
    id: '2',
    name: 'Mary Akinyi',
    rating: 4.8,
    reviews: 98,
    distance: '1.2 km',
    price: 'KES 120/load',
    specialties: ['Bulk laundry', 'Eco-friendly', 'Pickup & delivery'],
    image: '/images/Mary Akinyi.png',
  },
  {
    id: '3',
    name: 'Janet Muthoni',
    rating: 5.0,
    reviews: 210,
    distance: '2.1 km',
    price: 'KES 180/load',
    specialties: ['Premium care', 'Stain removal', 'Express service'],
    image: '/images/Janet Muthoni.png',
  },
  {
    id: '4',
    name: 'Esther Nyambura',
    rating: 4.7,
    reviews: 75,
    distance: '2.5 km',
    price: 'KES 130/load',
    specialties: ['Bedding & Linens', 'Ironing'],
    image: '/images/Esther Nyambura.png',
  },
   {
    id: '5',
    name: 'Beatrice Atieno',
    rating: 4.9,
    reviews: 150,
    distance: '3.1 km',
    price: 'KES 160/load',
    specialties: ['Same-day service', 'Stain removal', 'Pickup & delivery'],
    image: '/images/Beatrice Atieno.png',
  },
];
