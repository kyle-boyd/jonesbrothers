import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="intro max-w-[880px] mx-auto py-12 md:py-6">
      <h1 className="text-4xl sm:text-5xl md:text-3xl lg:text-[64px] font-bold leading-[1.1] mb-6 m-0 lg:mb-4 md:mb-2">
        Lancaster junk removal you can trust!
      </h1>
      <p className="medText text-base sm:text-lg md:text-xl lg:text-2xl my-6 lg:my-4">
        At Jones Brothers Junk Removal, we make sure that you receive great
        service at affordable prices.
      </p>
      <Link
        href="#contact"
        className="cta-button inline-block px-8 py-2 bg-primary text-white no-underline rounded-full hover:bg-secondary transition-colors duration-400 text-base sm:text-lg md:text-xl"
      >
        Call now
      </Link>
    </section>
  );
}
