
export interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  tag: string;
}

export interface Reflection {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

export interface WorldInfo {
  id: number;
  name: string;
  description: string;
}
