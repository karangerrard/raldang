import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[hsl(var(--mountain-white))]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[hsl(var(--mountain-pine))] mb-4">Google Reviews</h2>
          <div className="w-24 h-1 bg-[hsl(var(--mountain-red))] mx-auto"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <TestimonialCard testimonials={testimonials} />
        </motion.div>
      </div>
    </section>
  );
}
