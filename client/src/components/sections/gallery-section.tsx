import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { GalleryItem } from "@/components/ui/gallery-item";
import { galleryImages } from "@/lib/data";

export default function GallerySection() {
  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Photo Gallery | Raldang View Homestay in Kalpa, Kinnaur Valley</title>
        <meta
          name="description"
          content="Explore the photo gallery of Raldang View Homestay and witness the cozy rooms, local Himachali charm, and breathtaking views of Kalpa, Kinnaur Valley."
        />
        <meta
          name="keywords"
          content="Raldang View Homestay, Kinnaur homestay gallery, Himachal stay photos, Kinnaur Valley images, Raldang photos, homestay near Kalpa, Kalpa hotel gallery"
        />
        <meta property="og:title" content="Photo Gallery | Raldang View Homestay" />
        <meta
          property="og:description"
          content="Take a visual journey through Raldang View Homestay — the cozy mountain retreat in Kalpa, Kinnaur Valley."
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
              //initial={{ opacity: 0 }}
              //whileInView={{ opacity: 1, scale: 1 }}
             // viewport={{ once: true, margin: "-100px" }}
              //animate={{ opacity: 1, scale: 1 }}
              //transition={{ duration: 0.4, delay: index * 0.1 }} // stagger but reset after 4
            >
              <GalleryItem image={image} />
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
