import type { Project, ProjectCategory } from "./types";

import imgAndrajaya from "../assets/projects/proj-andrajaya.jpg";
import imgDigidesa from "../assets/projects/proj-digidesa.jpg";
import imgEternalwo from "../assets/projects/proj-eternal-wo.jpg";
import imgAkar from "../assets/projects/proj-akar.jpg";
import imgWedding from "../assets/projects/proj-wedding-invitation.jpg";
import imgKopisenja from "../assets/projects/proj-kopisenja.jpg";
import imgAutolux from "../assets/projects/proj-autolux.jpg";
import imgPosbarkode from "../assets/projects/proj-posbarkode.jpg";
import imgAygeppos from "../assets/projects/proj-aygeppos.jpg";
import imgSpksaw from "../assets/projects/proj-spksaw.jpg";

export const projects: Project[] = [
  {
    id: "andrajaya",
    title: "PT Andra Jaya Sejahtera",
    tagline: "Company Profile Konstruksi",
    description:
      "Landing page korporat untuk perusahaan konstruksi & pengadaan. Fokus pada kesan profesional dengan hero full-bleed, trust badge, dan CTA ganda untuk konversi leads.",
    stack: ["React", "Tailwind CSS", "Responsive UI"],
    category: "Company Profile",
    image: imgAndrajaya,
    link: "https://github.com/Andra526?tab=repositories",
  },
  {
    id: "digidesa",
    title: "DigiDesa",
    tagline: "Digitalisasi Administrasi Desa",
    description:
      "Sistem informasi desa yang memungkinkan warga mengurus surat keterangan & administrasi kependudukan langsung dari smartphone — lebih cepat, transparan, dan efisien.",
    stack: ["React", "Tailwind CSS", "Form Handling"],
    category: "Web App",
    image: imgDigidesa,
    link: "https://github.com/Andra526?tab=repositories",
  },
  {
    id: "eternalwo",
    title: "Eternal Wedding Organizer",
    tagline: "Landing Page Wedding Organizer",
    description:
      "Website promosi untuk jasa wedding organizer premium, dengan nuansa elegan gelap dan tipografi serif, lengkap dengan galeri, paket, dan testimoni.",
    stack: ["React", "Tailwind CSS", "Animasi UI"],
    category: "Company Profile",
    image: imgEternalwo,
    link: "https://github.com/Andra526?tab=repositories",
  },
  {
    id: "akar",
    title: "Akar",
    tagline: "AI Plant Matcher",
    description:
      "Eksperimen computer vision + content-based filtering: unggah satu foto ruangan, sistem membaca kondisi cahaya lalu mencocokkannya dengan 60 jenis tanaman hias berdasarkan kemiripan karakteristik.",
    stack: ["React", "Computer Vision", "Content-Based Filtering"],
    category: "AI / Machine Learning",
    image: imgAkar,
    link: "https://github.com/Andra526?tab=repositories",
  },
  {
    id: "wedding",
    title: "Undangan Pernikahan Digital",
    tagline: "Adrian & Nadra",
    description:
      "Website undangan pernikahan digital dengan personalisasi nama tamu lewat parameter URL, hero cinematic, dan transisi 'buka undangan' yang halus.",
    stack: ["React", "Tailwind CSS", "Dynamic Routing"],
    category: "Web App",
    image: imgWedding,
    link: "https://github.com/Andra526?tab=repositories",
  },
  {
    id: "kopisenja",
    title: "Kopi Senja",
    tagline: "Landing Page Coffee Shop",
    description:
      "Landing page untuk coffee shop lokal dengan storytelling hangat, palet warna coklat-karamel, serta integrasi live chat untuk reservasi dan tanya menu.",
    stack: ["React", "Tailwind CSS", "UI/UX Design"],
    category: "Company Profile",
    image: imgKopisenja,
    link: "https://github.com/Andra526?tab=repositories",
  },
  {
    id: "autolux",
    title: "AutoLux",
    tagline: "Showroom Mobil Premium",
    description:
      "Platform katalog showroom mobil dengan tema dark-mode premium, fitur booking test drive, login admin, dan highlight statistik kepercayaan pelanggan.",
    stack: ["React", "Tailwind CSS", "Admin Panel"],
    category: "Web App",
    image: imgAutolux,
    link: "https://github.com/Andra526?tab=repositories",
  },
  {
    id: "posbarkode",
    title: "NeoPOS — Fast Scan Mode",
    tagline: "Aplikasi Kasir Berbasis Barcode/QR",
    description:
      "Sistem POS (Point of Sale) dengan mode pemindaian QR Code cepat via kamera, mendukung berbagai metode bayar (cash, transfer, QRIS), dan ringkasan transaksi real-time.",
    stack: ["JavaScript", "QR Scanner API", "Local Storage"],
    category: "Full Stack",
    image: imgPosbarkode,
    link: "https://andra526.github.io/PosBARKODE/",
  },
  {
    id: "aygeppos",
    title: "AYGEP POS",
    tagline: "Terminal Kasir Resto V2.0",
    description:
      "Terminal kasir untuk resto ayam geprek dengan kategori menu, manajemen pesanan per meja, perhitungan pajak otomatis, dan tampilan struk yang siap cetak.",
    stack: ["React", "State Management", "Tailwind CSS"],
    category: "Full Stack",
    image: imgAygeppos,
    link: "https://github.com/Andra526?tab=repositories",
  },
  {
    id: "spksaw",
    title: "SPK SAW — Dosen Terbaik",
    tagline: "Sistem Pendukung Keputusan",
    description:
      "Sistem Pendukung Keputusan untuk menentukan dosen terbaik menggunakan metode Simple Additive Weighting (SAW), lengkap dengan manajemen user, role & permission, kriteria/bobot, dan dashboard visualisasi peringkat.",
    stack: ["React", "Database", "Algoritma SAW", "Role-Based Access"],
    category: "Full Stack",
    image: imgSpksaw,
    link: "https://github.com/Andra526?tab=repositories",
  },
];

export const categories: ProjectCategory[] = [
  "Semua",
  "Company Profile",
  "Web App",
  "Full Stack",
  "AI / Machine Learning",
];
