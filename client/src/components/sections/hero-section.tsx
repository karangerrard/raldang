import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="h-screen relative flex items-center justify-center overflow-hidden">
      {/* Mobile Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}images/kinnaur-mountain-view_mobile.avif')`,
        }}
        aria-hidden="true"
      ></div>

      {/* Desktop Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax hidden md:block"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}images/kinnaur-mountain-view.avif')`,
        }}
        aria-hidden="true"
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)] z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-6xl text-[hsl(var(--mountain-white))] font-bold mb-4 text-shadow-lg drop-shadow-xl">
            Experience the Magic of Kalpa
          </h1>
          <p className="font-semibold text-base sm:text-lg md:text-2xl text-[hsl(var(--mountain-white))] mb-8 max-w-3xl mx-auto text-shadow-lg drop-shadow-xl">
            A Himachali homestay on the edge of the valley with breathtaking views of the Raldang peak
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="text-sm sm:text-base md:text-lg py-3 sm:py-4 md:py-6 px-6 sm:px-8 md:px-12 rounded-full transition-all transform hover:scale-105 font-semibold shadow-lg border-2 bg-[hsl(var(--mountain-gold))] hover:bg-[hsl(var(--mountain-gold))]/90 text-[hsl(var(--mountain-white))] border-[hsl(var(--mountain-white))]"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) {
                  const y = el.getBoundingClientRect().top + window.pageYOffset - 80; // adjust offset for header
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
            >
              Book Your Stay
            </Button>
            <Button              
              className="text-sm sm:text-base md:text-lg py-3 sm:py-4 md:py-6 px-6 sm:px-8 md:px-12 rounded-full transition-all transform hover:scale-105 font-semibold shadow-lg border-2 bg-[hsl(var(--mountain-white))] hover:bg-[hsl(var(--mountain-white))]/90 text-[hsl(var(--mountain-gold))] border-[hsl(var(--mountain-gold))]"
              onClick={() => {
                const el = document.getElementById("rooms");
                if (el) {
                  const y = el.getBoundingClientRect().top + window.pageYOffset - 80; // adjust offset for header
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
            >
              Explore Rooms
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-[hsl(var(--mountain-white))] animate-bounce z-10">
        <a
        href="#about"
        aria-label="Scroll down to about section"
        onClick={e => {
          e.preventDefault();
          const el = document.getElementById("about");
          if (el) {
            const y = el.getBoundingClientRect().top + window.pageYOffset - 80; // adjust offset as needed
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }}
      >
        <i className="fas fa-chevron-down text-2xl drop-shadow-lg"></i>
        </a>
      </div>
    </section>
  );
}
