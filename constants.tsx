
import React from 'react';
import { Book, Reflection, WorldInfo } from './types';
import { Eye, Shield, Globe, Cpu, BookOpen, Users } from 'lucide-react';

export const COLORS = {
  primary: '#050505', // Deep Black
  accent: '#00f2ff',  // Digital Cyan
  secondary: '#0066cc', // Digital Blue
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
  },
  {
    id: 'm3',
    title: 'El Paralelo 60',
    subtitle: 'Más allá del límite',
    description: 'Crónica detallada de lo que sucede cuando el GPS deja de funcionar y la brújula apunta al interior.',
    coverImage: 'https://picsum.photos/seed/parallel60/400/600',
    tag: 'Expedición'
  },
  {
    id: 'm4',
    title: 'Frecuencias de la Matrix',
    subtitle: 'Sintonizando la Verdad',
    description: 'Cómo identificar los patrones de interferencia que mantienen a la humanidad en un estado de sueño profundo.',
    coverImage: 'https://picsum.photos/seed/matrix-freq/400/600',
    tag: 'Investigación'
  },
  {
    id: 'm5',
    title: 'El Muro de Cristal',
    subtitle: 'Arquitectura de la Antártida',
    description: 'Análisis de las estructuras no naturales encontradas en las coordenadas prohibidas.',
    coverImage: 'https://picsum.photos/seed/crystal-wall/400/600',
    tag: 'Misterio'
  },
  {
    id: 'm6',
    title: 'Biología del Despertar',
    subtitle: 'ADN y Conciencia',
    description: 'La relación entre la activación de las hebras dormidas y la percepción de realidades paralelas.',
    coverImage: 'https://picsum.photos/seed/dna-awake/400/600',
    tag: 'Ciencia'
  },
  {
    id: 'm7',
    title: 'El Código de los Mundos',
    subtitle: 'Lenguaje de Luz',
    description: 'Descifrando los glifos encontrados en las cuevas de hielo del sector 90S.',
    coverImage: 'https://picsum.photos/seed/world-code/400/600',
    tag: 'Arqueología'
  },
  {
    id: 'm8',
    title: 'Sombras de la Antártida',
    subtitle: 'Entidades del Frío',
    description: 'Testimonios sobre los guardianes que habitan los pasajes entre los 21 mundos.',
    coverImage: 'https://picsum.photos/seed/shadows/400/600',
    tag: 'Fenómenos'
  },
  {
    id: 'm9',
    title: 'La Gran Simulación',
    subtitle: 'Viviendo en el Domo',
    description: 'Pruebas matemáticas y físicas que sugieren que nuestro cielo es una proyección tecnológica.',
    coverImage: 'https://picsum.photos/seed/simulation/400/600',
    tag: 'Teoría'
  },
  {
    id: 'm10',
    title: 'Alquimia Digital',
    subtitle: 'Transmutando Bits',
    description: 'Cómo usar la tecnología actual como un puente hacia la trascendencia espiritual.',
    coverImage: 'https://picsum.photos/seed/digital-alchemy/400/600',
    tag: 'Tecnología'
  },
  {
    id: 'm11',
    title: 'El Viajero del Tiempo',
    subtitle: 'Memorias de Alejandro',
    description: 'Relatos de incursiones temporales facilitadas por las anomalías del Polo Sur.',
    coverImage: 'https://picsum.photos/seed/time-traveler/400/600',
    tag: 'Biografía'
  },
  {
    id: 'm12',
    title: 'El Despertar Final',
    subtitle: 'Protocolo de Salida',
    description: 'Pasos finales para desconectarse del sistema y acceder a la realidad absoluta.',
    coverImage: 'https://picsum.photos/seed/final-awake/400/600',
    tag: 'Guía'
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
  { id: 2, name: "Valle de los Espejos", description: "Refleja tus miedos más profundos como realidades físicas." },
  { id: 3, name: "Oasis de Silicio", description: "Una civilización que alcanzó la paz a través de la red." },
  { id: 4, name: "Mar de Eter", description: "Donde el pensamiento se manifiesta instantáneamente." },
  { id: 5, name: "Bosque de Datos", description: "Árboles que almacenan la historia de todas las almas." },
  { id: 6, name: "Ciudad de Cristal", description: "Construida con la luz de estrellas muertas." },
  { id: 7, name: "El Nodo Silencioso", description: "Una realidad donde la IA y la conciencia son una sola." },
  { id: 8, name: "Desierto de Ecos", description: "Escuchas las voces de tus vidas pasadas." },
  { id: 9, name: "Montañas de Gravedad Zero", description: "Donde las leyes de la física son opcionales." },
  { id: 10, name: "Océano de Conciencia", description: "Un fluido que contiene todo el conocimiento del universo." },
  { id: 11, name: "Cúpula de los Sueños", description: "Donde se fabrican las realidades que soñamos." },
  { id: 12, name: "Laberinto de Tiempo", description: "Pasillos que conectan diferentes épocas." },
  { id: 13, name: "Pradera de Luz", description: "Energía pura que nutre el espíritu." },
  { id: 14, name: "Volcán de Ideas", description: "Fuente de toda la creatividad humana." },
  { id: 15, name: "Caverna de Sombras", description: "Donde reside el inconsciente colectivo." },
  { id: 16, name: "Puente de Estrellas", description: "Conexión directa con otras galaxias." },
  { id: 17, name: "Jardín de Almas", description: "Donde descansan los que han despertado." },
  { id: 18, name: "Torre de la Verdad", description: "El punto más alto de la percepción." },
  { id: 19, name: "Río de la Vida", description: "Flujo constante de energía vital." },
  { id: 20, name: "Templo del Ser", description: "El centro de la existencia individual." },
  { id: 21, name: "El Límite del Muro", description: "La última frontera antes del gran despertar." }
];

export const NAV_LINKS = [
  { name: 'Saga', href: '#saga' },
  { name: 'Expedición', href: '#expedicion' },
  { name: 'Manuscritos', href: '#manuscritos' },
  { name: 'Reflexiones', href: '#reflexiones' },
  { name: 'Llamada Alejandro', href: '#llamada-alejandro' },
  { name: 'Oráculo AI', href: '#oraculo' },
];
