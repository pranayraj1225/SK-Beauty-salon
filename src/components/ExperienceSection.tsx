import { motion } from 'motion/react';
import expImg1 from '../assets/images/regenerated_image_1789109010137.jpg';
import expImg2 from '../assets/images/regenerated_image_1789109011228.jpg';

export default function ExperienceSection() {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-8 leading-tight">
              More Than a Visit.<br /> A <span className="text-gold">Comfortable</span> Experience.
            </h2>
            
            <p className="text-lg text-charcoal/70 mb-10 leading-relaxed">
              At SK Beauty Salon, we believe that how you feel during your visit is just as important as how you look when you leave. Our focus is on providing a clean, welcoming space where you can truly relax.
            </p>
            
            <ul className="space-y-4">
              {[
                "Patient staff who listen to your preferences",
                "Hygienic and clean environment",
                "Friendly service and welcoming atmosphere",
                "Reasonable charges for quality care"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-charcoal font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Images */}
          <div className="order-1 lg:order-2 relative h-[500px] sm:h-[600px] w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="absolute top-0 right-0 w-[80%] h-[80%] bg-beige z-10 overflow-hidden"
            >
              <img 
                src={expImg1} 
                alt="Salon Ambience" 
                className="w-full h-full object-cover grayscale-[10%]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute bottom-0 left-0 w-[55%] h-[45%] bg-white border-8 border-white z-20 shadow-2xl"
            >
              <img 
                src={expImg2} 
                alt="Styling Detail" 
                className="w-full h-full object-cover grayscale-[10%]"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Floating Labels */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute top-12 -left-4 md:-left-12 z-30 bg-white py-3 px-6 shadow-xl text-sm font-bold text-charcoal"
            >
              Comfortable ambience
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute bottom-1/3 -right-4 md:-right-8 z-30 bg-charcoal text-white py-3 px-6 shadow-xl text-sm font-bold"
            >
              Thoughtful attention
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
