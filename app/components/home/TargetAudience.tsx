'use client'

import {
  FaUserGraduate,
  FaSyncAlt,
  FaGlobeAfrica,
  FaChartLine,
} from 'react-icons/fa'

export default function TargetAudience() {
  const audiences = [
    {
      title: 'Total Beginners',
      desc: 'People looking to start their tech journey from scratch with no prior experience.',
      icon: <FaUserGraduate />,
    },
    {
      title: 'Career Switchers',
      desc: 'Professionals from non-tech backgrounds looking to transition into high-paying digital roles.',
      icon: <FaSyncAlt />,
    },
    {
      title: 'Skill Upskillers',
      desc: 'Intermediate learners wanting to master modern frameworks and industry-relevant tools.',
      icon: <FaChartLine />,
    },
    {
      title: 'Local & National Talent',
      desc: 'Aspiring techies across Nigeria looking for affordable, high-quality digital education.',
      icon: <FaGlobeAfrica />,
    },
  ]

  return (
    <section className='py-24 px-6 md:px-20 bg-white overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Title */}
        <div className='text-center mb-16' data-aos='fade-up'>
          <h2 className='text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4'>
            Who We <span className='text-[#D4AF37]'>Serve</span>
          </h2>
          <p className='text-gray-500 max-w-2xl mx-auto text-lg'>
            TechDive Innovations is designed for those ready to embrace the
            future. Whether you're starting from zero or leveling up, we have a
            place for you.
          </p>
        </div>

        {/* Audience Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {audiences.map((item, index) => (
            <div
              key={index}
              data-aos='zoom-in'
              data-aos-delay={index * 100}
              className='p-8 bg-gray-50 rounded-2xl border-b-4 border-transparent hover:border-[#D4AF37] hover:bg-white hover:shadow-xl transition-all duration-300 group'
            >
              <div className='text-3xl text-[#0A1F44] mb-6 group-hover:text-[#D4AF37] transition-colors duration-300'>
                {item.icon}
              </div>
              <h3 className='text-xl font-bold text-[#0A1F44] mb-3'>
                {item.title}
              </h3>
              <p className='text-gray-600 leading-relaxed text-sm'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
