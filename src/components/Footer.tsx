export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10 text-white pt-20 pb-10">
      <div className="w-full px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="font-sora font-bold tracking-widest uppercase text-xl mb-6">SK Beauty Salon</h3>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Beauty, style and personalized service in Bolarum, Hyderabad.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 font-sora text-sm tracking-widest uppercase text-gold">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-white/60 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors text-sm">Services</a></li>
              <li><a href="#reviews" className="text-white/60 hover:text-white transition-colors text-sm">Reviews</a></li>
              <li><a href="#gallery" className="text-white/60 hover:text-white transition-colors text-sm">Gallery</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 font-sora text-sm tracking-widest uppercase text-gold">Contact</h4>
            <ul className="space-y-4">
              <li className="text-white/60 text-sm">
                063009 82227
              </li>
              <li className="text-white/60 text-sm">
                Bolarum, Hyderabad,<br /> Telangana
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; 2026 SK Beauty Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
