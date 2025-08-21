"use client";

import React, { useState } from "react";

export default function HomePage() {
  // Exemple de données de secteurs (adapter selon ton site)
  const sectorsData = [
    { name: "Secteur 1", link: "/secteur1" },
    { name: "Secteur 2", link: "/secteur2" },
    { name: "Secteur 3", link: "/secteur3" },
  ];

  const [activeSector, setActiveSector] = useState<number | null>(null);

  const handleSectorClick = (index: number) => {
    setActiveSector(index);
    window.location.href = sectorsData[index].link;
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Bienvenue sur JusteÉnergie Conseils</h1>
      <p className="mb-6">
        Nous vous accompagnons dans la renégociation de vos contrats d’énergie.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sectorsData.map((sector, index) => (
          <div
            key={index}
            className={`p-4 border rounded cursor-pointer ${
              activeSector === index ? "bg-blue-100" : "bg-white"
            }`}
            onClick={() => handleSectorClick(index)}
          >
            <h2 className="text-xl font-semibold">{sector.name}</h2>
            <p>Découvrez nos services pour {sector.name.toLowerCase()}.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
