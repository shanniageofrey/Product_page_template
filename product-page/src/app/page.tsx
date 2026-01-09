"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart, Share2, Star } from "lucide-react";
import { Product } from "./interfaces/product";
import ProductDetailsTabs from "@/components/product/ProductDetailsTab";
import ReviewsSection from "@/components/product/ReviewsSection";
import RelatedProducts from "@/components/product/RelatedProducts";

const images = [
  "/product/main.jpg",
  "/product/1.jpg",
  "/product/2.jpg",
  "/product/3.jpg",
  "/product/4.jpg",
];

const colors = [
  { name: "Royal Brown", value: "#5A4632" },
  { name: "Light Grey", value: "#E5E5E5" },
  { name: "Blue", value: "#3E6C8E" },
  { name: "Black", value: "#111111" },
];

const sizes = [6, 8, 10, 14, 18, 20];

const FALLBACK_IMAGE = "/zendaya.jpeg";

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  const images = product?.images?.length ? product.images : [FALLBACK_IMAGE];
  const [activeImage, setActiveImage] = useState(images[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(8);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* LEFT – IMAGES */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-3">
          {images.map((img) => (
            <button
              key={img}
              onClick={() => setActiveImage(img)}
              className={`border rounded-md overflow-hidden w-16 h-20 ${
                activeImage === img ? "border-black" : "border-gray-200"
              }`}
            >
              <Image src={img} alt="" width={64} height={80} />
            </button>
          ))}
        </div>

        <div className="relative flex-1 bg-gray-50 rounded-lg">
          <Image
            src={activeImage}
            alt="Product"
            fill
            className="object-contain"
            priority
          />

          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button className="p-2 bg-white rounded-full shadow">
              <Share2 size={18} />
            </button>
            <button className="p-2 bg-white rounded-full shadow">
              <Heart size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT – INFO */}
      <div>
        <p className="text-sm text-gray-500 mb-1">John Lewis ANYDAY</p>

        <h1 className="text-3xl font-semibold mb-4">
          Long Sleeve Overshirt, Khaki
        </h1>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 line-through">£40.00</span>
            <span className="text-2xl font-bold">£28.00</span>
          </div>

          <div className="flex items-center gap-1 text-sm">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="font-medium">4.5</span>
            <span className="text-gray-400">(1,238 sold)</span>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mb-6 text-sm text-gray-600">
          <p className={expanded ? "" : "line-clamp-3"}>
            Boba etiam ut bulla tea est potus dilectus singulari compositione
            saporum et textuum, quae in Taiwan annis 1980 orta sunt...
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="font-medium text-black mt-1"
          >
            {expanded ? "See less" : "See more"}
          </button>
        </div>

        {/* COLOR */}
        <div className="mb-6">
          <p className="text-sm mb-2">
            Color: <span className="font-medium">{selectedColor.name}</span>
          </p>
          <div className="flex gap-3">
            {colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelectedColor(c)}
                style={{ backgroundColor: c.value }}
                className={`w-9 h-9 rounded-md border ${
                  selectedColor.name === c.name
                    ? "ring-2 ring-black"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* SIZE */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm">
              Size: <span className="font-medium">{selectedSize}</span>
            </p>
            <button className="text-sm underline">View Size Chart</button>
          </div>

          <div className="flex gap-3 flex-wrap">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-md border ${
                  selectedSize === size
                    ? "border-black font-medium"
                    : "border-gray-300"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-4">
          <button className="flex-1 bg-black text-white py-4 rounded-md">
            Add To Cart
          </button>
          <button className="flex-1 border border-black py-4 rounded-md">
            Checkout Now
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-4 underline cursor-pointer">
          Delivery T&C
        </p>
      </div>
      {/* EXTRA SECTIONS */}
      <div className="lg:col-span-2 mt-16 space-y-16">
        <ProductDetailsTabs />
        <ReviewsSection />
        <RelatedProducts />
      </div>
    </div>
  );
}
