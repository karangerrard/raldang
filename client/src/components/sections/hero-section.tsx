import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="h-screen relative flex items-center justify-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax" 
        style={{ backgroundImage: "url('/images/kinnaur-mountain-view.jpg')" }}
        aria-hidden="true"
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)]"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-playfair text-4xl md:text-6xl text-[hsl(var(--mountain-white))] font-bold mb-4 text-shadow-lg drop-shadow-xl">
            Experience the Magic of Kalpa
          </h1>
          <p className="text-xl md:text-2xl text-[hsl(var(--mountain-white))] mb-8 max-w-3xl mx-auto text-shadow-lg drop-shadow-xl">
            A traditional Himachali homestay with breathtaking views of the Raldang peak
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button 
              asChild
              className="bg-[hsl(var(--mountain-gold))] hover:bg-[hsl(var(--mountain-gold))]/90 text-xl md:text-15px text-[hsl(var(--mountain-pine))] py-6 px-12 rounded-full transition-all transform hover:scale-105 font-large shadow-lg border-2 border-[hsl(var(--mountain-white))]"
            >
              <a href="#contact">Book Your Stay</a>
            </Button>
            <Button 
              asChild
              className="bg-[hsl(var(--mountain-white))] hover:bg-[hsl(var(--mountain-white))]/90 text-xl md:text-15px text-[hsl(var(--mountain-gold))] py-6 px-12 rounded-full transition-all transform hover:scale-105 font-large shadow-lg border-2 border-[hsl(var(--mountain-black))"
            >
              <a href="#rooms">Explore Rooms</a>
            </Button>      
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-[hsl(var(--mountain-white))] animate-bounce">
        <a href="#about" aria-label="Scroll down to about section">
          <i className="fas fa-chevron-down text-2xl drop-shadow-lg"></i>
        </a>
      </div>
    </section>
  );
}
