import { Button } from "@/components/ui/button";
import { TransportCard } from "@/components/ui/transport-card";
import { transportOptions } from "@/lib/data";
import { motion } from "framer-motion";

type AboutSectionProps = {
  id?: string;
};
export default function HowToReachSection({ id }: AboutSectionProps) {
  return (
    <section id={id} className="py-20 bg-[hsl(var(--mountain-white))]">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="my-12 rounded-xl overflow-hidden shadow-lg border-4 border-[hsl(var(--mountain-gold))]/30"
        >
          <h3 className="font-playfair text-xl text-center py-4 bg-[hsl(var(--mountain-gold))]/10 border-b border-[hsl(var(--mountain-gold))]/20">
            Our Location on Google Maps
          </h3>
          <div className="w-full h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.9071469872692!2d78.2520239!3d31.526710099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39066b59d0f807bf%3A0xef9fc9b26222cca8!2sRaldang%20view%20homestay!5e0!3m2!1sen!2sin!4v1762120413189!5m2!1sen!2sin" 
              className="w-full h-full" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/*<Button 
            asChild
            className="inline-block bg-[hsl(var(--mountain-gold))] hover:bg-[hsl(var(--mountain-gold))]/90 text-[hsl(var(--mountain-pine))] font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-md"
          >
            <a href="#contact">Need Help Planning Your Journey?</a>
          </Button>*/}
        </motion.div>
      </div>
    </section>
  );
}
