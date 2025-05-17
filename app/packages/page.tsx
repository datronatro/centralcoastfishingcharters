'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/app/components/PageLayout';
import ImageLightbox from '@/app/components/ImageLightbox';
import useLightbox from '@/app/hooks/useLightbox';

interface PackageImage {
  src: string;
  alt: string;
}

interface PackageSectionProps {
  title: string;
  images: PackageImage[];
  description: string;
  price: string;
  privatePrice: string;
  onImageClick: (src: string) => void;
}

interface PackageData extends Omit<PackageSectionProps, 'onImageClick'> {}

const PackageSection = ({ title, images, description, price, privatePrice, onImageClick }: PackageSectionProps) => (
  <div>
    <h2 className="text-2xl font-bold text-primary mb-6">{title}</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {images.map((img: PackageImage, i: number) => (
        <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => onImageClick(img.src)}>
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
    
    <div className="bg-primary/10 rounded-xl p-6">
      <p className="text-lg text-primary mb-6">{description}</p>
      <div className="flex flex-wrap items-center justify-between gap-3 md:gap-0">
        <div className="bg-white rounded-lg shadow-sm p-3">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <div className="flex items-center">
              <span className="text-primary font-bold">${price}</span>
              <span className="text-primary ml-1">/ person</span>
            </div>
            {privatePrice && (
              <>
                <div className="hidden md:block text-primary">|</div>
                <div className="flex items-center">
                  <span className="text-primary font-bold">${privatePrice}</span>
                  <span className="text-primary ml-1">/ private charter</span>
                </div>
              </>
            )}
          </div>
        </div>
        <Link 
          href="https://centralcoastfishingchartersinc.schedulista.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-primary text-white font-medium py-2 px-6 rounded-lg hover:bg-primary/90 transition"
        >
          Book Now
        </Link>
      </div>
    </div>
  </div>
);

const SpecialtySection = ({ onImageClick }: { onImageClick: (src: string) => void }) => (
  <div>
    <h2 className="text-2xl font-bold text-primary mb-6">Specialty Trips</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => onImageClick("https://res.cloudinary.com/hypertheory/image/upload/v1747512122/special1_z6k8dl.avif")}>
        <Image
          src="https://res.cloudinary.com/hypertheory/image/upload/v1747512122/special1_z6k8dl.avif"
          alt="Jurassic Park Package"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => onImageClick("https://res.cloudinary.com/hypertheory/image/upload/v1747512121/special2_qrix9l.avif")}>
        <Image
          src="https://res.cloudinary.com/hypertheory/image/upload/v1747512121/special2_qrix9l.avif"
          alt="White Sea Bass Package"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
    
    <div className="bg-primary/10 rounded-xl p-6">
      <p className="text-lg text-primary mb-4">
        The following are our 3 specialty packages. These trips tend to be long-range or extended duration, so come prepared!
      </p>
      <p className="text-lg text-primary mb-2">
        <strong>1. Jurassic Park Package:</strong> $400/person - Run 60 miles up the coast to the untouched waters of Big Sur and Cape San Martin to catch massive lingcod, rockfish, and halibut.
      </p>
      <p className="text-lg text-primary mb-2">
        <strong>2. White Sea Bass:</strong> $400/person, 3 people max - Only offered July - mid-October if squid are spawning, squid lights and sleeping areas provided.
      </p>
      <p className="text-lg text-primary mb-6">
        <strong>3. Bluewater Package:</strong> $600/person - Run offshore to chase some of the tuna species that frequent our coasts such as bluefin, albacore, and bonita. If the conditions don't permit we will fish inshore as a fallback.
      </p>
      <div className="flex flex-wrap items-center justify-between gap-3 md:gap-0">
        <div className="bg-white rounded-lg shadow-sm p-3">
          <div className="flex items-center">
            <span className="text-primary font-bold">$400-600</span>
            <span className="text-primary ml-1">/ person (see above)</span>
          </div>
        </div>
        <Link 
          href="https://centralcoastfishingchartersinc.schedulista.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-primary text-white font-medium py-2 px-6 rounded-lg hover:bg-primary/90 transition"
        >
          Book Now
        </Link>
      </div>
    </div>
  </div>
);

