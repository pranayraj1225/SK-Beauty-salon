import { Phone, MessageCircle, Calendar } from 'lucide-react';

export default function MobileCTA() {
  return (
    <>
      {/* Desktop Floating WhatsApp CTA */}
      <a 
        href="https://wa.me/916300982227" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 items-center justify-center"
        aria-label="WhatsApp Us"
      >
        <MessageCircle size={28}  aria-hidden="true" />
      </a>

      {/* Mobile Fixed Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-charcoal/10 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex">
        <a 
          href="tel:06300982227" 
          className="flex-1 flex flex-col items-center justify-center py-3 text-charcoal font-semibold text-xs border-r border-charcoal/10 active:bg-ivory transition-colors"
        >
          <Phone size={20} className="mb-1"  aria-hidden="true" />
          Call
        </a>
        <a 
          href="https://wa.me/916300982227"
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex-1 flex flex-col items-center justify-center py-3 text-[#25D366] font-semibold text-xs border-r border-charcoal/10 active:bg-ivory transition-colors"
        >
          <MessageCircle size={20} className="mb-1"  aria-hidden="true" />
          WhatsApp
        </a>
        <a 
          href="#book"
          className="flex-1 flex flex-col items-center justify-center py-3 text-gold font-semibold text-xs active:bg-ivory transition-colors"
        >
          <Calendar size={20} className="mb-1"  aria-hidden="true" />
          Book
        </a>
      </div>
    </>
  );
}
