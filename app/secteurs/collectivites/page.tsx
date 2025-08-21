'use client';

import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function CollectivitesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-blue-800 to-blue-900 text-white py-24 min-h-[500px] flex items-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20public%20building%20with%20clean%20administrative%20architecture%2C%20contemporary%20municipal%20office%20complex%20with%20professional%20government%20facilities%2C%20public%20service%20building%20with%20bright%20efficient%20lighting%20and%20organized%20spaces&width=1200&height=500&seq=collectivites-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mr-6">
                <i className="ri-community-line text-white text-3xl"></i>
              </div>
              <div>
                <h1 className="text-5xl font-bold mb-2">Collectivités</h1>
                <p className="text-xl text-blue-200">Communes, associations</p>
              </div>
            </div>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
              Les collectivités territoriales et associations gèrent souvent plusieurs sites avec des contraintes budgétaires publiques.
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
              <div className="text-6xl font-bold text-green-600 mb-4">15-25%</div>
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
                  Défis des collectivités
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <i className="ri-close-circle-line text-red-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Multiplicité des sites à gérer</h4>
                      <p className="text-gray-600 text-sm">Écoles, mairies, gymnases, bibliothèques répartis sur le territoire</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-close-circle-line text-red-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Budgets publics contraints</h4>
                      <p className="text-gray-600 text-sm">Nécessité d'optimiser les dépenses énergétiques publiques</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-close-circle-line text-red-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Obligations environnementales</h4>
                      <p className="text-gray-600 text-sm">Exemplarité écologique attendue des institutions publiques</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-close-circle-line text-red-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Transparence et contrôle des dépenses</h4>
                      <p className="text-gray-600 text-sm">Justification rigoureuse de l'utilisation des fonds publics</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
                  <i className="ri-lightbulb-line mr-3 text-3xl"></i>
                  Solutions collectivités publiques
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <i className="ri-check-circle-line text-green-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Groupement d'achats pour optimiser les coûts</h4>
                      <p className="text-gray-600 text-sm">Mutualisation des besoins pour obtenir les meilleurs tarifs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-check-circle-line text-green-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Contrats multi-sites simplifiés</h4>
                      <p className="text-gray-600 text-sm">Gestion centralisée de tous vos équipements publics</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-check-circle-line text-green-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Intégration d'énergies renouvelables</h4>
                      <p className="text-gray-600 text-sm">Photovoltaïque sur toitures publiques et énergie verte</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-check-circle-line text-green-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Reporting détaillé des consommations</h4>
                      <p className="text-gray-600 text-sm">Transparence totale et suivi budgétaire précis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de collectivités */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Collectivités et associations accompagnées</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-government-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Mairies</h4>
                <p className="text-gray-600 text-sm">Hôtels de ville, annexes municipales</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-school-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Écoles</h4>
                <p className="text-gray-600 text-sm">Écoles primaires, collèges, lycées</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-basketball-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Gymnases</h4>
                <p className="text-gray-600 text-sm">Équipements sportifs municipaux</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-team-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Associations sportives</h4>
                <p className="text-gray-600 text-sm">Clubs, fédérations, ligues</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-community-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Centres sociaux</h4>
                <p className="text-gray-600 text-sm">Maisons de quartier, centres de loisirs</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-book-open-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Bibliothèques</h4>
                <p className="text-gray-600 text-sm">Médiathèques, centres culturels</p>
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
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Expertise du secteur public</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-group-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Groupements d'achat</h4>
                <p className="text-gray-600">Optimisation des coûts par mutualisation des besoins</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-file-list-3-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Transparence budgétaire</h4>
                <p className="text-gray-600">Reporting détaillé et justification des économies réalisées</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-leaf-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Exemplarité écologique</h4>
                <p className="text-gray-600">Solutions vertes valorisant l'engagement environnemental</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-map-pin-range-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Gestion multi-sites</h4>
                <p className="text-gray-600">Centralisation de tous vos équipements publics</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-funds-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Financement facilité</h4>
                <p className="text-gray-600">Accompagnement dans les montages financiers publics</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-customer-service-2-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Interlocuteur dédié</h4>
                <p className="text-gray-600">Référent spécialisé dans le secteur public</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Optimisez les budgets énergétiques de votre collectivité</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Bénéficiez de solutions adaptées aux contraintes du secteur public. 
            Transparence totale et économies durables pour vos administrés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap inline-block">
              <i className="ri-calculator-line mr-2"></i>
              Audit collectivités gratuit
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