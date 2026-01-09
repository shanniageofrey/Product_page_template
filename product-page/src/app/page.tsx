import ProductCard from "@/components/product/ProductCard";
import { getProducts } from "./lib/api";

export default async function Home() {
  const { products } = await getProducts();

  return (
    <main className="bg-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-normal text-gray-900 mb-12">
          New Arrivals
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products && products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-gray-400">No products found.</p>
          )}
        </div>
      </section>
    </main>
  );
}