import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import LocationHighlight from "@/components/sections/location-highlight";
import RoomsSection from "@/components/sections/rooms-section";
import DiningSection from "@/components/sections/dining-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import GallerySection from "@/components/sections/gallery-section";
import HowToReachSection from "@/components/sections/activities-section";
import ContactSection from "@/components/sections/contact-section";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location.state]);
  return (
    <>
      <Header />
      <main className="font-poppins text-[hsl(var(--mountain-pine))] bg-[hsl(var(--mountain-white))]">
        <HeroSection />
        <AboutSection id="about"/>
        {/* <LocationHighlight/>  */}
        <RoomsSection id="rooms"/>
        <DiningSection id="dining"/>
        <TestimonialsSection />
        {/* <GallerySection id="gallery"/> */}
        <HowToReachSection id="directions"/>
        <ContactSection id="contact"/>
      </main>
      <Footer />
    </>
  );
}
