"use client";

import Link from "next/link";
import { useEffect, useCallback } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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
          className="max-[800px]:block min-[801px]:hidden fixed inset-0 bg-black/40 z-[400]"
          onClick={onClose}
          aria-hidden
        />
      )}
      <nav
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        onKeyDown={handleKeyDown}
        className={`max-[800px]:block min-[801px]:hidden fixed inset-0 z-[500] bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto pt-12 pb-8">
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
          <ul className="list-none m-0 p-0 px-6 flex-1 flex flex-col justify-center gap-2">
            <li>
              <Link
                href="#about"
                onClick={onClose}
                className="text-text no-underline text-2xl font-medium hover:text-primary block px-6 py-4 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                onClick={onClose}
                className="text-text no-underline text-2xl font-medium hover:text-primary block px-6 py-4 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={onClose}
                className="cta-button inline-block px-8 py-3 bg-primary text-white no-underline rounded-full hover:bg-secondary transition-colors duration-400 mx-6 mt-4 text-center text-xl font-medium"
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
