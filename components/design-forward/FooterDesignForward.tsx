export default function FooterDesignForward() {
  return (
    <footer className="py-16 px-4 sm:px-6 border-t border-[#1a1a1a] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <p className="text-gray-400 mb-2">
              <a href="tel:+17171234567" className="text-primary hover:text-secondary transition-colors">
                (717) 123-4567
              </a>
            </p>
            <p className="text-gray-400 mb-2">
              <a href="mailto:info@jonesbrothers.com" className="text-primary hover:text-secondary transition-colors">
                info@jonesbrothers.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Service Areas</h3>
            <p className="text-gray-400 text-sm">
              Lancaster, Lititz, Ephrata, Manheim, and all of Lancaster County, PA
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#what-we-haul" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  What We Haul
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-[#1a1a1a]">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Jones Brothers Junk Removal. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
}
