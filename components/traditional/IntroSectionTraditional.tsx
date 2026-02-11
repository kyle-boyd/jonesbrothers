import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/site";

export default function IntroSectionTraditional() {
  return (
    <section className="intro max-w-[1200px] mx-auto py-16 md:py-10 border-b-2 border-gray-300 pb-16">
      {/* Asymmetric Hero Layout */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Left side - Content */}
        <div className="order-2 lg:order-1">
          <div className="mb-6">
            <span className="inline-block px-5 py-2.5 bg-primary text-white rounded-full text-sm font-semibold tracking-wide mb-6 shadow-lg">
              Trusted • Reliable • Professional
            </span>
          </div>
          <h1 className="text-5xl font-bold leading-tight mb-6 m-0 lg:text-6xl lg:mb-5 md:text-4xl md:mb-4 text-gray-900 font-serif">
            Professional Junk Removal Services in Lancaster
          </h1>
          <p className="text-xl text-gray-700 my-8 leading-relaxed lg:text-lg lg:my-6 md:text-base font-serif">
            Family-owned and operated. Same-day service. Transparent pricing. We handle the heavy lifting so you don&apos;t have to.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start mt-10">
            <a
              href="tel:+17171234567"
              className="inline-block px-10 py-4 bg-primary text-white no-underline rounded-full hover:bg-secondary transition-colors duration-200 text-lg font-semibold tracking-wide shadow-lg"
            >
              Call (717) 123-4567
            </a>
            <Link
              href="#contact"
              className="inline-block px-10 py-4 border-2 border-gray-400 text-gray-800 no-underline rounded-full hover:border-primary hover:bg-gray-50 transition-colors duration-200 text-lg font-semibold tracking-wide shadow-md"
            >
              Free Estimate
            </Link>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="order-1 lg:order-2">
          <div className="relative w-full h-[280px] sm:h-[320px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={asset("/images/family-hero.jpg")}
              alt="Jones Brothers - Family-owned and operated junk removal service in Lancaster"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Trust Badges - Inspired by Big Mike's design */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 border-t-2 border-gray-300 pt-12">
        <div className="text-center p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
          <div className="text-4xl font-bold text-primary mb-2 font-serif">500+</div>
          <div className="text-sm text-gray-700 font-semibold font-serif">Happy Customers</div>
        </div>
        <div className="text-center p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
          <div className="text-4xl font-bold text-primary mb-2 font-serif">5★</div>
          <div className="text-sm text-gray-700 font-semibold font-serif">Star Reviews</div>
        </div>
        <div className="text-center p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
          <div className="text-4xl font-bold text-primary mb-2 font-serif">7</div>
          <div className="text-sm text-gray-700 font-semibold font-serif">Days a Week</div>
        </div>
        <div className="text-center p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
          <div className="text-4xl font-bold text-primary mb-2 font-serif">100%</div>
          <div className="text-sm text-gray-700 font-semibold">Satisfaction</div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-700 border-t-2 border-gray-300 pt-8">
        <div className="flex items-center gap-2 font-serif">
          <span className="text-primary text-xl font-bold">✓</span>
          <span className="font-semibold">Same-Day Service Available</span>
        </div>
        <div className="flex items-center gap-2 font-serif">
          <span className="text-primary text-xl font-bold">✓</span>
          <span className="font-semibold">Licensed & Fully Insured</span>
        </div>
        <div className="flex items-center gap-2 font-serif">
          <span className="text-primary text-xl font-bold">✓</span>
          <span className="font-semibold">Eco-Friendly Disposal</span>
        </div>
      </div>
    </section>
  );
}
