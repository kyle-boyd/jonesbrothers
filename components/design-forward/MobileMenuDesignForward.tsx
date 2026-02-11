"use client";

import Link from "next/link";

interface MobileMenuDesignForwardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenuDesignForward({ isOpen, onClose }: MobileMenuDesignForwardProps) {
  return (
    <>
      <nav
        className={`lg:hidden fixed top-0 right-0 h-screen w-[min(320px,85vw)] bg-[#0a0a0a] border-l border-[#1a1a1a] transition-transform duration-300 ease-in-out z-[300] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="list-none m-0 p-0 pt-20 px-6 space-y-4">
          <li>
            <Link
              href="#services"
              onClick={onClose}
              className="text-gray-300 hover:text-white block py-3 text-base font-medium transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#what-we-haul"
              onClick={onClose}
              className="text-gray-300 hover:text-white block py-3 text-base font-medium transition-colors"
            >
              What We Haul
            </Link>
          </li>
          <li>
            <Link
              href="#process"
              onClick={onClose}
              className="text-gray-300 hover:text-white block py-3 text-base font-medium transition-colors"
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              href="#reviews"
              onClick={onClose}
              className="text-gray-300 hover:text-white block py-3 text-base font-medium transition-colors"
            >
              Reviews
            </Link>
          </li>
          <li className="pt-4">
            <Link
              href="#contact"
              onClick={onClose}
              className="block px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-center text-sm font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] transition-opacity duration-300"
          onClick={onClose}
        />
      )}
    </>
  );
}
