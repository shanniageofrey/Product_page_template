import Link from "next/link";
import Image from "next/image";
import { Product } from "@/app/interfaces/product";

interface Props {
  product: Product;
}

const fallback_image = "/zendaya.jpeg";

export default function ProductCard({ product }: Props) {
  const imageSrc =
    product.images && product.images.length > 0
      ? product.images[0]
      : fallback_image;

  return (
    <Link href={`/product/${product.id}`} className="group block">
      {/* Image Container */}
      <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={imageSrc}
          alt={product.name}
          width={300}
          height={400}
          priority
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="mt-3 space-y-1">
        <h2 className="text-sm font-medium text-gray-900 line-clamp-2">
          {product.name}
        </h2>
        <p className="text-base font-semibold text-gray-900">
          £{product.price}
        </p>
      </div>
    </Link>
  );
}