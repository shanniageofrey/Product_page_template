import { getProductById } from "@/app/lib/api";
import ProductDetailsTabs from "@/components/product/ProductDetailsTabs";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import RelatedProducts from "@/components/product/RelatedProducts";
import ReviewsSection from "@/components/product/ReviewsSection";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = params;
  const product = await getProductById(id);

  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb here */}
        <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
          <span className="hover:text-gray-700 cursor-pointer">Homepage</span>
          <span>›</span>
          <span className="hover:text-gray-700 cursor-pointer">Women</span>
          <span>›</span>
          <span className="hover:text-gray-700 cursor-pointer">
            Women/s Shirts & Tops
          </span>
          <span>›</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        {/* This is Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ProductGallery images={product.images} />
          <ProductInfo product={product} />
        </div>
      </div>

      {/*  This is where Product Details Tabs are */}
      <ProductDetailsTabs />

      {/* This is where Reviews Section */}
      <ReviewsSection />

      {/* This is where Related Products */}
      <RelatedProducts />
    </section>
  );
}
