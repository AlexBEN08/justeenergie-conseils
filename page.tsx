
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PopupAudit from '../components/ui/PopupAudit';
import StatsProof from '../components/ui/StatsProof';

export default function Home() {
  const [selectedSector, setSelectedSector] = useState(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

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
      desc: 'Laveries, pressings, salons',
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
        exemples: 'Laveries automatiques, pressings, salons de coiffure, instituts de beauté, centres de fitness...'
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
    router.push(sectorsData[index].link);
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

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PopupAudit />

      {/* Hero Section - Improved mobile responsive */}
      <section 
        className="relative bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900 text-white py-16 md:py-24 min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20businessman%20in%20modern%20office%20building%20with%20glass%20windows%20and%20city%20view%2C%20real%20person%20in%20business%20suit%20reviewing%20energy%20documents%20on%20wooden%20desk%2C%20authentic%20corporate%20environment%20with%20natural%20lighting%20and%20professional%20atmosphere%2C%20realistic%20workplace%20setting&width=1200&height=700&seq=hero-real-business&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-800/75 to-transparent"></div>
        
        {/* Floating elements - Hidden on mobile */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-green-400/20 rounded-full blur-2xl animate-pulse hidden md:block"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-blue-400/15 rounded-full blur-3xl animate-pulse delay-700 hidden md:block"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8">
              <div className="w-4 h-4 md:w-6 md:h-6 flex items-center justify-center mr-2 md:mr-3">
                <i className="ri-award-line text-green-400 text-sm md:text-base"></i>
              </div>
              <span className="text-green-300 font-medium text-sm md:text-base">+350 entreprises nous font confiance</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight">
              L&apos;énergie au 
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent"> juste prix</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-blue-100 leading-relaxed max-w-3xl font-light">
              Courtier spécialisé dans la renégociation des contrats gaz et électricité pour les entreprises. 
              <strong className="text-white">Économisez jusqu&apos;à 40%</strong> avec notre service 100% gratuit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link href="/contact" className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg transition-all duration-300 cursor-pointer whitespace-nowrap inline-block shadow-xl hover:shadow-2xl hover:scale-105 text-center">
                <div className="w-5 h-5 md:w-6 md:h-6 inline-flex items-center justify-center mr-2 md:mr-3 group-hover:scale-110 transition-transform">
                  <i className="ri-calculator-line text-sm md:text-base"></i>
                </div>
                Audit gratuit
              </Link>
              <Link href="/contact" className="group border-2 border-white/80 text-white hover:bg-white hover:text-blue-900 px-6 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg transition-all duration-300 cursor-pointer whitespace-nowrap inline-block backdrop-blur-sm text-center">
                <div className="w-5 h-5 md:w-6 md:h-6 inline-flex items-center justify-center mr-2 md:mr-3 group-hover:scale-110 transition-transform">
                  <i className="ri-phone-line text-sm md:text-base"></i>
                </div>
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StatsProof />

      {/* Services Section - Improved mobile responsive */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 md:px-4 py-2 rounded-full text-sm font-semibold mb-4 md:mb-6">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-service-line text-xs"></i>
              </div>
              Nos services
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-blue-900 mb-4 md:mb-6 leading-tight px-4">
              Comment nous vous 
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"> accompagnons</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Un processus approuvé en 3 étapes pour réduire vos factures énergétiques 
              de 15 à 40% selon votre profil d&apos;entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            <div className="group bg-white p-6 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="relative mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-green-500 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                    <i className="ri-search-line text-white text-xl md:text-3xl"></i>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">Audit énergétique gratuit</h3>
              <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                Analyse complète de vos contrats actuels et identification des opportunités d&apos;économies. 
                <strong>Service 100% gratuit</strong> et sans engagement.
              </p>
              <div className="pt-4 border-t border-gray-100">
                <div className="text-green-600 font-bold text-base md:text-lg">Économies identifiées : jusqu&apos;à 30%</div>
              </div>
            </div>

            <div className="group bg-white p-6 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="relative mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-green-500 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                    <i className="ri-handshake-line text-white text-xl md:text-3xl"></i>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">Négociation experte</h3>
              <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                Négociation avec notre réseau de fournisseurs pour obtenir les meilleures conditions tarifaires 
                adaptées à votre profil de consommation.
              </p>
              <div className="pt-4 border-t border-gray-100">
                <div className="text-green-600 font-bold text-base md:text-lg">Tarifs négociés : -15 à -25%</div>
              </div>
            </div>

            <div className="group bg-white p-6 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="relative mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-green-500 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                    <i className="ri-user-heart-line text-white text-xl md:text-3xl"></i>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">Suivi personnalisé</h3>
              <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                Accompagnement continu après signature du contrat et veille permanente 
                sur l&apos;évolution du marché énergétique.
              </p>
              <div className="pt-4 border-t border-gray-100">
                <div className="text-green-600 font-bold text-base md:text-lg">Garantie : économies maintenues</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link href="/services" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-colors cursor-pointer">
              <span>Découvrir nos services en détail</span>
              <div className="w-5 h-5 flex items-center justify-center ml-2">
                <i className="ri-arrow-right-line text-sm"></i>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Secteurs Section - Improved mobile responsive and fixed icons */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-3 md:px-4 py-2 rounded-full text-sm font-semibold mb-4 md:mb-6">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-building-line text-xs"></i>
              </div>
              Secteurs d&apos;expertise
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-blue-900 mb-4 md:mb-6 leading-tight px-4">
              Tous les <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">secteurs</span> d&apos;activité
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Solutions personnalisées pour chaque type d&apos;entreprise, 
              quelle que soit votre taille ou votre secteur d&apos;activité
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
            {sectorsData.map((sector, index) => (
              <div 
                key={index} 
                className="group bg-white border-2 border-gray-100 hover:border-green-400 p-4 md:p-8 rounded-2xl transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-2 relative overflow-hidden"
                onClick={() => handleSectorClick(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-green-500/0 group-hover:from-blue-600/5 group-hover:to-green-500/5 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                      <i className={`${sector.icon} text-lg md:text-2xl text-white`}></i>
                    </div>
                  </div>
                  <h4 className="text-base md:text-xl font-bold mb-2 md:mb-3 text-blue-900 group-hover:text-blue-800 text-center">{sector.title}</h4>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 group-hover:text-gray-700 text-center">{sector.desc}</p>
                  <div className="flex items-center justify-center mt-3 md:mt-6">
                    <span className="text-xs md:text-sm text-green-600 font-semibold group-hover:text-green-700">
                      Découvrir →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-blue-50 p-6 md:p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">
                Votre secteur ne figure pas dans la liste ? 
              </h3>
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                Nous accompagnons tous types d&apos;entreprises. Contactez-nous pour découvrir 
                comment nous pouvons optimiser vos coûts énergétiques, quel que soit votre secteur.
              </p>
              <Link href="/contact" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer text-sm md:text-base">
                <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center mr-2">
                  <i className="ri-phone-line text-xs md:text-sm"></i>
                </div>
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section - Improved mobile responsive */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-20">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 md:px-4 py-2 rounded-full text-sm font-semibold mb-4 md:mb-6">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-star-line text-xs"></i>
                </div>
                Nos avantages
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-blue-900 mb-4 md:mb-6 leading-tight px-4">
                Pourquoi choisir 
                <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"> JusteÉnergie Conseils</span> ?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Notre rémunération par les fournisseurs garantit un service gratuit et des conseils objectifs
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
              <div className="group text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                    <i className="ri-money-dollar-circle-line text-white text-xl md:text-3xl"></i>
                  </div>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-3">100% gratuit</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Aucun coût pour votre entreprise, nous sommes rémunérés par les fournisseurs
                </p>
              </div>

              <div className="group text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                    <i className="ri-shield-check-line text-white text-xl md:text-3xl"></i>
                  </div>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-3">Sans engagement</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Audit et conseil sans obligation de souscription de votre part
                </p>
              </div>

              <div className="group text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                    <i className="ri-award-line text-white text-xl md:text-3xl"></i>
                  </div>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-3">Expertise reconnue</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Connaissance approfondie du marché énergétique et des spécificités sectorielles
                </p>
              </div>

              <div className="group text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                    <i className="ri-time-line text-white text-xl md:text-3xl"></i>
                  </div>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-3">Réactivité garantie</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Réponse sous 24h et accompagnement personnalisé dans toutes les démarches
                </p>
              </div>
            </div>

            {/* Témoignage client - Improved mobile responsive */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 text-center max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-4 space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                  VP
                </div>
                <div className="text-center sm:text-left">
                  <h5 className="font-bold text-blue-900 text-sm md:text-base">Vladimir Pierens</h5>
                  <p className="text-gray-600 text-xs md:text-sm">CEO - Groupe La vie de Quartier</p>
                </div>
              </div>
              <blockquote className="text-base md:text-lg text-gray-700 italic mb-4 leading-relaxed">
                &quot;JusteÉnergie Conseils nous a accompagnés pour nos 2 nouvelles épiceries. 
                L&apos;expertise dans le commerce de proximité nous a permis de réaliser 
                <strong className="text-green-600"> 3 800€ d&apos;économies annuelles</strong>.&quot;
              </blockquote>
              <div className="flex items-center justify-center">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-star-fill text-yellow-400 text-base md:text-lg"></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section - Improved mobile responsive */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-800 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl hidden md:block"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl hidden md:block"></div>
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8">
              <div className="w-4 h-4 md:w-6 md:h-6 flex items-center justify-center mr-2 md:mr-3">
                <i className="ri-time-line text-green-400 text-sm md:text-base"></i>
              </div>
              <span className="text-green-300 font-medium text-sm md:text-base">Offre limitée - Audit gratuit</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 leading-tight">
              Prêt à <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">économiser</span> ?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Contactez-nous dès aujourd&apos;hui pour un audit gratuit de vos contrats énergétiques. 
              <strong className="text-white">Découvrez combien vous pourriez économiser.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Link href="/contact" className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 md:px-12 py-4 md:py-6 rounded-xl font-bold text-lg md:text-xl transition-all duration-300 cursor-pointer whitespace-nowrap inline-block shadow-2xl hover:shadow-green-500/25 hover:scale-105 text-center">
                <div className="w-5 h-5 md:w-6 md:h-6 inline-flex items-center justify-center mr-2 md:mr-3 group-hover:scale-110 transition-transform">
                  <i className="ri-calculator-line text-sm md:text-base"></i>
                </div>
                Demander un audit gratuit
              </Link>
              <Link href="/contact" className="group border-2 border-white/80 text-white hover:bg-white hover:text-blue-900 px-8 md:px-12 py-4 md:py-6 rounded-xl font-bold text-lg md:text-xl transition-all duration-300 cursor-pointer whitespace-nowrap inline-block backdrop-blur-sm text-center">
                <div className="w-5 h-5 md:w-6 md:h-6 inline-flex items-center justify-center mr-2 md:mr-3 group-hover:scale-110 transition-transform">
                  <i className="ri-phone-line text-sm md:text-base"></i>
                </div>
                <span className="hidden sm:inline">07 69 55 40 28</span>
                <span className="sm:hidden">Appeler</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}