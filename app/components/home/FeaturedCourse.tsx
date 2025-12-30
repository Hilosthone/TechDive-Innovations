'use client'

import { FaCode, FaFigma, FaChartBar, FaArrowRight } from 'react-icons/fa'

export default function Courses() {
  const courseList = [
    {
      title: 'Front-End Development',
      category: 'Development',
      description:
        'Master HTML, CSS, JavaScript, and React by building real-world web applications.',
      icon: <FaCode className='text-2xl' />,
      tag: 'Best Seller',
      level: 'Beginner - Intermediate',
      code: 'npm start',
    },
    {
      title: 'UI/UX Design',
      category: 'Design',
      description:
        'Master user research and high-fidelity prototyping using Figma and Adobe XD.',
      icon: <FaFigma className='text-2xl' />,
      tag: 'New',
      level: 'Beginner',
      code: 'figma.render()',
    },
    {
      title: 'Data Analysis',
      category: 'Data Science',
      description:
        'Uncover insights using Python, SQL, and Excel to drive business decisions.',
      icon: <FaChartBar className='text-2xl' />,
      tag: 'Highly Rated',
      level: 'Intermediate',
      code: 'df.describe()',
    },
  ]

  return (
    <section
      className='relative py-32 px-6 md:px-20 bg-gray-50 overflow-hidden'
      id='courses'
    >
      {/* Background DNA Watermarks */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] select-none'>
        <div className='absolute top-20 left-[10%] text-black text-6xl font-mono'>
          {'<section>'}
        </div>
        <div className='absolute bottom-20 right-[15%] text-black text-8xl font-mono rotate-12'>
          {'{JSON}'}
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 text-black text-[15rem] font-mono opacity-5'>
          {'</>'}
        </div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* Section Header */}
        <div
          className='mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6'
          data-aos='fade-up'
        >
          <div className='max-w-2xl'>
            <h2 className='text-4xl md:text-6xl font-black text-[#0A1F44] mb-6 tracking-tighter'>
              Our Training <span className='text-[#D4AF37]'>Programs</span>
            </h2>
            <div className='h-2 w-24 bg-[#D4AF37] rounded-full'></div>
          </div>
          <p className='text-gray-400 font-bold uppercase tracking-[0.2em] text-sm'>
            Zero to Hero Journey
          </p>
        </div>

        {/* Course Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {courseList.map((course, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={index * 100}
              className='group relative bg-white rounded-[2.5rem] p-10 border border-white shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_-15px_rgba(10,31,68,0.12)] hover:-translate-y-4 transition-all duration-500 flex flex-col'
            >
              {/* Individual Micro-code Tag */}
              <div className='absolute top-10 right-10 font-mono text-[9px] text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity'>
                {course.code}
              </div>

              {/* Badge */}
              <div className='mb-8 self-start px-4 py-1.5 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-[10px] font-black uppercase tracking-widest'>
                {course.tag}
              </div>

              {/* Icon & Category */}
              <div className='mb-8 flex items-center gap-5'>
                <div className='p-5 bg-[#0A1F44] text-[#D4AF37] rounded-3xl group-hover:bg-[#D4AF37] group-hover:text-[#0A1F44] shadow-lg shadow-[#0A1F44]/10 transition-all duration-500'>
                  {course.icon}
                </div>
                <span className='text-xs font-black text-gray-400 uppercase tracking-widest'>
                  {course.category}
                </span>
              </div>

              {/* Content */}
              <h3 className='text-2xl font-black text-[#0A1F44] mb-4 tracking-tight group-hover:text-[#D4AF37] transition-colors'>
                {course.title}
              </h3>
              <p className='text-gray-500 mb-10 grow leading-relaxed font-medium'>
                {course.description}
              </p>

              {/* Footer */}
              <div className='pt-8 border-t border-gray-50 flex flex-col gap-6'>
                <div className='flex justify-between items-center'>
                  <span className='text-xs font-bold text-gray-400 uppercase tracking-tighter'>
                    Complexity
                  </span>
                  <span className='text-sm font-bold text-[#0A1F44]'>
                    {course.level}
                  </span>
                </div>
                <button className='flex items-center justify-center gap-3 w-full py-5 bg-[#0A1F44] text-white font-black uppercase tracking-widest text-xs rounded-2xl group-hover:bg-[#D4AF37] group-hover:text-[#0A1F44] group-hover:shadow-[0_15px_30px_rgba(212,175,55,0.3)] transition-all duration-500 active:scale-95'>
                  Enroll Now <FaArrowRight className='text-xs' />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
