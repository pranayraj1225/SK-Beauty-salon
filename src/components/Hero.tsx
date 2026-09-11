import { motion } from 'motion/react';
import { ChevronRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative lg:min-h-screen flex flex-col lg:flex-row items-center overflow-hidden bg-charcoal">
      {/* Desktop Background Image & Overlays */}
      <div className="absolute inset-0 w-full h-full hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Luxurious Salon Interior" 
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-charcoal/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/70 to-transparent z-10"></div>
      </div>

      {/* Mobile Background Image (Stacked) */}
      <div className="relative w-full h-[60vh] min-h-[400px] lg:hidden">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
          alt="Luxurious Salon Interior" 
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-charcoal/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-6 md:px-12 lg:px-20 mx-auto h-full flex items-center lg:pt-20 pb-16 lg:pb-0 mt-8 lg:mt-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-gold"></div>
              <span className="text-gold tracking-[0.2em] text-sm font-bold uppercase">SK Beauty Salon · Bolarum</span>
            </div>
            
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]" style={{ fontFamily: 'Times New Roman', fontStyle: 'italic', fontWeight: 'bold' }}>
              Beauty, Style &<br />
              <span className="text-ivory/90">Confidence</span>
            </h1>
            
            <p className="text-white/80 text-lg sm:text-xl font-medium mb-10 max-w-xl leading-relaxed italic">
              A welcoming salon experience with thoughtful service, a comfortable ambience, and styles designed around you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#book" className="bg-gold hover:bg-ivory text-charcoal px-8 py-4 text-center font-bold transition-all duration-300 flex items-center justify-center gap-2 group">
                Book Appointment 
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              <a href="#about" className="bg-charcoal/30 backdrop-blur-sm border border-white/30 hover:bg-white/10 hover:border-white text-white px-8 py-4 text-center font-semibold transition-all duration-300">
                Explore Services
              </a>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center gap-4 text-white/90 text-sm bg-charcoal/40 backdrop-blur-md py-3 px-6 w-fit border border-white/10">
              <div className="flex text-gold gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="text-gold" />
                ))}
              </div>
              <span className="font-medium tracking-wide">4.9 / 5 · Google Reviews</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
