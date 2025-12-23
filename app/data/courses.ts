// // app/data/courses.ts

// interface Course {
//   id: number
//   title: string
//   description: string
//   type?: string
// }

// const courses: Course[] = [
//   {
//     id: 1,
//     title: 'Front-End Development',
//     description:
//       'Learn HTML, CSS, JavaScript, and modern frameworks like React with hands-on projects.',
//     type: 'Hybrid',
//   },
//   {
//     id: 2,
//     title: 'Back-End Development',
//     description:
//       'Master server-side programming using Node.js, Express, databases, and API development.',
//     type: 'Hybrid',
//   },
//   {
//     id: 3,
//     title: 'UI/UX Design',
//     description:
//       'Design intuitive interfaces and experiences using Figma, Adobe XD, and best UX practices.',
//   },
//   {
//     id: 4,
//     title: 'Graphics Design',
//     description:
//       'Create stunning graphics using Adobe Photoshop, Illustrator, and Canva for digital media.',
//   },
//   {
//     id: 5,
//     title: 'Data Analysis',
//     description:
//       'Analyze datasets and visualize insights using Excel, Python, and Power BI.',
//   },
//   {
//     id: 6,
//     title: 'Digital Marketing',
//     description:
//       'Learn SEO, social media marketing, Google Ads, and online campaign strategies.',
//   },
// ]

// export default courses

// app/data/courses.ts

export interface Course {
  id: number
  title: string
  slug: string
  description: string
  type: 'Online' | 'Onsite' | 'Hybrid'
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Front-End Development',
    slug: 'front-end-development',
    description:
      'Learn HTML, CSS, JavaScript, and modern frameworks like React with hands-on projects.',
    type: 'Hybrid',
  },
  {
    id: 2,
    title: 'Back-End Development',
    slug: 'back-end-development',
    description:
      'Master server-side programming using Node.js, Express, databases, and APIs.',
    type: 'Hybrid',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    description:
      'Design intuitive user interfaces and experiences using Figma and UX best practices.',
    type: 'Hybrid',
  },
  {
    id: 4,
    title: 'Graphics Design',
    slug: 'graphics-design',
    description:
      'Create professional graphics using Photoshop, Illustrator, and Canva.',
    type: 'Hybrid',
  },
  {
    id: 5,
    title: 'Data Analysis',
    slug: 'data-analysis',
    description:
      'Analyze data and generate insights using Excel, Python, and Power BI.',
    type: 'Hybrid',
  },
  {
    id: 6,
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    description:
      'Learn SEO, social media marketing, ads, and online campaign strategies.',
    type: 'Hybrid',
  },
]

export default courses
