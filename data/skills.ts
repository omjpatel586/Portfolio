export interface ISkillCategory {
  title: string;
  icon: string; // Font Awesome class
  skills: string[];
}

export const skillCategories: ISkillCategory[] = [
  {
    title: "Languages",
    icon: "fas fa-code",
    skills: ["TypeScript", "JavaScript", "Python", "C", "C++"],
  },
  {
    title: "Frameworks",
    icon: "fas fa-layer-group",
    skills: ["Node.js", "NestJS", "NX Monorepo", "React.js", "Next.js"],
  },
  {
    title: "Databases",
    icon: "fas fa-database",
    skills: ["PostgreSQL", "MySQL", "MongoDB (NoSQL)", "Redis"],
  },
  {
    title: "AI Integrations",
    icon: "fas fa-robot",
    skills: ["OpenAI SDK", "Prompt Engineering", "Vector Databases", "LLM Integration"],
  },
  {
    title: "Tools",
    icon: "fas fa-screwdriver-wrench",
    skills: [
      "Socket.io",
      "REST APIs",
      "Postman",
      "API Documentation",
      "Swagger API",
      "BullMQ",
      "Redis Pub/Sub",
      "Jira",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "fas fa-cloud",
    skills: ["Git", "CI/CD", "Docker"],
  },
  {
    title: "Auth & Security",
    icon: "fas fa-shield-halved",
    skills: ["JWT", "OAuth 2.0", "Session Management", "Role-Based Access Control (RBAC)"],
  },
  {
    title: "Testing",
    icon: "fas fa-vial",
    skills: ["Jest", "Chai", "Mocha"],
  },
  {
    title: "Frontend",
    icon: "fas fa-palette",
    skills: ["HTML", "CSS", "Bootstrap", "jQuery", "TailwindCSS"],
  },
  {
    title: "Core Concepts",
    icon: "fas fa-cubes",
    skills: ["OOP", "DSA", "AI Agents", "Microservices Architecture"],
  },
  {
    title: "Methodologies",
    icon: "fas fa-diagram-project",
    skills: ["Agile"],
  },
  {
    title: "Consistency & Learning",
    icon: "fas fa-graduation-cap",
    skills: ["Problem Solving (TS & Python + DSA)", "Machine Learning (Python)"],
  },
];
