export default function WhatWeHaulSection() {
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
    <section id="what-we-haul" className="services max-w-[880px] mx-auto my-6 relative text-left py-12 md:py-6 md:my-4">
      <h2 className="xLgText text-5xl font-semibold m-0 lg:text-4xl md:text-2xl">
        What we haul
      </h2>
      <ul className="junkList columns-2 -webkit-columns-2 -moz-columns-2 list-none p-0 m-0 mt-4">
        {items.map((item, index) => (
          <li key={index} className="sText text-2xl lg:text-base">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
