import { motion } from 'motion/react';
import React from 'react';

// Use placeholders since uploaded files could not be located on the filesystem.
// The user will need to configure these with actual paths later.
const galleryImages = [
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Gallery Image 1", className: "md:col-span-2 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Gallery Image 2", className: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Gallery Image 3", className: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Gallery Image 4", className: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Gallery Image 5", className: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Gallery Image 6", className: "md:col-span-2 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Gallery Image 7", className: "md:col-span-2 md:row-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Our Work & Ambience</h2>
          <p className="text-lg text-charcoal/70">
            Take a look at our premium salon environment and the stunning results our stylists achieve for our clients every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden group ${img.className} h-[300px] md:h-auto bg-charcoal/10 rounded-lg`}
            >
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-6">
                <span className="text-white font-medium">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
