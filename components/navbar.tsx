"use client";

import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
// import ShoppingCart from "./shopping-cart";
import Auth from "./auth";
import ShoppingCart from "./shopping-cart";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`py-4 border-b fixed w-full z-50 transition-all ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="container text-black flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Colorful Fruit and Vegetables Shop Logo.png"
            alt="Grochy Logo"
            width={80}
            height={80}
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-primary">
            Home
          </Link>
          <Link href="/about">About</Link>
          <Link href="/shop">Shop</Link>
          <div className="relative group">
            <button
              className="flex items-center gap-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              Pages <FaChevronDown className="text-xs" />
            </button>
            {isOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md py-2 w-48">
                <Link
                  href="/pages/faq"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  FAQ
                </Link>
                <Link
                  href="/pages/terms"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/pages/privacy"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Privacy Policy
                </Link>
              </div>
            )}
          </div>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button>
            <FaSearch className="text-xl" />
          </button>
          <Auth />
          <ShoppingCart />
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-black shadow-md py-4 px-6 mt-4">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>
              Shop
            </Link>
            <button
              className="flex items-center justify-between"
              onClick={() => setIsOpen(!isOpen)}
            >
              Pages <FaChevronDown className="text-xs" />
            </button>
            {isOpen && (
              <div className="pl-4 space-y-2">
                <Link
                  href="/pages/faq"
                  className="block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  href="/pages/terms"
                  className="block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/pages/privacy"
                  className="block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Privacy Policy
                </Link>
              </div>
            )}
            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button>
              <FaSearch className="text-xl" />
            </button>
            <Auth />
            <ShoppingCart />
          </div>
        </div>
      )}
    </nav>
  );
}
