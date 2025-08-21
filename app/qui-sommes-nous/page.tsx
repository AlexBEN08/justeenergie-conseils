
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function QuiSommesNous() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Qui sommes-nous ?</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              JusteÉnergie Conseils, votre partenaire de confiance pour optimiser vos contrats énergétiques
            </p>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-blue-900 mb-6">Notre mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Chez JusteÉnergie Conseils, nous avons une mission claire : permettre aux entreprises françaises 
                  de réduire significativement leurs factures énergétiques grâce à notre expertise du marché 
                  et nos relations privilégiées avec les fournisseurs.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Nous croyons fermement que chaque entreprise, quelle que soit sa taille, mérite d'avoir accès 
                  aux meilleurs tarifs énergétiques. C'est pourquoi nous offrons nos services gratuitement, 
                  notre rémunération étant assurée directement par les fournisseurs partenaires.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700 font-medium">Service 100% gratuit</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700 font-medium">Expertise reconnue</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700 font-medium">Accompagnement personnalisé</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700 font-medium">Suivi à long terme</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:pl-8">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20energy%20consultant%20team%20working%20together%20in%20modern%20office%20environment%2C%20business%20people%20analyzing%20energy%20contracts%20and%20data%20on%20computer%20screens%2C%20collaborative%20workspace%20with%20charts%20and%20graphs%2C%20professional%20business%20atmosphere%2C%20bright%20office%20lighting%2C%20teamwork%20and%20expertise&width=600&height=400&seq=team-work&orientation=landscape"
                  alt="Équipe JusteÉnergie Conseils"
                  className="rounded-xl shadow-lg w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Notre expertise</h2>
            <p className="text-xl text-gray-600">
              Une connaissance approfondie du marché énergétique français et de ses évolutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-line-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Analyse de marché</h3>
              <p className="text-gray-600 leading-relaxed">
                Veille permanente sur l'évolution des prix de l'énergie, les réglementations 
                et les opportunités du marché pour nos clients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-file-text-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Audit contractuel</h3>
              <p className="text-gray-600 leading-relaxed">
                Analyse détaillée de vos contrats actuels, identification des points 
                d'amélioration et calcul des économies potentielles.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-team-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Négociation</h3>
              <p className="text-gray-600 leading-relaxed">
                Relations privilégiées avec l'ensemble des fournisseurs du marché 
                pour obtenir les meilleures conditions tarifaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Nos valeurs</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Des principes forts qui guident notre approche et nos relations avec nos clients
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-heart-line text-white text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Transparence</h3>
                <p className="text-gray-600">
                  Clarté totale sur nos méthodes, nos partenaires et notre rémunération. 
                  Aucune surprise, que de la confiance.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-speed-up-line text-white text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Réactivité</h3>
                <p className="text-gray-600">
                  Réponse rapide à vos demandes et mise en œuvre efficace 
                  des solutions énergétiques adaptées.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-star-line text-white text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  Recherche permanente de l'excellence dans nos prestations 
                  et la qualité de notre accompagnement.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-leaf-line text-white text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Durabilité</h3>
                <p className="text-gray-600">
                  Promotion des énergies renouvelables et des solutions 
                  énergétiques respectueuses de l'environnement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Notre processus</h2>
              <p className="text-xl text-gray-600">
                Un accompagnement structuré en 4 étapes pour garantir votre satisfaction
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Audit énergétique gratuit</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Analyse complète de vos factures et contrats actuels. Identification de votre profil 
                    de consommation et des points d'optimisation possibles.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Recherche et négociation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Consultation de notre réseau de fournisseurs partenaires et négociation 
                    des meilleures conditions tarifaires adaptées à vos besoins.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Présentation des solutions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Présentation claire des offres sélectionnées avec comparatif détaillé 
                    et estimation des économies réalisables.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Suivi et accompagnement</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Gestion des démarches administratives, suivi de la mise en service 
                    et accompagnement continu tout au long de votre contrat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Vous souhaitez en savoir plus ?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contactez notre équipe d'experts pour discuter de vos besoins énergétiques 
            et découvrir comment nous pouvons vous accompagner.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap">
            <i className="ri-phone-line mr-2"></i>
            Prendre rendez-vous
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
