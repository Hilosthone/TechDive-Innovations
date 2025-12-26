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
    },
    {
      title: 'UI/UX Design',
      category: 'Design',
      description:
        'Master user research and high-fidelity prototyping using Figma and Adobe XD.',
      icon: <FaFigma className='text-2xl' />,
      tag: 'New',
      level: 'Beginner',
    },
    {
      title: 'Data Analysis',
      category: 'Data Science',
      description:
        'Uncover insights using Python, SQL, and Excel to drive business decisions.',
      icon: <FaChartBar className='text-2xl' />,
      tag: 'Highly Rated',
      level: 'Intermediate',
    },
  ]

  return (
    <section className='py-24 px-6 md:px-20 bg-gray-50' id='courses'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='mb-16' data-aos='fade-up'>
          <h2 className='text-4xl font-bold text-[#0A1F44] mb-4'>
            Our Training Programs
          </h2>
          <p className='text-gray-600 max-w-xl text-lg'>
            Industry-relevant skills taught by mentors. Start your journey from
            zero to hero.
          </p>
        </div>

        {/* Course Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {courseList.map((course, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={index * 100}
              className='group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col'
            >
              {/* Badge */}
              <div className='absolute top-6 right-6 px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-xs font-bold uppercase tracking-wider'>
                {course.tag}
              </div>

              {/* Icon & Category */}
              <div className='mb-6 flex items-center gap-4'>
                <div className='p-3 bg-[#0A1F44] text-[#D4AF37] rounded-2xl'>
                  {course.icon}
                </div>
                <span className='text-sm font-semibold text-[#D4AF37] uppercase tracking-wide'>
                  {course.category}
                </span>
              </div>

              {/* Content */}
              <h3 className='text-2xl font-bold text-[#0A1F44] mb-3 group-hover:text-[#D4AF37] transition-colors'>
                {course.title}
              </h3>
              <p className='text-gray-500 mb-6 grow'>
                {course.description}
              </p>

              {/* Footer */}
              <div className='pt-6 border-t border-gray-50 flex flex-col gap-4'>
                <div className='text-sm text-gray-400 font-medium'>
                  Level: <span className='text-gray-600'>{course.level}</span>
                </div>
                <button className='flex items-center justify-center gap-2 w-full py-3 bg-gray-50 text-[#0A1F44] font-bold rounded-xl group-hover:bg-[#D4AF37] group-hover:text-[#0A1F44] transition-all duration-300'>
                  Enroll Now <FaArrowRight className='text-sm' />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
