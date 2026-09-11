import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-0 lg:pb-0 overflow-hidden bg-charcoal">
      {/* Desktop Split Layout */}
      <div className="absolute inset-0 w-full h-full lg:flex hidden">
        <div className="w-[50%] h-full bg-charcoal z-0"></div>
        <div className="w-[50%] h-full relative z-0">
          <div className="absolute inset-0 bg-charcoal/20 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Luxurious Salon Interior" 
            className="w-full h-full object-cover object-center grayscale-[20%]"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Desktop Content */}
      <div className="relative z-10 hidden lg:flex w-full px-6 md:px-12 h-full items-center">
        <div className="w-[50%] pr-12 xl:pr-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gold"></div>
              <span className="text-gold tracking-widest text-sm font-semibold uppercase">SK Beauty Salon · Bolarum</span>
            </div>
            
            <h1 className="text-white text-5xl xl:text-6xl/tight font-bold mb-8" style={{ fontFamily: 'Times New Roman', fontWeight: 'bold' }}>
              Beauty, Style & <br /> Confidence &mdash;<br />
              <span className="text-ivory/90">All in One Place.</span>
            </h1>
            
            <p className="text-white/80 text-lg xl:text-xl font-medium mb-10 max-w-lg leading-relaxed">
              A welcoming salon experience with thoughtful service, a comfortable ambience, and styles designed around you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#book" className="bg-gold hover:bg-white hover:text-charcoal text-white px-8 py-4 text-center font-bold transition-colors duration-300 flex items-center justify-center gap-2">
                Book an Appointment <ChevronRight size={18}  aria-hidden="true" />
              </a>
              <a href="#about" className="border border-white/20 hover:border-white text-white px-8 py-4 text-center font-semibold transition-colors duration-300">
                Explore Our Salon
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-white/70 text-sm">
              <div className="flex text-gold" aria-hidden="true">
                {'★'.repeat(5)}
              </div>
              <span>4.9 / 5 · 39 Google Reviews</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Stacked Layout */}
      <div className="lg:hidden w-full relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] w-full mb-10"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="SK Beauty Salon Experience" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
             <div className="flex text-gold text-lg drop-shadow-md" aria-hidden="true">
                {'★'.repeat(5)}
              </div>
              <span className="text-white font-medium text-sm drop-shadow-md">4.9 / 5 · 39 Google Reviews</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-[1px] w-8 bg-gold"></div>
            <span className="text-gold tracking-widest text-xs font-semibold uppercase">SK Beauty Salon · Bolarum</span>
          </div>
          
          <h1 className="text-white text-4xl sm:text-5xl font-bold mb-6 leading-tight" style={{ fontStyle: 'italic', fontFamily: 'Times New Roman' }}>
            Beauty, Style &<br /> Confidence &mdash;<br />
            <span className="text-ivory/90">All in One Place.</span>
          </h1>
          
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            A welcoming salon experience with thoughtful service, a comfortable ambience, and styles designed around you.
          </p>
          
          <div className="flex flex-col gap-4">
            <a href="#book" className="bg-gold text-white py-4 text-center font-bold text-lg">
              Book an Appointment
            </a>
            <a href="#about" className="border border-white/20 text-white py-4 text-center font-semibold">
              Explore Our Salon
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
