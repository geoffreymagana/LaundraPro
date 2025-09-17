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
    image: 'https://images.unsplash.com/photo-1580529261239-015515204555?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFmcmljYW4lMjBsYWR5fGVufDB8fDB8fHww',
  },
  {
    id: '2',
    name: 'Mary Akinyi',
    rating: 4.8,
    reviews: 98,
    distance: '1.2 km',
    price: 'KES 120/load',
    specialties: ['Bulk laundry', 'Eco-friendly', 'Pickup & delivery'],
    image: 'https://images.unsplash.com/photo-1601233588267-34c45b849cd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFmcmljYW4lMjBsYWR5fGVufDB8fDB8fHww',
  },
  {
    id: '3',
    name: 'Janet Muthoni',
    rating: 5.0,
    reviews: 210,
    distance: '2.1 km',
    price: 'KES 180/load',
    specialties: ['Premium care', 'Stain removal', 'Express service'],
    image: 'https://images.unsplash.com/photo-1605988442532-581335a443b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjBsYWR5fGVufDB8fDB8fHww',
  },
  {
    id: '4',
    name: 'Esther Nyambura',
    rating: 4.7,
    reviews: 75,
    distance: '2.5 km',
    price: 'KES 130/load',
    specialties: ['Bedding & Linens', 'Ironing'],
    image: 'https://images.unsplash.com/photo-1599387737527-88c671610996?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMGxhZHl8ZW58MHx8MHx8fDA%3D',
  },
   {
    id: '5',
    name: 'Beatrice Atieno',
    rating: 4.9,
    reviews: 150,
    distance: '3.1 km',
    price: 'KES 160/load',
    specialties: ['Same-day service', 'Stain removal', 'Pickup & delivery'],
    image: 'https://plus.unsplash.com/premium_photo-1664298175829-651278359438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhbiUyMGxhZHl8ZW58MHx8MHx8fDA%3D',
  },
];
