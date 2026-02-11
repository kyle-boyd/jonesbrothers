"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[100] bg-white shadow-[0_1px_1px_hsl(0deg_0%_0%_/_0.015),0_2px_2px_hsl(0deg_0%_0%_/_0.015),0_4px_4px_hsl(0deg_0%_0%_/_0.015),0_8px_8px_hsl(0deg_0%_0%_/_0.015),0_16px_16px_hsl(0deg_0%_0%_/_0.015)]">
        <div className="container flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 z-[100]">
          <div className="logo flex items-center justify-center gap-2 sm:gap-3">
            <Image
              src="/images/logo.svg"
              alt="Jones Brothers Junk Removal"
              width={48}
              height={48}
              priority
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
            />
            <span className="logoText text-lg sm:text-xl lg:text-2xl">
              Jones Brothers
            </span>
          </div>

          <nav className="hidden lg:flex">
            <ul className="flex items-center list-none m-0 p-0 gap-6">
              <li>
                <Link
                  href="#about"
                  className="text-text no-underline text-xl font-medium hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-text no-underline text-xl font-medium hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="cta-button inline-block px-6 py-2 bg-primary text-white no-underline rounded-full hover:bg-secondary transition-colors duration-400 text-base font-medium whitespace-nowrap"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-text hover:text-primary transition-colors"
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
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
