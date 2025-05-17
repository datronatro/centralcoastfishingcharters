'use client';

import React from 'react';
import Image from 'next/image';
import PageLayout from '@/app/components/PageLayout';
import dynamic from 'next/dynamic';
import ImageLightbox from '@/app/components/ImageLightbox';
import useLightbox from '@/app/hooks/useLightbox';

// Dynamically import the map component to prevent SSR issues
const LocationMap = dynamic(() => import('../components/LocationMap'), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full bg-gray-100 rounded-xl flex items-center justify-center">
      <p className="text-gray-500">Loading map...</p>
    </div>
  ),
});

export default function About() {
  // Use our custom lightbox hook
  const { selectedImage, openLightbox, closeLightbox } = useLightbox();

  return (
    <PageLayout>
      {/* Main Content with Padding to Avoid Nav Overlap */}
      <div className="flex-grow pt-8 px-4 md:px-8 pb-8 md:pb-16">
        <div className="container mx-auto max-w-4xl space-y-16">
          {/* About Us Section */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Us</h1>
            
            <div className="mb-10">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Hop aboard the FV GHOSTRIDER, a 2017 Defiance Admiral 220 fully equipped with everything you need for the best private fishing experience on the Central Coast of California. CCFC is not your standard fishing charter. To us, fishing is a passion, not a business. We not only want to help you catch fish, but share our knowledge of how to do it.
                </p>
                <p className="text-lg text-gray-700">
                  We run trips out of Morro Bay, CA, and target everything from rockfish, lingcod, and halibut, to salmon and white sea bass. Contact us for the details of any specialty trip you have in mind (whale watching, dive trips, scuba trips, sunset booze cruises, surf trips, etc).
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="pl-4 border-l-4 border-primary mb-10">
              <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
              <p className="text-lg text-gray-700">
                To share the Central California fishery with others and pass-on sustainable best practices.
              </p>
            </div>
            
            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => openLightbox("https://res.cloudinary.com/hypertheory/image/upload/v1747510583/about2_y0p68k.avif")}>
                <Image
                  src="https://res.cloudinary.com/hypertheory/image/upload/v1747510583/about2_y0p68k.avif"
                  alt="Fishing experience"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => openLightbox("https://res.cloudinary.com/hypertheory/image/upload/v1747510583/about3_l2zdj2.avif")}>
                <Image
                  src="https://res.cloudinary.com/hypertheory/image/upload/v1747510583/about3_l2zdj2.avif"
                  alt="Fishing in Morro Bay"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          {/* The Boat Section */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Our Boat</h2>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => openLightbox("https://res.cloudinary.com/hypertheory/image/upload/v1747510583/about1_r8zpby.avif")}>
                  <Image
                    src="https://res.cloudinary.com/hypertheory/image/upload/v1747510583/about1_r8zpby.avif"
                    alt="FV GHOSTRIDER"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <h3 className="text-xl font-semibold text-primary mb-3">FV GHOSTRIDER</h3>
                <p className="text-lg text-gray-700">
                  The FV GHOSTRIDER is a 2017 Defiance Admiral 220, custom-built for the Central Coast fishing experience. 
                  This vessel features top-of-the-line navigation equipment, comfortable seating, and ample deck space for fishing. 
                  With its reliable twin engines and sturdy hull design, the GHOSTRIDER ensures a safe and smooth journey even in 
                  challenging conditions, allowing you to focus on the thrill of the catch.
                </p>
              </div>
            </div>
          </div>
          
          {/* Our Captains Section */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Meet Our Captains</h2>
            
            {/* Captain Rich */}
            <div className="flex flex-col md:flex-row gap-6 items-center mb-12">
              <div className="w-full md:w-1/3 order-2 md:order-1">
                <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => openLightbox("https://res.cloudinary.com/hypertheory/image/upload/v1747510582/about4_od36co.avif")}>
                  <Image
                    src="https://res.cloudinary.com/hypertheory/image/upload/v1747510582/about4_od36co.avif"
                    alt="Captain Rich"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 order-1 md:order-2">
                <h3 className="text-xl font-semibold text-primary mb-3">Captain Rich</h3>
                <p className="text-lg text-gray-700">
                  Born in Austin, TX, Rich started fishing when he was 4 years old. When he moved to the Central Coast to attend Cal Poly in 2016, he instantly fell in love with the fishing that the Pacific Ocean has to offer. Rich owns his own boat that he has been fishing off of for the last 5 years and carries 10 years of saltwater fishing experience under his belt. Rich has a passion for the ocean that few can rival—he's an avid surfer, kayaker, boater, conservationist, and fisherman. His favorite species to target are salmon and white sea bass!
                </p>
              </div>
            </div>
            
            {/* Captain John */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3 order-2 md:order-1">
                <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => openLightbox("https://res.cloudinary.com/hypertheory/image/upload/v1747510581/about5_hvg4u6.avif")}>
                  <Image
                    src="https://res.cloudinary.com/hypertheory/image/upload/v1747510581/about5_hvg4u6.avif"
                    alt="Captain John"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 order-1 md:order-2">
                <h3 className="text-xl font-semibold text-primary mb-3">Captain John</h3>
                <p className="text-lg text-gray-700">
                  Born in the Santa Cruz mountains, John is a true Central Coast native. He moved to Cambria, CA when he was 1 and started fishing out of Leffingwell Cove with his Dad's guidance at the age of 9. By age 18, John bought this first ocean boat and has been fishing off the Central Coast for over 30 years now. He is scuba certified and has experience free diving for abalone in Northern California. Aside from being on the ocean, John shares his passion for the outdoors with others by guiding pig and deer hunts. He is married with two little girls and his favorite species to target is salmon.
                </p>
              </div>
            </div>
          </div>
          
          {/* Location Section */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Find Us</h2>
            <p className="text-lg text-gray-700 mb-6">
              We're conveniently located at <strong>1213 Embarcadero, Morro Bay, CA 93442</strong>. 
              Look for the FV GHOSTRIDER at the Embarcadero dock.
            </p>
            
            {/* Google Maps Component */}
            <LocationMap address="1213 Embarcadero, Morro Bay, CA 93442" />
          </div>
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