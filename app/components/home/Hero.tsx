'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className='relative w-full min-h-[90vh] flex items-center justify-center bg-[#0A1F44] text-white overflow-hidden'
      id='home'
    >
      {/* Subtle Background Decoration */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
        <div className='absolute top-[-10%] right-[-10%] w-100 h-100 bg-[#D4AF37]/10 rounded-full blur-[100px]' />
        <div className='absolute bottom-[-10%] left-[-10%] w-100 h-100 bg-blue-500/10 rounded-full blur-[100px]' />
      </div>

      <div
        className='relative z-10 max-w-7xl mx-auto px-6 md:px-20 flex flex-col items-center text-center'
        data-aos='fade-up'
      >
        <h1 className='text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] md:leading-tight'>
          Build <span className='text-[#D4AF37]'>In-Demand</span>{' '}
          <br className='hidden sm:block' />
          Tech Skills.
        </h1>

        <p className='text-lg md:text-xl max-w-2xl mb-10 text-gray-300 leading-relaxed'>
          TechDive Innovations empowers beginners and career-switchers with
          practical, affordable, and industry-relevant digital skills.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
          {/* Primary CTA */}
          <Link
            href='/contact'
            className='px-8 py-4 rounded-xl bg-[#D4AF37] text-[#0A1F44] font-bold text-lg text-center
                       hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]
                       active:scale-95 transition-all duration-300'
          >
            Get Started Now
          </Link>

          {/* Secondary CTA: Links to your courses page */}
          <Link
            href='/courses'
            className='px-8 py-4 rounded-xl border-2 border-white/20 text-white font-bold text-lg text-center
                       hover:bg-white/10 active:scale-95 transition-all duration-300'
          >
            View Courses
          </Link>
        </div>
      </div>
    </section>
  )
}
