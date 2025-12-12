import { useState } from 'react';

export default function MapSection() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMapClick = () => {
    // Coordinates for Kalpa, Himachal Pradesh
    const latitude = 31.52693415767176;
    const longitude = 78.252538884111;
    
    // Check if user is on mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Open Google Maps app on mobile, fallback to web version
      //window.open(`https://maps.app.goo.gl/raldangviewhomestay`, '_blank');
      // Alternative: Use geo: protocol for native maps
      window.location.href = `geo:${latitude},${longitude}?q=Raldang+View+Homestay`;
    } else {
      // Open Google Maps in browser on desktop
      window.open(
        `https://www.google.com/maps/search/Raldang+View+Homestay/@${latitude},${longitude},15z`,
        '_blank'
      );
    }
  };

  return (
    <section 
      className="h-96 relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleMapClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleMapClick();
        }
      }}
      aria-label="Click to open location in Google Map"
    >
      <div className="absolute inset-0 bg-[hsl(var(--mountain-gray))] flex items-center justify-center">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108710.95574311807!2d78.1992884875!3d31.53551605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390650de27e9a015%3A0xf0cfd1d7a2c32ce0!2sKalpa%2C%20Himachal%20Pradesh%20172107!5e0!3m2!1sen!2sin!4v1623234567890!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, pointerEvents: 'none' }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Raldang View Homestay Location"
          aria-label="Interactive map showing the location of Raldang View Homestay, Kalpa, Himachal Pradesh"
        ></iframe>
      </div>

      {/* Hover overlay with click instruction */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'bg-black/40' : 'bg-black/0'
        }`}
      >
        <div 
          className={`text-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-white text-lg font-semibold">Click to Open in Google Maps</p>
          <p className="text-white text-sm mt-2">Get directions to Raldang View Homestay</p>
        </div>
      </div>
    </section>
  );
}