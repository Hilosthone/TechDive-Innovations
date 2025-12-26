'use client'

import Link from 'next/link'
import courses from '../../data/courses'
import {
  FaCode,
  FaDatabase,
  FaPalette,
  FaChartLine,
  FaBullhorn,
  FaArrowRight,
  FaUsers,
} from 'react-icons/fa'

// Helper function to assign icons based on course title
const getCourseIcon = (title: string) => {
  const lowerTitle = title.toLowerCase()
  if (lowerTitle.includes('front-end')) return <FaCode />
  if (lowerTitle.includes('back-end')) return <FaDatabase />
  if (lowerTitle.includes('design') || lowerTitle.includes('ui/ux'))
    return <FaPalette />
  if (lowerTitle.includes('data')) return <FaChartLine />
  if (lowerTitle.includes('marketing')) return <FaBullhorn />
  return <FaCode />
}

export default function Courses() {
  return (
    <section className='py-24 px-6 md:px-20 bg-gray-50' id='courses'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div
          className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6'
          data-aos='fade-up'
        >
          <div>
            <h2 className='text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4'>
              Explore Our <span className='text-[#D4AF37]'>Programs</span>
            </h2>
            <p className='text-gray-500 max-w-xl text-lg'>
              Master the MERN stack, Data Science, and Design with our
              intensive, hands-on hybrid training model.
            </p>
          </div>
          <Link
            href='/courses'
            className='flex items-center gap-2 text-[#0A1F44] font-bold hover:text-[#D4AF37] transition-colors group'
          >
            View All Courses{' '}
            <FaArrowRight className='group-hover:translate-x-1 transition-transform' />
          </Link>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {courses.slice(0, 6).map((course, index) => (
            <div
              key={course.id}
              data-aos='fade-up'
              data-aos-delay={index * 100}
              className='group bg-white p-8 rounded-4xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col relative overflow-hidden'
            >
              {/* Background Accent */}
              <div className='absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-[4rem] z-0 group-hover:bg-[#D4AF37]/10 transition-colors' />

              <div className='relative z-10'>
                {/* Icon & Type */}
                <div className='flex justify-between items-start mb-6'>
                  <div className='text-3xl text-[#D4AF37] bg-[#0A1F44] p-4 rounded-2xl shadow-lg'>
                    {getCourseIcon(course.title)}
                  </div>
                  <span className='text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-100 px-3 py-1 rounded-full'>
                    {course.type}
                  </span>
                </div>

                <h3 className='text-2xl font-bold text-[#0A1F44] mb-3 group-hover:text-[#D4AF37] transition-colors'>
                  {course.title}
                </h3>

                <p className='text-gray-500 text-sm leading-relaxed mb-8 line-clamp-2'>
                  {course.description}
                </p>

                <div className='flex items-center gap-3 mb-8 text-xs font-semibold text-gray-400'>
                  <FaUsers className='text-[#D4AF37]' />
                  <span>Instructor-Led Sessions</span>
                </div>

                <Link
                  href={`/courses/${course.slug}`}
                  className='inline-flex items-center gap-2 font-bold text-[#0A1F44] border-b-2 border-[#D4AF37] pb-1 hover:gap-4 transition-all'
                >
                  Learn More <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
