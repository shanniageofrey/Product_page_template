import { Product } from "@/app/interfaces/product";
import Home from "@/app/page";

interface Props {
  product: Product;
}

export default function ProductPage({ product }: Props) {
  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Home product={product} />
      </div>
    </section>
  );
}
