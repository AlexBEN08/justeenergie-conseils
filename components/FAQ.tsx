'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Combien coûte votre service ?",
      answer: "Notre service est entièrement gratuit pour les entreprises. Nous sommes rémunérés directement par les fournisseurs d'énergie, ce qui nous permet de vous offrir un accompagnement sans aucun coût."
    },
    {
      question: "Quelles économies puis-je espérer ?",
      answer: "Les économies varient selon votre situation actuelle, mais nos clients réalisent en moyenne 25% d'économies sur leurs factures énergétiques. Certains peuvent économiser jusqu'à 40% selon leur profil de consommation."
    },
    {
      question: "Combien de temps prend l'audit énergétique ?",
      answer: "L'audit initial prend généralement entre 30 minutes et 1 heure selon la complexité de votre situation. Nous analysons ensuite vos factures en détail pour vous présenter les meilleures opportunités sous 48h."
    },
    {
      question: "Y a-t-il des frais cachés ?",
      answer: "Absolument aucun. Notre rémunération est transparente et provient uniquement des fournisseurs. Vous n'avez aucun frais à payer, que ce soit pour l'audit, la négociation ou le suivi de votre contrat."
    },
    {
      question: "Puis-je annuler à tout moment ?",
      answer: "Oui, vous restez totalement libre de vos décisions. L'audit est sans engagement et vous pouvez choisir de ne pas donner suite aux propositions sans aucune conséquence."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Questions fréquentes</h2>
            <p className="text-xl text-gray-600">
              Les réponses aux questions les plus courantes de nos futurs clients
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <h4 className="text-lg font-semibold text-blue-900 pr-4">{faq.question}</h4>
                  <i className={`ri-arrow-down-s-line text-xl text-gray-400 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}></i>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}