"use client";

import React from 'react';
import Image from 'next/image';
import PageLayout from '@/app/components/PageLayout';
import ImageLightbox from '@/app/components/ImageLightbox';
import useLightbox from '@/app/hooks/useLightbox';

export default function Gallery() {
  // Use our custom lightbox hook
  const { selectedImage, openLightbox, closeLightbox } = useLightbox();

  // Original gallery images with priority flag for the first 6 images
  const galleryImages = [
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery1_dzf0db.jpg', alt: 'Gallery image 1', priority: true },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery2_bd9hly.jpg', alt: 'Gallery image 2', priority: true },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery3_bzflta.jpg', alt: 'Gallery image 3', priority: true },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery4_goqgqm.jpg', alt: 'Gallery image 4', priority: true },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery5_xxtnl4.jpg', alt: 'Gallery image 5', priority: true },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery6_jfn658.jpg', alt: 'Gallery image 6', priority: true },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery7_zg0w9d.jpg', alt: 'Gallery image 7' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery8_qbvm3e.jpg', alt: 'Gallery image 8' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery9_bso9nr.jpg', alt: 'Gallery image 9' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery10_rkambj.jpg', alt: 'Gallery image 10' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery11_p5v7iw.jpg', alt: 'Gallery image 11' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery12_snusgm.jpg', alt: 'Gallery image 12' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery13_mg1pt3.jpg', alt: 'Gallery image 13' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery14_qhhnm4.jpg', alt: 'Gallery image 14' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery15_azwlty.jpg', alt: 'Gallery image 15' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery16_lfp7xf.jpg', alt: 'Gallery image 16' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery17_g2fxlm.jpg', alt: 'Gallery image 17' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery18_tndcjk.jpg', alt: 'Gallery image 18' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery19_izdxoi.jpg', alt: 'Gallery image 19' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery20_gvxpvm.jpg', alt: 'Gallery image 20' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery21_axj1qo.jpg', alt: 'Gallery image 21' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery22_smht2c.jpg', alt: 'Gallery image 22' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery23_p7cbmr.jpg', alt: 'Gallery image 23' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery24_yz4hxo.jpg', alt: 'Gallery image 24' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery25_upubja.jpg', alt: 'Gallery image 25' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery26_auzeyk.jpg', alt: 'Gallery image 26' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery27_rsxjlq.jpg', alt: 'Gallery image 27' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery28_lukror.jpg', alt: 'Gallery image 28' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery29_ckclwz.jpg', alt: 'Gallery image 29' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery30_eg376n.jpg', alt: 'Gallery image 30' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery31_xolzck.jpg', alt: 'Gallery image 31' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery32_octv3b.jpg', alt: 'Gallery image 32' },
    { src: 'https://res.cloudinary.com/hypertheory/image/upload/v1747512735/gallery33_fj7gef.jpg', alt: 'Gallery image 33' },
  ];
  
  return (
    <PageLayout bgWhite={false}>
      {/* Full-screen Gallery */}
      <div className="flex-grow w-full overflow-y-auto p-0">
        {/* Gallery Container with flex layout - using 3 columns which divides evenly into 33 */}
        <div className="flex flex-wrap">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 relative aspect-square overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(image.src)}
            >
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                priority={image.priority}
                loading={image.priority ? "eager" : "lazy"}
                sizes="33.333vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                quality={70} // Lower quality for thumbnails
              />
            </div>
          ))}
        </div>
      </div>

      {/* Use our reusable ImageLightbox component */}
      <ImageLightbox 
        selectedImage={selectedImage} 
        onClose={closeLightbox} 
      />
    </PageLayout>
  );
} 