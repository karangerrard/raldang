import { useState, useEffect } from "react";
import { useAppContext } from "@/lib/context";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation,Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { isMenuOpen, toggleMenu, closeMenu } = useAppContext();
  //const location = useLocation();

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

  function NavLink({ sectionId }: { sectionId: string }) {
    const location = useLocation();
    const navClass = "hover:text-[hsl(var(--mountain-gold))] transition-colors font-medium";
    const scrollOffset = -80;

    // Capitalize sectionId for display
    const label = sectionId
      ? sectionId.charAt(0).toUpperCase() + sectionId.slice(1).replace("-", " ")
      : "";

    if (location.pathname === "/" && sectionId) {
      return (
        <a
          href={`#${sectionId}`}
          className={navClass}
          onClick={e => {
            e.preventDefault();
            const el = document.getElementById(sectionId);
            if (el) {
              const y = el.getBoundingClientRect().top + window.pageYOffset + scrollOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
        >
          {label}
        </a>
      );
    }
    return (
      <Link to="/" state={{ scrollTo: sectionId }}className={navClass}>
        {label}
      </Link>
    );
  }

  function MobileNavLink({ sectionId }: { sectionId: string }) {
    const location = useLocation();
    const navClass = "hover:text-[hsl(var(--mountain-gold))] transition-colors font-medium";

    // Capitalize sectionId for display
    const label = sectionId
      ? sectionId.charAt(0).toUpperCase() + sectionId.slice(1).replace("-", " ")
      : "";

    if (location.pathname === "/" && sectionId) {
      return (
        <a
          href={`#${sectionId}`}
          onClick={e => {
            e.preventDefault();
            closeMenu();
            const el = document.getElementById(sectionId);
            if (el) {
              const y = el.getBoundingClientRect().top + window.pageYOffset - 80; // adjust offset for header
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
          className={navClass}  
        >
          {label}
        </a>
      );
    }
    return (
      <Link to="/" onClick={closeMenu} state={{ scrollTo: sectionId }} className={navClass}>
        {label}
      </Link>
    );
  }


  return (
    <header className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${scrolled ? 'bg-[hsl(var(--mountain-pine))]/85 shadow-lg' : 'bg-[hsl(var(--mountain-pine))]/70'}`}>
      <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        <a href="#" className="text-[hsl(var(--mountain-white))] font-dancing text-3xl font-bold text-shadow-sm mr-4">
          Raldang View Homestay
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-[hsl(var(--mountain-white))]">
          <NavLink sectionId="home" />
          <NavLink sectionId="about" />
          <NavLink sectionId="rooms" />
          <NavLink sectionId="dining" />
          <Link to="/gallery" className="hover:text-[hsl(var(--mountain-gold))] transition-colors font-medium">Gallery</Link>
          <NavLink sectionId="directions" />
          <NavLink sectionId="contact" />
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-[hsl(var(--mountain-white))] text-2xl pr-6"
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
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="bg-[hsl(var(--mountain-pine))]/90 backdrop-blur-md text-[hsl(var(--mountain-white))] py-4 px-4 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              <MobileNavLink sectionId="home" />
              <MobileNavLink sectionId="about" />
              <MobileNavLink sectionId="rooms" />
              <MobileNavLink sectionId="dining" />
              <Link to="/gallery" onClick={closeMenu} className="hover:text-[hsl(var(--mountain-red))] transition-colors font-medium">Gallery</Link>
              <MobileNavLink sectionId="contact" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
