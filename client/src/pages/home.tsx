import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import LocationHighlight from "@/components/sections/location-highlight";
import RoomsSection from "@/components/sections/rooms-section";
import DiningSection from "@/components/sections/dining-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import GallerySection from "@/components/sections/gallery-section";
import ActivitiesSection from "@/components/sections/activities-section";
import ContactSection from "@/components/sections/contact-section";
import MapSection from "@/components/sections/map-section";

export default function Home() {
  return (
    <>
      <Header />
      <main className="font-poppins text-[hsl(var(--mountain-pine))] bg-[hsl(var(--mountain-white))]">
        <HeroSection />
        <AboutSection />
        <LocationHighlight />
        <RoomsSection />
        <DiningSection />
        <TestimonialsSection />
        <GallerySection />
        <ActivitiesSection />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
