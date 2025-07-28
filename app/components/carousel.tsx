"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full max-w-2xl mx-auto bg-black rounded-lg p-4">
      {/* Main Image Container */}
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-auto object-contain max-h-96 transition-opacity duration-300"
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-1.5 rounded-full transition-all duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-1.5 rounded-full transition-all duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-6 right-6 bg-white/20 text-white px-2 py-1 rounded-full text-xs">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="flex justify-center mt-3 space-x-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-white"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Caption */}
      <p className="mt-2 text-center text-sm text-white/80">
        {images[currentIndex].alt}
      </p>
    </div>
  );
} 