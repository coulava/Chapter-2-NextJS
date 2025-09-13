"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-red-400 text-white py-4 sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4 font-bold">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          OdyiE
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-200 font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/portofolio" className="hover:text-gray-200 font-semibold">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-gray-200 font-semibold">
              Blog
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-red-400 px-4 py-3 space-y-3 justify-center items-center text-center">
          <Link
            href="/"
            className="block hover:text-red-500 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/portofolio"
            className="block hover:text-red-500 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className="block hover:text-red-500 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
