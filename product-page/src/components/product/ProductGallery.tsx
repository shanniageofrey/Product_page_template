"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
}

const fallback_image = "/zendaya.jpeg";

export default function ProductGallery({ images }: Props) {
  const validImages = images && images.length > 0 ? images : [fallback_image];
  const [activeImage, setActiveImage] = useState(validImages[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : validImages.length - 1;
    setCurrentIndex(newIndex);
    setActiveImage(validImages[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex < validImages.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setActiveImage(validImages[newIndex]);
  };

  return (
    <div className="space-y-4">
      {/* The main image goes here */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 rounded-lg">
        <Image
          src={activeImage}
          alt="Product image"
          fill
          className="object-cover"
          priority
        />
        
        {/* Navigation arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" />
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 text-gray-800" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {validImages.map((img, index) => (
          <button
            key={`${img}-${index}`}
            onClick={() => {
              setActiveImage(img);
              setCurrentIndex(index);
            }}
            className={`relative h-20 w-20 shrink-0 rounded-md overflow-hidden transition ${
              activeImage === img
                ? "ring-2 ring-black"
                : "ring-1 ring-gray-200 hover:ring-gray-400"
            }`}
            aria-label={`View product image ${index + 1}`}
          >
            <Image
              src={img}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}