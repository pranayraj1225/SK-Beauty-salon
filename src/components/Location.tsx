import { motion } from 'motion/react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Location() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-10 font-sora">Visit SK Beauty Salon</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold mt-1 shrink-0" size={24}  aria-hidden="true" />
                <div>
                  <h4 className="font-bold text-charcoal text-lg mb-1">Address</h4>
                  <p className="text-charcoal/70 leading-relaxed">
                    SK Beauty Salon<br />
                    Caton Residential Twp, Bolarum<br />
                    Hyderabad, Secunderabad<br />
                    Telangana 500067
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-gold mt-1 shrink-0" size={24}  aria-hidden="true" />
                <div>
                  <h4 className="font-bold text-charcoal text-lg mb-1">Phone</h4>
                  <a href="tel:06300982227" className="text-charcoal/70 hover:text-gold transition-colors text-lg">
                    063009 82227
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-gold mt-1 shrink-0" size={24}  aria-hidden="true" />
                <div>
                  <h4 className="font-bold text-charcoal text-lg mb-1">Hours</h4>
                  <p className="text-charcoal/70">
                    Open · Closes 8:00 PM
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://maps.google.com/?q=SK+Beauty+Salon+Bolarum+Hyderabad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-charcoal text-white text-center px-8 py-4 font-bold hover:bg-gold transition-colors duration-300"
              >
                Get Directions
              </a>
              <a 
                href="tel:06300982227" 
                className="border-2 border-charcoal text-charcoal text-center px-8 py-4 font-bold hover:bg-charcoal hover:text-white transition-colors duration-300"
              >
                Call Now
              </a>
            </div>
          </motion.div>
          
          {/* Map (Placeholder or real if possible, we'll use a styled map image placeholder to avoid API key issues, or a generic embed) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[400px] lg:h-full min-h-[400px] bg-beige relative overflow-hidden"
          >
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15217.788540860574!2d78.5034637!3d17.5338148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b4000000001%3A0x1c00000000000000!2sBolarum%2C%20Secunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) opacity(80%)' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="SK Beauty Salon Location Map"
              ></iframe>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
