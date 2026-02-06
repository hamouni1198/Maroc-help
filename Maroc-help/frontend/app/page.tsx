'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Simple */}
      <header className="fixed top-0 w-full bg-white/98 backdrop-blur-sm border-b border-gray-100 z-50">
  <div className="max-w-6xl mx-auto px-6 py-2">
    <div className="flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center group">
        <img 
          src="/logo.png" 
          alt="Maroqino" 
          className="m-2.5 h-10 w-auto object-contain hover:scale-105 transition-transform"
        />
      </Link>

      {/* Navigation */}
      <nav className="flex items-center gap-8">
        <Link href="/services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
          Services
        </Link>
        <Link href="/login" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
          Connexion
        </Link>
        <Link
          href="/register"
          className="px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-medium transition-colors"
        >
          Commencer
        </Link>
      </nav>
    </div>
  </div>
</header>
{/* Hero Section - Photo en Background */}
<section className="relative min-h-screen flex items-center overflow-hidden">
  {/* Image de fond */}
  <div className="absolute inset-0 z-0">
    <img
      src="/HassanII.jpg"
      alt="Sa Majesté le Roi Hassan II"
      className="w-full h-full object-cover"
    />
    {/* Overlay sombre pour lisibilité du texte */}
    <div className="absolute inset-0 bg-black/60"></div>
  </div>

  {/* Contenu texte */}
  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
    {/* Citation de Hassan II */}
    <div className="space-y-6 mb-12">
      <p className="text-3xl md:text-4xl italic font-light leading-relaxed">
        "Les batailles de la vie ne sont pas gagnées par les plus forts, 
        ni par les plus rapides, mais par ceux qui n'abandonnent jamais."
      </p>
      <p className="text-lg text-amber-400 font-medium">
        — Sa Majesté le Roi Hassan II -
      </p>
    </div>

    {/* Message principal */}
    <div className="space-y-4 mb-12">
      <p className="text-2xl text-gray-200">
        En France, tu portes les valeurs du Maghreb.
      </p>
      
    </div>

    {/* Boutons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center group">
  <Link
    href="/services"
    className="px-8 py-4 bg-black border-2 border-black text-white rounded-lg font-semibold text-lg transition-all duration-300
    group-hover:bg-transparent group-hover:border-white cursor-pointer"
  >
    Découvrir les services →
  </Link>
  <Link
    href="#temoignages"
    className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg transition-all duration-300
    group-hover:bg-black group-hover:border-black cursor-pointer"
  >
    Voir les réussites
  </Link>
</div>
  </div>

  {/* Vague de transition */}
  <div className="absolute bottom-0 left-0 right-0 z-10">
    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
    </svg>
  </div>
</section>

    {/* Statistiques */}
    <section className="py-16  ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-5xl font-bold text-gray-900 mb-2">10K+</div>
            <div className="text-gray-600">Marocains aidés</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Helpers actifs</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-gray-900 mb-2">15</div>
            <div className="text-gray-600">Villes en France</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Parcours - Ligne qui suit le parcours */}
        <section 
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: 'url("/back.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay très sombre */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>
      
        <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 z-1 relative">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ton parcours vers la réussite
          </h3>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            De l'arrivée à l'intégration complète 
          </p>
        </div>
      </div>

      {/* Container sans padding pour les images */}
      <div className="relative h-full">
        {/* Ligne serpentine qui suit le parcours exact */}
        <svg 
      className="absolute inset-0 w-full h-full pointer-events-none" 
      viewBox="0 0 1400 2500"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
  d="M 0,0 
    C 20,140 -20,260 0,350              
    Q 0,450 100,450
    C 250,470 550,430 850,465
    C 1050,435 1350,470 1400,450
    Q 1500,450 1500,550 
    C 1520,690 1480,810 1500,900
    Q 1500,1000 1400,1000
    C 850,1020 550,980 250,1015
    C 50,985 -20,1020 0,1000
    Q -100,1000 -100,1100 
    C -120,1240 -80,1360 -100,1450
    Q -100,1550 0,1550
    C 250,1570 550,1530 850,1565
    C 1050,1535 1350,1570 1400,1550
    Q 1500,1550 1500,1650
    C 1520,1790 1480,1910 1500,2000
    Q 1500,2100 1400,2100
    C 850,2120 550,2080 250,2115
    C 50,2085 -20,2120 0,2100
    Q -100,2100 -100,2200 
    C -120,2440 -80,2960 -100,3200"
  stroke="#059669"
  strokeWidth="2.5"
  fill="none"
  strokeDasharray="15 25"
  strokeLinecap="round"
  opacity="0.8"
