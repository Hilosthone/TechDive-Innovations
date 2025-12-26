'use client'

import { useState, useRef } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const curriculumData = [
  {
    category: 'Development',
    courses: [
      {
        title: 'Front-End Development',
        tutor: 'Hilosthone',
        skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
        modules: [
          'HTML5 & Semantic Web',
          'Advanced CSS Grid/Flexbox',
          'JavaScript ES6+',
          'React Hooks & Context API',
          'Deployment with Vercel',
        ],
      },
      {
        title: 'Back-End Development',
        tutor: 'Hilosthone',
        skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
        modules: [
          'Server Architecture',
          'RESTful API Design',
          'Database Modeling',
          'JWT Authentication',
          'Middleware & Security',
        ],
      },
      {
        title: 'App Development',
        tutor: 'Hilosthone',
        skills: ['React Native', 'Expo', 'Mobile UI'],
        modules: [
          'Native Components',
          'Navigation (Stack/Tabs)',
          'Device Features (Camera/GPS)',
          'App Store Publishing',
        ],
      },
    ],
  },
  {
    category: 'Data Analysis',
    courses: [
      {
        title: 'Data Analysis & Visualization',
        tutor: 'Mr. Sid',
        skills: ['Excel', 'SQL', 'Power BI', 'Tableau'],
        modules: [
          'Data Cleaning & Transformation',
          'Relational Database Concepts (SQL)',
          'Creating Interactive Dashboards',
          'Business Intelligence Reporting',
          'Exploratory Data Analysis (EDA)',
        ],
      },
    ],
  },
  {
    category: 'Data Science',
    courses: [
      {
        title: 'Data Science & Machine Learning',
        tutor: 'Mr. Sid',
        skills: ['Python', 'Scikit-Learn', 'Pandas', 'Statistics'],
        modules: [
          'Python for Data Science',
          'Advanced Statistical Modeling',
          'Supervised & Unsupervised Learning',
          'Predictive Analytics',
          'Model Deployment Basics',
        ],
      },
    ],
  },
  {
    category: 'Design & Creative',
    courses: [
      {
        title: 'Graphics Design & UI/UX',
        tutor: 'Mr. Daniel',
        skills: ['Figma', 'Photoshop', 'Illustrator'],
        modules: [
          'Design Thinking Process',
          'Typography & Color Theory',
          'Prototyping in Figma',
          'Brand Identity Design',
        ],
      },
      {
        title: 'Video Editing',
        tutor: 'Mr. Daniel',
        skills: ['Premiere Pro', 'After Effects'],
        modules: [
          'Timeline Management',
          'Color Grading',
          'Motion Graphics',
          'Audio Syncing',
        ],
      },
    ],
  },
  {
    category: 'Content',
    courses: [
      {
        title: 'Copywriting',
        tutor: 'Mr. Moh',
        skills: ['SEO', 'Sales Funnels', 'Persuasive Writing'],
        modules: [
          'Headline Psychology',
          'SEO Copywriting',
          'Email Marketing Sequences',
          'Brand Voice Development',
        ],
      },
    ],
  },
]

export default function CurriculumSection() {
  const [activeTab, setActiveTab] = useState('Development')
  const [openCourse, setOpenCourse] = useState<string | null>(null)

  // 1. Properly typed Ref for an array of elements
  const courseRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleToggleCourse = (courseTitle: string, index: number) => {
    const isOpening = openCourse !== courseTitle
    setOpenCourse(isOpening ? courseTitle : null)

    // 2. Scroll logic: if opening, wait for animation and scroll into view
    if (isOpening) {
      setTimeout(() => {
        courseRefs.current[index]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center', // Keeps it perfectly centered for the student
        })
      }, 300)
    }
  }

  return (
    <section
      id='courses'
      className='py-24 pt-32 px-6 bg-gray-50 overflow-hidden'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16' data-aos='fade-up'>
          <h2 className='text-4xl md:text-5xl font-extrabold text-[#0A1F44] mb-4'>
            Master the <span className='text-[#D4AF37]'>Curriculum</span>
          </h2>
          <p className='text-gray-500 max-w-2xl mx-auto text-lg'>
            Our syllabuses are updated quarterly to match global industry
            demands.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className='flex flex-wrap justify-center gap-3 mb-12'
          data-aos='fade-up'
        >
          {curriculumData.map((group) => (
            <button
              key={group.category}
              onClick={() => {
                setActiveTab(group.category)
                setOpenCourse(null)
                // Clear refs when tab changes to avoid index conflicts
                courseRefs.current = []
              }}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 border-2 ${
                activeTab === group.category
                  ? 'bg-[#0A1F44] border-[#0A1F44] text-white shadow-xl scale-105'
                  : 'bg-white border-transparent text-gray-500 hover:border-[#D4AF37]/30 hover:text-[#0A1F44]'
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Course Accordions */}
        <div className='max-w-4xl mx-auto space-y-4'>
          {curriculumData
            .find((g) => g.category === activeTab)
            ?.courses.map((course, index) => (
              <div
                key={course.title}
                // 3. Fixed TS Ref Callback: using {} to avoid implicit return
                ref={(el) => {
                  courseRefs.current[index] = el
                }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 shadow-sm ${
                  openCourse === course.title
                    ? 'border-[#D4AF37] ring-1 ring-[#D4AF37] bg-white scale-[1.01]'
                    : 'border border-gray-100 bg-white hover:shadow-md'
                }`}
                data-aos='fade-up'
                data-aos-delay={index * 50}
              >
                <button
                  onClick={() => handleToggleCourse(course.title, index)}
                  className='w-full flex flex-col md:flex-row md:items-center justify-between p-7 text-left transition-colors'
                >
                  <div>
                    <h3 className='text-xl font-bold text-[#0A1F44]'>
                      {course.title}
                    </h3>
                    <p className='text-[#D4AF37] text-sm font-semibold mt-1'>
                      Instructor: {course.tutor}
                    </p>
                  </div>
                  <div className='flex items-center gap-4 mt-4 md:mt-0'>
                    <div className='flex gap-2'>
                      {course.skills.slice(0, 2).map((skill) => (
                        <span
                          key={skill}
                          className='text-[10px] bg-[#0A1F44]/5 px-2 py-1 rounded font-bold text-[#0A1F44]/60 uppercase'
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                        openCourse === course.title
                          ? 'bg-[#D4AF37] text-white rotate-180 shadow-md'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      <FaChevronDown size={12} />
                    </div>
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openCourse === course.title
                      ? 'max-h-200 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className='p-8 bg-gray-50/50 border-t border-gray-100'>
                    <h4 className='text-xs font-black text-[#0A1F44] uppercase tracking-[0.2em] mb-6 opacity-60'>
                      What you will learn:
                    </h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8'>
                      {course.modules.map((module, idx) => (
                        <div
                          key={idx}
                          className='flex items-start gap-3 text-gray-600 group'
                        >
                          <div className='mt-1 w-5 h-5 rounded-full bg-[#D4AF37] text-[#0A1F44] shrink-0 flex items-center justify-center text-[10px] font-black'>
                            {idx + 1}
                          </div>
                          <span className='text-sm font-medium group-hover:text-[#0A1F44] transition-colors'>
                            {module}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
