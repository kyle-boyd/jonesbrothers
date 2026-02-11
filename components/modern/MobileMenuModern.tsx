"use client";

import Link from "next/link";

interface MobileMenuModernProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenuModern({ isOpen, onClose }: MobileMenuModernProps) {
  return (
    <>
      <nav
        className={`lg:hidden sliding-navbar fixed top-0 h-screen w-[min(300px,85vw)] bg-white/98 backdrop-blur-md transition-all duration-500 ease-in-out z-[300] shadow-2xl ${
          isOpen ? "left-0" : "-left-[400px]"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-4 p-2 text-gray-700 hover:text-primary transition-colors"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="navbar--items list-none m-0 p-0 pt-20">
          <li className="mb-6">
            <Link
              href="#about"
              onClick={onClose}
              className="text-gray-700 no-underline text-xl font-light hover:text-primary block px-8 py-3 transition-colors duration-300"
            >
              About Us
            </Link>
          </li>
          <li className="mb-6">
            <Link
              href="#services"
              onClick={onClose}
              className="text-gray-700 no-underline text-xl font-light hover:text-primary block px-8 py-3 transition-colors duration-300"
            >
              Services
            </Link>
          </li>
          <li className="mb-6">
            <Link
              href="#contact"
              onClick={onClose}
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white no-underline rounded-full hover:shadow-lg transition-all duration-300 mx-8 inline-block"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <div
          className="lg:hidden mask fixed top-0 left-0 h-screen w-full bg-black/30 backdrop-blur-sm z-[200] transition-opacity duration-300"
          onClick={onClose}
        />
      )}
    </>
  );
}
