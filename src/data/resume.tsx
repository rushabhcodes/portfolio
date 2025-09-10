import { Icons } from "@/components/icons";
import { HomeIcon, Globe, LeafyGreen } from "lucide-react";

export const DATA = {
  name: "Rushabh Patil",
  initials: "RP",
  url: "https://rushabhpatil.dev",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/Mumbai",
  description:
    "Fullstack wizard, converts air into code. Passionate about building impactful products and empowering communities.",
  summary:
    "I'm currently pursuing a degree in Computer Engineering and constantly exploring new technologies. I enjoy learning, contributing to open source, developing tools that improve the developer experience, and participating in hackathons to challenge myself and learn by doing.",
  avatarUrl: "/me.jpg",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Flutter",
    "Dart",
    "Node.js",
    "TailwindCSS",
    "MongoDB",
    "Postgres",
    "Docker",
    "Python",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://garden.rushabh.dev",
      icon: LeafyGreen,
      label: "Digital Garden",
    },
  ],
  contact: {
    email: "mail@rushabh.dev",
    tel: "+919511660256",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rushabhscode",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/rushabh-ganesh-patil",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/rushabhstwt",
        icon: Icons.x,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/rushabhsig",
        icon: Icons.instasgram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mail@rushabh.dev",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Adani, Thermal Power Plant",
      href: "https://atomic.finance",
      badges: [],
      location: "On-Site",
      title: "Software Engineer Intern",
      logoUrl: "/atomic.png",
      start: "Jul 2025",
      end: "Sep 2025",
      description:
        "Project: PlantOps Knowledge Engine — developed an on-prem LLM assistant tailored for plant staff to securely query manuals and SOPs without internet access. Implemented model packaging, optimized local inference for edge deployment, a secure UI, and role-based access controls."    },
  ],

  education: [
    {
      school: "VIVA Institute of Technology, Virar",
      href: "https://www.viva-technology.org/New/",
      degree: "Computer Engineering ( B.E. )",
      logoUrl:
        "https://www.viva-technology.org/New/wp-content/uploads/2014/08/viva-logo-resized-white.png",
      start: "2023",
      end: "Present",
    },
    {
      school: "P. G. Jr. College, Bordi ( Gokhale Education Society )",
      href: "https://scontent.fbom50-1.fna.fbcdn.net/v/t39.30808-1/294073696_433246155482168_3299101997460754672_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=7o6gVg1bL-gQ7kNvwF-opYK&_nc_oc=AdmCKI3vfwriqc7Dp1Oap5WQl5arlCu8lviH9HeTR4kI9KH8YOui5S6C6neG7m0U3vU&_nc_zt=24&_nc_ht=scontent.fbom50-1.fna&_nc_gid=1tAJxtR1fRMf8rP3c9TaRw&oh=00_AfJQCJ0sRraAUl8cTi_ZO3bokLsvzezFIL-BoIwb8OoxMg&oe=683E685A",
      degree: "XII th ( HSC )",
      logoUrl:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJ1aWxkaW5nMi1pY29uIGx1Y2lkZS1idWlsZGluZy0yIj48cGF0aCBkPSJNNiAyMlY0YTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjE4WiIvPjxwYXRoIGQ9Ik06IDEySDRhMiAyIDAgMCAwLTIgMnY2YTIgMiAwIDAgMCAyIDJoMiIvPjxwYXRoIGQ9Ik0xOCA5aDJhMiAyIDAgMCAxIDIgMnY5YTIgMiAwIDAgMS0yIDJoLTIiLz48cGF0aCBkPSJNMTAgNmg0Ii8+PHBhdGggZD0iTTEwIDEwaDQiLz48cGF0aCBkPSJNMTAgMTRoNCIvPjxwYXRoIGQ9Ik0xMCAxOGg0Ii8+PC9zdmc+",
      start: "2020",
      end: "2022",
    },
    {
      school: "St. Mary's High School",
      href: "https://www.facebook.com/stmarysdahanu/",
      degree: "X th ( SSC )",
      logoUrl:
        "https://scontent.fbom50-1.fna.fbcdn.net/v/t39.30808-1/294073696_433246155482168_3299101997460754672_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=7o6gVg1bL-gQ7kNvwF-opYK&_nc_oc=AdmCKI3vfwriqc7Dp1Oap5WQl5arlCu8lviH9HeTR4kI9KH8YOui5S6C6neG7m0U3vU&_nc_zt=24&_nc_ht=scontent.fbom50-1.fna&_nc_gid=1tAJxtR1fRMf8rP3c9TaRw&oh=00_AfJQCJ0sRraAUl8cTi_ZO3bokLsvzezFIL-BoIwb8OoxMg&oe=683E685A",
      start: "2012",
      end: "2019",
    },
  ],

  projects: [
    {
      title: "Primeflix",
      href: "",
      dates: "",
      active: true,
      description: "",
      technologies: ["React Native", "Nativewind", "TMDB API"],
      links: [
        {
          type: "Source",
          href: "https://github.com/rushabhcodes/primeflix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "MPower",
      href: "https://mpower.example.com",
      dates: "January 2024 - Present",
      active: true,
      description:
        "A mental health support platform offering anonymous counseling, peer support, AI-driven assistance, calming activities, and helplines to help users worldwide.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "TailwindCSS",
        "NextAuth",
        "OpenAI API",
      ],
      links: [
        {
          type: "Website",
          href: "https://mpower.example.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Adhikar",
      href: "https://adhikar.example.com",
      dates: "September 2024 - Present",
      active: true,
      description:
        "A legal empowerment app that simplifies interactions with legal documents and services using document scanning, content extraction, translation, text-to-speech, and a marketplace for legal professionals.",
      technologies: [
        "Flutter",
        "Dart",
        "OCR Technology",
        "Text-to-Speech",
        "Next.js",
        "Node.js",
        "MongoDB",
        "AI-powered RAG model",
      ],
      links: [
        {
          type: "Website",
          href: "https://adhikar.example.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Social Media Performance Analysis",
      href: "https://socialmedia.example.com",
      dates: "February 2025 - April 2025",
      active: true,
      description:
        "A data analytics tool that analyzes social media engagement and performance metrics using Langflow and vector databases to generate actionable insights.",
      technologies: [
        "Python",
        "Langflow",
        "DataStax",
        "PostgreSQL",
        "React",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rushabh-patil/social-media-performance",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "AceHack 4.0",
      dates: "March 29th - 30th, 2025",
      location: "Jaipur, India",
      description:
        "Developed a legal empowerment app that simplifies interactions with legal documents and services using document scanning, content extraction, translation, text-to-speech, and a marketplace for legal professionals.",
      image: "/hackathon/acehack4.jpg",
      links: [],
    },
    {
      title: "Level SuperMind Hackathon",
      dates: "January 18 – 19, 2025",
      location: "Mumbai, Maharashtra, India",
      description:
        "Built an AstroTalk-style consultation app featuring real-time session booking, state-managed chat, and a clean, calming UI. This project combined cultural insights with technical expertise, resulting in a user-centric experience I am proud of.",
      image:
        "https://cdn.prod.website-files.com/674ad949a9a9dac6c88af770/674c4677c29e9c0c25c2f571_faviconV2%20(2).png",
      links: [],
    },
    {
      title: "AceHack 3.0",
      dates: "April 6th - 7th, 2024",
      location: "Jaipur, India",
      description:
        "Fine-tuned a large language model to generate legal documents and contracts in Hindi, Marathi, and English. Built a web app enabling users to interact with the model and generate documents effortlessly.",
      image: "/hackathon/acehack3.svg",
      links: [],
    },

    {
      title: "HackSparrow (E-Cell Terna)",
      dates: "March 22 - 24, 2024",
      location: "Mumbai, Maharashtra, India",
      description:
        "Developed a full-stack voting app to decentralize elections using Web3, MetaMask, and Solidity. Ensured real-time, tamper-proof voting with blockchain-backed transparency and no central control. This purposeful build remains a highlight of my journey.",
      image:
        "https://hackodyssey.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fcf7124eed86446e1b5ddabb1c504d739%2Fassets%2Ffavicon%2F783.png&w=1440&q=75",
      links: [],
    },
    {
      title: "HACKX 2.0 (NMIMS IEEE)",
      dates: "March 16 - 17, 2024",
      location: "Mumbai, Maharashtra, India",
      description:
        "Crafted a Web 2.0 productivity dashboard that aggregates content from platforms like Reddit, YouTube, and Medium, adapting to user goals and moods. Integrated smart filters, a task manager, daily digests, and a mood-based UI. This project was a testament to my passion for UI/UX design and functionality.",
      image:
        "https://edu.ieee.org/in-nmimsnavimumbai/wp-content/uploads/sites/993/2024/07/image-removebg-preview-21.png",
      links: [],
    },
    {
      title: "Bit N Build (GDSC CRCE)",
      dates: "February 24 - 25, 2024",
      location: "Mumbai, Maharashtra, India",
      description:
        "Designed an anti-corruption reporting platform leveraging Web3 for secure, anonymous, and transparent reporting. Advanced to the final round, creating a decentralized farmer-supplier marketplace with smart contracts and a farmer-friendly UI. This hackathon marked the beginning of my journey in impactful tech solutions.",
      image: "https://bitnbuild.vercel.app/favicon.ico",
      links: [],
    },
  ],
} as const;
