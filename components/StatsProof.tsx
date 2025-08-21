
'use client';

export default function StatsProof() {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-blue-600 to-green-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center text-white">
          <div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">350+</div>
            <div className="text-blue-100 text-xs md:text-sm">Entreprises accompagnées</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">580k€</div>
            <div className="text-blue-100 text-xs md:text-sm">Économies réalisées</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">25%</div>
            <div className="text-blue-100 text-xs md:text-sm">Réduction moyenne</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">100%</div>
            <div className="text-blue-100 text-xs md:text-sm">Satisfaction client</div>
          </div>
        </div>
      </div>
    </section>
  );
}
