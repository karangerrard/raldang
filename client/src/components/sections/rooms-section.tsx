import { Button } from "@/components/ui/button";
import { RoomCard } from "@/components/ui/room-card";
import { rooms } from "@/lib/data";
import { motion } from "framer-motion";

type AboutSectionProps = {
  id?: string;
};
export default function RoomsSection({ id }: AboutSectionProps) {
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
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[hsl(var(--mountain-pine))] mb-4">Accommodation</h2>
          <p className="text-lg max-w-2xl mx-auto">Experience the perfect blend of traditional Himachali architecture and modern comforts in our thoughtfully designed rooms.</p>
          <div className="w-24 h-1 bg-[hsl(var(--mountain-gold))] mx-auto mt-4"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              className="flex-1 min-w-0 max-w-md mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <RoomCard room={room} />
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
          <p className="text-lg mb-4">All accommodations include complimentary breakfast, Wi-Fi, and evening tea in the garden.</p>
          {/*
           <Button 
            asChild
            className="inline-block bg-[hsl(var(--mountain-gold))] hover:bg-[hsl(var(--mountain-gold))]/90 text-[hsl(var(--mountain-pine))] font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-md"
          >
            <a href="#contact">Check Availability</a>
          </Button>*/}
        </motion.div>
      </div>
    </section>
  );
}
