'use client';

import React from 'react';

interface ImageLightboxProps {
  selectedImage: string | null;
  onClose: () => void;
}

export default function ImageLightbox({ selectedImage, onClose }: ImageLightboxProps) {
  if (!selectedImage) return null;
  
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative max-w-3xl max-h-3xl">
        {/* Use native img for lightbox to avoid Next.js image optimization overhead */}
        <img
          src={selectedImage}
          alt="Enlarged view"
          className="max-w-full max-h-[90vh] object-contain"
          onClick={(e) => e.stopPropagation()} // Prevent click on image from closing
        />
      </div>
    </div>
  );
}