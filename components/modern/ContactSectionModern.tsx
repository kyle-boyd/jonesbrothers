export default function ContactSectionModern() {
  return (
    <section id="contact" className="contact max-w-[900px] mx-auto my-16 relative py-16 md:py-10 md:my-8">
      <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 md:p-8 text-center text-white">
        <h2 className="text-5xl font-light mb-6 m-0 tracking-tight lg:text-4xl lg:mb-4 md:text-3xl md:mb-3">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto opacity-95 lg:text-lg md:text-base">
          Get your free estimate today. Same-day service available. No hidden fees, no surprises.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="tel:+17171234567"
            className="inline-block px-10 py-4 bg-white text-primary no-underline rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg font-medium"
          >
            Call (717) 123-4567
          </a>
          <a
            href="mailto:info@jonesbrothers.com"
            className="inline-block px-10 py-4 border-2 border-white text-white no-underline rounded-full hover:bg-white hover:text-primary transition-all duration-300 text-lg font-medium"
          >
            Email Us
          </a>
        </div>
        <div className="mt-10 pt-10 border-t border-white/30">
          <p className="text-lg mb-4 opacity-95">Service Areas</p>
          <p className="text-base opacity-90">
            Serving Lancaster, Lititz, Ephrata, Manheim, and surrounding areas in Lancaster County
          </p>
        </div>
      </div>
    </section>
  );
}
