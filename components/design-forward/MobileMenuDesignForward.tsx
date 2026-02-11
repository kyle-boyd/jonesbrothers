"use client";

import Link from "next/link";
import { useEffect, useCallback } from "react";

interface MobileMenuDesignForwardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenuDesignForward({ isOpen, onClose }: MobileMenuDesignForwardProps) {
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
          className="max-[800px]:block min-[801px]:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[400] transition-opacity duration-300"
          onClick={onClose}
          aria-hidden
        />
      )}
      <nav
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        onKeyDown={handleKeyDown}
        className={`max-[800px]:block min-[801px]:hidden fixed inset-0 z-[500] bg-[#0a0a0a] transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto pt-20 pb-8 px-6">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-4 p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="list-none m-0 p-0 flex-1 flex flex-col justify-center space-y-2">
            <li>
              <Link
                href="#services"
                onClick={onClose}
                className="text-gray-300 hover:text-white block py-4 text-lg font-medium transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#what-we-haul"
                onClick={onClose}
                className="text-gray-300 hover:text-white block py-4 text-lg font-medium transition-colors"
              >
                What We Haul
              </Link>
            </li>
            <li>
              <Link
                href="#process"
                onClick={onClose}
                className="text-gray-300 hover:text-white block py-4 text-lg font-medium transition-colors"
              >
                Process
              </Link>
            </li>
            <li>
              <Link
                href="#reviews"
                onClick={onClose}
                className="text-gray-300 hover:text-white block py-4 text-lg font-medium transition-colors"
              >
                Reviews
              </Link>
            </li>
            <li className="pt-6">
              <Link
                href="#contact"
                onClick={onClose}
                className="block px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-center text-base font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
