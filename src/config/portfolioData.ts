import type { Portfolio, TagColors } from "../types/portfolio";

export const PORTFOLIO_INFO: Portfolio = {
  meta: {
    createdAt: new Date().toISOString(),
    locale: "en-US",
    url: "https://vanoushika.github.io/portfolio",
    pdf: "/Anoushika_Vennamaneni_Resume.pdf",
  },

  personal: {
    name: "Anoushika Vennamaneni",
    title: "Full-Stack Engineer",
    headline: "React · Python · Java · FastAPI · Cloud · Microservices",
    avatar: "/profile.jpg",
    summary:
      "Full-Stack Engineer with 2+ years of experience building scalable backend services and responsive web applications.",

    contact: {
      email: "anoushikavennamaneni@gmail.com",
      phone: "+1 330-774-2910",
      location: "Ohio, USA",
      website: "https://vanoushika.github.io/portfolio",
      socials: [
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/anoushika-vennamaneni/",
          icon: "SiLinkedin",
        },
        {
          label: "GitHub",
          url: "https://github.com/vanoushika",
          icon: "SiGithub",
        },
      ],
    },
  },

  highlights: [
    "Full-Stack Engineer with 2+ years of industry experience",
    "Strong background in backend systems, APIs, and cloud-native development",
    "Experience with Python, Java, React, AWS, Docker, and Kubernetes",
  ],

  skills: [
    {
      title: "Languages",
      skills: [
        { name: "Python", level: 85, category: "backend" },
        { name: "Java", level: 80, category: "backend" },
        { name: "JavaScript", level: 80, category: "frontend" },
        { name: "TypeScript", level: 75, category: "frontend" },
        { name: "C++", level: 70, category: "backend" },
        { name: "C#", level: 65, category: "backend" },
        { name: "Go", level: 65, category: "backend" },
      ],
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "React", level: 85, category: "frontend" },
        { name: "FastAPI", level: 80, category: "backend" },
        { name: "Spring Boot", level: 75, category: "backend" },
        { name: "Node.js", level: 75, category: "backend" },
        { name: "Flask", level: 70, category: "backend" },
        { name: "Django", level: 70, category: "backend" },
        { name: "REST APIs", level: 85, category: "backend" },
        { name: "GraphQL", level: 70, category: "backend" },
      ],
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "PostgreSQL", level: 80, category: "database" },
        { name: "MongoDB", level: 75, category: "database" },
        { name: "Cassandra", level: 70, category: "database" },
        { name: "DynamoDB", level: 70, category: "database" },
        { name: "AWS", level: 75, category: "devops" },
        { name: "Azure", level: 70, category: "devops" },
      ],
    },
    {
      title: "DevOps & Infrastructure",
      skills: [
        { name: "Docker", level: 80, category: "devops" },
        { name: "Kubernetes", level: 75, category: "devops" },
        { name: "CI/CD", level: 75, category: "devops" },
        { name: "Git", level: 85, category: "tooling" },
      ],
    },
  ],

  experience: [
    {
      id: "ysu-ga",
      title: "Graduate Assistant",
      company: "Youngstown State University",
      location: "Ohio, USA",
      date: { start: "2024-01", end: "2025-05" },
      summary:
        "Worked on full-stack internal tools and cloud-based services to improve performance and usability.",
      bullets: [
        "Built React and FastAPI tools used by 60+ users.",
        "Optimized SQL and NoSQL queries, reducing API latency by 60%.",
        "Integrated LLM features and vector search for semantic retrieval.",
        "Improved Docker and Kubernetes deployments, increasing release stability.",
      ],
      tech: ["Python", "React", "FastAPI", "Docker", "Kubernetes", "AWS"],
    },
    {
      id: "capgemini-se",
      title: "Software Engineer",
      company: "Capgemini",
      location: "Hyderabad, India",
      date: { start: "2022-12", end: "2023-12" },
      summary:
        "Worked on scalable backend services and modern web applications for enterprise systems.",
      bullets: [
        "Developed Java and Spring Boot services with React frontends.",
        "Built REST APIs with Redis caching to improve throughput.",
        "Integrated Kafka with MongoDB for asynchronous processing.",
        "Improved CI/CD pipelines using Docker and Kubernetes.",
      ],
      tech: ["Java", "Spring Boot", "React", "Kafka", "Redis", "Docker"],
    },
    {
      id: "amdocs-intern",
      title: "Software Engineer Intern",
      company: "Amdocs",
      location: "Noida, India",
      date: { start: "2022-03", end: "2022-06" },
      summary:
        "Worked on backend services and frontend tools for internal applications.",
      bullets: [
        "Built Python backend services and React UIs.",
        "Developed REST APIs using FastAPI and Flask.",
        "Improved PostgreSQL workflows and CI pipelines.",
      ],
      tech: ["Python", "FastAPI", "React", "PostgreSQL", "Docker"],
    },
  ],

  projects: [
    {
      id: "taskflow",
      title: "TaskFlow – Workflow Management System",
      description:
        "Full-stack workflow management system with real-time processing using React, Nest.js, Redis, and Kafka. Implemented CI/CD pipelines with Docker and Kubernetes achieving 99% uptime.",
      tags: ["React", "Nest.js", "Redis", "Kafka", "Docker", "Kubernetes"],
    },
    {
      id: "fintrack",
      title: "FinTrack – Growth & Insights Platform",
      description:
        "Analytics platform with GraphQL dashboards, Redis caching, and Node.js microservices to support scalable data pipelines.",
      tags: ["React", "GraphQL", "Node.js", "PostgreSQL", "Redis"],
    },
    {
      id: "ai-code-reviewer",
      title: "AI-Powered C++ Code Reviewer",
      description:
        "LLM-powered static analysis tool for C++ and Python code achieving 92% accuracy and reducing manual review time by 40%.",
      tags: ["Python", "C++", "LLM", "React"],
    },
  ],

  education: [
    {
      degree: "Master’s in Computer Science",
      school: "Youngstown State University",
      date: "2024 – 2025",
    },
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      school: "Vignan’s Institute of Management and Technology For Women",
      date: "2019 – 2023",
    },
  ],

  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
    },
    {
      name: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
    },
  ],

  extras: {
    languages: [{ name: "English", level: "Fluent" }],
    interests: ["Software Architecture", "Cloud Systems", "Problem Solving"],
  },
};

