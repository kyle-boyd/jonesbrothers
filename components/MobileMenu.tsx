"use client";

import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      <nav
        className={`lg:hidden sliding-navbar fixed top-0 h-screen w-[min(300px,85vw)] bg-white transition-all duration-[800ms] ease-in-out z-[300] rounded-r-[36px] pt-12 ${
          isOpen ? "left-0" : "-left-[400px]"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-text hover:text-primary transition-colors"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="navbar--items list-none m-0 p-0">
          <li className="mb-4">
            <Link
              href="#about"
              onClick={onClose}
              className="text-text no-underline text-2xl font-medium hover:text-primary block px-6 py-2"
            >
              About Us
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="#services"
              onClick={onClose}
              className="text-text no-underline text-2xl font-medium hover:text-primary block px-6 py-2"
            >
              Services
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="#contact"
              onClick={onClose}
              className="cta-button inline-block px-8 py-2 bg-primary text-white no-underline rounded-full hover:bg-secondary transition-colors duration-400 mx-6"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <div
          className="lg:hidden mask fixed top-0 left-0 h-screen w-full bg-black z-[200] opacity-25"
          onClick={onClose}
        />
      )}
    </>
  );
}
