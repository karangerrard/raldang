import { motion } from "framer-motion";
type AboutSectionProps = {
  id: string;
}

export default function AboutSection({ id }: AboutSectionProps) {
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
            className="grid grid-cols-2 gap-4 max-w-[650px] mx-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden shadow-md aspect-square gallery-item hover:shadow-lg transition-shadow duration-300">
              <picture>
                <source srcSet={`${import.meta.env.BASE_URL}images/cherry_blossoms_mobile.avif`} media="(max-width: 640px)"  />
              <img src={`${import.meta.env.BASE_URL}images/cherry_blossoms.avif`}
                   alt="Cherry Blossoms" 
                   className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
              </picture>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg aspect-square gallery-item hover:shadow-lg transition-shadow duration-300">
              <picture>
                <source srcSet={`${import.meta.env.BASE_URL}images/raldang_peak_mobile.avif`} media="(max-width: 640px)" />
              <img src={`${import.meta.env.BASE_URL}images/raldang_peak.avif`}
                   alt="Raldang Peak" 
                   className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
              </picture>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg aspect-square gallery-item hover:shadow-lg transition-shadow duration-300">
              <picture>
                <source srcSet={`${import.meta.env.BASE_URL}images/kalpa_town_mobile.avif`} media="(max-width: 640px)" />
              <img src={`${import.meta.env.BASE_URL}images/kalpa_town.avif`}
                   alt="Kalpa Town" 
                   className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
              </picture>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg aspect-square gallery-item hover:shadow-lg transition-shadow duration-300">
              <picture>
                <source srcSet={`${import.meta.env.BASE_URL}images/home_food_mobile.avif`} media="(max-width: 640px)" />
              <img src={`${import.meta.env.BASE_URL}images/home_food.avif`}
                   alt="Homestay food" 
                   className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
              </picture>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
