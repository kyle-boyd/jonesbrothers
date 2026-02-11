export default function ContactSectionTraditional() {
  return (
    <section id="contact" className="contact max-w-[900px] mx-auto my-12 relative py-12 md:py-8 md:my-6">
      <div className="bg-primary p-10 md:p-8 text-center text-white rounded-3xl border-4 border-gray-300 shadow-xl">
        <h2 className="text-4xl font-bold mb-6 m-0 lg:text-3xl lg:mb-4 md:text-2xl md:mb-3 font-serif">
          Ready to Get Started?
        </h2>
        <p className="text-lg mb-4 max-w-2xl mx-auto opacity-95 lg:text-base md:text-sm font-serif">
          Get your free estimate today. Same-day service available. No hidden fees, no surprises.
        </p>
        <p className="text-base mb-10 max-w-xl mx-auto opacity-90 lg:text-sm md:text-xs font-serif italic">
          Most estimates confirmed within 2 hours
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-10">
          <a
            href="tel:+17171234567"
            className="inline-block px-10 py-4 bg-white text-primary no-underline rounded-full hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold tracking-wide shadow-lg"
          >
            Call (717) 123-4567
          </a>
          <a
            href="mailto:info@jonesbrothers.com"
            className="inline-block px-10 py-4 border-2 border-white text-white no-underline rounded-full hover:bg-white hover:text-primary transition-colors duration-200 text-lg font-semibold tracking-wide shadow-md"
          >
            Email Us
          </a>
        </div>
        <div className="mt-10 pt-10 border-t-2 border-white/50">
          <p className="text-lg mb-4 opacity-95 font-serif font-bold">Service Areas</p>
          <p className="text-base mb-3 opacity-90 font-serif font-semibold">
            Primary Service Areas:
          </p>
          <p className="text-base mb-4 opacity-90 font-serif">
            Lancaster • Lititz • Ephrata • Manheim • Mount Joy • Middletown
          </p>
          <p className="text-sm mb-3 opacity-85 font-serif font-semibold">
            Also Serving:
          </p>
          <p className="text-xs sm:text-sm opacity-85 font-serif break-words">
            Hershey • Hummelstown • Palmyra • Columbia • Marietta • Bainbridge • Rheems • Campbelltown • Annville • Cleona • Cornwall • Myerstown • Denver • East Petersburg • Landisville • Maytown
          </p>
          <p className="text-xs sm:text-sm mt-4 opacity-80 font-serif italic">
            Serving all areas within 30 miles of Lancaster County
          </p>
        </div>
      </div>
    </section>
  );
}
