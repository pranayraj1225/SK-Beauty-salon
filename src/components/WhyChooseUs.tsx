import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const points = [
    {
      num: "01",
      title: "Personalized Attention",
      desc: "Customers mention that staff listen patiently to their requirements."
    },
    {
      num: "02",
      title: "Comfortable Ambience",
      desc: "Reviews highlight the salon's cool and welcoming space."
    },
    {
      num: "03",
      title: "Hygiene & Cleanliness",
      desc: "Customers specifically mention the hygienic environment."
    },
    {
      num: "04",
      title: "Friendly Experience",
      desc: "Reviews repeatedly describe a friendly environment and good service."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-sora"
          >
            Why Customers Choose SK Beauty Salon
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="text-6xl md:text-7xl font-black font-sora text-white/5 absolute -top-8 -left-4 z-0 pointer-events-none">
                {point.num}
              </div>
              <div className="relative z-10 pt-4">
                <div className="h-[2px] w-12 bg-gold mb-6"></div>
                <h3 className="text-xl font-bold font-sora mb-4">{point.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
