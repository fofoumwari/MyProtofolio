// src/types/index.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string; // Optional
  liveUrl?: string;   // Optional
}

export interface JournalEntry {
  id: number;
  title: string;
  date: string;
  content: string;
  summary?: string; // For your future AI feature!
}

export type NavLink = {
  name: string;
  href: string;
};

export interface JournalEntry {
  id: number;
  title: string;
  date: string;
  content: string;
  tags?: string[];
}