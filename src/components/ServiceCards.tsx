import { motion } from 'motion/react';
import { ArrowRight, Scissors, Sparkles, GraduationCap, UserCheck, Droplets, HandMetal, Brush } from 'lucide-react';
import React from 'react';

import serviceImg1 from '../assets/images/regenerated_image_1789108901628.avif';
import serviceImg2 from '../assets/images/regenerated_image_1789108903007.jpg';
import serviceImg3 from '../assets/images/regenerated_image_1789113237607.jpg';
import serviceImg4 from '../assets/images/regenerated_image_1789113239575.jpg';
import serviceImg5 from '../assets/images/regenerated_image_1789113240593.jpg';

export default function ServiceCards() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Beauty Services & Expertise</h2>
              <p className="text-lg text-charcoal/70">
                Offering highly-rated styling, treatments, and educational sessions based on our customers' favorite experiences.
              </p>
            </motion.div>
          </div>
          
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://wa.me/916300982227" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-bold text-charcoal hover:text-gold transition-colors pb-1 border-b-2 border-charcoal hover:border-gold w-fit"
          >
            Ask About Services <ArrowRight size={18} aria-hidden="true" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ServiceCard 
            icon={<Scissors size={24} strokeWidth={1.5} aria-hidden="true" />}
            title="Haircuts & Styling"
            description="The reviews mention haircuts and hairstyle experiences, including a positive feather cut experience."
            delay={0}
            imgSrc={serviceImg1}
          />
          <ServiceCard 
            icon={<Sparkles size={24} strokeWidth={1.5} aria-hidden="true" />}
            title="Hair Treatments"
            description="Customer reviews consistently mention high-quality hair treatments tailored to your needs."
            delay={0.1}
            imgSrc={serviceImg2}
          />
          <ServiceCard 
            icon={<Droplets size={24} strokeWidth={1.5} aria-hidden="true" />}
            title="Skin & Facial"
            description="Rejuvenate your skin with our premium facial treatments designed for deep cleansing and relaxation."
            delay={0.2}
            imgSrc={serviceImg3}
          />
          <ServiceCard 
            icon={<Sparkles size={24} strokeWidth={1.5} aria-hidden="true" />}
            title="Nails & Hands"
            description="Luxurious manicure and nail art sessions using premium products for an elegant finish."
            delay={0.3}
            imgSrc={serviceImg4}
          />
          <ServiceCard 
            icon={<Brush size={24} strokeWidth={1.5} aria-hidden="true" />}
            title="Professional Makeup"
            description="Expert makeup application for bridals, parties, and special events to make you look flawless."
            delay={0.4}
            imgSrc={serviceImg5}
          />
          <ServiceCard 
            icon={<UserCheck size={24} strokeWidth={1.5} aria-hidden="true" />}
            title="Personalized Styling"
            description="Customers mention staff listening patiently to their preferences and providing services accordingly."
            delay={0.5}
            imgSrc="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          />
          <ServiceCard 
            icon={<GraduationCap size={24} strokeWidth={1.5} aria-hidden="true" />}
            title="Hairstyle Courses"
            description="The salon has a review specifically mentioning a one-on-one hairstyle course with clear explanations."
            delay={0.6}
            highlight
            imgSrc="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description, delay, highlight = false, imgSrc }: { icon: React.ReactNode, title: string, description: string, delay: number, highlight?: boolean, imgSrc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay % 0.4 }} // Reset delay for new rows roughly
      className={`flex flex-col border transition-all duration-300 group overflow-hidden ${
        highlight 
          ? 'bg-charcoal border-charcoal text-white hover:bg-[#222]' 
          : 'bg-white border-transparent hover:border-charcoal/10 hover:shadow-xl shadow-sm'
      }`}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={imgSrc} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className={`mb-4 inline-flex p-3 rounded-full ${highlight ? 'bg-white/10 text-white' : 'bg-ivory text-charcoal'}`}>
          {icon}
        </div>
        <h3 className={`text-xl font-bold font-sora mb-4 ${highlight ? 'text-white' : 'text-charcoal'}`}>
          {title}
        </h3>
        <p className={`leading-relaxed flex-grow ${highlight ? 'text-white/70' : 'text-charcoal/70'}`}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}
