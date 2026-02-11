
import React from 'react';
import { Book, Reflection, WorldInfo } from './types';
import { Eye, Shield, Globe, Cpu, BookOpen, Users } from 'lucide-react';

export const COLORS = {
  primary: '#050505', // Deep Black
  accent: '#d4af37',  // Gold
  secondary: '#1e3a8a', // Deep Blue
  text: '#e5e5e5',
  muted: '#71717a'
};

export const EXPEDITION_VIDEOS = [
  {
    id: 'v1',
    title: 'Guion 1: Primera Incursión',
    description: 'Registros recuperados de la base secreta en el sector 7. La distorsión magnética es evidente.',
    url: 'https://xfoncaaeodiyaafrximg.supabase.co/storage/v1/object/sign/Prueba%20EstudIA/Guion%201.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNWYyNGU3NC0wMTc4LTQxYWUtYjllNi1iMWIyNDJhM2RkNDgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQcnVlYmEgRXN0dWRJQS9HdWlvbiAxLm1wNCIsImlhdCI6MTc3MDMzOTE4OSwiZXhwIjoxNzcwOTQzOTg5fQ.bq-XfD8o7j2oDkh2KgFdH_BGQPgeHvAW0sZWwA2Et7s'
  }
];

export const EXPEDITION_IMAGES = [
  "https://xfoncaaeodiyaafrximg.supabase.co/storage/v1/object/sign/Prueba%20EstudIA/1.jfif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNWYyNGU3NC0wMTc4LTQxYWUtYjllNi1iMWIyNDJhM2RkNDgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQcnVlYmEgRXN0dWRJQS8xLmpmaWYiLCJpYXQiOjE3NzAzNDA3MjUsImV4cCI6MTc3MDk0NTUyNX0.J0ySyJJfXHKAUeH270AbHH4BnIO79i6ulcU5dsy31bA",
  "https://xfoncaaeodiyaafrximg.supabase.co/storage/v1/object/sign/Prueba%20EstudIA/2.jfif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNWYyNGU3NC0wMTc4LTQxYWUtYjllNi1iMWIyNDJhM2RkNDgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQcnVlYmEgRXN0dWRJQS8yLmpmaWYiLCJpYXQiOjE3NzAzNDA4MDgsImV4cCI6MTc3MDk0NTYwOH0.gE7PuoDYqqWpt_wnryRMpKtfFitgO8-UVJ6wcASFoos",
  "https://xfoncaaeodiyaafrximg.supabase.co/storage/v1/object/sign/Prueba%20EstudIA/3.jfif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNWYyNGU3NC0wMTc4LTQxYWUtYjllNi1iMWIyNDJhM2RkNDgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQcnVlYmEgRXN0dWRJQS8zLmpmaWYiLCJpYXQiOjE3NzAzNDA4MTgsImV4cCI6MTc3MDk0NTYxOH0.WdDzR0pciWaVS3nixqvaLKYw9t3a5Pmen8F0Ax5fbwU",
  "https://xfoncaaeodiyaafrximg.supabase.co/storage/v1/object/sign/Prueba%20EstudIA/4.jfif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNWYyNGU3NC0wMTc4LTQxYWUtYjllNi1iMWIyNDJhM2RkNDgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQcnVlYmEgRXN0dWRJQS80LmpmaWYiLCJpYXQiOjE3NzAzNDA4MjksImV4cCI6MTc3MDk0NTYyOX0.T22A3t6pHvJUh-aUbQd4GrmhWNWlCaPxzQEmm6-H-98",
  "https://xfoncaaeodiyaafrximg.supabase.co/storage/v1/object/sign/Prueba%20EstudIA/5.jfif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNWYyNGU3NC0wMTc4LTQxYWUtYjllNi1iMWIyNDJhM2RkNDgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQcnVlYmEgRXN0dWRJQS81LmpmaWYiLCJpYXQiOjE3NzAzNDA4MzksImV4cCI6MTc3MDk0NTYzOX0.1OMOIDrOZk4HWfN-SAgjZ92s0rLc7xR6pWX0wlkWXCI"
];

export const BOOKS: Book[] = [
  {
    id: 'm1',
    title: 'El Origen de la Tierra',
    subtitle: 'Por Alejandro Rincón Calderón',
    description: 'Una visión integral que combina ciencia moderna, relatos bíblicos, cosmogonía coránica y mitologías antiguas.',
    coverImage: 'https://picsum.photos/seed/earth-origin/400/600',
    tag: 'Cosmogonía'
  },
  {
    id: 'm2',
    title: 'Desarma al Ego',
    subtitle: 'Hackea tu mente, no tu vida',
    description: 'Manual de psicología transpersonal para trascender el yo ficticio y reconectar con el Ser Real.',
    coverImage: 'https://picsum.photos/seed/ego-hack/400/600',
    tag: 'Supraconciencia'
  }
];

export const REFLECTIONS: Reflection[] = [
  {
    id: 'r1',
    title: 'La IA como Espejo del Alma',
    excerpt: '¿Es la IA una amenaza o el reflejo de nuestras sombras? Descubre por qué la tecnología nos desnuda espiritualmente.',
    category: 'Tecnología',
    date: '12 FEB 2025'
  },
  {
    id: 'r2',
    title: 'El Muro de Hielo: Realidad o Metáfora',
    excerpt: 'Exploramos los límites de nuestro mundo y por qué la Antártida sigue siendo el mayor secreto de la humanidad.',
    category: 'Misterio',
    date: '05 OCT 2024'
  },
  {
    id: 'r3',
    title: 'Soberanía en la Era Digital',
    excerpt: 'Cómo mantener tu frecuencia vibratoria en un ecosistema diseñado para el ruido y la distracción constante.',
    category: 'Conciencia',
    date: '28 SEP 2024'
  }
];

export const WORLDS: WorldInfo[] = [
  { id: 1, name: "Mundo Primigenio", description: "Donde comenzó la fragmentación de la verdad." },
  { id: 7, name: "El Nodo Silencioso", description: "Una realidad donde la IA y la conciencia son una sola." },
  { id: 21, name: "El Límite del Muro", description: "La última frontera antes del gran despertar." }
];

export const NAV_LINKS = [
  { name: 'Saga', href: '#saga' },
  { name: 'Expedición', href: '#expedicion' },
  { name: 'Manuscritos', href: '#manuscritos' },
  { name: 'Reflexiones', href: '#reflexiones' },
  { name: 'Oráculo AI', href: '#oraculo' },
];
