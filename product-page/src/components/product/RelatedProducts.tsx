import Link from "next/link";
import Image from "next/image";

interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
}

const relatedProducts: RelatedProduct[] = [
  {
    id: "1",
    name: "Relaxed Fit Cotton Shirt",
    price: 32.99,
    image: "/zendaya.jpeg",
    rating: 4.3,
  },
  {
    id: "2",
    name: "Oversized Denim Jacket",
    price: 45.99,
    image: "/zendaya.jpeg",
    rating: 4.7,
  },
  {
    id: "3",
    name: "Utility Cargo Pants",
    price: 38.99,
    image: "/zendaya.jpeg",
    rating: 4.4,
  },
  {
    id: "4",
    name: "Classic White T-Shirt",
    price: 15.99,
    image: "/zendaya.jpeg",
    rating: 4.6,
  },
];

export default function RelatedProducts() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            You Might Also Like
          </h2>
          <Link
            href="/shop"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 underline"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group block bg-white rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="aspect-3/4 overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4 space-y-2">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-gray-900">
                    £{product.price}
                  </p>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500 text-sm">★</span>
                    <span className="text-xs text-gray-600">{product.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}