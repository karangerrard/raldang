import { Button } from "@/components/ui/button";
import { TransportCard } from "@/components/ui/transport-card";
import { transportOptions } from "@/lib/data";
import { motion } from "framer-motion";

export default function HowToReachSection() {
  return (
    <section id="directions" className="py-20 bg-[hsl(var(--mountain-white))]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[hsl(var(--mountain-pine))] mb-4">How To Reach Us</h2>
          <p className="text-lg max-w-3xl mx-auto">Find your way to our peaceful mountain retreat in Kinnaur Valley, with travel options from major cities.</p>
          <div className="w-24 h-1 bg-[hsl(var(--mountain-gold))] mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {transportOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TransportCard option={option} />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            asChild
            className="inline-block bg-[hsl(var(--mountain-gold))] hover:bg-[hsl(var(--mountain-gold))]/90 text-[hsl(var(--mountain-pine))] font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-md"
          >
            <a href="#contact">Need Help Planning Your Journey?</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
