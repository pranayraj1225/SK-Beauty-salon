import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export default function AppointmentCTA() {
  return (
    <section className="py-24 bg-charcoal text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sora mb-6">Ready for Your Next Look?</h2>
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light">
            Book your visit or speak with the salon directly about available services and appointments.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <a 
              href="tel:06300982227" 
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-charcoal px-8 py-4 font-bold hover:bg-ivory transition-colors duration-300"
            >
              <Phone size={20}  aria-hidden="true" />
              Call 063009 82227
            </a>
            <a 
              href="https://wa.me/916300982227" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border-2 border-white/30 text-white px-8 py-4 font-bold hover:border-white transition-colors duration-300"
            >
              <MessageCircle size={20}  aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
