import { Product } from "../interfaces/product";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!BASE_URL) {
  throw new Error("API base URL is missing");
}

export async function getProducts(): Promise<{ products: Product[] }> {
  const response = await fetch(`${BASE_URL}/api/products`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  const data = await response.json();

  return data;
}

export async function getProductById(id: string): Promise<Product> {
  const response = await fetch(`${BASE_URL}/api/products/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch product ${id}`);
  }

  return response.json();
}

