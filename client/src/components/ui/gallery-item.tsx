import { GalleryImage } from "@/lib/data";
import { motion } from "framer-motion";

interface GalleryItemProps {
  image: GalleryImage;
}

export function GalleryItem({ image }: GalleryItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="gallery-item rounded-lg overflow-hidden shadow-lg"
    >
      <img 
        src={image.src} 
        alt={image.alt} 
        className="w-full h-72 object-cover"
        loading="lazy"
      />
    </motion.div>
  );
}
