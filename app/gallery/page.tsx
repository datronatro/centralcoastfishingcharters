"use client";

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import PageLayout from '@/app/components/PageLayout';

export default function Gallery() {
  // State for the lightbox
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Original gallery images with priority flag for the first 6 images
  const galleryImages = [
    { src: '/gallery/gallery1.JPG', alt: 'Gallery image 1', priority: true },
    { src: '/gallery/gallery2.JPG', alt: 'Gallery image 2', priority: true },
    { src: '/gallery/gallery3.JPG', alt: 'Gallery image 3', priority: true },
    { src: '/gallery/gallery4.JPG', alt: 'Gallery image 4', priority: true },
    { src: '/gallery/gallery5.png', alt: 'Gallery image 5', priority: true },
    { src: '/gallery/gallery6.JPG', alt: 'Gallery image 6', priority: true },
    { src: '/gallery/gallery7.jpg', alt: 'Gallery image 7' },
    { src: '/gallery/gallery8.JPG', alt: 'Gallery image 8' },
    { src: '/gallery/gallery9.png', alt: 'Gallery image 9' },
    { src: '/gallery/gallery10.png', alt: 'Gallery image 10' },
    { src: '/gallery/gallery11.JPG', alt: 'Gallery image 11' },
    { src: '/gallery/gallery12.jpg', alt: 'Gallery image 12' },
    { src: '/gallery/gallery13.jpg', alt: 'Gallery image 13' },
    { src: '/gallery/gallery14.jpg', alt: 'Gallery image 14' },
    { src: '/gallery/gallery15.jpg', alt: 'Gallery image 15' },
    { src: '/gallery/gallery16.jpg', alt: 'Gallery image 16' },
    { src: '/gallery/gallery17.jpg', alt: 'Gallery image 17' },
    { src: '/gallery/gallery18.jpg', alt: 'Gallery image 18' },
    { src: '/gallery/gallery19.jpg', alt: 'Gallery image 19' },
    { src: '/gallery/gallery20.jpg', alt: 'Gallery image 20' },
    { src: '/gallery/gallery21.jpg', alt: 'Gallery image 21' },
    { src: '/gallery/gallery22.jpg', alt: 'Gallery image 22' },
    { src: '/gallery/gallery23.jpg', alt: 'Gallery image 23' },
    { src: '/gallery/gallery24.jpg', alt: 'Gallery image 24' },
    { src: '/gallery/gallery25.jpg', alt: 'Gallery image 25' },
    { src: '/gallery/gallery26.jpg', alt: 'Gallery image 26' },
    { src: '/gallery/gallery27.jpg', alt: 'Gallery image 27' },
    { src: '/gallery/gallery28.jpg', alt: 'Gallery image 28' },
    { src: '/gallery/gallery29.jpg', alt: 'Gallery image 29' },
    { src: '/gallery/gallery30.png', alt: 'Gallery image 30' },
    { src: '/gallery/gallery31.JPG', alt: 'Gallery image 31' },
    { src: '/gallery/gallery32.jpeg', alt: 'Gallery image 32' },
    { src: '/gallery/gallery33.JPG', alt: 'Gallery image 33' },
  ];
  
  // Memoized function to handle image click
  const openLightbox = useCallback((imageSrc: string) => {
    setSelectedImage(imageSrc);
  }, []);

  // Memoized function to close the lightbox
  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);
  
  return (
    <PageLayout bgWhite={false}>
      {/* Full-screen Gallery */}
      <div className="flex-grow w-full overflow-y-auto p-0">
        {/* Gallery Container with flex layout - using 3 columns which divides evenly into 33 */}
        <div className="flex flex-wrap">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 relative aspect-square overflow-hidden cursor-pointer"
              onClick={() => openLightbox(image.src)}
            >
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                priority={image.priority}
                loading={image.priority ? "eager" : "lazy"}
                sizes="33.333vw"
                className="object-cover hover:scale-110 transition-transform duration-300"
                quality={70} // Lower quality for thumbnails
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox overlay - dynamically loaded only when needed */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={closeLightbox}
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
      )}
    </PageLayout>
  );
} 