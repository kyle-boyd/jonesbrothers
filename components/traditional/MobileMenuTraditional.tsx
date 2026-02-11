"use client";

import Link from "next/link";

interface MobileMenuTraditionalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenuTraditional({ isOpen, onClose }: MobileMenuTraditionalProps) {
  return (
    <>
      <nav
        className={`lg:hidden sliding-navbar fixed top-0 h-screen w-[min(280px,85vw)] bg-white border-r-2 border-gray-300 transition-all duration-300 ease-in-out z-[300] shadow-lg ${
          isOpen ? "left-0" : "-left-[400px]"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-800 hover:text-primary transition-colors"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="navbar--items list-none m-0 p-0 pt-16">
          <li className="mb-4">
            <Link
              href="#about"
              onClick={onClose}
              className="text-gray-800 no-underline text-lg font-semibold hover:text-primary block px-8 py-3 uppercase tracking-wide border-b border-gray-200"
            >
              About Us
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="#services"
              onClick={onClose}
              className="text-gray-800 no-underline text-lg font-semibold hover:text-primary block px-8 py-3 uppercase tracking-wide border-b border-gray-200"
            >
              Services
            </Link>
          </li>
          <li className="mb-4">
            <a
              href="tel:+17171234567"
              onClick={onClose}
              className="text-gray-800 no-underline text-lg font-semibold hover:text-primary block px-8 py-3 uppercase tracking-wide border-b border-gray-200"
            >
              (717) 123-4567
            </a>
          </li>
          <li className="mb-4">
            <Link
              href="#contact"
              onClick={onClose}
              className="px-8 py-3 bg-primary text-white no-underline rounded-full hover:bg-secondary transition-colors duration-200 mx-8 inline-block font-semibold tracking-wide shadow-lg"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <div
          className="lg:hidden mask fixed top-0 left-0 h-screen w-full bg-black/40 z-[200] transition-opacity duration-200"
          onClick={onClose}
        />
      )}
    </>
  );
}
