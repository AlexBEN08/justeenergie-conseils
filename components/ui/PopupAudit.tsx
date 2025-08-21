'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PopupAudit() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-green-500 p-6 text-white text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-lightbulb-flash-line text-3xl"></i>
          </div>
          <h3 className="text-2xl font-bold mb-2">Économisez jusqu'à 30%</h3>
          <p className="text-blue-100">sur vos factures énergétiques !</p>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-6 text-center leading-relaxed">
            Découvrez combien votre entreprise pourrait économiser avec notre 
            <strong> audit énergétique 100% gratuit</strong> et sans engagement.
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center space-x-3">
              <i className="ri-check-line text-green-500 text-lg"></i>
              <span className="text-sm text-gray-700">Analyse complète de vos contrats</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="ri-check-line text-green-500 text-lg"></i>
              <span className="text-sm text-gray-700">Économies moyennes de 25%</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="ri-check-line text-green-500 text-lg"></i>
              <span className="text-sm text-gray-700">Service 100% gratuit</span>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <Link 
              href="/contact" 
              className="flex-1 bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-green-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-calculator-line mr-2"></i>
              Audit gratuit
            </Link>
            <button
              onClick={handleClose}
              className="px-4 py-3 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
