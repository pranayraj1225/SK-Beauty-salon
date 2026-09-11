import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-ivory/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="z-50">
            <h1 className={`font-sora font-bold tracking-tight uppercase transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-charcoal text-xl' : 'text-white text-xl md:text-2xl drop-shadow-sm'}`} style={{ fontWeight: 'normal', fontFamily: 'Georgia' }}>
              SK Beauty Salon
            </h1>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm font-medium transition-colors hover:text-gold ${
                      isScrolled ? 'text-charcoal/80' : 'text-white/90 drop-shadow-sm'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#book"
              onClick={(e) => handleNavClick(e, '#book')}
              className="bg-gold text-white px-6 py-2.5 rounded-none font-semibold text-sm hover:bg-gold/90 transition-colors flex items-center gap-2"
            >
              Book Appointment
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden z-50 p-2 -mr-2 transition-colors ${
              isScrolled || isMobileMenuOpen ? 'text-charcoal' : 'text-white drop-shadow-sm'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24}  aria-hidden="true" /> : <Menu size={24}  aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-ivory pt-24 px-6 pb-6 flex flex-col md:hidden"
          >
            <ul className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-2xl font-sora font-semibold text-charcoal block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-auto flex flex-col gap-4">
              <a
                href="tel:06300982227"
                className="bg-charcoal text-white w-full py-4 font-semibold text-center flex justify-center items-center gap-2"
              >
                <Phone size={18}  aria-hidden="true" />
                Call 063009 82227
              </a>
              <a
                href="https://wa.me/916300982227"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white w-full py-4 font-semibold text-center flex justify-center items-center gap-2"
              >
                <MessageCircle size={18}  aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
