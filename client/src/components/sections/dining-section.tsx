import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type AboutSectionProps = {
  id?: string;
};
export default function DiningSection({ id }: AboutSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 400);
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  const images = [
    {
      alt: "Himachali Home food",
      mobile: `${import.meta.env.BASE_URL}images/food_1_mobile.avif`,
      desktop: `${import.meta.env.BASE_URL}images/food_1.avif`
    },
    {
      alt: "Momo plate",
      mobile: `${import.meta.env.BASE_URL}images/food_2_mobile.avif`,
      desktop: `${import.meta.env.BASE_URL}images/food_2.avif`
    },
    {
      alt: "Butter tea",
      mobile: `${import.meta.env.BASE_URL}images/food_3_mobile.avif`,
      desktop: `${import.meta.env.BASE_URL}images/food_3.avif`
    },
    {
      alt: "Momo plate red",
      mobile: `${import.meta.env.BASE_URL}images/food_4_mobile.avif`,
      desktop: `${import.meta.env.BASE_URL}images/food_4.avif`
    }
  ];

  const handlePrevious = () => {
    carouselApi?.scrollPrev();
  };

  const handleNext = () => {
    carouselApi?.scrollNext();
  };

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
    carouselApi?.scrollTo(index);
  };
  return (
    <section id={id} className="py-20 bg-[hsl(var(--mountain-white))]/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[hsl(var(--mountain-pine))] mb-4">Home-Cooked Meals</h2>
          <p className="text-lg max-w-2xl mx-auto">Indulge in mountain cuisine that celebrates simplicity, freshness, and the soul of Himachal’s rich culinary heritage.</p>
          <div className="w-24 h-1 bg-[hsl(var(--mountain-red))] mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair text-2xl font-semibold mb-6 text-[hsl(var(--mountain-blue))]">Taste The Mountains</h3>
            <p className="mb-6 text-lg">
              Our family has preserved traditional Himachali recipes for generations. Each home-cooked meal is prepared with love using organic, locally sourced ingredients that highlight the authentic flavors of Kinnaur.
            </p>
            
            <div className="space-y-6 mt-8">
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="mt-1">
                  <i className="fas fa-utensils text-[hsl(var(--mountain-red))] text-xl"></i>
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-semibold mb-1">Traditional Himachali Food</h4>
                  <p>A celebratory feast served at our homestay featuring multiple courses of local delicacies such as siddu, local saag and fresh farm vegetables.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="mt-1">
                  <i className="fas fa-apple-alt text-[hsl(var(--mountain-red))] text-xl"></i>
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-semibold mb-1">Orchard-to-Table Experience</h4>
                  <p>Seasonal dishes made with Kinnaur apples from our orchard, including fresh juices, desserts, and savory specialties.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="mt-1">
                  <i className="fas fa-mug-hot text-[hsl(var(--mountain-red))] text-xl"></i>
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-semibold mb-1">Mountain Herb Tea</h4>
                  <p>Special blends made with locally foraged herbs and spices, perfect for the cool mountain evenings.</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-8 bg-white p-5 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="font-playfair text-lg font-semibold mb-3">Dietary Preferences</h4>
              <p>We happily accommodate vegetarian, vegan, and other dietary requirements with advance notice.</p>
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

            {/* Carousel Container */}
            <motion.div 
              ref={imageContainerRef}
              animate={isTransitioning ? { scale: 1.02 } : { scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden shadow-lg aspect-square gallery-item hover:shadow-2xl transition-shadow duration-300"
            >
              <style>{`
                .dining-carousel [data-embla-viewport] {
                  overflow: hidden;
                }
                .dining-carousel [data-embla-container] {
                  transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                  will-change: transform;
                  backface-visibility: hidden;
                }
                .dining-carousel img {
                  will-change: opacity;
                  display: block;
                }
              `}</style>
              <Carousel
                opts={{
                  startIndex: currentImageIndex,
                  loop: true,
                  align: "center",
                  dragFree: false,
                  containScroll: "keepSnaps",
                  skipSnaps: false,
                }}
                setApi={(api) => {
                  setCarouselApi(api);
                  api?.on("select", () => {
                    if (api) {
                      setCurrentImageIndex(api.selectedScrollSnap());
                    }
                  });
                }}
                className="w-full h-full dining-carousel"
              >
                <CarouselContent className="m-0 h-full">
                  {images.map((image) => (
                    <CarouselItem key={image.alt} className="p-0 basis-full">
                      <picture>
                        <source srcSet={image.mobile} media="(max-width: 640px)" />
                        <img
                          src={image.desktop}
                          alt={image.alt}
                          className="w-full h-full object-cover"                         
                        />
                      </picture>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

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
            </motion.div>

            {/* Image Counter/Indicator */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
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
      </div>
    </section>
  );
}
