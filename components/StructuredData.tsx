export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Jones Brothers Junk Removal",
    description:
      "Professional junk removal and hauling services in Lancaster. We offer top-quality junk hauling and clean outs at affordable prices.",
    areaServed: {
      "@type": "City",
      name: "Lancaster",
    },
    serviceType: [
      "Junk Removal",
      "Hauling",
      "Clean Outs",
      "Yard Debris Removal",
      "Furniture Removal",
    ],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
