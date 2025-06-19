import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import GallerySection from "@/components/sections/gallery-section";
export default function GalleryPage() {
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