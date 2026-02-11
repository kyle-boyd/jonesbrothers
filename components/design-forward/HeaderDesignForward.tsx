"use client";

import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/site";
import { useState } from "react";
import MobileMenuDesignForward from "./MobileMenuDesignForward";

export default function HeaderDesignForward() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[350] bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-12 py-4">
          <div className="logo flex items-center gap-3">
            <div className="relative">
              <Image
                src={asset("/images/logo.svg")}
                alt="Jones Brothers Junk Removal"
                width={40}
                height={40}
                priority
                className="filter brightness-0 invert"
              />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Jones Brothers
            </span>
          </div>

          <nav className="hidden min-[801px]:flex items-center gap-8">
            <Link
              href="#services"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Services
            </Link>
            <Link
              href="#what-we-haul"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              What We Haul
            </Link>
            <Link
              href="#process"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Process
            </Link>
            <Link
              href="#reviews"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Reviews
            </Link>
            <Link
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-sm font-semibold"
            >
              Get Started
            </Link>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="hidden max-[800px]:inline-flex text-white p-2"
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
      <MobileMenuDesignForward
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
