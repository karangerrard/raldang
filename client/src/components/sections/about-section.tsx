import { motion } from "framer-motion";

export default function AboutSection() {
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
    <section id="about" className="py-20 bg-[hsl(var(--mountain-white))]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[hsl(var(--mountain-pine))] mb-4">Our Himalayan Haven</h2>
          <div className="w-24 h-1 bg-[hsl(var(--mountain-red))] mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair text-2xl font-semibold mb-4 text-[hsl(var(--mountain-blue))]">A Home In The Mountains</h3>
            <p className="mb-6 text-lg">
              Nestled in the heart of the majestic Kinnaur Valley, our traditional Himachali homestay offers you an authentic experience 
              of mountain living with modern comforts. Wake up to breathtaking views of the Raldang peak, surrounded by the tranquility of nature.
            </p>
            <p className="mb-6 text-lg">
              Our family has called this valley home for generations, and we take pride in sharing our heritage, cuisine, and 
              the natural beauty of this region with guests from around the world.
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
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg h-64 gallery-item">
              <img src="https://pixabay.com/get/gad80294ad48efa10e4df999371bb92c70eb5f313fc2dbb3d0fca1c9cdc6b220b1a4ca492195aa75ffc80edd4ea9f18d4a98315ecf32c896cad0992795d6d7402_1280.jpg" 
                   alt="Traditional Himachali Architecture" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64 gallery-item">
              <img src="https://pixabay.com/get/gbaff1ff35edd4a5afcbf82bedb1c04076b663ed76aca5982aefb80e64e74efd5f7cefefe5712f245a209d51955f472e2c5aea2716197caa05b7e47ee906d7459_1280.jpg" 
                   alt="Our Apple Orchard" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64 gallery-item">
              <img src="https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                   alt="Valley View" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64 gallery-item">
              <img src="https://images.unsplash.com/photo-1513553404607-988bf2703777?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                   alt="Homestay Interior" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
