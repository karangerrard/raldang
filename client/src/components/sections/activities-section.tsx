import { Button } from "@/components/ui/button";
import { ActivityCard } from "@/components/ui/activity-card";
import { activities } from "@/lib/data";
import { motion } from "framer-motion";

export default function ActivitiesSection() {
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
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[hsl(var(--mountain-pine))] mb-4">Seasonal Experiences</h2>
          <p className="text-lg max-w-2xl mx-auto">Discover the changing magic of Kinnaur throughout the year with our curated seasonal activities.</p>
          <div className="w-24 h-1 bg-[hsl(var(--mountain-red))] mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ActivityCard activity={activity} />
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
            className="inline-block bg-[hsl(var(--mountain-blue))] hover:bg-[hsl(var(--mountain-blue))]/90 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105"
          >
            <a href="#contact">Inquire About Seasonal Activities</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