/>    </svg>

        <div className="space-y-32 relative z-10">
  
        {/* Étape 1 - Image à DROITE */}
<div className="grid grid-cols-12 gap-8 items-center">
  <div className="col-span-6 text-right">
    <div className="text-white space-y-3 pr-8 max-w-xl ml-auto">
      {/* Titre avec ligne décorative */}
      <div className="inline-block relative mb-4">
        <h4 className="text-2xl font-bold mb-2">L'arrivée</h4>
        <div className="h-0.5 bg-gradient-to-l from-emerald-500 via-emerald-900 to-transparent"></div>
      </div>
      
      <p className="text-gray-400 leading-relaxed">
        Atterrissage à Paris, premier logement temporaire, orientation dans la ville. 
        Les démarches urgentes commencent : préfecture, banque, numéro de sécurité sociale.
      </p>
      
    </div>
  </div>
  
  <div className="col-span-6">
    <div className="rounded-l-2xl overflow-hidden shadow-2xl h-80">
      <img
        src="/avion.jpg"
        alt="Arrivée"
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>
  </div>
</div>

{/* Étape 2 - Image à GAUCHE */}
<div className="grid grid-cols-12 gap-8 items-center">
  <div className="col-span-6">
    <div className="rounded-r-2xl overflow-hidden shadow-2xl h-80">
      <img
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800"
        alt="Démarches"
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>
  </div>
  
  <div className="col-span-6">
    <div className="text-white space-y-3 pl-8 max-w-xl mr-auto">
      {/* Titre avec ligne décorative */}
      <div className="inline-block relative mb-4">
        <h4 className="text-2xl font-bold mb-2">Les démarches</h4>
        <div className="h-0.5 bg-linear-to-r from-emerald-500 via-emerald-900 to-transparent"></div>
      </div>
      
      <p className="text-gray-400 leading-relaxed">
        Ouverture du compte bancaire, inscription à la CAF, dépôt du dossier de titre de séjour. 
        Première recherche d'appartement et de travail. C'est le moment le plus difficile.
      </p>
    
    </div>
  </div>
</div>

{/* Étape 3 - Image à DROITE */}
<div className="grid grid-cols-12 gap-8 items-center">
  <div className="col-span-6 text-right">
    <div className="text-white space-y-3 pr-8 max-w-xl ml-auto">
      {/* Titre avec ligne décorative */}
      <div className="inline-block relative mb-4">
        <h4 className="text-2xl font-bold mb-2">L'accompagnement</h4>
        <div className="h-0.5 bg-gradient-to-l from-emerald-500 via-emerald-900 to-transparent"></div>
      </div>
      
      <p className="text-gray-400 leading-relaxed">
        Connexion avec un Helper marocain expérimenté. Accès au réseau, conseils pratiques, 
        aide pour constituer les dossiers. Les premiers résultats arrivent.
      </p>
      
      
    </div>
  </div>
  
  <div className="col-span-6">
    <div className="rounded-l-2xl overflow-hidden shadow-2xl h-80">
      <img
        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800"
        alt="Aide"
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>
  </div>
</div>

{/* Étape 4 - Image à GAUCHE */}
<div className="grid grid-cols-12 gap-8 items-center">
  <div className="col-span-6">
    <div className="rounded-r-2xl overflow-hidden shadow-2xl h-80">
      <img
        src="https://images.unsplash.com/photo-1560439513-74b037a25d84?w=800"
        alt="Stabilisation"
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>
  </div>
  
  <div className="col-span-6">
    <div className="text-white space-y-3 pl-8 max-w-xl mr-auto">
      {/* Titre avec ligne décorative */}
      <div className="inline-block relative mb-4">
        <h4 className="text-2xl font-bold mb-2">La stabilisation</h4>
        <div className="h-0.5 bg-linear-to-r from-emerald-500 via-emerald-900 to-transparent"></div>
      </div>
      
      <p className="text-gray-400 leading-relaxed">
        Premier contrat de travail signé, appartement trouvé, emménagement. 
        Les papiers administratifs sont en cours. Tu commences à te sentir chez toi.
      </p>
      
    </div>
  </div>
</div>

