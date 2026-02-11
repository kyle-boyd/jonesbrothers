export default function ContactSectionDesignForward() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-[#2a2a2a] rounded-2xl p-6 sm:p-8 lg:p-12 xl:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,178,224,0.1),transparent_70%)]"></div>
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Get your free estimate today. Same-day service available. No hidden fees, no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
              <a
                href="tel:+17171234567"
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 text-lg font-semibold w-full sm:w-auto text-center"
              >
                Call (717) 123-4567
              </a>
              <a
                href="mailto:info@jonesbrothers.com"
                className="px-8 py-4 bg-transparent border-2 border-[#2a2a2a] text-white rounded-lg hover:border-primary hover:bg-[#1a1a1a] transition-all duration-300 text-lg font-semibold w-full sm:w-auto text-center"
              >
                Email Us
              </a>
            </div>
            <div className="pt-8 border-t border-[#2a2a2a]">
              <p className="text-lg font-semibold mb-3 text-white">Service Areas</p>
              <p className="text-gray-400">
                Serving Lancaster, Lititz, Ephrata, Manheim, and surrounding areas in Lancaster County
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
