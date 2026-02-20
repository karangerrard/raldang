import { useState, useEffect, useCallback, useRef } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "@/lib/data";

export default function GallerySection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(-1);
  const scrollRef = useRef(0);

  const openModal = useCallback((index: number) => {
    scrollRef.current = window.pageYOffset || document.documentElement.scrollTop;
    document.body.style.cssText = `overflow:hidden;position:fixed;top:-${scrollRef.current}px;width:100%`;
    setCurrentImageIndex(index);
  }, []);

  const closeModal = useCallback(() => {
    document.body.style.cssText = "";
    window.scrollTo(0, scrollRef.current);
    setCurrentImageIndex(-1);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  }, []);

  useEffect(() => {
    if (currentImageIndex < 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      else if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentImageIndex, handleNext, handlePrev, closeModal]);

  useEffect(() => {
    return () => { document.body.style.cssText = ""; };
  }, []);

  return (
    <>
      <Helmet>
        <title>Homestay in Kalpa Photos | Raldang View Homestay Gallery</title>
        <meta name="description" content="Explore real photos of Raldang View Homestay in Kalpa. See Himalayan views, cozy rooms, apple orchards and life in the Kinnaur Valley." />
        <meta name="keywords" content="homestay in Kalpa photos, Kalpa homestay images, Kinnaur homestay views, Raldang View Homestay gallery, Raldang photos, homestay near Kalpa, Kalpa hotel gallery" />
        <meta property="og:title" content="Kalpa Homestay Photo Gallery" />
        <meta property="og:description" content="A visual tour of one of the most scenic homestays in Kalpa, Himachal Pradesh." />
        <meta property="og:image" content="/images/cover-gallery.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://raldangviewhomestay.in/gallery" />
        <link rel="canonical" href="https://raldangviewhomestay.in/gallery" />
      </Helmet>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Raldang View Homestay Photo Gallery",
            description: "A curated collection of images showcasing Raldang View Homestay in Kalpa, Kinnaur Valley.",
            image: galleryImages.map((img) => `https://raldangviewhomestay.in/${img.src}`),
          }),
        }}
      />

      <section id="gallery" className="py-20 bg-[hsl(var(--mountain-white))]/30">
        <div className="container mx-auto px-4 md:px-8 min-h-screen">

          {/* Header — fires once only, never re-animates on scroll */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[hsl(var(--mountain-pine))] mb-4 mt-10">
              Photo Gallery
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Take a visual journey through our homestay and the stunning landscapes of Kinnaur Valley.
              <span className="block text-sm mt-2 text-[hsl(var(--mountain-gold))] font-medium">
                <i className="fas fa-search-plus mr-1" />
                Click any image to view in full size
              </span>
            </p>
            <div className="w-24 h-1 bg-[hsl(var(--mountain-gold))] mx-auto mt-4" />
          </motion.div>

          {/*
           * FIX 1 — No motion/framer on any card or image.
           *          Every animation listener removed from the scroll path.
           *
           * FIX 2 — Images never disappear:
           *          • loading="eager"  → browser loads all immediately
           *          • decoding="async" → decode off main thread
           *          • NO whileInView / viewport intersection on images
           *            (IntersectionObserver was unmounting images on scroll)
           *          • contain: "layout paint" on grid container stops
           *            the browser from recycling image layers
           *
           * FIX 3 — 16 images on desktop with 4:3 ratio:
           *          Available height after header ≈ 680px
           *          4:3 image in a 4-col grid on 1280px screen:
           *            col width = (1280 - 32px padding - 3×8px gap) / 4 ≈ 314px
           *            image height = 314 × (3/4) ≈ 235px  → only 2.8 rows visible
           *          We need max-h on each image to shrink it:
           *            max-h-[13vh] → on 900px screen = 117px per image
           *            rows visible = 680 / (117 + 8) ≈ 5.4 → 4 full rows = 16 ✅
           *
           * FIX 4 — Mobile 6 images with 2 cols:
           *          h-[28vw] on 390px screen = 109px
           *          3 rows × 2 cols = 6 visible ✅
           */}
          {/* ONLY THIS BLOCK CHANGES — grid div and img classes */}

{/* OUTER container — fixed left/right margins matching screenshot */}
<div className="px-[8px] md:px-[250px]">
  <div
    className="flex flex-wrap justify-center gap-[6px]"
    style={{ contain: "layout paint" }}
  >
    {galleryImages.map((image, index) => (
      <div
        key={image.id}
        className="
          cursor-pointer rounded-lg overflow-hidden shadow-sm
          w-[calc(50%-3px)]
          md:w-[calc(25%-5px)]
        "
        onClick={() => openModal(index)}
      >
        <img
          src={image.src}
          alt={image.alt}
          width={400}
          height={300}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="
            block
            w-full
            h-[24vh]
            md:h-[30vh]
            object-cover
            [transform:translateZ(0)]
          "
        />
      </div>
    ))}
  </div>
</div>




          {/* Modal — identical to original */}
          <AnimatePresence>
            {currentImageIndex >= 0 && (
              <motion.div
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                onClick={closeModal}
              >
                <motion.div
                  className="relative max-w-7xl max-h-[90vh] overflow-hidden"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={galleryImages[currentImageIndex]?.fullSize}
                    alt={galleryImages[currentImageIndex]?.alt}
                    className="max-w-full max-h-[85vh] object-contain rounded-lg"
                  />

                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
                    aria-label="Previous image"
                  >
                    <i className="fas fa-chevron-left text-2xl" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
                    aria-label="Next image"
                  >
                    <i className="fas fa-chevron-right text-2xl" />
                  </button>

                  <div className="absolute top-2 right-2">
                    <button
                      onClick={closeModal}
                      className="w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
                      aria-label="Close fullscreen view"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                    <h3 className="text-lg font-medium">
                      {galleryImages[currentImageIndex]?.alt}
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Image {currentImageIndex + 1} of {galleryImages.length}
                    </p>
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
