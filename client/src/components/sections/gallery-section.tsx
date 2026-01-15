import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "@/lib/data";

export default function GallerySection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(-1);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleImageClick = (index: number) => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    setScrollPosition(currentScroll);
    
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${currentScroll}px`;
    document.body.style.width = "100%";
    
    setCurrentImageIndex(index);
  };

  const handleNext = () => {
    const nextIndex = currentImageIndex + 1;
    if (nextIndex < galleryImages.length) {
      setCurrentImageIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = currentImageIndex - 1;
    if (prevIndex >= 0) {
      setCurrentImageIndex(prevIndex);
    }
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, scrollPosition);
    setCurrentImageIndex(-1);
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, []);

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Homestay in Kalpa Photos | Raldang View Homestay Gallery</title>
        <meta
          name="description"
          content="Explore real photos of Raldang View Homestay in Kalpa. See Himalayan views, cozy rooms, apple orchards and life in the Kinnaur Valley."
        />
        <meta
          name="keywords"
          content="homestay in Kalpa photos, Kalpa homestay images, Kinnaur homestay views, Raldang View Homestay gallery, Raldang photos, homestay near Kalpa, Kalpa hotel gallery"
        />
        <meta property="og:title" content="Kalpa Homestay Photo Gallery" />
        <meta
          property="og:description"
          content="A visual tour of one of the most scenic homestays in Kalpa, Himachal Pradesh."
        />
        <meta property="og:image" content="/images/cover-gallery.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://raldangviewhomestay.in/gallery" />
        <link rel="canonical" href="https://raldangviewhomestay.in/gallery" />
      </Helmet>

      {/* JSON-LD Schema for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Raldang View Homestay Photo Gallery",
            "description":
              "A curated collection of images showcasing Raldang View Homestay, its rooms, and the stunning views of Kalpa, Kinnaur Valley.",
            "image": galleryImages.map(
              (img) => `https://raldangviewhomestay.in/${img.src}`
            ),
          }),
        }}
      />
    <section id={"gallery"} className="py-20 bg-[hsl(var(--mountain-white))]/30">
      <div className="container mx-auto px-4 md:px-8 min-h-screen">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[hsl(var(--mountain-pine))] mb-4 mt-10">Photo Gallery</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Take a visual journey through our homestay and the stunning landscapes of Kinnaur Valley.
            <span className="block text-sm mt-2 text-[hsl(var(--mountain-gold))] font-medium">
              <i className="fas fa-search-plus mr-1"></i> Click any image to view in full size
            </span>
          </p>
          <div className="w-24 h-1 bg-[hsl(var(--mountain-gold))] mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <motion.div
                className="rounded-lg overflow-hidden shadow-lg h-72"
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="eager"
                />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        <AnimatePresence>
          {currentImageIndex >= 0 && (
            <motion.div 
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="relative max-w-7xl max-h-[90vh] overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={galleryImages[currentImageIndex]?.fullSize} 
                  alt={galleryImages[currentImageIndex]?.alt}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
                />
                
                {/* Navigation Arrows */}
                {currentImageIndex > 0 && (
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
                    aria-label="Previous image"
                  >
                    <i className="fas fa-chevron-left text-2xl"></i>
                  </button>
                )}
                {currentImageIndex < galleryImages.length - 1 && (
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
                    aria-label="Next image"
                  >
                    <i className="fas fa-chevron-right text-2xl"></i>
                  </button>
                )}
                
                {/* Close Button */}
                <div className="absolute top-2 right-2">
                  <button 
                    onClick={closeModal}
                    className="w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
                    aria-label="Close fullscreen view"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                
                {/* Image Counter and Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                  <h3 className="text-lg font-medium">{galleryImages[currentImageIndex]?.alt}</h3>
                  <p className="text-sm text-gray-300 mt-1">Image {currentImageIndex + 1} of {galleryImages.length}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
    </>
  );
}
