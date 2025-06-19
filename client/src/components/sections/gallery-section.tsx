import { motion } from "framer-motion";
import { GalleryItem } from "@/components/ui/gallery-item";
import { galleryImages } from "@/lib/data";

export default function GallerySection() {
  return (
    <section id={"gallery"} className="py-20 bg-[hsl(var(--mountain-gray))]/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[hsl(var(--mountain-pine))] mb-4">Photo Gallery</h2>
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
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 % 0.4 }} // stagger but reset after 4
            >
              <GalleryItem image={image} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
