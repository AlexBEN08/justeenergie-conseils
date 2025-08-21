'use client';

import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-blue-800 to-blue-900 text-white py-24 min-h-[500px] flex items-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Industrial%20manufacturing%20plant%20with%20production%20machinery%20and%20equipment%2C%20modern%20factory%20interior%20with%20clean%20industrial%20design%2C%20energy%20intensive%20industrial%20operations%2C%20professional%20industrial%20environment%20with%20steel%20structures&width=1200&height=500&seq=industries-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mr-6">
                <i className="ri-building-line text-white text-3xl"></i>
              </div>
              <div>
                <h1 className="text-5xl font-bold mb-2">Industries</h1>
                <p className="text-xl text-blue-200">Sites de production, usines</p>
              </div>
            </div>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
              L'industrie nécessite une approche énergétique spécialisée compte tenu des volumes importants et des spécificités de consommation.
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
              <div className="text-6xl font-bold text-green-600 mb-4">20-35%</div>
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
                  Problématiques industrielles
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <i className="ri-close-circle-line text-red-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Coûts énergétiques majeurs</h4>
                      <p className="text-gray-600 text-sm">L'énergie représente souvent 15-30% des coûts de production industrielle</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-close-circle-line text-red-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Pics de consommation à gérer</h4>
                      <p className="text-gray-600 text-sm">Démarrage d'équipements lourds créant des pointes tarifaires coûteuses</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-close-circle-line text-red-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Besoin de prévisibilité tarifaire</h4>
                      <p className="text-gray-600 text-sm">Volatilité des prix impactant la rentabilité et les budgets prévisionnels</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-close-circle-line text-red-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Contraintes environnementales</h4>
                      <p className="text-gray-600 text-sm">Pression réglementaire et sociétale pour réduire l'empreinte carbone</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
                  <i className="ri-lightbulb-line mr-3 text-3xl"></i>
                  Solutions industrielles
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <i className="ri-check-circle-line text-green-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Analyse détaillée des courbes de charge</h4>
                      <p className="text-gray-600 text-sm">Étude approfondie de vos consommations pour optimiser les contrats</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-check-circle-line text-green-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Contrats sur-mesure avec flexibilité</h4>
                      <p className="text-gray-600 text-sm">Options d'effacement, modulation saisonnière, indexation maîtrisée</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-check-circle-line text-green-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Intégration énergies renouvelables</h4>
                      <p className="text-gray-600 text-sm">Solutions d'autoconsommation et contrats d'énergie verte</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-check-circle-line text-green-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Optimisation heures pleines/creuses</h4>
                      <p className="text-gray-600 text-sm">Adaptation des tarifs à vos cycles de production</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs industriels */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Secteurs industriels que nous accompagnons</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-restaurant-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Agroalimentaire</h4>
                <p className="text-gray-600 text-sm">Transformation, conservation, froid industriel</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-hammer-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Métallurgie</h4>
                <p className="text-gray-600 text-sm">Sidérurgie, fonderie, usinage</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-t-shirt-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Textile</h4>
                <p className="text-gray-600 text-sm">Filature, tissage, teinture</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-flask-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Chimie</h4>
                <p className="text-gray-600 text-sm">Pétrochimie, chimie fine, pharmaceutique</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shapes-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Plasturgie</h4>
                <p className="text-gray-600 text-sm">Injection, extrusion, thermoformage</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-settings-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Mécanique</h4>
                <p className="text-gray-600 text-sm">Usinage, assemblage, maintenance</p>
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
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Expertise industrielle reconnue</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-line-chart-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Analyse technique poussée</h4>
                <p className="text-gray-600">Compréhension des process industriels et de leurs besoins énergétiques</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-calendar-check-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Contrats pluriannuels</h4>
                <p className="text-gray-600">Sécurisation des prix sur plusieurs années pour une meilleure prévisibilité</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-leaf-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Solutions vertes</h4>
                <p className="text-gray-600">Accompagnement vers la transition énergétique et les énergies renouvelables</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shield-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Continuité garantie</h4>
                <p className="text-gray-600">Assurance de fourniture continue pour vos process critiques</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-focus-2-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Gestion des pointes</h4>
                <p className="text-gray-600">Solutions d'effacement et de délestage pour optimiser les coûts</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-dashboard-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Monitoring avancé</h4>
                <p className="text-gray-600">Outils de suivi en temps réel des consommations et performances</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Optimisez vos coûts énergétiques industriels</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Bénéficiez de notre expertise industrielle pour réduire significativement vos factures énergétiques. 
            Analyse technique approfondie et solutions sur-mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap inline-block">
              <i className="ri-calculator-line mr-2"></i>
              Audit énergétique industriel
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