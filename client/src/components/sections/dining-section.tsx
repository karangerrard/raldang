import { motion } from "framer-motion";

export default function DiningSection() {
  return (
    <section id="dining" className="py-20 bg-[hsl(var(--mountain-gray))]/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[hsl(var(--mountain-pine))] mb-4">Home-Cooked Meals</h2>
          <p className="text-lg max-w-2xl mx-auto">Experience authentic Himachali cuisine made with fresh, local ingredients, many from our own garden and orchard.</p>
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
              Our family has preserved traditional Himachali recipes for generations. Each meal is prepared with love using organic, 
              locally-sourced ingredients that showcase the unique flavors of the Kinnaur region.
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
                  <h4 className="font-playfair text-lg font-semibold mb-1">Traditional Himachali Dham</h4>
                  <p>A celebratory feast featuring multiple courses of local delicacies, including siddu, madra, and chana madra.</p>
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
                  <p>Seasonal dishes featuring apples from our orchard, including fresh juices, desserts, and savory specialties.</p>
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
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg h-64 gallery-item">
              <img src={`${import.meta.env.BASE_URL}images/food_1.avif`}
                   alt="Himachali Home food" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64 gallery-item">
              <img src={`${import.meta.env.BASE_URL}images/food_2.avif`}
                   alt="Momo plate" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64 gallery-item">
              <img src={`${import.meta.env.BASE_URL}images/food_3.avif`}      
                   alt="Butter tea" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64 gallery-item">
              <img src={`${import.meta.env.BASE_URL}images/food_4.avif`}
                   alt="Momo plate red" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
