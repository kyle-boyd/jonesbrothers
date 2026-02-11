export default function FooterModern() {
  return (
    <footer className="py-16 px-4 sm:px-6 border-t border-gray-100 mt-20">
      <div className="max-w-[900px] mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-light mb-4 text-gray-900">Contact Us</h3>
            <p className="text-gray-600 mb-2">
              <a href="tel:+17171234567" className="text-primary hover:text-secondary transition-colors">
                (717) 123-4567
              </a>
            </p>
            <p className="text-gray-600 mb-2">
              <a href="mailto:info@jonesbrothers.com" className="text-primary hover:text-secondary transition-colors">
                info@jonesbrothers.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-light mb-4 text-gray-900">Service Areas</h3>
            <p className="text-gray-600 text-sm">
              Lancaster, Lititz, Ephrata, Manheim, and all of Lancaster County, PA
            </p>
          </div>
          <div>
            <h3 className="text-xl font-light mb-4 text-gray-900">Quick Links</h3>
            <ul className="list-none p-0 m-0 space-y-2">
              <li>
                <a href="#services" className="text-gray-600 hover:text-primary transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#what-we-haul" className="text-gray-600 hover:text-primary transition-colors text-sm">
                  What We Haul
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-600 hover:text-primary transition-colors text-sm">
                  Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 font-light">
            &copy; {new Date().getFullYear()} Jones Brothers Junk Removal. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
}
