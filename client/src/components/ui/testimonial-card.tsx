import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialCardProps {
  testimonials: Testimonial[];
}

export function TestimonialCard({ testimonials }: TestimonialCardProps) {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const currentTestimonial = testimonials[currentTestimonialIndex];

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => 
      (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTestimonial.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-white p-8 rounded-xl shadow-lg">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <div className="text-[hsl(var(--mountain-red))]">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-lg italic mb-6">
                "{currentTestimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--mountain-gray))] flex items-center justify-center text-[hsl(var(--mountain-blue))] font-bold">
                  {currentTestimonial.initial}
                </div>
                <div>
                  <h4 className="font-medium">{currentTestimonial.name}</h4>
                  <p className="text-sm text-gray-600">{currentTestimonial.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-4 mt-8">
        <button 
          onClick={prevTestimonial}
          className="w-10 h-10 rounded-full border border-[hsl(var(--mountain-blue))] text-[hsl(var(--mountain-blue))] hover:bg-[hsl(var(--mountain-blue))] hover:text-white transition-colors"
          aria-label="Previous testimonial"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button 
          onClick={nextTestimonial}
          className="w-10 h-10 rounded-full border border-[hsl(var(--mountain-blue))] text-[hsl(var(--mountain-blue))] hover:bg-[hsl(var(--mountain-blue))] hover:text-white transition-colors"
          aria-label="Next testimonial"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
