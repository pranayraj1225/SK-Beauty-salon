export default function ReviewWall() {
  const keywords = [
    "Friendly Staff",
    "Great Ambience",
    "Hygienic Place",
    "Reasonable Charges",
    "Good Service",
    "Haircuts",
    "Hair Treatments",
    "Hairstyle Course"
  ];

  return (
    <div className="pb-24 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-center gap-4">
        {keywords.map((word, i) => (
          <div 
            key={i} 
            className="border border-charcoal/10 bg-white/50 px-6 py-3 rounded-full text-sm font-medium text-charcoal/70 hover:bg-white hover:border-gold/30 hover:text-charcoal transition-colors cursor-default"
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
}
