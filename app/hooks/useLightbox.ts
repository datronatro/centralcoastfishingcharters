'use client';

import { useState, useCallback } from 'react';

export default function useLightbox() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Open the lightbox with the selected image
  const openLightbox = useCallback((imageSrc: string) => {
    setSelectedImage(imageSrc);
  }, []);

  // Close the lightbox
  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return {
    selectedImage,
    openLightbox,
    closeLightbox
  };
}