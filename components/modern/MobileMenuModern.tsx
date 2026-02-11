"use client";

import Link from "next/link";
import { useEffect, useCallback } from "react";

interface MobileMenuModernProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenuModern({ isOpen, onClose }: MobileMenuModernProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  return (
    <>
      {isOpen && (
        <div
          className="max-[800px]:block min-[801px]:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-[400] transition-opacity duration-300"
          onClick={onClose}
          aria-hidden
        />
      )}
      <nav
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        onKeyDown={handleKeyDown}
        className={`max-[800px]:block min-[801px]:hidden fixed inset-0 z-[500] bg-white/98 backdrop-blur-md transition-transform duration-300 ease-in-out shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto pt-20 pb-8">
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
          <ul className="list-none m-0 p-0 flex-1 flex flex-col justify-center px-8">
            <li className="mb-6">
              <Link
                href="#about"
                onClick={onClose}
                className="text-gray-700 no-underline text-xl font-light hover:text-primary block py-4 transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li className="mb-6">
              <Link
                href="#services"
                onClick={onClose}
                className="text-gray-700 no-underline text-xl font-light hover:text-primary block py-4 transition-colors duration-300"
              >
                Services
              </Link>
            </li>
            <li className="mb-6">
              <Link
                href="#contact"
                onClick={onClose}
                className="px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white no-underline rounded-full hover:shadow-lg transition-all duration-300 inline-block text-center"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
