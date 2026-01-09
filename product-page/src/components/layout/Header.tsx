"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* This is Top Banner */}
      <div className="bg-black text-white py-3 px-4 text-center text-sm">
        <p>
          New season coming! Discount 10% for all products!{" "}
          <Link href="/shop" className="underline hover:text-gray-300">
            Checkout Now!
          </Link>
          <span className="ml-4">20:40</span>
        </p>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="text-xl font-light tracking-wider">
                JOHN LEWIS
                <span className="block text-xs">& PARTNERS</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900">
                Categories
                <ChevronDown className="w-4 h-4" />
              </button>
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4">
              <button 
                className="p-2 hover:bg-gray-100 rounded-lg transition"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-gray-700" />
              </button>

              <Link 
                href="/signin" 
                className="hidden sm:flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Sign in
              </Link>

              <button 
                className="p-2 hover:bg-gray-100 rounded-lg transition"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5 text-gray-700" />
              </button>

              <Link 
                href="/cart" 
                className="p-2 hover:bg-gray-100 rounded-lg transition relative"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  2
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-4">
              <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900">
                Categories
                <ChevronDown className="w-4 h-4" />
              </button>
              <Link href="/signin" className="block text-gray-700 hover:text-gray-900">
                Sign in
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}