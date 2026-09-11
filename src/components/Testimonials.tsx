import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 font-sora">Loved by Our Customers</h2>
            <p className="text-xl font-medium text-charcoal/60">4.9★ from 39 Google Reviews</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          <ReviewCard 
            text="I definitely recommend this saloon, services are so good, Swetha garu has so much of patience while listening to customers."
            author="Nandu C."
            delay={0}
          />
          <ReviewCard 
            text="My first experience of haircut with feathers cut was very awesome with these people... charges are very reasonable, perfect service with friendly environment."
            author="Mandala Sravya Goud"
            delay={0.1}
          />
          <ReviewCard 
            text="Great place to learn any courses from here. The one-on-one learning experience and clear explanations are highly praised."
            author="GuessMe Fashion"
            delay={0.2}
          />
        </div>
        
        <div className="text-center">
          <a 
            href="#" 
            className="inline-block border-b-2 border-charcoal pb-1 font-bold text-charcoal hover:text-gold hover:border-gold transition-colors"
          >
            View All Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ text, author, delay }: { text: string, author: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-8 shadow-sm flex flex-col h-full border border-charcoal/5"
    >
      <div className="flex text-gold text-sm mb-6" aria-hidden="true">
        {'★'.repeat(5)}
      </div>
      <p className="text-charcoal/80 leading-relaxed mb-8 flex-grow font-medium">
        "{text}"
      </p>
      <div className="mt-auto">
        <p className="font-bold text-charcoal font-sora">— {author}</p>
        <p className="text-xs text-charcoal/40 uppercase tracking-wider mt-1">Google Review</p>
      </div>
    </motion.div>
  );
}
