export default function TrustBar() {
  return (
    <div className="bg-ivory border-b border-charcoal/5 py-8 lg:py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-charcoal/10">
          <div className="text-center px-4 flex flex-col items-center justify-center">
            <span className="text-3xl md:text-4xl font-bold text-charcoal font-sora mb-1 block">4.9★</span>
            <span className="text-sm font-medium text-charcoal/60 uppercase tracking-wide">Google Rating</span>
          </div>
          <div className="text-center px-4 flex flex-col items-center justify-center">
            <span className="text-3xl md:text-4xl font-bold text-charcoal font-sora mb-1 block">39</span>
            <span className="text-sm font-medium text-charcoal/60 uppercase tracking-wide">Google Reviews</span>
          </div>
          <div className="text-center px-4 flex flex-col items-center justify-center">
            <span className="text-xl md:text-2xl font-bold text-charcoal font-sora mb-1 block">Welcoming</span>
            <span className="text-sm font-medium text-charcoal/60 uppercase tracking-wide">Customer Experience</span>
          </div>
          <div className="text-center px-4 flex flex-col items-center justify-center">
            <span className="text-xl md:text-2xl font-bold text-charcoal font-sora mb-1 block">Hygienic</span>
            <span className="text-sm font-medium text-charcoal/60 uppercase tracking-wide">Salon Environment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
