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
      meta: 'init user()',
    },
    {
      title: 'Career Switchers',
      desc: 'Professionals from non-tech backgrounds looking to transition into high-paying digital roles.',
      icon: <FaSyncAlt />,
      meta: 'transfer_logic',
    },
    {
      title: 'Skill Upskillers',
      desc: 'Intermediate learners wanting to master modern frameworks and industry-relevant tools.',
      icon: <FaChartLine />,
      meta: 'level++',
    },
    {
      title: 'Local Talent',
      desc: 'Aspiring techies across Nigeria looking for affordable, high-quality digital education.',
      icon: <FaGlobeAfrica />,
      meta: 'region: "NG"',
    },
  ]

  return (
    <section className='relative py-32 px-6 md:px-20 bg-white overflow-hidden'>
      {/* Tech DNA Watermarks - Light Mode */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] select-none'>
        <div className='absolute top-1/4 left-[10%] text-black text-6xl font-mono'>
          {'{ user: null }'}
        </div>
        <div className='absolute bottom-1/4 right-[10%] text-black text-7xl font-mono -rotate-12'>
          {'Array.map()'}
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 text-black text-[12rem] font-mono opacity-10'>
          {'01'}
        </div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* Section Title */}
        <div className='text-center mb-20' data-aos='fade-up'>
          <h2 className='text-4xl md:text-6xl font-black text-[#0A1F44] mb-6 tracking-tighter'>
            Who We <span className='text-[#D4AF37]'>Serve</span>
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed'>
            TechDive Innovations is designed for those ready to embrace the
            future. Whether you're starting from zero or leveling up, we have a
            place for you.
          </p>
        </div>

        {/* Audience Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {audiences.map((item, index) => (
            <div
              key={index}
              data-aos='zoom-in'
              data-aos-delay={index * 100}
              className='relative p-10 bg-gray-50/50 rounded-[4xl border border-gray-100 hover:border-[#D4AF37]/50 hover:bg-white hover:shadow-[0_20px_50px_rgba(10,31,68,0.08)] transition-all duration-500 group'
            >
              {/* Micro-code label */}
              <div className='absolute top-6 right-8 font-mono text-[9px] uppercase tracking-widest text-gray-300 group-hover:text-[#D4AF37] transition-colors'>
                {item.meta}
              </div>

              <div className='text-4xl text-[#0A1F44] mb-8 group-hover:text-[#D4AF37] group-hover:scale-110 transition-all duration-500'>
                {item.icon}
              </div>

              <h3 className='text-2xl font-black text-[#0A1F44] mb-4 tracking-tight'>
                {item.title}
              </h3>

              <p className='text-gray-600 leading-relaxed text-sm font-medium'>
                {item.desc}
              </p>

              {/* Decorative accent */}
              <div className='mt-6 h-1 w-0 group-hover:w-12 bg-[#D4AF37] transition-all duration-500 rounded-full' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
