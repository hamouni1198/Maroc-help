

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { servicesApi, ServiceDetail } from '@/app/lib/api';

export default function ServiceDetailPage() {
  const params = useParams();
  const [service, setService] = useState<ServiceDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadService();
  }, [params.id]);

  const loadService = async () => {
    setLoading(true);
    try {
      const data = await servicesApi.getById(Number(params.id));
      setService(data);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600">Service non trouvé</p>
          <Link href="/services" className="text-indigo-600 hover:text-indigo-700 mt-4 inline-block">
            Retour aux services
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      administratif: '📋',
      logement: '🏠',
      emploi: '💼',
      vie_pratique: '🎯',
    };
    return icons[category] || '📦';
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      administratif: 'Administratif',
      logement: 'Logement',
      emploi: 'Emploi',
      vie_pratique: 'Vie pratique',
    };
    return labels[category] || category;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-3xl">🇲🇦</span>
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Maroqino</h1>
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-gray-900"
            >
              ← Retour aux services
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image et infos principales */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Image */}
              <div className="h-64 bg-gradient-to-br from-indigo-100 to-purple-100 relative">
                {service.photos && service.photos[0] ? (
                  <img
                    src={service.photos[0]}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-8xl">
                    {getCategoryIcon(service.category)}
                  </div>
                )}
                
                {service.online && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Service en ligne
                  </div>
                )}
              </div>

              {/* Contenu */}
              <div className="p-6">
                {/* Catégorie et ville */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    {getCategoryIcon(service.category)} {getCategoryLabel(service.category)}
                  </span>
                  <span className="text-gray-600">📍 {service.city}</span>
                </div>

                {/* Titre */}
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>

                {/* Note et avis */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-xl">⭐</span>
                    <span className="text-lg font-semibold">
                      {service.averageRating > 0 ? service.averageRating.toFixed(1) : 'Nouveau'}
                    </span>
                  </div>
                  {service.reviewCount > 0 && (
                    <span className="text-gray-600">
                      ({service.reviewCount} avis)
                    </span>
                  )}
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Disponibilité */}
                {service.availability && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Disponibilité
                    </h3>
                    <p className="text-gray-700">🕐 {service.availability}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Avis */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Avis des clients ({service.reviewCount})
              </h3>

              {service.reviews && service.reviews.length > 0 ? (
                <div className="space-y-4">
                  {service.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-4 last:border-0">
                      <div className="flex items-start gap-3">
                        {/* Avatar */}
                        <img
                          src={review.author.profilePhoto || 'https://i.pravatar.cc/100'}
                          alt={review.author.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />

                        <div className="flex-1">
                          {/* Nom et note */}
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-gray-900">
                              {review.author.name}
                            </span>
                            <div className="flex">
                              {[...Array(review.rating)].map((_, i) => (
                                <span key={i} className="text-yellow-400">⭐</span>
                              ))}
                            </div>
                          </div>

                          {/* Commentaire */}
                          <p className="text-gray-700 mb-2">{review.comment}</p>

                          {/* Date */}
                          <p className="text-xs text-gray-500">
                            {new Date(review.createdAt).toLocaleDateString('fr-FR', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">
                  Aucun avis pour le moment. Soyez le premier à laisser un avis !
                </p>
              )}
            </div>
          </div>

          {/* Sidebar - Carte de réservation et helper */}
          <div className="space-y-6">
            {/* Carte de prix */}
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {service.priceInEuros}€
                </div>
                <p className="text-gray-600 text-sm">par service</p>
              </div>

              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition mb-3">
                Réserver maintenant
              </button>

              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
                Contacter le helper
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Vous ne serez débité qu'après confirmation
              </p>
            </div>

            {/* Profil du helper */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Proposé par
              </h3>

              <div className="flex items-start gap-3 mb-4">
                <img
                  src={service.helper.profilePhoto || 'https://i.pravatar.cc/100'}
                  alt={service.helper.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {service.helper.name}
                  </h4>
                  <p className="text-sm text-gray-600">📍 {service.helper.city}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-green-500 text-xs">✓</span>
                    <span className="text-xs text-gray-600">Vérifié</span>
                  </div>
                </div>
              </div>

              {/* Langues */}
              {service.helper.languages && service.helper.languages.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Langues parlées :</p>
                  <div className="flex flex-wrap gap-2">
                    {service.helper.languages.map((lang, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact */}
              <div className="space-y-2 text-sm">
                {service.helper.phone && (
                  <p className="text-gray-700">
                    📱 {service.helper.phone}
                  </p>
                )}
                {service.helper.email && (
                  <p className="text-gray-700 break-all">
                    ✉️ {service.helper.email}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}