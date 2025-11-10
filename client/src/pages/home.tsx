import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import LocationHighlight from "@/components/sections/location-highlight";
import RoomsSection from "@/components/sections/rooms-section";
import DiningSection from "@/components/sections/dining-section";
import FAQSection from "@/components/sections/faq-section";
import GallerySection from "@/components/sections/gallery-section";
import HowToReachSection from "@/components/sections/activities-section";
import ContactSection from "@/components/sections/contact-section";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
        // Clear the state so it doesn't scroll again on re-render
        navigate(location.pathname, { replace: true, state: {} });
      }
    }
  }, [location.state, location.pathname, navigate]);
  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Raldang View Homestay | Cozy Mountain Stay in Kalpa, Kinnaur Valley, Himachal Pradesh</title>
        <meta
          name="description"
          content="Raldang View Homestay offers a peaceful stay in the scenic Kalpa, Kinnaur Valley, Himachal Pradesh. Experience mountain views, homely food, and local Himachali hospitality."
        />
        <meta
          name="keywords"
          content="Raldang View Homestay, Kinnaur Homestay, Kalpa Homestay, Himachal stay, mountain view rooms, homestay near Reckong Peo, Kinnaur Kailash, Kalpa Hotels, Himachali food, cozy homestay"
        />
        <meta name="author" content="Raldang View Homestay" />

        {/* Open Graph (for social media) */}
        <meta property="og:title" content="Raldang View Homestay | Cozy Mountain Stay in Kalpa, Kinnaur Valley, Himachal Pradesh" />
        <meta property="og:description" content="Enjoy a cozy stay surrounded by the mountains of Kalpa, Kinnaur Valley, Himachal Pradesh with delicious local meals and warm hospitality." />
        <meta property="og:image" content="https://karangerrard.github.io/raldang/images/kinnaur-mountain-view.avif" />
        <meta property="og:url" content="https://karangerrard.github.io/raldang/" />
        <meta property="og:type" content="website" />

        {/* LodgingBusiness JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            "name": "Raldang View Homestay",
            "image": "https://karangerrard.github.io/raldang/images/kinnaur-mountain-view.avif",
            "description":
              "Raldang View Homestay offers mountain-view rooms, homely meals, and serene surroundings in Kalpa, Kinnaur Valley, Himachal Pradesh.",
            "url": "https://karangerrard.github.io/raldang/",
            "telephone": "+91 8580863067",
            "priceRange": "₹1000 - ₹3500",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Saryo Valley, Kalpa",
              "addressLocality": "Kinnaur",
              "addressRegion": "Himachal Pradesh",
              "postalCode": "172107",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "31.5269",
              "longitude": "78.2525"
            },
            "sameAs": [
              "https://www.instagram.com/raldangviewhomestay/",
              "https://maps.app.goo.gl/yo598UXUUeeTadaW7"
            ]
          })}
        </script>
      </Helmet>
      <Header />
      <main className="font-poppins text-[hsl(var(--mountain-pine))] bg-[hsl(var(--mountain-white))]">
        <HeroSection />
        <AboutSection id="about"/>
        {/* <LocationHighlight/>  */}
        <RoomsSection id="rooms"/>
        <DiningSection id="dining"/>
        <FAQSection />
        {/* <GallerySection id="gallery"/> */}
        <HowToReachSection id="directions"/>
        <ContactSection id="contact"/>
      </main>
      <Footer />
    </>
  );
}
