"use client";

import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/site";
import { useState } from "react";
import MobileMenuModern from "./MobileMenuModern";

export default function HeaderModern() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[350] bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="w-full flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-5 lg:py-6">
          <div className="logo flex items-center justify-center gap-2">
            <Image
              src={asset("/images/logo.svg")}
              alt="Jones Brothers Junk Removal"
              width={48}
              height={48}
              priority
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
            />
            <span className="text-lg sm:text-xl lg:text-2xl font-light tracking-tight text-gray-900 pl-2">
              Jones Brothers
            </span>
          </div>

          <nav className="hidden min-[801px]:block">
            <ul className="flex items-center list-none m-0 p-0 gap-8">
              <li>
                <Link
                  href="#about"
                  className="text-gray-700 no-underline text-lg font-light hover:text-primary transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-700 no-underline text-lg font-light hover:text-primary transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white no-underline rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-base font-medium"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="hidden max-[800px]:inline-flex p-2 text-gray-700 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>
      <MobileMenuModern
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
