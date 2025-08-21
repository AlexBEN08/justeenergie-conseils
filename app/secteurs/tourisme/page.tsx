'use client';

import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function TourismePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-blue-800 to-blue-900 text-white py-24 min-h-[500px] flex items-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20camping%20resort%20with%20recreational%20facilities%20and%20outdoor%20activities%2C%20tourism%20leisure%20center%20with%20swimming%20pools%20and%20entertainment%20areas%2C%20vacation%20resort%20complex%20with%20clean%20modern%20architecture%2C%20bright%20outdoor%20tourism%20environment&width=1200&height=500&seq=tourisme-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mr-6">
                <i className="ri-tent-line text-white text-3xl"></i>
              </div>
              <div>
                <h1 className="text-5xl font-bold mb-2">Tourisme</h1>
                <p className="text-xl text-blue-200">Campings, centres de loisirs</p>
              </div>
            </div>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
              Les activités touristiques ont des besoins énergétiques très marqués par la saisonnalité et les pics d'affluence.
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
              <div className="text-6xl font-bold text-green-600 mb-4">30-45%</div>
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
                  Défis du secteur touristique
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <i className="ri-close-circle-line text-red-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Forte saisonnalité des consommations</h4>
                      <p className="text-gray-600 text-sm">Variations extrêmes entre haute et basse saison</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-close-circle-line text-red-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Infrastructures étendues à alimenter</h4>
                      <p className="text-gray-600 text-sm">Multiples bâtiments et équipements dispersés sur le site</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-close-circle-line text-red-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Besoins en eau chaude sanitaire importants</h4>
                      <p className="text-gray-600 text-sm">Sanitaires collectifs, piscines, douches</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-close-circle-line text-red-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Contraintes budgétaires serrées</h4>
                      <p className="text-gray-600 text-sm">Marges réduites sur une saison courte</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
                  <i className="ri-lightbulb-line mr-3 text-3xl"></i>
                  Solutions touristiques
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <i className="ri-check-circle-line text-green-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Contrats modulables selon les périodes</h4>
                      <p className="text-gray-600 text-sm">Adaptation parfaite à votre calendrier d'ouverture</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-check-circle-line text-green-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Tarification adaptée aux pics saisonniers</h4>
                      <p className="text-gray-600 text-sm">Optimisation des coûts selon l'affluence</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-check-circle-line text-green-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Solutions d'autoconsommation solaire</h4>
                      <p className="text-gray-600 text-sm">Valorisation des grandes toitures et espaces disponibles</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="ri-check-circle-line text-green-500 text-xl mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Optimisation des équipements collectifs</h4>
                      <p className="text-gray-600 text-sm">Gestion intelligente piscines, éclairage, climatisation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'établissements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Établissements touristiques accompagnés</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-tent-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Campings</h4>
                <p className="text-gray-600 text-sm">Terrains de camping, villages de vacances</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-rocket-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Parcs d'attractions</h4>
                <p className="text-gray-600 text-sm">Parcs de loisirs, parcs aquatiques</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-water-percent-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Bases de loisirs</h4>
                <p className="text-gray-600 text-sm">Centers nautiques, bases de plein air</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-horse-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Centres équestres</h4>
                <p className="text-gray-600 text-sm">Clubs hippiques, centres d'équitation</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-football-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Golfs</h4>
                <p className="text-gray-600 text-sm">Parcours de golf, practice, club-house</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-building-4-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Résidences de tourisme</h4>
                <p className="text-gray-600 text-sm">Résidences saisonnières, gîtes ruraux</p>
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
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Expertise du secteur touristique</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-calendar-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Gestion saisonnière</h4>
                <p className="text-gray-600">Contrats parfaitement adaptés à vos cycles d'ouverture/fermeture</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-sun-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Énergie solaire</h4>
                <p className="text-gray-600">Solutions photovoltaïques valorisant vos espaces étendus</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-water-flash-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Eau chaude solaire</h4>
                <p className="text-gray-600">Optimisation des systèmes de production d'eau chaude</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-leaf-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Éco-responsabilité</h4>
                <p className="text-gray-600">Démarche environnementale valorisée auprès de vos clients</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-money-euro-circle-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">ROI rapide</h4>
                <p className="text-gray-600">Retour sur investissement dès la première saison</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-customer-service-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Support saisonnier</h4>
                <p className="text-gray-600">Accompagnement renforcé pendant vos périodes d'activité</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Maximisez la rentabilité de votre établissement touristique</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Profitez de solutions énergétiques parfaitement adaptées aux spécificités du tourisme. 
            Audit gratuit et économies garanties dès la première saison.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap inline-block">
              <i className="ri-calculator-line mr-2"></i>
              Audit spécial tourisme
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