"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Projective Staffing
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link href="#services" className="text-gray-600 hover:text-blue-600">Services</Link>
          <Link href="#about" className="text-gray-600 hover:text-blue-600">About</Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</Link>
          <Link href="#services" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Services</Link>
          <Link href="#about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">About</Link>
          <Link href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;