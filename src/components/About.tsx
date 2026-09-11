import { motion } from 'motion/react';
import { Sparkles, Smile, Droplets, CheckCircle } from 'lucide-react';
import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* About Intro */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-8 leading-tight">
              A Salon Experience<br /> That Feels Personal
            </h2>
            <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-medium">
              SK Beauty Salon is a welcoming beauty salon in Bolarum, Hyderabad, focused on providing customers with a comfortable environment, thoughtful service, and styles tailored to individual preferences.
            </p>
            <p className="mt-6 text-charcoal/60 leading-relaxed">
              The Google reviews consistently highlight the salon's ambience, hygiene, friendly environment, reasonable pricing, and attentive customer service.
            </p>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="mb-12 text-center">
          <h3 className="text-xs font-bold tracking-[0.2em] text-charcoal uppercase mb-12">What Customers Notice</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <HighlightCard 
            icon={<Sparkles size={28} className="text-charcoal"  aria-hidden="true" />}
            title="Beautiful Ambience"
            description="Customers describe the salon's ambience and overall space as cool, comfortable, and enjoyable."
            delay={0}
          />
          <HighlightCard 
            icon={<Droplets size={28} className="text-charcoal"  aria-hidden="true" />}
            title="Hygienic Environment"
            description="Reviews specifically highlight the salon as a hygienic place suitable for visiting with family and friends."
            delay={0.1}
          />
          <HighlightCard 
            icon={<Smile size={28} className="text-charcoal"  aria-hidden="true" />}
            title="Friendly Service"
            description="Customers mention welcoming, friendly staff and a comfortable experience."
            delay={0.2}
          />
          <HighlightCard 
            icon={<CheckCircle size={28} className="text-charcoal"  aria-hidden="true" />}
            title="Reasonable Pricing"
            description="A customer specifically praised the reasonable charges alongside the quality of service."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

function HighlightCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-ivory/50 p-8 flex flex-col items-start border border-charcoal/5 hover:border-gold/30 hover:bg-ivory transition-all duration-300 group"
    >
      <div className="bg-white p-4 rounded-none shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-charcoal mb-4 font-sora">{title}</h4>
      <p className="text-charcoal/70 leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
}
