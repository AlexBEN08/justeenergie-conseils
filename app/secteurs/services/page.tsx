'use client';

import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-blue-800 to-blue-900 text-white py-24 min-h-[500px] flex items-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20service%20business%20interior%20with%20professional%20equipment%20and%20clean%20work%20environment%2C%20contemporary%20laundry%20facility%20with%20industrial%20machines%2C%20professional%20service%20center%20with%20bright%20lighting%20and%20organized%20workspace&width=1200&height=500&seq=services-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mr-6">
                <i className="ri-t-shirt-line text-white text-3xl"></i>
              </div>
              <div>
                <h1 className="text-5xl font-bold mb-2">Services</h1>
                <p className="text-xl text-blue-200">Laveries, pressing, salons</p>
              </div>
            </div>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
              Les entreprises de services ont souvent des équipements spécifiques gourmands en énergie nécessitant une approche sur-mesure.
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
              <div className="text-6xl font-bold text-green-600 mb-4">25-40%</div>
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
                  Défis des entreprises de services
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <i className="ri-close-circle-line text-red-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Équipements à forte consommation électrique</h4>
                      <p className="text-gray-600 text-sm">Machines à laver, sèche-linges, équipements de coiffure haute puissance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-close-circle-line text-red-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Besoins en eau chaude importants</h4>
                      <p className="text-gray-600 text-sm">Lavage, rinçage, stérilisation nécessitant de gros volumes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-close-circle-line text-red-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Horaires de fonctionnement variables</h4>
                      <p className="text-gray-600 text-sm">Pics d'utilisation selon les horaires d'ouverture et l'affluence</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-close-circle-line text-red-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Marges serrées</h4>
                      <p className="text-gray-600 text-sm">Concurrence forte nécessitant l'optimisation de tous les coûts</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
                  <i className="ri-lightbulb-line mr-3 text-3xl"></i>
                  Solutions services personnalisées
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <i className="ri-check-circle-line text-green-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Analyse fine des équipements énergivores</h4>
                      <p className="text-gray-600 text-sm">Identification et optimisation de chaque poste de consommation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-check-circle-line text-green-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Contrats adaptés aux pics d'utilisation</h4>
                      <p className="text-gray-600 text-sm">Tarification optimisée selon vos horaires de forte activité</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-check-circle-line text-green-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Solutions de récupération de chaleur</h4>
                      <p className="text-gray-600 text-sm">Valorisation de la chaleur des équipements pour l'eau chaude</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-check-circle-line text-green-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Accompagnement dans les investissements</h4>
                      <p className="text-gray-600 text-sm">Conseil pour le remplacement par des équipements plus efficaces</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Entreprises de services accompagnées</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-t-shirt-air-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Laveries automatiques</h4>
                <p className="text-gray-600 text-sm">Libre-service, laveries de quartier</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-handbag-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Pressing</h4>
                <p className="text-gray-600 text-sm">Nettoyage à sec, teintureries</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-scissors-cut-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Salons de coiffure</h4>
                <p className="text-gray-600 text-sm">Coiffeurs, barbiers, salons mixtes</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-heart-3-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Instituts de beauté</h4>
                <p className="text-gray-600 text-sm">Soins esthétiques, spas urbains</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-run-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Centres de fitness</h4>
                <p className="text-gray-600 text-sm">Salles de sport, clubs de remise en forme</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-car-washing-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Stations de lavage</h4>
                <p className="text-gray-600 text-sm">Lavages auto, centres de lavage</p>
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
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Expertise du secteur services</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-flashlight-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Analyse technique poussée</h4>
                <p className="text-gray-600">Étude approfondie de vos équipements spécialisés</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-water-percent-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Eau chaude optimisée</h4>
                <p className="text-gray-600">Solutions pour réduire les coûts de production d'eau chaude</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-recycle-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Récupération énergétique</h4>
                <p className="text-gray-600">Valorisation de la chaleur fatale de vos équipements</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-time-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Horaires flexibles</h4>
                <p className="text-gray-600">Tarification adaptée à vos créneaux d'activité</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-tools-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Maintenance spécialisée</h4>
                <p className="text-gray-600">Entretien adapté à vos équipements professionnels</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-money-euro-circle-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">ROI rapide</h4>
                <p className="text-gray-600">Retour sur investissement visible dès les premiers mois</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Optimisez les coûts énergétiques de votre entreprise de services</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Bénéficiez de solutions personnalisées pour vos équipements spécialisés. 
            Réduction significative des charges énergétiques garantie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap inline-block">
              <i className="ri-calculator-line mr-2"></i>
              Audit services gratuit
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