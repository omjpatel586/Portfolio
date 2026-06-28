export interface IExperienceHighlight {
  title: string;
  detail: string;
}

export interface IExperienceItem {
  id: number;
  period: string;
  role: string;
  company: string;
  intro: string;
  highlights?: IExperienceHighlight[];
  outro?: string;
  skills: string[];
}

export const experienceItems: IExperienceItem[] = [
  {
    id: 1,
    period: "Dec 2024 - Present",
    role: "Backend & DevOps Engineer",
    company: "Transcodezy IT Solutions Pvt. Ltd.",
    intro:
      "Building scalable backend solutions with Node.js, NestJS, MongoDB, and AWS within an Nx monorepo architecture. Hands-on with AI agents, message queues for load balancing, DevOps practices, and tools such as Puppeteer.",
    highlights: [
      {
        title: "AI-based HR interview automation",
        detail:
          "Designed the MongoDB schema, developed the APIs, and built an AI agent using prompt engineering to automate the interview process.",
      },
      {
        title: "Cloud storage platform",
        detail:
          "Developed scalable APIs, implemented rate limiting, and optimised the MongoDB schema for efficient data handling.",
      },
      {
        title: "Cricket data analysis tool",
        detail:
          "Enabled file uploads, generated performance reports, and applied AI models to analyse cricket data for users.",
      },
      {
        title: "Facebook automation suite",
        detail:
          "Built Node.js scripts using Puppeteer to automate posts, likes, reels, and group shares, improving social-reach automation.",
      },
      {
        title: "Music distribution software",
        detail:
          "A white-label platform that lets artists distribute their music to various platforms, with royalty management.",
      },
    ],
    outro:
      "Also focused on improving English writing, technical explanation, and spoken clarity for better client communication and documentation.",
    skills: [
      "Message Queues",
      "AI Agents",
      "NX monolithic architecture",
      "Puppeteer",
      "Web Scraping",
      "English writing & grammer",
      "Speaking & explanation",
      "Amazon Web Services (AWS)",
      "Cloud computing",
      "Devops",
      "Payment Gateways",
      "Video streaming using hls protocol",
      "Apache kafka",
      "Cloud storage solutions",
      "Docker",
    ],
  },
  {
    id: 2,
    period: "Sep 2023 - Dec 2024",
    role: "Backend Engineer",
    company: "Kmphitech Solutions Pvt. Ltd.",
    intro:
      "Applied my Node.js expertise to build efficient backend solutions, focusing on API performance, scalability, and meeting project timelines. Key projects included:",
    highlights: [
      {
        title: "Music Streaming Software (Web)",
        detail: "Built and optimised backend APIs for music data retrieval and user interaction.",
      },
      {
        title: "Quick Medical Appointments Software (Mobile)",
        detail:
          "Designed the backend logic for patient–doctor appointment scheduling and notifications.",
      },
      {
        title: "Activity Marathon Software (Mobile)",
        detail: "Created secure, scalable APIs for user activity tracking and leaderboard functionality.",
      },
      {
        title: "Social Dating App & Book Service App (Ongoing)",
        detail:
          "Engineered backend structures for authentication, user matching, and service management.",
      },
    ],
    outro:
      "This role emphasised my ability to design high-performance systems with Node.js and meet project deadlines effectively.",
    skills: [
      "Unit Testing",
      "Project Management",
      "Time Management",
      "api documentation using postman features",
    ],
  },
  {
    id: 3,
    period: "May 2023 - Aug 2023",
    role: "Backend Engineer Intern",
    company: "Codexial Technologies Pvt. Ltd.",
    intro:
      "Worked on diverse, challenging projects that strengthened my expertise in TypeScript and NestJS, designing clean, efficient, and scalable backend solutions. Key projects included:",
    highlights: [
      {
        title: "Movie Booking Software",
        detail: "Developed backend APIs for seamless booking and real-time availability updates.",
      },
      {
        title: "Customer Support Ticketing Software",
        detail:
          "Designed a secure, efficient backend architecture to manage and track support tickets.",
      },
    ],
    outro:
      "This experience reinforced my commitment to delivering high-quality code and completing complex projects.",
    skills: [
      "TypeScript",
      "NestJS",
      "Backend Development",
      "Node.js",
      "API Development",
      "Database Design",
      "Version Control",
      "gRPC",
      "Microservices",
      "Software Unit Testing with jest",
      "Javascript",
      "ORM",
      "MongoDB",
      "JWT",
      "Redis",
      "Socket.IO",
      "Server API Validations",
      "Optimization",
      "Problem solving and debugging",
      "Express.js",
    ],
  },
];
