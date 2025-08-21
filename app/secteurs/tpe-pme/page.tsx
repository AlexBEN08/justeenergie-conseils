'use client';

import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function TPEPMEPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-blue-800 to-blue-900 text-white py-24 min-h-[500px] flex items-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Small%20business%20owners%20working%20in%20modern%20office%20environment%2C%20TPE%20PME%20entrepreneurs%20managing%20their%20energy%20costs%2C%20professional%20business%20setting%20with%20computers%20and%20documents%2C%20bright%20office%20lighting%2C%20collaborative%20workspace%20for%20small%20companies&width=1200&height=500&seq=tpe-pme-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mr-6">
                <i className="ri-store-2-line text-white text-3xl"></i>
              </div>
              <div>
                <h1 className="text-5xl font-bold mb-2">TPE & PME</h1>
                <p className="text-xl text-blue-200">Commerces, bureaux, artisans</p>
              </div>
            </div>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
              Les TPE et PME représentent le cœur de l'économie française. Nos solutions énergétiques sont spécifiquement adaptées aux besoins des petites entreprises.
            </p>
          </div>
        </div>
      </section>

      {/* Économies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <i className="ri-percent-line text-green-500 text-4xl mr-4"></i>
                <h2 className="text-4xl font-bold text-blue-900">Économies moyennes réalisées</h2>
              </div>
              <div className="text-6xl font-bold text-green-600 mb-4">15-30%</div>
              <p className="text-xl text-gray-600">sur vos factures énergétiques annuelles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problématiques et Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Problématiques */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
                  <i className="ri-error-warning-line mr-3 text-3xl"></i>
                  Problématiques courantes
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <i className="ri-close-circle-line text-red-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Factures énergétiques trop élevées</h4>
                      <p className="text-gray-600 text-sm">Les coûts énergétiques représentent souvent une charge importante pour les petites entreprises</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-close-circle-line text-red-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Contrats inadaptés à la taille de l'entreprise</h4>
                      <p className="text-gray-600 text-sm">Offres standardisées qui ne correspondent pas aux besoins spécifiques des TPE/PME</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-close-circle-line text-red-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Manque de temps pour comparer les offres</h4>
                      <p className="text-gray-600 text-sm">Les dirigeants sont accaparés par leur activité principale</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-close-circle-line text-red-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Méconnaissance du marché énergétique</h4>
                      <p className="text-gray-600 text-sm">Complexité des offres et des réglementations du secteur</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
                  <i className="ri-lightbulb-line mr-3 text-3xl"></i>
                  Nos solutions sur-mesure
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <i className="ri-check-circle-line text-green-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Audit gratuit de vos consommations</h4>
                      <p className="text-gray-600 text-sm">Analyse détaillée de votre profil énergétique et identification des économies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-check-circle-line text-green-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Négociation de tarifs préférentiels</h4>
                      <p className="text-gray-600 text-sm">Nous obtenons les meilleures conditions grâce à notre réseau de partenaires</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-check-circle-line text-green-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Contrats flexibles adaptés à votre activité</h4>
                      <p className="text-gray-600 text-sm">Solutions personnalisées selon votre secteur et vos horaires</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-check-circle-line text-green-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Accompagnement personnalisé dans les démarches</h4>
                      <p className="text-gray-600 text-sm">Prise en charge complète de toutes les formalités administratives</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exemples d'entreprises */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Exemples d'entreprises que nous accompagnons</h2>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-cake-3-line text-white text-2xl"></i>
                  </div>
                  <h4 className="font-bold text-blue-900 mb-2">Artisanat</h4>
                  <p className="text-gray-600 text-sm">Boulangeries, coiffeurs, garages</p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-shopping-bag-line text-white text-2xl"></i>
                  </div>
                  <h4 className="font-bold text-blue-900 mb-2">Commerce</h4>
                  <p className="text-gray-600 text-sm">Petits commerces, boutiques</p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-hospital-line text-white text-2xl"></i>
                  </div>
                  <h4 className="font-bold text-blue-900 mb-2">Services</h4>
                  <p className="text-gray-600 text-sm">Cabinets médicaux, bureaux d'études</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Et bien d'autres :</strong> Boulangeries, coiffeurs, garages, petits commerces, cabinets médicaux, bureaux d'études, restaurants de quartier, pharmacies, opticiens, agences immobilières...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages spécifiques */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Pourquoi les TPE & PME nous choisissent</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-money-dollar-circle-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Service 100% gratuit</h4>
                <p className="text-gray-600">Aucun coût pour votre entreprise, idéal pour les budgets serrés des TPE</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-time-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Gain de temps précieux</h4>
                <p className="text-gray-600">Nous nous occupons de tout pendant que vous vous concentrez sur votre activité</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-customer-service-2-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Accompagnement humain</h4>
                <p className="text-gray-600">Un interlocuteur dédié qui comprend les enjeux des petites entreprises</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shield-check-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Sans engagement</h4>
                <p className="text-gray-600">Liberté totale, vous gardez le contrôle de vos décisions</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-line-chart-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Économies immédiates</h4>
                <p className="text-gray-600">Résultats visibles dès le premier mois sur vos factures</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-refresh-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Suivi à long terme</h4>
                <p className="text-gray-600">Accompagnement continu et renégociation à chaque échéance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Votre entreprise mérite les meilleurs tarifs énergétiques</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Rejoignez les centaines de TPE et PME qui nous font confiance pour optimiser leurs coûts énergétiques. 
            Audit gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap inline-block">
              <i className="ri-calculator-line mr-2"></i>
              Demander un audit gratuit
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap inline-block">
              <i className="ri-phone-line mr-2"></i>
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}