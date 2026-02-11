export default function WhatWeHaulSectionTraditional() {
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
    <section id="what-we-haul" className="services max-w-[900px] mx-auto my-12 relative text-left py-12 md:py-8 md:my-6 border-b-2 border-gray-300">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-6 m-0 lg:text-3xl lg:mb-4 md:text-2xl md:mb-3 text-gray-900 font-serif">
          What We Haul
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto font-serif mb-2">
          We remove almost anything. If you&apos;re not sure, just ask!
        </p>
        <p className="text-base text-gray-600 max-w-xl mx-auto font-serif italic">
          No item is too unusual. From furniture to construction debris, we provide knowledgeable, professional removal for every type of junk.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-2 border-gray-300 p-4 sm:p-6 bg-gray-50 rounded-2xl">
        {items.map((item, index) => (
          <div
            key={index}
            className="text-lg text-gray-700 lg:text-base font-serif flex items-center p-3 rounded-xl hover:bg-white transition-colors duration-200 border border-transparent hover:border-gray-300"
          >
            <span className="mr-3 text-primary font-bold text-xl">•</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center border-t-2 border-gray-300 pt-8">
        <p className="text-lg text-gray-700 font-serif">
          Don&apos;t see what you need? <a href="tel:+17171234567" className="text-primary hover:text-secondary transition-colors font-bold">Give us a call</a> - we probably haul it!
        </p>
      </div>
    </section>
  );
}
