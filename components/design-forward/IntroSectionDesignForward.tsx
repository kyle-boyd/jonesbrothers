import Link from "next/link";

export default function IntroSectionDesignForward() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,178,224,0.1),transparent_70%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 sm:py-24 md:py-28 lg:py-32 xl:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-400 font-medium">Fast • Reliable • Affordable</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Professional Junk Removal
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              in Lancaster
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Same-day service. Transparent pricing. We haul it all away so you don&apos;t have to.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
            <a
              href="tel:+17171234567"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 text-lg font-semibold w-full sm:w-auto text-center"
            >
              Call (717) 123-4567
            </a>
            <Link
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-[#2a2a2a] text-white rounded-lg hover:border-primary hover:bg-[#1a1a1a] transition-all duration-300 text-lg font-semibold w-full sm:w-auto text-center"
            >
              Get Free Estimate
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-gray-300 font-medium">Same-Day Service</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-sm text-gray-300 font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm text-gray-300 font-medium">Eco-Friendly Disposal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
