import { useState, useEffect } from "react";
import { useAppContext } from "@/lib/context";
import { motion, AnimatePresence } from "framer-motion";
//import {Link} from "wouter";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { isMenuOpen, toggleMenu, closeMenu } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function smoothScrollTo(id: string, yOffset: -80) {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${scrolled ? 'bg-[hsl(var(--mountain-pine))]/85 shadow-lg' : 'bg-[hsl(var(--mountain-pine))]/70'}`}>
      <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        <a href="#" className="text-[hsl(var(--mountain-white))] font-dancing text-3xl font-bold text-shadow-sm">
          Raldang View Homestay
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-[hsl(var(--mountain-white))]">
          <a href="#home" className="hover:text-[hsl(var(--mountain-gold))] transition-colors font-medium"
          onClick={e => {
            e.preventDefault();
            smoothScrollTo("home", -80); // adjust for header height
          }}>Home</a>
          <a href="#about" className="hover:text-[hsl(var(--mountain-gold))] transition-colors font-medium"
          onClick={e => {
            e.preventDefault();
            smoothScrollTo("about", -80); // adjust for header height
          }}>About</a>
          <a href="#rooms" className="hover:text-[hsl(var(--mountain-gold))] transition-colors font-medium"
          onClick={e => {
            e.preventDefault();
            smoothScrollTo("rooms", -80); // adjust for header height
          }}>Rooms</a>
          <a href="#dining" className="hover:text-[hsl(var(--mountain-gold))] transition-colors font-medium"
          onClick={e => {
            e.preventDefault();
              smoothScrollTo("dining", -80); // adjust for header height
          }}>Dining</a>
          <a href="#gallery" className="hover:text-[hsl(var(--mountain-gold))] transition-colors font-medium"
          onClick={e => {
            e.preventDefault();
            smoothScrollTo("gallery", -80); // adjust for header height
          }}>Gallery</a>
          <a href="#directions" className="hover:text-[hsl(var(--mountain-gold))] transition-colors font-medium"
          onClick={e => {
            e.preventDefault();
            smoothScrollTo("directions", -80); // adjust for header height
          }}>How to Reach</a>
          <a href="#contact" className="hover:text-[hsl(var(--mountain-gold))] transition-colors font-medium"
          onClick={e => {
            e.preventDefault();
            smoothScrollTo("contact", -80); // adjust for header height
          }}>Contact</a>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-[hsl(var(--mountain-white))] text-2xl"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[hsl(var(--mountain-pine))]/90 backdrop-blur-md text-[hsl(var(--mountain-white))] py-4 px-4 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              <a href="#home" onClick={closeMenu} className="hover:text-[hsl(var(--mountain-red))] transition-colors font-medium">Home</a>
              <a href="#about" onClick={closeMenu} className="hover:text-[hsl(var(--mountain-red))] transition-colors font-medium">About</a>
              <a href="#rooms" onClick={closeMenu} className="hover:text-[hsl(var(--mountain-red))] transition-colors font-medium">Rooms</a>
              <a href="#dining" onClick={closeMenu} className="hover:text-[hsl(var(--mountain-red))] transition-colors font-medium">Dining</a>
              <a href="#gallery" onClick={closeMenu} className="hover:text-[hsl(var(--mountain-red))] transition-colors font-medium">Gallery</a>
              <a href="#contact" onClick={closeMenu} className="hover:text-[hsl(var(--mountain-red))] transition-colors font-medium">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
