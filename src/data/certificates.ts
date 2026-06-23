import type { Certificate } from "./types";

import imgMathBasics from "../assets/certificates/cert-huawei-mathbasics.jpg";
import imgAlgorithm from "../assets/certificates/cert-huawei-algorithm.jpg";
import imgDataOrgCra from "../assets/certificates/cert-huawei-data-organization-cra.jpg";
import imgDataOrg from "../assets/certificates/cert-huawei-data-organization.jpg";
import imgPersonalBranding from "../assets/certificates/cert-personal-branding.jpg";
import imgWebDevelopment from "../assets/certificates/cert-web-development.jpg";

export const certificates: Certificate[] = [
  {
    id: "huawei-mathbasics",
    title: "Math Basics",
    issuer: "Huawei ICT Academy",
    date: "20 Nov 2025",
    image: imgMathBasics,
    credentialCode: "EBG20251120000050",
  },
  {
    id: "personal-branding",
    title: "Webinar Membangun Personal Branding dan Strategi Wirausaha di Era Digital",
    issuer: "Universitas Muhammadiyah Sukabumi",
    date: "21 Jun 2025",
    image: imgPersonalBranding,
    credentialCode: "0161/WPSW/UMUS/VI/2025",
  },
  {
    id: "huawei-data-org-cra",
    title: "Information Representation and Data Organization (CRA Training Program)",
    issuer: "Huawei ICT Academy",
    date: "11 Jun 2025",
    image: imgDataOrgCra,
    credentialCode: "ICTCRA20250611000018",
  },
  {
    id: "huawei-data-org",
    title: "Information Representation and Data Organization",
    issuer: "Huawei Talent",
    date: "11 Jun 2025",
    image: imgDataOrg,
    credentialCode: "ICT20250611000018",
  },
  {
    id: "huawei-algorithm",
    title: "Algorithm and Program Design",
    issuer: "Huawei Talent",
    date: "11 Jun 2025",
    image: imgAlgorithm,
    credentialCode: "ICT20250611000011",
  },
  {
    id: "web-development",
    title: 'Nasional IT Workshop "Web Development" — INVOFEST 2024',
    issuer: "HMPTI × Politeknik Harapan Bersama",
    date: "22 Okt 2024",
    image: imgWebDevelopment,
    credentialCode: "023.24/HMPTI.KMPHB/X/2024",
  },
];
