
export interface IMediaItem {
  id: number;
  thumbnail: string; // URL or placeholder
  title: string;
  description?: string;
  url: string;
};

export interface IEducationItem {
  id: number;
  date: string;
  title: string;
  school: string;
  description: string;
  skills?: string[];
  media?: IMediaItem[];
};

export const educationItems: IEducationItem[] = [
  {
    id: 1,
    title: 'MSC. IT, Computer Science',
    school: 'Saurashtra University',
    description: `Completed a Master's in Information Technology with a focus on advanced computing concepts, software architecture.`,
    date: 'June 2024 - April 2026',
    media: [
      {
        id: 1,
        thumbnail: 'images/educations/education-04.png',
        title: 'Saurashtra University',
        description: 'Saurashtra University, University Road, Rajkot - 360005, Gujarat, India.',
        url: 'https://www.saurashtrauniversity.ac.in/'
      }
    ]
  },
  {
    id: 2,
    title: 'BCA, Computer Science',
    school: 'Saurashtra University',
    description: `Successfully completed my Bachelor of Computer Applications (BCA) with a strong focus on programming, problem-solving, and software development.

Throughout the course, I gained hands-on knowledge in:

▪ Programming Languages: C, C++, C#
▪ Data Structures & Algorithms: Applied concepts in problem-solving and logic building
▪ Linux Softwares: Built theoretical understanding of OS concepts and software-level operations
▪ Final Year Project: Developed an Invoice Generation Software using Python and GUI programming, focusing on practical implementation, user interface design, and data handling
▪ Academic Excellence: Achieved 1st Rank in Semester 1 and Semester 6

This academic journey significantly strengthened my analytical mindset, coding skills, and software development foundation.`,
    date: 'July 2021 - Mar 2024',
    media: [
      {
        id: 1,
        thumbnail: 'images/educations/education-04.png',
        title: 'Saurashtra University',
        description: 'Saurashtra University, University Road, Rajkot - 360005, Gujarat, India.',
        url: 'https://www.saurashtrauniversity.ac.in/'
      }
    ]
  },
  {
    id: 3,
    title: '1st – 12th Grade | Commerce Stream | 12 Years',
    school: 'JB Diamonds and KARP Impex School ( CBSE Board )',
    description: `Completed my entire schooling from Grade 1 to 12 under the CBSE curriculum at JB Diamond & Karp Vidya Sankul.
Built a strong academic foundation through subjects like English, Mathematics, and Science in earlier years.
In the Commerce stream, I gained comprehensive knowledge in Accounting, Business Studies, and Economics, and also explored Python programming up to a medium proficiency level.

Achievements:
▪ Scored 74% in 10th Grade (CBSE Board)
▪ Secured 91% in 12th Grade (Commerce Stream, CBSE Board)

This consistent academic journey helped me develop analytical thinking, communication skills, and a deep interest in business and technology.`,
    date: 'Oct 2009 - July 2021',
    media: [
      {
        id: 1,
        thumbnail: 'images/educations/education-03.png',
        title: 'JB Diamond & Karp Impex Vidya Sankul Campus',
        description: 'Thakor Dwar Farm, Surat - Kamrej Hwy, opp. Diamond Nagar, Surat, Gujarat 395006',
        url: 'https://jbkarpschool.ac.in/'
      }
    ]
  },
  {
    id: 4,
    title: 'Full Stack JS Developer Certified',
    school: 'Creative Design & Multimedia Institute',
    description: `As a dedicated student, I gained comprehensive knowledge of full- stack
development, mastering technologies like HTML, CSS, JavaScript
•React.js, PHP, and Node.js
01/2021 – 03/2024
Surat, India
•My passion for coding drove me to complete several hands-on projects
•This experience solidified my foundation in backend development and sparked
my interest in advanced technologies like AI
•Instagram Clone: Replicated essential social media functionalities using
React.js and Node.js
•E Commerce App: Integrated backend APIs for product management and order
processing
•Blog Application: Developed a PHP backend for dynamic content storage and
retrieval
•Hospital Management System: Combined React.js and Node.js to streamline
hospital workflows, including patient data management.`,
    date: 'Jan 2021 - Mar 2024',
    media: [
      {
        id: 1,
        thumbnail: 'images/educations/education-05.png',
        title: 'Creative Design & Multimedia Institute',
        description: '401-402, 4th Floor, City Center Complex, Near Yogichowk, Varachha, Surat - 395010',
        url: 'https://www.cdmi.in/'
      }
    ]
  },
  {
    id: 5,
    title: 'LinkedIn AI Sales Mastery',
    school: 'Meetup',
    description: ``,
    date: 'Aug 2024 - Oct 2024',
    media: [
      {
        id: 1,
        thumbnail: 'images/educations/education-01.png',
        title: 'LinkedIn Sales Mastery Session - Batch 03',
        url: 'https://www.linkedin.com/learning/'
      },
      {
        id: 2,
        thumbnail: 'images/educations/education-02.png',
        title: 'LinkedIn Sales Mastery Session - Batch 01',
        description: 'This was a transformative experience that enhanced my personal branding, networking, and content strategy skills. This session taught me how to effectively leverage LinkedIn for professional growth, helping me connect with the right audience and build a strong online presence. It empowered me to create meaningful connections and grow my influence on the platform.',
        url: 'https://www.linkedin.com/learning/'
      }
    ]
  },
];
