'use client'

import { FaBell } from 'react-icons/fa'

export default function CTA() {
  return (
    <section className='py-16 px-6'>
      <div
        className='max-w-6xl mx-auto bg-linear-to-br from-[#0A1F44] via-[#0D285A] to-[#0A1F44] rounded-4xl p-10 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-[#0A1F44]/30'
        data-aos='zoom-in'
      >
        {/* Decorative Circles */}
        <div className='absolute -top-12.5 -left-12.5 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl'></div>
        <div className='absolute -bottom-12.5  -right-12.5  w-64 h-64 bg-blue-500/10 rounded-full blur-3xl'></div>

        <div className='relative z-10 flex flex-col items-center'>
          <div className='mb-6 bg-[#D4AF37]/20 p-4 rounded-full animate-bounce'>
            <FaBell className='text-[#D4AF37] text-3xl' />
          </div>

          <h2 className='text-3xl md:text-5xl font-bold mb-6 text-white leading-tight'>
            Ready to <span className='text-[#D4AF37]'>Dive Deep</span> into
            Tech?
          </h2>

          <p className='text-gray-300 text-lg md:text-xl mb-10 max-w-2xl'>
            Join TechDive Innovations today. Subscribe to receive updates on new
            courses, scholarship opportunities, and tech workshops.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 w-full justify-center items-center'>
            {/* Simple Email Input built into CTA */}
            <div className='flex flex-col sm:flex-row w-full max-w-lg bg-white/10 p-2 rounded-2xl border border-white/20 backdrop-blur-sm'>
              <input
                type='email'
                placeholder='Enter your email'
                className='bg-transparent border-none text-white px-4 py-3 focus:outline-none w-full placeholder:text-gray-400'
              />
              <button
                className='whitespace-nowrap px-8 py-3 rounded-xl bg-[#D4AF37] text-[#0A1F44] font-bold text-lg
                           hover:bg-white hover:scale-[1.02]
                           active:scale-95 transition-all duration-300 shadow-lg'
              >
                Join Now
              </button>
            </div>
          </div>

          <p className='mt-6 text-sm text-gray-400'>
            Join 500+ aspiring techies already in our network.
          </p>
        </div>
      </div>
    </section>
  )
}