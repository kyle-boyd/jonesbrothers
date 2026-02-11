export default function WhatWeHaulSectionModern() {
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
    <section id="what-we-haul" className="services max-w-[900px] mx-auto my-16 relative text-left py-16 md:py-10 md:my-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-light mb-6 m-0 tracking-tight lg:text-4xl lg:mb-4 md:text-3xl md:mb-3 text-gray-900">
          What We Haul
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We remove almost anything. If you&apos;re not sure, just ask!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 rounded-2xl p-6 sm:p-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="text-lg text-gray-700 lg:text-base flex items-center p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 bg-white"
          >
            <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-lg text-gray-600">
          Don&apos;t see what you need? <a href="tel:+17171234567" className="text-primary hover:text-secondary transition-colors font-medium">Give us a call</a> - we probably haul it!
        </p>
      </div>
    </section>
  );
}
