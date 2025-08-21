
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 md:space-x-4">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-blue-600 via-blue-700 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                <i className="ri-leaf-line text-white text-lg md:text-2xl"></i>
              </div>
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-black text-blue-900">JusteÉnergie</h1>
              <p className="text-xs md:text-sm text-green-600 font-bold tracking-wider">CONSEILS</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/" className="text-blue-900 hover:text-green-600 font-semibold transition-colors cursor-pointer relative group">
              <span>Accueil</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link href="/services" className="text-blue-900 hover:text-green-600 font-semibold transition-colors cursor-pointer relative group">
              <span>Services</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link href="/qui-sommes-nous" className="text-blue-900 hover:text-green-600 font-semibold transition-colors cursor-pointer relative group">
              <span>Qui sommes-nous ?</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link href="/temoignages" className="text-blue-900 hover:text-green-600 font-semibold transition-colors cursor-pointer relative group">
              <span>Témoignages</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link href="/blog" className="text-blue-900 hover:text-green-600 font-semibold transition-colors cursor-pointer relative group">
              <span>Blog</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link href="/contact" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 lg:px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-phone-line text-sm"></i>
              </div>
              <span>Contact</span>
            </Link>
          </nav>

          <button 
            className="md:hidden text-blue-900 w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-blue-50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-lg`}></i>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 animate-fadeIn">
            <div className="flex flex-col space-y-3 pt-4">
              <Link href="/" className="text-blue-900 hover:text-green-600 font-semibold transition-colors cursor-pointer py-2 px-2">
                Accueil
              </Link>
              <Link href="/services" className="text-blue-900 hover:text-green-600 font-semibold transition-colors cursor-pointer py-2 px-2">
                Services
              </Link>
              <Link href="/qui-sommes-nous" className="text-blue-900 hover:text-green-600 font-semibold transition-colors cursor-pointer py-2 px-2">
                Qui sommes-nous ?
              </Link>
              <Link href="/temoignages" className="text-blue-900 hover:text-green-600 font-semibold transition-colors cursor-pointer py-2 px-2">
                Témoignages
              </Link>
              <Link href="/blog" className="text-blue-900 hover:text-green-600 font-semibold transition-colors cursor-pointer py-2 px-2">
                Blog
              </Link>
              <Link href="/contact" className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer whitespace-nowrap text-center mt-3 inline-flex items-center justify-center">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-phone-line text-sm"></i>
                </div>
                <span>Contact</span>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
