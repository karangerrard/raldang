import { useState } from "react";
import { GalleryImage } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItemProps {
  image: GalleryImage;
}

export function GalleryItem({ image }: GalleryItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const openFullscreen = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeFullscreen = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  return (
    <>
      <motion.div
        //whileHover={{ scale: 1.03 }}
        className="gallery-item rounded-lg overflow-hidden shadow-lg cursor-pointer"
        onClick={openFullscreen}
      >
        <img 
          src={image.src} 
          alt={image.alt} 
          className="w-full h-72 object-cover"
          loading="eager"
          onLoad={() => setLoaded(true)}
        />
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeFullscreen}
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
                src={image.fullSize} 
                alt={image.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <div className="absolute top-2 right-2">
                <button 
                  onClick={closeFullscreen}
                  className="w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
                  aria-label="Close fullscreen view"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                <h3 className="text-lg font-medium">{image.alt}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
