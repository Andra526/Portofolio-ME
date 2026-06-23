export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  category: ProjectCategory;
  image: string;
  link: string;
}

export type ProjectCategory =
  | "Semua"
  | "Company Profile"
  | "Web App"
  | "Full Stack"
  | "AI / Machine Learning";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialCode?: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  level: string;
  skills: string[];
}
