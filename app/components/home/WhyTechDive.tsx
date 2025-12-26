'use client'

import { FaRocket, FaEye, FaDraftingCompass } from 'react-icons/fa'

export default function WhyTechDive() {
  const features = [
    {
      title: 'Our Mission',
      desc: 'To break barriers and make digital education accessible, affordable, and practical for everyone.',
      icon: <FaRocket className='text-[#D4AF37] text-3xl' />,
    },
    {
      title: 'Our Vision',
      desc: 'To become the go-to tech training hub producing skilled, confident, and job-ready professionals.',
      icon: <FaEye className='text-[#D4AF37] text-3xl' />,
    },
    {
      title: 'Our Approach',
      desc: 'We blend solid theory with hands-on projects and mentorship to ensure students don’t just learn — they build.',
      icon: <FaDraftingCompass className='text-[#D4AF37] text-3xl' />,
    },
  ]

  return (
    <section className='py-24 bg-white overflow-hidden' id='about'>
      <div className='max-w-7xl mx-auto px-6 md:px-20'>
        {/* Section Header */}
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4'>
          <div className='max-w-2xl'>
            <h2 className='text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4'>
              Why Choose <span className='text-[#D4AF37]'>TechDive?</span>
            </h2>
            <div className='h-1.5 w-20 bg-[#D4AF37] rounded-full'></div>
          </div>
          <p className='text-gray-500 font-medium'>
            Empowering the next generation of tech talent.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((item, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={index * 100}
              className='group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'
            >
              <div className='mb-6 inline-block p-4 bg-white rounded-xl shadow-sm group-hover:bg-[#0A1F44] transition-colors duration-300'>
                {item.icon}
              </div>
              <h3 className='text-xl font-bold text-[#0A1F44] mb-3 group-hover:text-[#D4AF37] transition-colors'>
                {item.title}
              </h3>
              <p className='text-gray-600 leading-relaxed'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}