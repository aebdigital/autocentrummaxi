export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  image: string;
  images?: string[];
  features?: string[];
  engine?: string;
  power?: string;
  bodyType?: string;
  drivetrain?: string;
  vin?: string;
  description?: string;
}