import Link from "next/link";

export default function IntroSectionModern() {
  return (
    <section className="intro max-w-[900px] mx-auto py-20 md:py-12">
      <div className="mb-6">
        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
          Fast • Reliable • Affordable
        </span>
      </div>
      <h1 className="text-7xl font-extralight leading-tight mb-8 m-0 tracking-tight lg:text-5xl lg:mb-6 md:text-4xl md:mb-4 text-gray-900">
        Professional Junk Removal in Lancaster
      </h1>
      <p className="text-2xl text-gray-700 my-8 leading-relaxed lg:text-xl lg:my-6 md:text-lg font-light max-w-2xl mx-auto">
        Same-day service. Transparent pricing. We haul it all away so you don&apos;t have to.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-10">
        <a
          href="tel:+17171234567"
          className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white no-underline rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg font-medium"
        >
          Call (717) 123-4567
        </a>
        <Link
          href="#contact"
          className="inline-block px-10 py-4 border-2 border-gray-300 text-gray-700 no-underline rounded-full hover:border-primary hover:text-primary transition-all duration-300 text-lg font-medium"
        >
          Get Free Estimate
        </Link>
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="text-primary text-xl">✓</span>
          <span>Same-Day Service</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary text-xl">✓</span>
          <span>Licensed & Insured</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary text-xl">✓</span>
          <span>Eco-Friendly Disposal</span>
        </div>
      </div>
    </section>
  );
}
