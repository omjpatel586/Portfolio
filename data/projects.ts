export type ProjectItem = {
  id: number;
  name: string;
  date: string;
  about: string;
  photo: string;
  url: string;
  stack: string[];
};

export const selfProjects: ProjectItem[] = [
  {
    id: 1,
    name: 'Hospital Management Software',
    date: 'Feb 2023 - Feb 2023',
    about:
      'A simple and clean ReactJS-based user interface designed during my initial phase of learning React. This was my first project using React, focused solely on frontend development and layout design. The UI includes basic screens for managing doctors, appointments and providing a structured foundation for a future full-stack implementation.',
    url: 'https://hospital-management-system-01.vercel.app/',
    photo: '/images/projects/project-1.png',
    stack: ['React.js', 'Bootstrap', 'CSS']
  },
  {
    id: 2,
    name: 'India Blogs Management Software',
    date: 'Feb 2023 - Feb 2023',
    about:
      'India Blogs Management Software is a clean and modern platform to create, edit, and manage blogs. It includes features like blog status toggling, comment visibility control, likes, and full blog view. Admins can easily moderate content while users can read, like, and comment on blogs with ease.',
    url: 'https://drive.google.com/file/d/1aFBLtAumWrgT2fjvQbsq8JIFk4ctDYm6/view?usp=sharing',
    photo: '/images/projects/project-2.png',
    stack: ['React.js', 'Bootstrap', 'CSS', 'PHP', 'MySQL']
  },
  {
    id: 3,
    name: '📄 Invoicely — Smart Invoicing & Effortless Business Management 🚀',
    date: 'June 2024 - July 2024',
    about:
      `A powerful, user-friendly platform designed for modern businesses. From invoices to e-way bills, product catalogs to vendor lists, everything is organized in one seamless dashboard — helping you build professionalism, maintain compliance, and scale your brand effortlessly.

Whether you're handling a single business or managing multiple companies, Invoicely offers the flexibility and control you need — without the complexity.`,
    url: 'https://drive.google.com/file/d/1nCPYO9rYtAUWb8Cdg-71UOOqhQLqCm0k/view?usp=sharing',
    photo: '/images/projects/project-3.png',
    stack: ['Python', 'Tkinter Library In Python', 'PostgresSQL', 'Nest.js', 'Next.js', 'Typescript']
  },
];

export const industrialProjects: ProjectItem[] = [
  {
    id: 1,
    name: 'Quick Med',
    date: 'Oct 2024 - Oct 2024',
    about:
      'Quick Med is a cross-border telemedicine platform. I contributed by designing the database architecture and developing the backend services to support secure video consultations, appointment scheduling, and digital prescriptions. My work helped streamline the healthcare process for users across Switzerland, France, and Germany through scalable and secure backend softwares.',
    url: 'https://www.quickmed.site/',
    photo: '/images/projects/industry-project-01.png',
    stack: ['Node.js', 'Javascript', 'MongoDB', 'React.js', 'Flutter']
  },
  {
    id: 2,
    name: 'BoultBox – 100GB Cloud Storage App',
    date: 'May 2025 - Present',
    about:
      'Worked on full backend development, MongoDB architecture design, and Docker containerization for seamless microservice deployment. Set up CI/CD pipelines for automated testing and deployment. Also contributed to testing like testers. The platform enables users to securely upload, organize, and access files—similar to Terabox—with a focus on scalability and performance.',
    url: 'https://www.boultbox.com/',
    photo: '/images/projects/industry-project-02.png',
    stack: ['Nest.js', 'MongoDB', 'Next.js', 'Flutter', 'Typescript']
  },
  // {
  //   id: 3,
  //   name: 'Cricket Analysis',
  //   date: 'March 2025 - Present',
  //   about:
  //     'India Blogs Management Software is a clean and modern platform to create, edit, and manage blogs. It includes features like blog status toggling, comment visibility control, likes, and full blog view. Admins can easily moderate content while users can read, like, and comment on blogs with ease.',
  //   url: 'https://drive.google.com/file/d/1nCPYO9rYtAUWb8Cdg-71UOOqhQLqCm0k/view?usp=sharing',
  //   photo: '/images/projects/project-3.png',
  //   stack: ['Nest.js', 'MongoDB', 'Next.js', 'Typescript', 'Monorepo Approach']
  // },
  // {
  //   id: 4,
  //   name: 'Capable Man',
  //   date: 'Nov 2024 - Dec 2024',
  //   about:
  //     'India Blogs Management Software is a clean and modern platform to create, edit, and manage blogs. It includes features like blog status toggling, comment visibility control, likes, and full blog view. Admins can easily moderate content while users can read, like, and comment on blogs with ease.',
  //   url: 'https://drive.google.com/file/d/1nCPYO9rYtAUWb8Cdg-71UOOqhQLqCm0k/view?usp=sharing',
  //   photo: '/images/projects/project-3.png',
  //   stack: ['Node.js', 'Javascript', 'MongoDB', 'React.js', 'Flutter']
  // },
  {
    id: 3,
    name: 'ASUP Records',
    date: 'Jan 2026 - Present',
    about:
      'This white-label SaaS solution offers a comprehensive, all-in-one command center where every aspect of the music lifecycle—from metadata management and RouteNote distribution to claims, takedowns, and support—is governed by a granular roles and permissions framework. By centralizing operations into a single dashboard, the platform ensures that admins, labels, and artists interact only with the tools they need, while the backend automates the heavy lifting of financial reconciliation. Once monthly revenue data is uploaded, the software engine precisely calculates splits based on pre- defined commission structures, allowing users to track earnings and initiate withdrawal requests within a secure, transparent, and highly scalable environment.',
    url: 'https://www.asuprecords.com/',
    photo: '/images/projects/industry-project-3.png',
    stack: ['Node.js', 'Typescript', 'MongoDB', 'Next.js', 'Monorepo Approach']
  },
  // {
  //   id: 6,
  //   name: 'Agent Xenon',
  //   date: 'March 2025 - Present',
  //   about:
  //     'India Blogs Management Software is a clean and modern platform to create, edit, and manage blogs. It includes features like blog status toggling, comment visibility control, likes, and full blog view. Admins can easily moderate content while users can read, like, and comment on blogs with ease.',
  //   url: 'https://drive.google.com/file/d/1nCPYO9rYtAUWb8Cdg-71UOOqhQLqCm0k/view?usp=sharing',
  //   photo: '/images/projects/project-3.png',
  //   stack: ['Node.js', 'MongoDB', 'Next.js', 'Typescript']
  // },
];
