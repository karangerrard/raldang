import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

type AboutSectionProps = {
  id: string;
}

export default function AboutSection({ id }: AboutSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const images = [
    {
      alt: "Cherry Blossoms",
      mobile: `${import.meta.env.BASE_URL}images/cherry_blossoms_mobile.avif`,
      desktop: `${import.meta.env.BASE_URL}images/cherry_blossoms.avif`
    },
    {
      alt: "Raldang Peak",
      mobile: `${import.meta.env.BASE_URL}images/raldang_peak_mobile.avif`,
      desktop: `${import.meta.env.BASE_URL}images/raldang_peak.avif`
    },
    {
      alt: "Kalpa Town",
      mobile: `${import.meta.env.BASE_URL}images/kalpa_town_mobile.avif`,
      desktop: `${import.meta.env.BASE_URL}images/kalpa_town.avif`
    },
    {
      alt: "Homestay food",
      mobile: `${import.meta.env.BASE_URL}images/home_food_mobile.avif`,
      desktop: `${import.meta.env.BASE_URL}images/home_food.avif`
    }
  ];

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd({
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    });
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStart.x || !touchEnd.x) return;
    
    const horizontalDistance = touchStart.x - touchEnd.x;
    const verticalDistance = Math.abs(touchStart.y - touchEnd.y);
    const horizontalAbs = Math.abs(horizontalDistance);
    
    // Allow diagonal swipes with more margin of error
    // 1. Horizontal distance must be greater than 10px
    // 2. Horizontal movement must be dominant (more than vertical movement)
    if (horizontalAbs > 10 && horizontalAbs > verticalDistance) {
      const isLeftSwipe = horizontalDistance > 0;
      const isRightSwipe = horizontalDistance < 0;

      if (isLeftSwipe) {
        handleNext();
      }
      if (isRightSwipe) {
        handlePrevious();
      }
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id={id} className="py-16 bg-[hsl(var(--mountain-white))]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[hsl(var(--mountain-pine))] mb-4">Our Homestay in Kinnaur</h2>
          <div className="w-24 h-1 bg-[hsl(var(--mountain-red))] mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair text-3xl font-semibold mb-4 text-[hsl(var(--mountain-blue))]">A Home In The Mountains</h3>
            <p className="mb-6 text-lg">
              Nestled in the heart of the majestic Kinnaur Valley, our Himachali homestay offers you an authentic experience
              of mountain living with modern comforts. Wake up to breathtaking views of Raldang Peak and the surrounding Himalayan landscapes.
            </p>
            <p className="mb-6 text-lg">
              As your hosts at Raldang View Homestay, we take pride in sharing Himachal’s rich culture, traditional cuisine, and the natural beauty of Kinnaur Valley with guests from around the world.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mt-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <i className="fas fa-mountain text-[hsl(var(--mountain-blue))] text-2xl"></i>
                <span className="font-medium">Mountain Views</span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <i className="fas fa-apple-alt text-[hsl(var(--mountain-red))] text-2xl"></i>
                <span className="font-medium">Apple Orchard</span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <i className="fas fa-utensils text-[hsl(var(--mountain-earth))] text-2xl"></i>
                <span className="font-medium">Traditional Cuisine</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative max-w-[550px] mx-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Swipe Text - Mobile Only */}
            <div className="md:hidden text-center mb-3 text-sm text-gray-600 font-medium">
              Swipe to see more
            </div>

            <div 
              ref={imageContainerRef}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="rounded-2xl overflow-hidden shadow-lg aspect-square gallery-item hover:shadow-2xl transition-shadow duration-300 relative cursor-grab active:cursor-grabbing"
            >
              <picture>
                <source srcSet={images[currentImageIndex].mobile} media="(max-width: 640px)" />
                <img 
                  src={images[currentImageIndex].desktop}
                  alt={images[currentImageIndex].alt}
                  className="w-full h-full object-cover" 
                />
              </picture>
            </div>
            
            {/* Navigation Buttons - Desktop Only */}
            <button
              onClick={handlePrevious}
              className="hidden md:flex absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/80 text-[hsl(var(--mountain-blue))] rounded-full w-10 h-10 md:w-14 md:h-14 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-10 items-center justify-center"
              aria-label="Previous image"
            >
              <i className="fas fa-chevron-left text-lg md:text-2xl"></i>
            </button>
            
            <button
              onClick={handleNext}
              className="hidden md:flex absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/80 text-[hsl(var(--mountain-blue))] rounded-full w-10 h-10 md:w-14 md:h-14 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-10 items-center justify-center"
              aria-label="Next image"
            >
              <i className="fas fa-chevron-right text-lg md:text-2xl"></i>
            </button>

            {/* Image Counter/Indicator */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'w-6 bg-[hsl(var(--mountain-blue))]' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Gallery Link */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[hsl(var(--mountain-gold))] text-white font-semibold rounded-lg hover:bg-[hsl(var(--mountain-gold))] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <i className="fas fa-images"></i>
            Explore Our Photo Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
