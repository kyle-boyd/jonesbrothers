export default function WhatWeHaulSectionDesignForward() {
  const items = [
    "Appliances",
    "Carpet",
    "Clothing",
    "Computers",
    "Construction debris",
    "Estate contents",
    "Furniture",
    "Lawnmowers",
    "Mattresses",
    "Office furniture",
    "Recreational items",
    "Scrap metal",
    "Televisions",
    "Tires",
    "Tools",
    "Warehouse contents",
    "Yard waste",
  ];

  return (
    <section id="what-we-haul" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            What We Haul
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We remove almost anything. If you&apos;re not sure, just ask!
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-primary/50 hover:bg-[#222] transition-all duration-300 flex items-center gap-3"
            >
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span className="text-gray-300 font-medium text-sm">{item}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center pt-8 border-t border-[#2a2a2a]">
          <p className="text-lg text-gray-400">
            Don&apos;t see what you need?{" "}
            <a href="tel:+17171234567" className="text-primary hover:text-secondary transition-colors font-semibold">
              Give us a call
            </a>
            {" "}— we probably haul it!
          </p>
        </div>
      </div>
    </section>
  );
}
