import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      {/* Section logos entreprises */}
      <div className="border-b border-blue-800/50 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-6 md:mb-8">
            <p className="text-blue-200 text-xs md:text-sm uppercase tracking-wider font-semibold mb-3 md:mb-4">
              Ils nous font confiance
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 opacity-70">
              {[
                { name: 'Groupe La vie de Quartier', icon: 'ri-store-2-line' },
                { name: 'Restaurant Le Petit Gourmet', icon: 'ri-restaurant-line' },
                { name: 'Garage Lefebvre & Fils', icon: 'ri-car-line' },
                { name: 'Hôtel des Jardins', icon: 'ri-hotel-line' },
                { name: 'Boulangerie Rousseau', icon: 'ri-cake-3-line' },
              ].map((client, index) => (
                <div key={index} className="flex items-center space-x-2 text-blue-200">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className={`${client.icon} text-sm md:text-lg`}></i>
                  </div>
                  <span className="text-xs md:text-sm font-medium hidden sm:inline">{client.name}</span>
                  <span className="text-xs font-medium sm:hidden">{client.name.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Logo et description */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-green-400 rounded-xl flex items-center justify-center">
                  <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                    <i className="ri-leaf-line text-white text-lg md:text-xl"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-black text-white">JusteÉnergie</h3>
                  <p className="text-xs md:text-sm text-blue-200 font-bold tracking-wider">CONSEILS</p>
                </div>
              </div>
              <p className="text-blue-200 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                Votre courtier en énergie spécialisé dans la renégociation des contrats gaz et électricité pour les entreprises.
              </p>
              <div className="flex space-x-3 md:space-x-4">
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-blue-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                    <i className="ri-linkedin-line text-white text-sm md:text-base"></i>
                  </div>
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-blue-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                    <i className="ri-facebook-line text-white text-sm md:text-base"></i>
                  </div>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-white">Nos services</h4>
              <ul className="space-y-2 md:space-y-3 text-blue-200">
                <li className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-check-line text-green-400 text-xs md:text-sm"></i>
                  </div>
                  <span className="text-sm md:text-base">Audit énergétique gratuit</span>
                </li>
                <li className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-check-line text-green-400 text-xs md:text-sm"></i>
                  </div>
                  <span className="text-sm md:text-base">Renégociation de contrats</span>
                </li>
                <li className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-check-line text-green-400 text-xs md:text-sm"></i>
                  </div>
                  <span className="text-sm md:text-base">Suivi personnalisé</span>
                </li>
                <li className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-check-line text-green-400 text-xs md:text-sm"></i>
                  </div>
                  <span className="text-sm md:text-base">Expertise tous secteurs</span>
                </li>
              </ul>
            </div>

            {/* Liens rapides */}
            <div>
              <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-white">Liens rapides</h4>
              <ul className="space-y-2 md:space-y-3 text-blue-200">
                <li>
                  <Link href="/services" className="hover:text-white transition-colors cursor-pointer text-sm md:text-base">
                    Services détaillés
                  </Link>
                </li>
                <li>
                  <Link href="/qui-sommes-nous" className="hover:text-white transition-colors cursor-pointer text-sm md:text-base">
                    Qui sommes-nous ?
                  </Link>
                </li>
                <li>
                  <Link href="/temoignages" className="hover:text-white transition-colors cursor-pointer text-sm md:text-base">
                    Témoignages clients
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors cursor-pointer text-sm md:text-base">
                    Blog et conseils
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors cursor-pointer text-sm md:text-base">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-white">Contact</h4>
              <div className="space-y-3 md:space-y-4 text-blue-200">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-phone-line text-green-400 text-base md:text-lg"></i>
                  </div>
                  <div>
                    <a href="tel:0769554028" className="hover:text-white transition-colors cursor-pointer font-semibold text-sm md:text-base">
                      07 69 55 40 28
                    </a>
                    <p className="text-xs text-blue-300">Du lundi au vendredi, 9h-18h</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-mail-line text-green-400 text-base md:text-lg"></i>
                  </div>
                  <div>
                    <a href="mailto:contact@justeenergie-conseils.fr" className="hover:text-white transition-colors cursor-pointer text-sm md:text-base break-all">
                      contact@justeenergie-conseils.fr
                    </a>
                    <p className="text-xs text-blue-300">Réponse sous 48h garantie</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-map-pin-line text-green-400 text-base md:text-lg"></i>
                  </div>
                  <div>
                    <span className="text-sm md:text-base">Lyon, Auvergne-Rhône-Alpes</span>
                    <p className="text-xs text-blue-300">Interventions dans toute la France</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800/50 py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-300 text-xs md:text-sm text-center md:text-left">
              &copy; 2024 JusteÉnergie Conseils. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-4 md:space-x-6 text-xs md:text-sm text-blue-300">
              <a href="#" className="hover:text-white transition-colors cursor-pointer">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}