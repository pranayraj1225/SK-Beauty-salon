import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CourseFeature() {
  return (
    <section className="py-24 bg-charcoal text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[120px] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="w-full px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6">Learn Hairstyling One-on-One</h2>
            <div className="h-1 w-16 bg-gold mb-8"></div>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 font-light">
              One customer shared a positive experience learning a hairstyle course through a one-on-one session, specifically praising the clear explanations and patience throughout the learning process.
            </p>
            
            <a 
              href="tel:06300982227" 
              className="inline-flex items-center gap-3 bg-white text-charcoal px-8 py-4 font-bold hover:bg-gold hover:text-white transition-colors duration-300"
            >
              Enquire About Courses <ArrowRight size={18}  aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
