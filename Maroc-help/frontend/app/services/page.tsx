'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { servicesApi, Service } from '@/app/lib/api';

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const cities = ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Bordeaux'];
  const categories = [
    { value: 'administratif', label: 'Administratif', icon: '📋' },
    { value: 'logement', label: 'Logement', icon: '🏠' },
    { value: 'emploi', label: 'Emploi', icon: '💼' },
    { value: 'vie_pratique', label: 'Vie pratique', icon: '🎯' },
  ];

  useEffect(() => {
    loadServices();
  }, [selectedCity, selectedCategory]);

  const loadServices = async () => {
    setLoading(true);
    try {
      const filters: any = {};
      if (selectedCity) filters.city = selectedCity;
      if (selectedCategory) filters.category = selectedCategory;
      
      const data = await servicesApi.getAll(filters);
      setServices(data);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
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
            <div className="flex gap-4">
              <Link
                href="/login"
                className="px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                Connexion
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Inscription
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Titre et description */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Tous les services disponibles
          </h2>
          <p className="text-gray-600">
            {services.length} service{services.length > 1 ? 's' : ''} disponible{services.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Filtres */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Filtre par ville */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ville
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">Toutes les villes</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtre par catégorie */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Catégorie
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">Toutes les catégories</option>
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.icon} {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Bouton reset */}
          {(selectedCity || selectedCategory) && (
            <button
              onClick={() => {
                setSelectedCity('');
                setSelectedCategory('');
              }}
              className="mt-4 text-sm text-indigo-600 hover:text-indigo-700"
            >
              Réinitialiser les filtres
            </button>
          )}
        </div>

        {/* Loading */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            <p className="mt-4 text-gray-600">Chargement des services...</p>
          </div>
        ) : (
          <>
            {/* Liste des services */}
            {services.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <p className="text-gray-600 text-lg">
                  Aucun service trouvé avec ces filtres
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    className="bg-white rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden group"
                  >
                    {/* Image */}
                    <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 relative overflow-hidden">
                      {service.photos && service.photos[0] ? (
                        <img
                          src={service.photos[0]}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-6xl">
                          {categories.find(c => c.value === service.category)?.icon || '📦'}
                        </div>
                      )}
                      
                      {/* Badge en ligne */}
                      {service.online && (
                        <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                          En ligne
                        </div>
                      )}
                    </div>

                    {/* Contenu */}
                    <div className="p-5">
                      {/* Catégorie et ville */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-indigo-600 uppercase">
                          {categories.find(c => c.value === service.category)?.label}
                        </span>
                        <span className="text-xs text-gray-500">📍 {service.city}</span>
                      </div>

                      {/* Titre */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {service.description}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        {/* Prix */}
                        <div>
                          <span className="text-2xl font-bold text-gray-900">
                            {service.priceInEuros}€
                          </span>
                        </div>

                        {/* Note */}
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span>
                          <span className="text-sm font-medium text-gray-900">
                            {service.averageRating > 0 ? service.averageRating.toFixed(1) : 'Nouveau'}
                          </span>
                          {service.reviewCount > 0 && (
                            <span className="text-xs text-gray-500">
                              ({service.reviewCount})
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Disponibilité */}
                      {service.availability && (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <p className="text-xs text-gray-500">
                            🕐 {service.availability}
                          </p>
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
