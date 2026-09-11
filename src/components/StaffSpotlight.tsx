import { motion } from 'motion/react';
import { User2 } from 'lucide-react';

export default function StaffSpotlight() {
  return (
    <section className="py-20 lg:py-24 bg-beige/30">
      <div className="w-full px-6 md:px-12">
        <div className="bg-white p-8 md:p-16 shadow-sm flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 md:w-64 md:h-64 shrink-0 bg-ivory rounded-lg border border-charcoal/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Swetha" 
              className="staff-image w-full h-full object-cover rounded-lg"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Staff Spotlight</div>
            <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 font-sora">A Patient, Personalized Approach</h3>
            <p className="text-charcoal/70 leading-relaxed text-lg mb-6">
              Customers specifically praised <strong>Swetha / Shwetha</strong> for patiently listening to their requirements and clearly explaining the hairstyle course.
            </p>
            <div className="border-l-2 border-gold pl-6 py-2">
              <p className="italic text-charcoal/80">
                "Swetha garu has so much of patience while listening to customers."
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
