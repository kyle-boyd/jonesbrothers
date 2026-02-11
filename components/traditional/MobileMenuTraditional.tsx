"use client";

import Link from "next/link";
import { useEffect, useCallback } from "react";

interface MobileMenuTraditionalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenuTraditional({ isOpen, onClose }: MobileMenuTraditionalProps) {
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
          className="max-[800px]:block min-[801px]:hidden fixed inset-0 bg-black/40 z-[400] transition-opacity duration-200"
          onClick={onClose}
          aria-hidden
        />
      )}
      <nav
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        onKeyDown={handleKeyDown}
        className={`max-[800px]:block min-[801px]:hidden fixed inset-0 z-[500] bg-white transition-transform duration-300 ease-in-out shadow-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto pt-16 pb-8">
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
          <ul className="list-none m-0 p-0 flex-1 flex flex-col justify-center px-8">
            <li className="mb-4">
              <Link
                href="#about"
                onClick={onClose}
                className="text-gray-800 no-underline text-lg font-semibold hover:text-primary block py-4 uppercase tracking-wide border-b border-gray-200"
              >
                About Us
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="#services"
                onClick={onClose}
                className="text-gray-800 no-underline text-lg font-semibold hover:text-primary block py-4 uppercase tracking-wide border-b border-gray-200"
              >
                Services
              </Link>
            </li>
            <li className="mb-4">
              <a
                href="tel:+17171234567"
                onClick={onClose}
                className="text-gray-800 no-underline text-lg font-semibold hover:text-primary block py-4 uppercase tracking-wide border-b border-gray-200"
              >
                (717) 123-4567
              </a>
            </li>
            <li className="mb-4">
              <Link
                href="#contact"
                onClick={onClose}
                className="px-8 py-4 bg-primary text-white no-underline rounded-full hover:bg-secondary transition-colors duration-200 inline-block font-semibold tracking-wide shadow-lg text-center"
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
