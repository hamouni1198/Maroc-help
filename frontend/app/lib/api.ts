import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Types
export interface Service {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  priceInEuros: number;
  city: string;
  availability: string;
  photos: string[];
  status: string;
  online: boolean;
  averageRating: number;
  reviewCount: number;
  helper: string; // URL vers le helper dans la liste
  createdAt: string;
}

export interface ServiceDetail {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  priceInEuros: number;
  city: string;
  availability: string;
  photos: string[];
  status: string;
  online: boolean;
  averageRating: number;
  reviewCount: number;
  helper: {
    id: number;
    name: string;
    email: string;
    phone: string;
    profilePhoto: string;
    city: string;
    languages: string[];
  };
  reviews: Review[];
  createdAt: string;
}

export interface Review {
  id: number;
  rating: number;
  comment: string;
  author: {
    name: string;
    profilePhoto: string;
  };
  createdAt: string;
}

// API Calls
export const servicesApi = {
  // Liste tous les services
  getAll: async (filters?: { city?: string; category?: string }) => {
    const params = new URLSearchParams();
    if (filters?.city) params.append('city', filters.city);
    if (filters?.category) params.append('category', filters.category);
    
    const response = await api.get(`/api/services?${params.toString()}`);
    return response.data['hydra:member'] || response.data.member;
  },

  // Détails d'un service
  getById: async (id: number) => {
    const response = await api.get(`/api/services/${id}`);
    return response.data;
  },
};

export default api;