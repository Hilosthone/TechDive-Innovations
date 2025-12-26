export interface Course {
  id: number
  title: string
  slug: string
  description: string
  fullDescription: string // Detailed text for the single course page
  type: 'Online' | 'Onsite' | 'Hybrid'
  duration: string
  price: string
  syllabus: string[]
  outcomes: string[]
  instructor: string
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Front-End Development',
    slug: 'front-end-development',
    description:
      'Learn HTML, CSS, JavaScript, and modern frameworks like React with hands-on projects.',
    fullDescription:
      'Our Front-End Development program is designed to take you from a total beginner to a proficient developer. You will learn how to build responsive, interactive, and high-performance websites using the latest industry tools.',
    type: 'Hybrid',
    duration: '12 Weeks',
    price: '₦85,000',
    instructor: 'TechDive Engineering Team',
    syllabus: [
      'Introduction to Web Tech & HTML5',
      'Advanced CSS3 & Responsive Design',
      'JavaScript Fundamentals & ES6+',
      'State Management with React',
      'Version Control with Git & GitHub',
    ],
    outcomes: [
      'Build 5 real-world projects',
      'Master React.js and Tailwind CSS',
      'Understand API integration',
      'Get a professional certificate',
    ],
  },
  {
    id: 2,
    title: 'Back-End Development',
    slug: 'back-end-development',
    description:
      'Master server-side programming using Node.js, Express, databases, and APIs.',
    fullDescription:
      'Focus on the logic that powers applications. This course covers everything from database management to server security and API architecture.',
    type: 'Hybrid',
    duration: '12 Weeks',
    price: '₦90,000',
    instructor: 'TechDive Engineering Team',
    syllabus: [
      'Node.js Fundamentals',
      'Express.js Framework',
      'Database Modeling (MongoDB/PostgreSQL)',
      'Authentication & Security (JWT)',
      'Deploying to Cloud',
    ],
    outcomes: [
      'Build robust backend systems',
      'Design complex database schemas',
      'Implement secure user authentication',
      'Master Server-side logic',
    ],
  },
  {
    id: 3,
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    description:
      'Design intuitive user interfaces and experiences using Figma and UX best practices.',
    fullDescription:
      'Learn the psychology of design. We move from wireframing to high-fidelity prototyping, focusing on user-centered design principles.',
    type: 'Hybrid',
    duration: '8 Weeks',
    price: '₦70,000',
    instructor: 'TechDive Design Lead',
    syllabus: [
      'UX Research & User Personas',
      'Wireframing & Information Architecture',
      'Visual Design Principles',
      'Prototyping in Figma',
      'Design Systems & Handoff',
    ],
    outcomes: [
      'Create a professional Figma portfolio',
      'Conduct user testing sessions',
      'Master UI design patterns',
      'Build interactive prototypes',
    ],
  },
  // Add similar details for Graphics, Data Analysis, and Digital Marketing...
]

export default courses
