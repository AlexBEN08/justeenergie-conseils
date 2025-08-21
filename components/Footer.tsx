export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-400 rounded-full flex items-center justify-center">
                <i className="ri-leaf-line text-white text-lg"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">JusteÉnergie</h3>
                <p className="text-sm text-blue-200">CONSEILS</p>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Votre courtier en énergie spécialisé dans la renégociation des contrats gaz et électricité pour les entreprises.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-200">
              <li>• Audit énergétique gratuit</li>
              <li>• Renégociation de contrats</li>
              <li>• Suivi personnalisé</li>
              <li>• Expertise TPE/PME/Industries</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-blue-200">
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-green-400"></i>
                <span>07 69 55 40 28</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-green-400"></i>
                <span>benhayounalexandre@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-map-pin-line text-green-400"></i>
                <span>Lyon, Auvergne-Rhône-Alpes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300">
          <p>&copy; 2024 JusteÉnergie Conseils. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}