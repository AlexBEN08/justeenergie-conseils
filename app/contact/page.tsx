'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    entreprise: '',
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    secteur: '',
    typeContrat: '',
    factureMensuelle: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    if (!formData.entreprise || !formData.nom || !formData.telephone || !formData.email) {
      setSubmitStatus('Veuillez remplir tous les champs obligatoires.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://readdy.ai/api/form-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          ...formData,
          form_id: 'justeenergie-contact'
        })
      });

      if (response.ok) {
        setSubmitStatus('Votre demande a été envoyée avec succès ! Nous vous recontacterons dans les plus brefs délais.');
        setFormData({
          entreprise: '',
          nom: '',
          prenom: '',
          telephone: '',
          email: '',
          secteur: '',
          typeContrat: '',
          factureMensuelle: '',
          message: ''
        });
      } else {
        setSubmitStatus('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      setSubmitStatus('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Nous contacter</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Prêt à optimiser vos coûts énergétiques ? Contactez-nous pour un audit gratuit et sans engagement
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Formulaire */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Demande d'audit énergétique</h2>
                <p className="text-gray-600 mb-8">
                  Remplissez ce formulaire et nous vous recontacterons sous 24h pour planifier votre audit gratuit.
                </p>

                <form id="justeenergie-contact" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom de l'entreprise *
                      </label>
                      <input
                        type="text"
                        name="entreprise"
                        value={formData.entreprise}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Secteur d'activité
                      </label>
                      <select
                        name="secteur"
                        value={formData.secteur}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                      >
                        <option value="">Sélectionnez un secteur</option>
                        <option value="restauration">Restauration</option>
                        <option value="hotellerie">Hôtellerie</option>
                        <option value="commerce">Commerce</option>
                        <option value="industrie">Industrie</option>
                        <option value="artisanat">Artisanat</option>
                        <option value="services">Services</option>
                        <option value="tourisme">Tourisme</option>
                        <option value="sante">Santé</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom
                      </label>
                      <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type de contrat actuel
                      </label>
                      <select
                        name="typeContrat"
                        value={formData.typeContrat}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                      >
                        <option value="">Sélectionnez le type</option>
                        <option value="electricite">Électricité uniquement</option>
                        <option value="gaz">Gaz uniquement</option>
                        <option value="dual">Électricité + Gaz</option>
                        <option value="ne-sait-pas">Je ne sais pas</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Facture mensuelle approximative
                      </label>
                      <select
                        name="factureMensuelle"
                        value={formData.factureMensuelle}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                      >
                        <option value="">Sélectionnez une tranche</option>
                        <option value="moins-200">Moins de 200€</option>
                        <option value="200-500">200€ - 500€</option>
                        <option value="500-1000">500€ - 1 000€</option>
                        <option value="1000-2000">1 000€ - 2 000€</option>
                        <option value="plus-2000">Plus de 2 000€</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message complémentaire
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-vertical"
                      placeholder="Décrivez votre situation actuelle, vos besoins spécifiques..."
                    />
                    <div className="text-right text-xs text-gray-500 mt-1">
                      {formData.message.length}/500 caractères
                    </div>
                  </div>

                  {submitStatus && (
                    <div className={`p-4 rounded-lg ${submitStatus.includes('succès') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                      {submitStatus}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || formData.message.length > 500}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="ri-loader-4-line animate-spin mr-2"></i>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <i className="ri-send-plane-line mr-2"></i>
                        Demander mon audit gratuit
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    En soumettant ce formulaire, vous acceptez d'être recontacté par JusteÉnergie Conseils
                    dans le cadre de votre demande d'audit énergétique.
                  </p>
                </form>
              </div>

              {/* Informations de contact */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Nos coordonnées</h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center">
                        <i className="ri-phone-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">Téléphone</h4>
                        <p className="text-gray-600">07 69 55 40 28</p>
                        <p className="text-sm text-gray-500">Du lundi au vendredi, 9h-18h</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center">
                        <i className="ri-mail-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">Email</h4>
                        <p className="text-gray-600">benhayounalexandre@gmail.com</p>
                        <p className="text-sm text-gray-500">Réponse sous 24h garantie</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center">
                        <i className="ri-map-pin-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">Adresse</h4>
                        <p className="text-gray-600">Lyon, Auvergne-Rhône-Alpes</p>
                        <p className="text-sm text-gray-500">Interventions dans toute la France</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Pourquoi nous choisir ?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <i className="ri-check-line text-green-400 text-xl"></i>
                      <span>Audit 100% gratuit et sans engagement</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-check-line text-green-400 text-xl"></i>
                      <span>Réponse sous 24h garantie</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-check-line text-green-400 text-xl"></i>
                      <span>Accompagnement personnalisé</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-check-line text-green-400 text-xl"></i>
                      <span>Économies moyennes de 25%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Questions fréquentes</h2>
              <p className="text-xl text-gray-600">
                Les réponses aux questions les plus courantes de nos futurs clients
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-blue-900 mb-3">
                  Combien coûte votre service ?
                </h4>
                <p className="text-gray-600">
                  Notre service est entièrement gratuit pour les entreprises. Nous sommes rémunérés
                  directement par les fournisseurs d'énergie, ce qui nous permet de vous offrir
                  un accompagnement sans aucun coût.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-blue-900 mb-3">
                  Combien de temps prend l'audit énergétique ?
                </h4>
                <p className="text-gray-600">
                  L'audit initial prend généralement entre 30 minutes et 1 heure selon la complexité
                  de votre situation. Nous analysons ensuite vos factures en détail pour vous présenter
                  les meilleures opportunités sous 48h.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-blue-900 mb-3">
                  Quelles économies puis-je espérer ?
                </h4>
                <p className="text-gray-600">
                  Les économies varient selon votre situation actuelle, mais nos clients réalisent
                  en moyenne 25% d'économies sur leurs factures énergétiques. Certains peuvent
                  économiser jusqu'à 40% selon leur profil de consommation.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-blue-900 mb-3">
                  Y a-t-il des frais cachés ?
                </h4>
                <p className="text-gray-600">
                  Absolument aucun. Notre rémunération est transparente et provient uniquement
                  des fournisseurs. Vous n'avez aucun frais à payer, que ce soit pour l'audit,
                  la négociation ou le suivi de votre contrat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}