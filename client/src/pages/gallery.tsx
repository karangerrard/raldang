import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import GallerySection from "@/components/sections/gallery-section";
import { useEffect } from "react";
export default function GalleryPage() {

  useEffect(() => {
    // Scroll to the top of the page on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Header />
          <main className="font-poppins text-[hsl(var(--mountain-pine))] bg-[hsl(var(--mountain-white))]">
            <GallerySection />
          </main>
    <Footer />     
    </>
  );
}