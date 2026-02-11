export default function FooterTraditional() {
  return (
    <footer className="py-10 px-4 sm:px-6 border-t-2 border-gray-300 mt-12 bg-gray-100">
      <div className="max-w-[900px] mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 font-serif">Contact Us</h3>
            <p className="text-gray-700 mb-2 font-serif">
              <a href="tel:+17171234567" className="text-primary hover:text-secondary transition-colors font-semibold">
                (717) 123-4567
              </a>
            </p>
            <p className="text-gray-700 mb-2 font-serif">
              <a href="mailto:info@jonesbrothers.com" className="text-primary hover:text-secondary transition-colors font-semibold">
                info@jonesbrothers.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 font-serif">Service Areas</h3>
            <p className="text-gray-700 text-sm font-serif mb-2">
              <span className="font-semibold">Primary Areas:</span> Lancaster, Lititz, Ephrata, Manheim, Mount Joy, Middletown
            </p>
            <p className="text-gray-700 text-sm font-serif">
              <span className="font-semibold">Also Serving:</span> Hershey, Hummelstown, Palmyra, Columbia, and all surrounding communities within 30 miles
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 font-serif">Quick Links</h3>
            <ul className="list-none p-0 m-0 space-y-2">
              <li>
                <a href="#services" className="text-gray-700 hover:text-primary transition-colors text-sm font-serif font-semibold">
                  Services
                </a>
              </li>
              <li>
                <a href="#what-we-haul" className="text-gray-700 hover:text-primary transition-colors text-sm font-serif font-semibold">
                  What We Haul
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-700 hover:text-primary transition-colors text-sm font-serif font-semibold">
                  Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t-2 border-gray-300">
          <p className="text-sm text-gray-700 font-semibold font-serif">
            &copy; {new Date().getFullYear()} Jones Brothers Junk Removal. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
}
