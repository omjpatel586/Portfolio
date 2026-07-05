import type { IconName } from "@/components/Icon";

export interface ISkillCategory {
  title: string;
  icon: IconName;
  skills: string[];
}

export const skillCategories: ISkillCategory[] = [
  {
    title: "Languages",
    icon: "code",
    skills: ["TypeScript", "JavaScript", "Python", "C", "C++"],
  },
  {
    title: "Frameworks",
    icon: "layer-group",
    skills: ["Node.js", "NestJS", "NX Monorepo", "React.js", "Next.js"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "MySQL", "MongoDB (NoSQL)", "Redis"],
  },
  {
    title: "AI Integrations",
    icon: "robot",
    skills: ["OpenAI SDK", "Prompt Engineering", "Vector Databases", "LLM Integration"],
  },
  {
    title: "Tools",
    icon: "screwdriver-wrench",
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
    icon: "cloud",
    skills: ["Git", "CI/CD", "Docker"],
  },
  {
    title: "Auth & Security",
    icon: "shield-halved",
    skills: ["JWT", "OAuth 2.0", "Session Management", "Role-Based Access Control (RBAC)"],
  },
  {
    title: "Testing",
    icon: "vial",
    skills: ["Jest", "Chai", "Mocha"],
  },
  {
    title: "Frontend",
    icon: "palette",
    skills: ["HTML", "CSS", "Bootstrap", "jQuery", "TailwindCSS"],
  },
  {
    title: "Core Concepts",
    icon: "cubes",
    skills: ["OOP", "DSA", "AI Agents", "Microservices Architecture"],
  },
  {
    title: "Methodologies",
    icon: "diagram-project",
    skills: ["Agile"],
  },
  {
    title: "Consistency & Learning",
    icon: "graduation-cap",
    skills: ["Problem Solving (TS & Python + DSA)", "Machine Learning (Python)"],
  },
];
