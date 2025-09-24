export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--mountain-pine))] text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8  ">
          <div>
            <h3 className="font-dancing text-2xl font-bold mb-4">Raldang View Homestay</h3>
            <p className="mb-4">Your home in the Himalayan mountains with authentic experiences and breathtaking views.</p>
            <div className="flex gap-4">
              <a href="#" className="text-[hsl(var(--mountain-red))] hover:text-[hsl(var(--mountain-red))]/80 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-[hsl(var(--mountain-red))] hover:text-[hsl(var(--mountain-red))]/80 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-[hsl(var(--mountain-red))] hover:text-[hsl(var(--mountain-red))]/80 transition-colors">
                <i className="fab fa-tripadvisor"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-[hsl(var(--mountain-red))] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[hsl(var(--mountain-red))] transition-colors">About</a></li>
              <li><a href="#rooms" className="hover:text-[hsl(var(--mountain-red))] transition-colors">Rooms</a></li>
              <li><a href="#dining" className="hover:text-[hsl(var(--mountain-red))] transition-colors">Dining</a></li>
              <li><a href="#gallery" className="hover:text-[hsl(var(--mountain-red))] transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-[hsl(var(--mountain-red))] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/*<div>
            <h4 className="font-medium text-lg mb-4">Experiences</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[hsl(var(--mountain-red))] transition-colors">Apple Orchard Tour</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--mountain-red))] transition-colors">Local Village Walks</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--mountain-red))] transition-colors">Spiti Valley Excursions</a></li>
            </ul>
          </div>*/}
          
          <div className="md:col-start-4">  
            <h4 className="font-medium text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <i className="fas fa-map-marker-alt mt-1 text-[hsl(var(--mountain-red))]"></i>
                <span>Raldang View Homestay, Kalpa, Himachal Pradesh - 172107</span>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-phone-alt mt-1 text-[hsl(var(--mountain-red))]"></i>
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-[hsl(var(--mountain-blue))]/30 text-center">
          <p>© {new Date().getFullYear()} Raldang View Homestay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
