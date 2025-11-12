import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            La Kahilaba Collection
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            Timeless fashion, crafted with elegance and inspired by modern minimalism.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-4 text-lg">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-700 hover:text-black transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/collections" className="text-gray-700 hover:text-black transition">
                Collections
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-black transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-4 text-lg">Help</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy-policy" className="text-gray-700 hover:text-black transition">
                Privacy Policies
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-gray-700 hover:text-black transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} La Kahalaba Collection. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
