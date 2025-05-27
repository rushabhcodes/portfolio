import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

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
  avatarUrl: "/me.png",
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
    "Firebase",
    "Python",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
contact: {
  email: "mail@rushabh.dev",
  tel: "+919511660256",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/rushabh",  // Assuming this, let me know if different
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://linkedin.com/in/rushabh",  // Assuming, please correct if needed
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
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
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
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
  ],
} as const;
