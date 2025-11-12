"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full h-[80px] bg-white flex items-center justify-between px-4 md:px-8 lg:px-16 shadow-md z-50">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/logo1.png"
            alt="Logo"
            width={50}
            height={10}
            className="w-auto h-auto ml-2 sm:ml-4 cursor-pointer"
          />
        </Link>
        <h1 className="text-black font-bold text-lg sm:text-xl">La Khilaba</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-gray-800">
        <Link href="/" className="hover:text-[#333333] transition">
          Home
        </Link>
        <Link href="/collections" className="hover:text-[#333333] transition">
          Collections
        </Link>
        <Link href="/contact" className="hover:text-[#333333] transition">
          Contact
        </Link>
      </div>

      {/* Actions (User + Wishlist) */}
      <div className="hidden sm:flex items-center space-x-4">
        {/* Wishlist Icon - Always visible */}
        <Link href="/wishlist">
          <Image
            src="/images/heart-icon.svg"
            alt="Wishlist"
            width={24}
            height={24}
            className="w-6 h-6 cursor-pointer hover:opacity-80"
          />
        </Link>

        {/* Show user profile if logged in */}
        {user && <UserButton />}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-3">
        {/* Wishlist Icon - Always visible */}
        <Link href="/wishlist">
          <Image
            src="/images/heart-icon.svg"
            alt="Wishlist"
            width={24}
            height={24}
            className="w-6 h-6 cursor-pointer hover:opacity-80"
          />
        </Link>

        {/* Show User Button if logged in */}
        {user && <UserButton />}

        {/* Menu Toggle */}
        <button
          aria-label="Toggle menu"
          className="text-gray-800 focus:outline-none hover:text-[#333333]"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-md md:hidden flex flex-col space-y-4 p-4">
          <Link href="/" className="hover:text-[#333333] transition">
            Home
          </Link>
          <Link href="/collections" className="hover:text-[#333333] transition">
            Collections
          </Link>
          <Link href="/contact" className="hover:text-[#333333] transition">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
