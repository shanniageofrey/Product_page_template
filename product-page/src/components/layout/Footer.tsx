import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-400 text-gray-300">
      {/* This is the Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-400">
                Get the latest updates on new products and upcoming sales
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
                aria-label="Email address"
              />
              <button className="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*This is the  Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/stores" className="hover:text-white transition">
                  Store Locator
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-white font-semibold mb-4">Help</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white transition">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white transition">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-white transition">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/women" className="hover:text-white transition">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/men" className="hover:text-white transition">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/kids" className="hover:text-white transition">
                  Kids
                </Link>
              </li>
              <li>
                <Link href="/sale" className="hover:text-white transition">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white transition">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-white transition">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="text-xl font-light tracking-wider text-white">
              JOHN LEWIS
              <span className="block text-xs">& PARTNERS</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            <Link
              href="https://facebook.com"
              className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com"
              className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com"
              className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://youtube.com"
              className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </Link>
          </div>

          <p className="text-sm text-gray-500">
            © 2026 John Lewis & Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}