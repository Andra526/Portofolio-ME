import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "layout-grid",
    level: "Paling dikuasai",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 Semantic",
      "Responsive UI/UX",
    ],
  },
  {
    title: "Backend",
    icon: "server",
    level: "Dikuasai",
    skills: [
      "Node.js",
      "REST API",
      "Autentikasi & Role Akses",
      "Logika Bisnis Aplikasi",
    ],
  },
  {
    title: "Database",
    icon: "database",
    level: "Dikuasai",
    skills: ["MySQL", "Perancangan Skema", "Query & Optimasi Dasar"],
  },
  {
    title: "Tools & Lainnya",
    icon: "tools",
    level: "Familiar",
    skills: [
      "Git & GitHub",
      "Vite",
      "Algoritma SPK (SAW)",
      "Computer Vision Dasar",
    ],
  },
];
