'use client'

import { FaRocket, FaEye, FaDraftingCompass } from 'react-icons/fa'

export default function WhyTechDive() {
  const features = [
    {
      title: 'Our Mission',
      desc: 'To break barriers and make digital education accessible, affordable, and practical for everyone.',
      icon: <FaRocket size={30} />,
      code: 'const mission = "impact";',
    },
    {
      title: 'Our Vision',
      desc: 'To become the go-to tech training hub producing skilled, confident, and job-ready professionals.',
      icon: <FaEye size={30} />,
      code: 'view { perspective: 1000px; }',
    },
    {
      title: 'Our Approach',
      desc: 'We blend solid theory with hands-on projects and mentorship to ensure students don’t just learn — they build.',
      icon: <FaDraftingCompass size={30} />,
      code: 'npm run build',
    },
  ]

  return (
    <section className='relative py-32 bg-white overflow-hidden' id='about'>
      {/* Light Tech DNA Watermarks */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] select-none'>
        <div className='absolute top-20 left-[5%] text-black text-7xl font-mono'>
          {'<html>'}
        </div>
        <div className='absolute top-1/2 right-[2%] text-black text-9xl font-mono rotate-90'>
          {'CSS'}
        </div>
        <div className='absolute bottom-10 left-[15%] text-black text-6xl font-mono'>
          {'const tech = true;'}
        </div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 md:px-20'>
        {/* Section Header */}
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6'>
          <div className='max-w-2xl'>
            <h2 className='text-4xl md:text-6xl font-black text-[#0A1F44] mb-6 tracking-tighter'>
              Why Choose <span className='text-[#D4AF37]'>TechDive?</span>
            </h2>
            <div className='h-2 w-24 bg-[#D4AF37] rounded-full'></div>
          </div>
          <p className='text-gray-400 font-bold uppercase tracking-[0.2em] text-sm'>
            Empowering the next generation
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {features.map((item, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={index * 100}
              className='group relative p-10 rounded-[2.5rem] border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(10,31,68,0.1)] hover:-translate-y-3 transition-all duration-500'
            >
              {/* Individual Card Code Snippet */}
              <div className='absolute top-6 right-8 font-mono text-[10px] text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                {item.code}
              </div>

              <div className='mb-8 inline-block p-5 bg-white rounded-2xl shadow-sm text-[#D4AF37] group-hover:bg-[#0A1F44] group-hover:text-[#D4AF37] transition-all duration-500'>
                {item.icon}
              </div>

              <h3 className='text-2xl font-black text-[#0A1F44] mb-4 tracking-tight group-hover:text-[#D4AF37] transition-colors'>
                {item.title}
              </h3>

              <p className='text-gray-600 leading-relaxed text-lg'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}