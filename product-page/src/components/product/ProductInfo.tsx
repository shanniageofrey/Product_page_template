"use client";

import { useState } from "react";
import { Product } from "@/app/interfaces/product";
import ProductVariants from "./ProductVariants";
import AddToCartButton from "./AddToCartBtn";
import { Share2, Heart } from "lucide-react";

interface ProductInfoProps {
  product: Product;
}

const fallbackColor = "defaultColor";

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] ?? fallbackColor
  );
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="flex flex-col h-full">
      {/* Action Icons */}
      <div className="flex gap-3 mb-6">
        <button 
          className="w-12 h-12 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition"
          aria-label="Share product"
        >
          <Share2 className="w-5 h-5 text-gray-600" />
        </button>
        <button 
          className="w-12 h-12 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition"
          aria-label="Add to wishlist"
        >
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Brand */}
      <p className="text-sm text-gray-500 mb-2">John Lewis ANYDAY</p>

      {/* Title */}
      <h1 className="text-3xl font-normal text-gray-900 mb-4">
        {product.name}
      </h1>

      {/* Price + Rating */}
      <div className="flex items-center gap-4 mb-4">
        <span className="text-lg text-gray-400 line-through">£40.00</span>
        <span className="text-2xl font-semibold text-gray-900">
          £{product.price}
        </span>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <span className="text-sm text-gray-600">1,238 Sold</span>
        <span className="text-gray-300" aria-hidden="true">•</span>
        <div className="flex items-center gap-1">
          <span className="text-yellow-500" aria-hidden="true">★</span>
          <span className="text-sm font-medium text-gray-900">4.5</span>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-base font-semibold text-gray-900 mb-3">
          Description:
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          {showFullDescription 
            ? product.description 
            : `${product.description?.slice(0, 200) || 'This is a high-quality product perfect for everyday wear. Made with premium materials for lasting comfort and style.'}...`}
          {product.description && product.description.length > 200 && (
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-gray-900 font-medium ml-1 hover:underline"
              aria-label={showFullDescription ? "Show less description" : "Show more description"}
            >
              {showFullDescription ? "See Less" : "See More...."}
            </button>
          )}
        </p>
      </div>

      {/* Variants */}
      <div className="mb-6">
        <ProductVariants
          colors={product.colors}
          sizes={product.sizes}
          selectedColor={selectedColor}
          onColorChange={setSelectedColor}
          selectedSize={selectedSize}
          onSizeChange={setSelectedSize}
        />
      </div>

      {/* CTA */}
      <div className="mt-auto space-y-3">
        <AddToCartButton disabled={!selectedSize} />
        <button className="w-full py-4 border-2 border-black text-black font-medium rounded-lg hover:bg-gray-50 transition">
          Checkout Now
        </button>
      </div>

      {/* Delivery Info */}
      <div className="mt-4">
        <button className="text-sm text-gray-600 hover:text-gray-900 underline">
          Delivery T&C
        </button>
      </div>
    </div>
  );
}