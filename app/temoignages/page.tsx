
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Temoignages() {
  const temoignages = [
    {
      nom: "Vladimir Pierens",
      entreprise: "Groupe La vie de Quartier",
      secteur: "Commerce de proximité",
      economie: "3 800€",
      temoignage: "En tant que CEO du Groupe La vie de Quartier, nous gérons plusieurs épiceries de proximité. JusteÉnergie Conseils nous a accompagnés dans l'optimisation énergétique de nos 2 nouvelles épiceries. L'expertise de l'équipe dans le secteur du commerce de proximité nous a permis de réaliser des économies substantielles tout en maintainant un éclairage optimal pour mettre en valeur nos produits frais.",
      note: 5
    },
    {
      nom: "Sarah Dubois",
      entreprise: "Restaurant Le Petit Gourmet",
      secteur: "Restauration",
      economie: "1 200€",
      temoignage: "Grâce à JusteÉnergie Conseils, nous économisons plus de 1 200€ par an sur nos factures d'électricité et de gaz. Le service était vraiment gratuit comme promis, et l'équipe nous a accompagnés à chaque étape. Je recommande vivement !",
      note: 5
    },
    {
      nom: "Marc Lefebvre", 
      entreprise: "Garage Lefebvre & Fils",
      secteur: "Automobile",
      economie: "2 800€",
      temoignage: "En tant que garagiste, nos factures énergétiques représentaient un coût important. L'audit réalisé par JusteÉnergie nous a permis d'identifier des économies significatives. Très professionnel et efficace !",
      note: 5
    },
    {
      nom: "Catherine Martin",
      entreprise: "Hôtel des Jardins",
      secteur: "Hôtellerie",
      economie: "4 500€",
      temoignage: "Notre hôtel 3 étoiles consomme beaucoup d'énergie entre l'éclairage, le chauffage et la climatisation. L'expertise de JusteÉnergie nous a permis de réduire considérablement nos coûts tout en gardant le même niveau de confort pour nos clients.",
      note: 5
    },
    {
      nom: "Jean-Pierre Rousseau",
      entreprise: "Boulangerie Rousseau",
      secteur: "Artisanat",
      economie: "950€",
      temoignage: "Mes fours fonctionnent 7j/7, ma facture d'électricité était énorme. L'équipe de JusteÉnergie a négocié un excellent tarif avec mon nouveau fournisseur. Service gratuit et très professionnel, exactement ce qu'il me fallait !",
      note: 5
    },
    {
      nom: "Sylvie Moreau",
      entreprise: "Centre de Beauté Harmonie",
      secteur: "Services",
      economie: "680€",
      temoignage: "Pour mon institut de beauté, chaque euro économisé compte. L'audit énergétique était vraiment gratuit et les économies réalisées dépassent mes espérances. Un grand merci à toute l'équipe !",
      note: 5
    },
    {
      nom: "Philippe Durand",
      entreprise: "Camping Les Pins Verts",
      secteur: "Tourisme", 
      economie: "6 200€",
      temoignage: "Gérer un camping de 80 emplacements avec piscine chauffée et sanitaires représente une consommation énergétique importante. JusteÉnergie a su trouver les meilleures offres adaptées à notre saisonnalité. Excellent travail !",
      note: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Témoignages clients</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Découvrez les retours de nos clients qui nous font confiance pour optimiser leurs contrats énergétiques
            </p>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">350+</div>
              <div className="text-gray-600">Entreprises accompagnées</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">25%</div>
              <div className="text-gray-600">Économies moyennes réalisées</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">580k€</div>
              <div className="text-gray-600">Total économisé pour nos clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Ils nous font confiance</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Des témoignages authentiques d'entreprises qui ont fait le choix de JusteÉnergie Conseils
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {temoignages.map((temoignage, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {temoignage.nom.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-900">{temoignage.nom}</h3>
                      <p className="text-blue-600 font-medium">{temoignage.entreprise}</p>
                      <p className="text-sm text-gray-500">{temoignage.secteur}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(temoignage.note)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                    ))}
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6 italic">
                    "{temoignage.temoignage}"
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">Économies annuelles</span>
                    <span className="text-2xl font-bold text-green-600">{temoignage.economie}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs représentés */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-12">Tous secteurs confondus</h2>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: 'ri-restaurant-line', nom: 'Restauration' },
                { icon: 'ri-car-line', nom: 'Automobile' },
                { icon: 'ri-hotel-line', nom: 'Hôtellerie' },
                { icon: 'ri-cake-3-line', nom: 'Artisanat' },
                { icon: 'ri-scissors-cut-line', nom: 'Services' },
                { icon: 'ri-tent-line', nom: 'Tourisme' }
              ].map((secteur, index) => (
                <div key={index} className="text-center p-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${secteur.icon} text-white text-2xl`}></i>
                  </div>
                  <p className="text-blue-900 font-medium">{secteur.nom}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Processus de satisfaction */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Notre engagement qualité</h2>
              <p className="text-xl text-gray-600">
                Nous mettons tout en œuvre pour garantir votre satisfaction à chaque étape
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-customer-service-2-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Suivi personnalisé</h4>
                  <p className="text-gray-600">Chaque client bénéficie d'un interlocuteur dédié tout au long de son parcours</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Réactivité garantie</h4>
                  <p className="text-gray-600">Réponse sous 24h et traitement rapide de toutes vos demandes</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-check-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Transparence totale</h4>
                  <p className="text-gray-600">Information claire sur les tarifs, les économies et les conditions contractuelles</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-refresh-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Accompagnement continu</h4>
                  <p className="text-gray-600">Suivi régulier et possibilité de renégociation à l'échéance du contrat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Rejoignez nos clients satisfaits</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Comme eux, faites confiance à JusteÉnergie Conseils pour optimiser vos coûts énergétiques. 
            Audit gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap">
              <i className="ri-calculator-line mr-2"></i>
              Demander un audit
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap">
              <i className="ri-phone-line mr-2"></i>
              Nous appeler
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
