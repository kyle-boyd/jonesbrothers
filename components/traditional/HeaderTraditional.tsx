"use client";

import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/site";
import { useState } from "react";
import MobileMenuTraditional from "./MobileMenuTraditional";

export default function HeaderTraditional() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[100] bg-white border-b-2 border-gray-300 shadow-md">
        <div className="container flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 z-[100]">
          <div className="logo flex items-center justify-center gap-2">
            <Image
              src={asset("/images/logo.svg")}
              alt="Jones Brothers Junk Removal"
              width={52}
              height={52}
              priority
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
            />
            <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-normal text-gray-900 pl-3 font-serif">
              Jones Brothers
            </span>
          </div>

          <nav className="hidden lg:block">
            <ul className="flex items-center list-none m-0 p-0 gap-6">
              <li>
                <Link
                  href="#about"
                  className="text-gray-800 no-underline text-lg font-semibold hover:text-primary transition-colors duration-200 tracking-wide"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-800 no-underline text-lg font-semibold hover:text-primary transition-colors duration-200 tracking-wide"
                >
                  Services
                </Link>
              </li>
              <li>
                <a
                  href="tel:+17171234567"
                  className="text-gray-800 no-underline text-lg font-semibold hover:text-primary transition-colors duration-200 tracking-wide"
                >
                  (717) 123-4567
                </a>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="px-8 py-3 bg-primary text-white no-underline rounded-full hover:bg-secondary transition-colors duration-200 text-base font-semibold tracking-wide shadow-lg"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-800 hover:text-primary transition-colors"
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
      <MobileMenuTraditional
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
