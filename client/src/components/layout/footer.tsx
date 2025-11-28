export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--mountain-white))] text-[hsl(var(--mountain-pine))] py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h3 className="font-dancing text-3xl font-bold mb-4">Raldang View Homestay</h3>
            <p className="text-xl mb-4">Your home in the Himachal with authentic experiences and breathtaking Himalayan views.</p>
            <div className="flex gap-4">
              {/*<a href="#" className="text-[hsl(var(--mountain-red))] hover:text-[hsl(var(--mountain-red))]/80 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>*/}
              <a href="https://www.instagram.com/raldangviewhomestay/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-[hsl(var(--mountain-gold))]/20 hover:bg-[hsl(var(--mountain-pine))]/40 flex items-center justify-center transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-[hsl(var(--mountain-red))] hover:text-[hsl(var(--mountain-red))]/80 transition-colors">
                <i className="fab fa-tripadvisor"></i>
              </a>
            </div>
          </div>
          
          {/*<div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-[hsl(var(--mountain-red))] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[hsl(var(--mountain-red))] transition-colors">About</a></li>
              <li><a href="#rooms" className="hover:text-[hsl(var(--mountain-red))] transition-colors">Rooms</a></li>
              <li><a href="#dining" className="hover:text-[hsl(var(--mountain-red))] transition-colors">Dining</a></li>
              <li><a href="#gallery" className="hover:text-[hsl(var(--mountain-red))] transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-[hsl(var(--mountain-red))] transition-colors">Contact</a></li>
            </ul>
          </div>*/}
          
          {/*<div>
            <h4 className="font-medium text-lg mb-4">Experiences</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[hsl(var(--mountain-red))] transition-colors">Apple Orchard Tour</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--mountain-red))] transition-colors">Local Village Walks</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--mountain-red))] transition-colors">Spiti Valley Excursions</a></li>
            </ul>
          </div>*/}
          
          <div className="col-span-1 md:col-span-1 lg:col-start-3">  
            <h4 className="font-medium text-2xl mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-lg">
                <i className="fas fa-map-marker-alt mt-1 text-[hsl(var(--mountain-red))]"></i>
                <span>Raldang View Homestay, Saryo, Kalpa, Himachal Pradesh - 172107</span>
              </li>
              <li className="flex gap-3 text-lg">
                <i className="fas fa-phone-alt mt-1 text-[hsl(var(--mountain-red))]"></i>
                <span>+91 8580863067</span>
              </li>
              <li className="flex items-center gap-3 text-lg">
                <i className="fab fa-whatsapp text-green-400 text-xl"></i>
                <span>+91 9999059585</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-[hsl(var(--mountain-blue))]/30 flex justify-between items-center">
          <p>© {new Date().getFullYear()} Raldang View Homestay. All rights reserved.</p>
          <p className=" text-sm text-gray-600 dark:text-gray-400">
            Site by <a 
              href="https://github.com/karangerrard"
              className="underline hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Karandeep Singh
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
