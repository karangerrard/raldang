export default function MapSection() {
  return (
    <section className="h-96 relative">
      <div className="absolute inset-0 bg-[hsl(var(--mountain-gray))] flex items-center justify-center">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108710.95574311807!2d78.1992884875!3d31.53551605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390650de27e9a015%3A0xf0cfd1d7a2c32ce0!2sKalpa%2C%20Himachal%20Pradesh%20172107!5e0!3m2!1sen!2sin!4v1623234567890!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Raldang View Homestay Location"
          aria-label="Interactive map showing the location of Kinnaur Valley Homestay"
        ></iframe>
      </div>
    </section>
  );
}
