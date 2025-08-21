
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [selectedSector, setSelectedSector] = useState(null);

  const sectorsData = [
    { 
      icon: 'ri-store-2-line', 
      title: 'TPE & PME', 
      desc: 'Commerces, bureaux, artisans',
      link: '/secteurs/tpe-pme',
      details: {
        description: 'Les TPE et PME représentent le cœur de l\'économie française. Nos solutions énergétiques sont spécifiquement adaptées aux besoins des petites entreprises.',
        economiesMoyennes: '15-30%',
        problematiques: [
          'Factures énergétiques trop élevées',
          'Contrats inadaptés à la taille de l\'entreprise',
          'Manque de temps pour comparer les offres',
          'Méconnaissance du marché énergétique'
        ],
        solutions: [
          'Audit gratuit de vos consommations',
          'Négociation de tarifs préférentiels',
          'Contrats flexibles adaptés à votre activité',
          'Accompagnement personnalisé dans les démarches'
        ],
        exemples: 'Boulangeries, coiffeurs, garages, petits commerces, cabinets médicaux, bureaux d\'études...'
      }
    },
    { 
      icon: 'ri-building-line', 
      title: 'Industries', 
      desc: 'Sites de production, usines',
      link: '/secteurs/industries',
      details: {
        description: 'L\'industrie nécessite une approche énergétique spécialisée compte tenu des volumes importants et des spécificités de consommation.',
        economiesMoyennes: '20-35%',
        problematiques: [
          'Coûts énergétiques représentant une part importante du budget',
          'Pics de consommation à gérer',
          'Besoin de prévisibilité tarifaire',
          'Contraintes environnementales croissantes'
        ],
        solutions: [
          'Analyse détaillée des courbes de charge',
          'Contrats sur-mesure avec options de flexibilité',
          'Intégration d\'énergies renouvelables',
          'Optimisation des heures pleines/creuses'
        ],
        exemples: 'Agroalimentaire, métallurgie, textile, chimie, plasturgie, mécanique...'
      }
    },
    { 
      icon: 'ri-hotel-line', 
      title: 'Hôtellerie', 
      desc: 'Hôtels, restaurants, cafés',
      link: '/secteurs/hotellerie',
      details: {
        description: 'Le secteur de l\'hôtellerie-restauration présente des profils de consommation spécifiques avec une forte saisonnalité.',
        economiesMoyennes: '25-40%',
        problematiques: [
          'Consommation variable selon les saisons',
          'Besoins importants en chauffage et climatisation',
          'Équipements gourmands en énergie (cuisines, piscines)',
          'Pression sur les marges'
        ],
        solutions: [
          'Contrats adaptés à la saisonnalité',
          'Tarifs préférentiels pour les heures de pointe',
          'Solutions d\'effacement lors des pics',
          'Conseil en efficacité énergétique'
        ],
        exemples: 'Hôtels, restaurants, bars, brasseries, traiteurs, centres de vacances...'
      }
    },
    { 
      icon: 'ri-tent-line', 
      title: 'Tourisme', 
      desc: 'Campings, centres de loisirs',
      link: '/secteurs/tourisme',
      details: {
        description: 'Les activités touristiques ont des besoins énergétiques très marqués par la saisonnalité et les pics d\'affluence.',
        economiesMoyennes: '30-45%',
        problematiques: [
          'Forte saisonnalité des consommations',
          'Infrastructures étendues à alimenter',
          'Besoins en eau chaude sanitaire importants',
          'Contraintes budgétaires serrées'
        ],
        solutions: [
          'Contrats modulables selon les périodes',
          'Tarification adaptée aux pics saisonniers',
          'Solutions d\'autoconsommation solaire',
          'Optimisation des équipements collectifs'
        ],
        exemples: 'Campings, parcs d\'attractions, bases de loisirs, centres équestres, golfs...'
      }
    },
    { 
      icon: 'ri-shopping-cart-line', 
      title: 'Commerce', 
      desc: 'Magasins, centres commerciaux',
      link: '/secteurs/commerce',
      details: {
        description: 'Le secteur commercial nécessite une gestion fine de l\'énergie pour l\'éclairage, la climatisation et les équipements frigorifiques.',
        economiesMoyennes: '20-35%',
        problematiques: [
          'Éclairage et vitrine très énergivores',
          'Besoins en froid commercial importants',
          'Horaires d\'ouverture étendus',
          'Pression concurrentielle sur les coûts'
        ],
        solutions: [
          'Tarifs adaptés aux horaires d\'ouverture',
          'Solutions LED et éclairage intelligent',
          'Optimisation des équipements frigorifiques',
          'Contrats de maintenance énergétique'
        ],
        exemples: 'Supermarchés, magasins spécialisés, centres commerciaux, concessions automobiles...'
      }
    },
    { 
      icon: 'ri-hospital-line', 
      title: 'Santé', 
      desc: 'Cliniques, maisons de retraite',
      link: '/secteurs/sante',
      details: {
        description: 'Le secteur de la santé présente des contraintes particulières avec des besoins de continuité de service et de confort.',
        economiesMoyennes: '18-30%',
        problematiques: [
          'Fonctionnement 24h/24 et 7j/7',
          'Équipements médicaux énergivores',
          'Contraintes de température et d\'hygiène',
          'Budgets publics serrés'
        ],
        solutions: [
          'Contrats sans interruption de fourniture',
          'Tarification préférentielle jour/nuit',
          'Solutions de cogénération',
          'Maintenance préventive des installations'
        ],
        exemples: 'Cliniques, hôpitaux, maisons de retraite, centres de dialyse, laboratoires...'
      }
    },
    { 
      icon: 'ri-t-shirt-line', 
      title: 'Services', 
      desc: 'Laveries, pressing, salons',
      link: '/secteurs/services',
      details: {
        description: 'Les entreprises de services ont souvent des équipements spécifiques gourmands en énergie nécessitant une approche sur-mesure.',
        economiesMoyennes: '25-40%',
        problematiques: [
          'Équipements à forte consommation électrique',
          'Besoins en eau chaude importants',
          'Horaires de fonctionnement variables',
          'Marges serrées'
        ],
        solutions: [
          'Analyse fine des équipements énergivores',
          'Contrats adaptés aux pics d\'utilisation',
          'Solutions de récupération de chaleur',
          'Accompagnement dans les investissements'
        ],
        exemples: 'Laveries automatiques, pressing, salons de coiffure, instituts de beauté, centres de fitness...'
      }
    },
    { 
      icon: 'ri-community-line', 
      title: 'Collectivités', 
      desc: 'Communes, associations',
      link: '/secteurs/collectivites',
      details: {
        description: 'Les collectivités territoriales et associations gèrent souvent plusieurs sites avec des contraintes budgétaires publiques.',
        economiesMoyennes: '15-25%',
        problematiques: [
          'Multiplicité des sites à gérer',
          'Budgets publics contraints',
          'Obligations environnementales',
          'Transparence et contrôle des dépenses'
        ],
        solutions: [
          'Groupement d\'achats pour optimiser les coûts',
          'Contrats multi-sites simplifiés',
          'Intégration d\'énergies renouvelables',
          'Reporting détaillé des consommations'
        ],
        exemples: 'Mairies, écoles, gymnases, associations sportives, centres sociaux, bibliothèques...'
      }
    }
  ];

  const handleSectorClick = (index) => {
    // Redirection vers la page dédiée du secteur
    window.location.href = sectorsData[index].link;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('/api/contact', {
      method: 'POST',
      body: new URLSearchParams({
        ...formData,
        form_id: 'justeenergie-contact'
      })
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-blue-800 to-blue-900 text-white py-24 min-h-[600px] flex items-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20professional%20office%20building%20with%20glass%20facade%20and%20blue%20sky%2C%20corporate%20energy%20consulting%20business%20environment%2C%20clean%20minimalist%20architecture%2C%20professional%20business%20setting%20with%20subtle%20green%20energy%20elements%2C%20bright%20daylight%2C%20contemporary%20design&width=1200&height=600&seq=hero-energy&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              L'énergie au <span className="text-green-400">juste prix</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Courtier spécialisé dans la renégociation des contrats gaz et électricité pour les entreprises. 
              De l'audit à la signature, notre service est 100% gratuit pour vous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap inline-block text-center">
                <i className="ri-calculator-line mr-2"></i>
                Audit gratuit
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap inline-block text-center">
                <i className="ri-phone-line mr-2"></i>
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Nos services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous accompagnons tous types d'entreprises dans l'optimisation de leurs contrats énergétiques
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-search-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Audit énergétique</h3>
              <p className="text-gray-600 leading-relaxed">
                Analyse complète de vos contrats actuels et identification des opportunités d'économies. 
                Service 100% gratuit et sans engagement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-handshake-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Renégociation</h3>
              <p className="text-gray-600 leading-relaxed">
                Négociation avec les fournisseurs pour obtenir les meilleures conditions tarifaires 
                adaptées à votre profil de consommation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-user-heart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Suivi personnalisé</h3>
              <p className="text-gray-600 leading-relaxed">
                Accompagnement continu après signature du contrat et veille permanente 
                sur l'évolution du marché énergétique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Secteurs d'activité</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous intervenons auprès de tous types d'entreprises, quelle que soit leur taille ou leur secteur
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {sectorsData.map((sector, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-lg transition-all cursor-pointer hover:bg-gradient-to-br hover:from-blue-600 hover:to-green-500 hover:text-white hover:shadow-xl hover:scale-105"
                onClick={() => handleSectorClick(index)}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-blue-600 to-green-500">
                  <i className={`${sector.icon} text-xl text-white`}></i>
                </div>
                <h4 className="font-bold mb-2 text-blue-900">{sector.title}</h4>
                <p className="text-sm text-gray-600">{sector.desc}</p>
                <div className="mt-3">
                  <span className="text-xs text-blue-600 font-medium">Voir les détails →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">Pourquoi choisir JusteÉnergie Conseils ?</h2>
              <p className="text-xl text-gray-600">
                Notre rémunération par les fournisseurs garantit un service gratuit et des conseils objectifs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-money-dollar-circle-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">100% gratuit</h4>
                  <p className="text-gray-600">Aucun coût pour votre entreprise, nous sommes rémunérés par les fournisseurs</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-check-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Sans engagement</h4>
                  <p className="text-gray-600">Audit et conseil sans obligation de souscription de votre part</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-award-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Expertise métier</h4>
                  <p className="text-gray-600">Connaissance approfondie du marché énergétique et des spécificités sectorielles</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Gain de temps</h4>
                  <p className="text-gray-600">Nous nous occupons de toutes les démarches et négociations à votre place</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à optimiser vos coûts énergétiques ?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour un audit gratuit de vos contrats énergétiques. 
            Découvrez combien vous pourriez économiser.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap inline-block">
              <i className="ri-phone-line mr-2"></i>
              Demander un audit
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap inline-block">
              <i className="ri-mail-line mr-2"></i>
              Nous écrire
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
