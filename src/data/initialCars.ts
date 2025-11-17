import { Car } from '../types/car';

export const initialCars: Car[] = [
  {
    id: '1',
    brand: 'Nissan',
    model: 'X-Trail 2.0 dCi N-Vision 4x4',
    year: 2017,
    price: 13900,
    mileage: 158727,
    fuel: 'Diesel',
    transmission: 'Manual',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iOTAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE2IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiPk5pc3NhbjwvdGV4dD4KPHR5eCB4PSIxNTAiIHk9IjExMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiI+WC1UcmFpbDwvdGV4dD4KPC9zdmc+',
    engine: '2.0 dCi',
    power: '177 PS',
    bodyType: 'SUV',
    vin: 'JNTTNT32U0005749',
    features: ['ABS', 'Airbag', 'Centrálne zamykanie', 'Parkovacie senzory']
  },
  {
    id: '2',
    brand: 'Volkswagen',
    model: 'Passat Variant 2.0 TDI BMT Trendline',
    year: 2014,
    price: 9500,
    mileage: 178385,
    fuel: 'Diesel',
    transmission: 'Manual',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNDQ0Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iOTAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE2IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiPlZvbGtzdyVnZW48L3RleHQ+Cjx0ZXh0IHg9IjE1MCIgeT0iMTEwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIj5QYXNzYXQ8L3RleHQ+Cjwvc3ZnPg==',
    engine: '2.0 TDI',
    bodyType: 'Kombi'
  },
  {
    id: '3',
    brand: 'Škoda',
    model: 'Octavia Combi 1.9 TDI PD Ambiente',
    year: 2010,
    price: 5990,
    mileage: 173122,
    fuel: 'Diesel',
    transmission: 'Manual',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMkU4NkNCIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iOTAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE2IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiPsWga29kYTwvdGV4dD4KPHR5eCB4PSIxNTAiIHk9IjExMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiI+T2N0YXZpYTwvdGV4dD4KPC9zdmc+',
    engine: '1.9 TDI',
    bodyType: 'Kombi'
  },
  {
    id: '4',
    brand: 'Volkswagen',
    model: 'Tiguan Allspace 2.0 TDI EVO 200k SCR 4Motion R-Line DSG',
    year: 2022,
    price: 33000,
    mileage: 113179,
    fuel: 'Diesel',
    transmission: 'Automatic',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNTU1Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iOTAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE2IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiPlZvbGtzdyVnZW48L3RleHQ+Cjx0ZXh0IHg9IjE1MCIgeT0iMTEwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIj5UaWd1YW48L3RleHQ+Cjwvc3ZnPg==',
    engine: '2.0 TDI',
    power: '200 PS',
    bodyType: 'SUV'
  }
];