export default function Packages() {
  // Use our custom lightbox hook
  const { selectedImage, openLightbox, closeLightbox } = useLightbox();

  const packageData: PackageData[] = [
    {
      title: "Rockfish Lingcod",
      images: [
        { src: "https://res.cloudinary.com/hypertheory/image/upload/v1747512125/rockfishlingcod1_zz597e.avif", alt: "Rockfish fishing" },
        { src: "https://res.cloudinary.com/hypertheory/image/upload/v1747512123/rockfishlingcod3_k7kiwu.avif", alt: "Lingcod fishing" }
      ],
      description: "Target a variety of rockfish species, ranging from Reds and Coppers, to Gophers and Treefish. Have a shot at hooking into the notorious reef-bully, the Lingcod as well. Guaranteed catch, even on slow days, and come home with all the necessities for a fish fry! We'll even provide some of our favorite recipes for you to try.",
      price: "250",
      privatePrice: "1000"
    },
    {
      title: "Rockfish Halibut",
      images: [
        { src: "https://res.cloudinary.com/hypertheory/image/upload/v1747512132/halibut1_dmzyry.avif", alt: "California Halibut" },
        { src: "https://res.cloudinary.com/hypertheory/image/upload/v1747512132/halibut2_n9jbov.avif", alt: "Halibut fishing" }
      ],
      description: "Rockfish and lingcod are cool but are nothing compared to the elusive California Halibut. These flatfish yield some of the best white meat that swims in the ocean and are fair game to target year-round. Not to mention, they tend to get quite large (some over 30 pounds)! Exclusively target halibut—or target rockfish and lings for half the day, then try for a chance of a halibut depending on their peak feeding times.",
      price: "300",
      privatePrice: "1200"
    },
    {
      title: "Halibut Seabass",
      images: [
        { src: "https://res.cloudinary.com/hypertheory/image/upload/v1747512131/halibutseabass1_qzaeyq.avif", alt: "Halibut and Seabass" },
        { src: "https://res.cloudinary.com/hypertheory/image/upload/v1747512130/halibutseabass2_j7xt1z.avif", alt: "Seabass fishing" }
      ],
      description: "June - September is when we start seeing some larger halibut and white sea bass come through. This package is intended for anglers who have caught their fair share of rockfish and want a shot at a trophy halibut or white sea bass. Come out to try and put one of these monsters on the deck.",
      price: "300", 
      privatePrice: "1200"
    },
    {
      title: "Salmon",
      images: [
        { src: "https://res.cloudinary.com/hypertheory/image/upload/v1747512127/kingsalmon1_evp9t5.avif", alt: "King Salmon" },
        { src: "https://res.cloudinary.com/hypertheory/image/upload/v1747512126/kingsalmon3_dqfv75.avif", alt: "Salmon fishing" }
      ],
      description: "We have seen some nice king salmon runs from May - July in the recent years. Because these fish are so sought-after and require special gear to target, it's one of our more expensive packages. However, pound-for-pound, there's nothing that swims near-shore on the Central Coast that comes close to the fight a large salmon puts up (or tastes as delicious).",
      price: "300",
      privatePrice: "1200"
    }
  ];

  return (
    <PageLayout>
      {/* Main Content with Padding to Avoid Nav Overlap */}
      <div className="flex-grow pt-8 px-4 md:px-8 pb-8 md:pb-16">
        <div className="container mx-auto max-w-4xl space-y-16">
          {/* Introduction Section */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Trip Packages</h1>
            
            <div className="mb-10">
              <div className="prose max-w-none">
                <p className="text-lg text-primary mb-6">
                  Target the Prized Fish of The Central Coast. Choose from one of our packages below to determine what fish you want to target during your trip. We'll provide seasonal recommendations and do our best to put you on your trophy. You can either book a single spot on a trip or the entire boat for a private charter. Open party trips must have at least 3 seats booked to run. Fuel surcharges for San Simeon and Big Sur are $50 and $75 per person, respectively.
                </p>
              </div>
            </div>
          </div>
          
          {packageData.map((pkg, index) => (
            <PackageSection key={index} {...pkg} onImageClick={openLightbox} />
          ))}
          
          <SpecialtySection onImageClick={openLightbox} />
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