/* 🎨 UPDATED PROFESSIONAL COLOR THEME */
export const tagColors: TagColors = {
  React: "bg-sky-100 text-sky-800",
  Python: "bg-amber-100 text-amber-800",
  Java: "bg-rose-100 text-rose-800",
  "C++": "bg-indigo-100 text-indigo-800",

  FastAPI: "bg-emerald-100 text-emerald-800",
  "Spring Boot": "bg-green-100 text-green-800",
  "Node.js": "bg-lime-100 text-lime-800",
  REST: "bg-teal-100 text-teal-800",
  GraphQL: "bg-fuchsia-100 text-fuchsia-800",

  PostgreSQL: "bg-blue-100 text-blue-800",
  MongoDB: "bg-green-200 text-green-900",
  Redis: "bg-red-200 text-red-900",
  Cassandra: "bg-purple-200 text-purple-900",
  DynamoDB: "bg-orange-200 text-orange-900",

  AWS: "bg-orange-500 text-white",
  Azure: "bg-blue-600 text-white",
  Docker: "bg-cyan-500 text-white",
  Kubernetes: "bg-indigo-600 text-white",
  "CI/CD": "bg-slate-600 text-white",

  Microservices: "bg-slate-200 text-slate-800",
  LLM: "bg-violet-200 text-violet-900",
  AI: "bg-gray-200 text-gray-800",
  ML: "bg-pink-200 text-pink-900",

  "Full Stack": "bg-gradient-to-r from-sky-500 to-indigo-600 text-white",
};
