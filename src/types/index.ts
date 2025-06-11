export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  category: 'ai' | 'programming' | 'tools' | 'softSkills';
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
