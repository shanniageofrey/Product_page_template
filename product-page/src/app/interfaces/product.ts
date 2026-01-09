export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  colors: Color[];
  sizes: number[];
}

export interface Color {
  name: string;
  hex: string;
}


