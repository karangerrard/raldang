import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function LocationHighlight() {
  return (
    <section className="py-20 relative">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center parallax" 
        style={{ backgroundImage: "url('/images/kinnaur-mountain-view.jpg')" }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-[hsl(var(--mountain-pine))]/60"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[hsl(var(--mountain-white))] mb-6 text-shadow">
            Gateway to Spiti Valley
          </h2>
          <p className="text-lg md:text-xl text-[hsl(var(--mountain-white))] max-w-3xl mx-auto mb-8 text-shadow">
            Perfectly positioned in Kinnaur, our homestay serves as an ideal base for those journeying to the
            mystical Spiti Valley. Acclimatize in comfort before venturing into the high-altitude desert mountains.
          </p>
          <Button 
            asChild
            className="inline-block bg-[hsl(var(--mountain-white))] hover:bg-[hsl(var(--mountain-gray))] text-[hsl(var(--mountain-pine))] font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105"
          >
            <a href="#contact">Plan Your Journey</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
