'use client';

import React, { useEffect, useRef } from 'react';

interface LocationMapProps {
  address: string;
  className?: string;
}

// Add type declarations for HTMLDivElement with Leaflet properties
declare global {
  interface HTMLDivElement {
    _leaflet_id?: number;
    _leaflet?: any;
  }
}

const LocationMap: React.FC<LocationMapProps> = ({ address, className = '' }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mapRef.current) return;
    
    // Dynamically import Leaflet to avoid SSR issues
    const loadMap = async () => {
      try {
        // Import Leaflet dynamically
        const L = await import('leaflet');
        
        // Fix Leaflet icon issue
        if (L.Icon.Default.imagePath === '') {
          L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.7.1/dist/images/';
          L.Icon.Default.prototype.options.iconUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png';
          L.Icon.Default.prototype.options.shadowUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png';
          L.Icon.Default.prototype.options.iconRetinaUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png';
        }
        
        // Clear previous map instance if exists
        if (mapRef.current && mapRef.current._leaflet_id) {
          mapRef.current._leaflet = null;
        }

        // Initialize map
        const map = L.map(mapRef.current as HTMLElement).setView([35.3722, -120.8506], 15); // Default to Morro Bay

        // Add tile layer from OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        // Use Nominatim for geocoding (OpenStreetMap's geocoding service)
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
          .then(response => response.json())
          .then(data => {
            if (data && data.length > 0) {
              const { lat, lon } = data[0];
              map.setView([parseFloat(lat), parseFloat(lon)], 17);
              
              // Add marker at the location
              L.marker([parseFloat(lat), parseFloat(lon)])
                .addTo(map)
                .bindPopup(address)
                .openPopup();
            }
          })
          .catch(err => {
            console.error('Error geocoding address:', err);
          });
      } catch (error) {
        console.error('Error loading Leaflet:', error);
      }
    };
    
    loadMap();
    
    // Add Leaflet CSS
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
      document.head.appendChild(link);
    }
    
    return () => {
      // Clean up
      if (mapRef.current && mapRef.current._leaflet_id) {
        mapRef.current._leaflet = null;
      }
    };
  }, [address]);
  
  return (
    <div className={`relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg ${className}`}>
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default LocationMap; 