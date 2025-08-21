'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center">
              <i className="ri-leaf-line text-white text-xl"></i>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-800">JusteÉnergie</h1>
              <p className="text-sm text-green-600 font-medium">CONSEILS</p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-blue-800 hover:text-green-600 font-medium transition-colors cursor-pointer">
              Accueil
            </Link>
            <Link href="/qui-sommes-nous" className="text-blue-800 hover:text-green-600 font-medium transition-colors cursor-pointer">
              Qui sommes-nous ?
            </Link>
            <Link href="/temoignages" className="text-blue-800 hover:text-green-600 font-medium transition-colors cursor-pointer">
              Témoignages clients
            </Link>
            <Link href="/contact" className="text-blue-800 hover:text-green-600 font-medium transition-colors cursor-pointer">
              Nous contacter
            </Link>
          </nav>

          <button 
            className="md:hidden text-blue-800 w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="/" className="text-blue-800 hover:text-green-600 font-medium transition-colors cursor-pointer">
                Accueil
              </Link>
              <Link href="/qui-sommes-nous" className="text-blue-800 hover:text-green-600 font-medium transition-colors cursor-pointer">
                Qui sommes-nous ?
              </Link>
              <Link href="/temoignages" className="text-blue-800 hover:text-green-600 font-medium transition-colors cursor-pointer">
                Témoignages clients
              </Link>
              <Link href="/contact" className="text-blue-800 hover:text-green-600 font-medium transition-colors cursor-pointer">
                Nous contacter
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