{/* Étape 5 - Image à DROITE */}
<div className="grid grid-cols-12 gap-8 items-center">
  <div className="col-span-6 text-right">
    <div className="text-white space-y-3 pr-8 max-w-xl ml-auto">
      {/* Titre avec ligne décorative */}
      <div className="inline-block relative mb-4">
        <h4 className="text-2xl font-bold mb-2">La réussite</h4>
        <div className="h-0.5 bg-gradient-to-l from-emerald-500 via-emerald-900 to-transparent"></div>
      </div>
      
      <p className="text-gray-400 leading-relaxed">
        CDI obtenu, appartement meublé, titre de séjour validé. 
        Tu es parfaitement intégré. Maintenant, c'est ton tour d'aider les nouveaux arrivants.
      </p>
      
    </div>
  </div>
  
  <div className="col-span-6">
    <div className="rounded-l-2xl overflow-hidden shadow-2xl h-80">
      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
        alt="Réussite"
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>
  </div>
</div>
    </div>
    </div>


      
    </section>

      {/* Témoignages Épurés */}
      <section id="temoignages" className="py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">
              Ils l'ont fait
            </h3>
            <p className="text-xl text-gray-600">Des histoires vraies de réussite</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt="Ahmed"
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <div className="font-bold text-gray-900">Ahmed, 28 ans</div>
                  <div className="text-sm text-gray-500">Casa → Paris</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                "En 2 semaines : compte bancaire, appartement, CDD. Aujourd'hui ingénieur à La Défense."
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://i.pravatar.cc/100?img=47"
                  alt="Fatima"
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <div className="font-bold text-gray-900">Fatima, 24 ans</div>
                  <div className="text-sm text-gray-500">Fès → Lyon</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                "Sans parler français. Avec l'aide, j'ai pu me concentrer sur mes études. Master de droit."
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://i.pravatar.cc/100?img=33"
                  alt="Youssef"
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <div className="font-bold text-gray-900">Youssef, 31 ans</div>
                  <div className="text-sm text-gray-500">Marrakech → Marseille</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                "200€ investis m'ont économisé 6 mois. Aujourd'hui j'ai mon resto et j'aide les autres."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catégories Épurées */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">
              On t'aide dans tout
            </h3>
            <p className="text-xl text-gray-600">De ton premier jour à ta réussite</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Link href="/services?category=administratif" className="group">
              <div className="text-center p-8 border border-gray-200 rounded-xl hover:border-gray-900 transition">
                <div className="text-5xl mb-4">📋</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 font-playfair">
                  Administratif
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Banque, préfecture, CAF, papiers
                </p>
              </div>
            </Link>

            <Link href="/services?category=logement" className="group">
              <div className="text-center p-8 border border-gray-200 rounded-xl hover:border-gray-900 transition">
                <div className="text-5xl mb-4">🏠</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 font-playfair">
                  Logement
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Appartement, dossier, visite
                </p>
              </div>
            </Link>

            <Link href="/services?category=emploi" className="group">
              <div className="text-center p-8 border border-gray-200 rounded-xl hover:border-gray-900 transition">
                <div className="text-5xl mb-4">💼</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 font-playfair">
                  Emploi
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  CV, entretien, réseau pro
                </p>
              </div>
            </Link>

            <Link href="/services?category=vie_pratique" className="group">
              <div className="text-center p-8 border border-gray-200 rounded-xl hover:border-gray-900 transition">
                <div className="text-5xl mb-4">🎯</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 font-playfair">
                  Vie pratique
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Santé, école, bons plans
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Simple */}
      <section className="py-24 bg-gray-900 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
            Prêt à commencer ?
          </h3>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Rejoins les milliers de Marocains qui ont réussi en France.
          </p>
          <Link
            href="/services"
            className="inline-block px-10 py-4 bg-white text-gray-900 text-lg font-semibold rounded-lg hover:bg-gray-100"
          >
            Trouver mon helper →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl">🇲🇦</span>
            <h3 className="text-2xl font-bold text-gray-900 font-playfair">Maroqino</h3>
          </div>
          <p className="text-gray-600 mb-6">L'entraide qui change des vies</p>
          <div className="flex justify-center gap-8 text-sm text-gray-600">
            <Link href="/services" className="hover:text-gray-900">Services</Link>
            <Link href="/about" className="hover:text-gray-900">À propos</Link>
            <Link href="/contact" className="hover:text-gray-900">Contact</Link>
          </div>
          <p className="text-gray-400 text-sm mt-8">
            © 2026 Maroqino. Fait avec ❤️ pour les Marocains.
          </p>
        </div>
      </footer>
    </div>
  );
}