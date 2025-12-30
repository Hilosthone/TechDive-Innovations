'use client'

import { FaBell } from 'react-icons/fa'

export default function CTA() {
  return (
    <section className='py-16 px-6'>
      <div
        className='max-w-6xl mx-auto bg-linear-to-br from-[#0A1F44] via-[#0D285A] to-[#0A1F44] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-[#0A1F44]/30'
        data-aos='zoom-in'
      >
        {/* Background Tech DNA Layer */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none select-none'>
          {/* Subtle Glows */}
          <div className='absolute -top-12 -left-12 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl'></div>
          <div className='absolute -bottom-12 -right-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl'></div>

          {/* Floating Logic Fragments */}
          <div className='absolute top-10 left-10 text-white/5 text-4xl font-mono -rotate-12 hidden md:block'>
            {'if (isReady)'}
          </div>
          <div className='absolute bottom-10 right-10 text-white/5 text-4xl font-mono rotate-12 hidden md:block'>
            {'deploy()'}
          </div>
          <div className='absolute top-1/2 right-[5%] text-[#D4AF37]/5 text-6xl font-mono -rotate-90 hidden lg:block'>
            {'<Code />'}
          </div>
        </div>

        <div className='relative z-10 flex flex-col items-center'>
          {/* Animated Icon */}
          <div className='mb-8 bg-[#D4AF37]/20 p-5 rounded-3xl animate-bounce shadow-[0_0_20px_rgba(212,175,55,0.2)]'>
            <FaBell className='text-[#D4AF37] text-3xl' />
          </div>

          <h2 className='text-3xl md:text-5xl font-black mb-6 text-white leading-tight tracking-tighter'>
            Ready to <span className='text-[#D4AF37]'>Dive Deep</span> into
            Tech?
          </h2>

          <p className='text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed'>
            Join TechDive Innovations today. Subscribe to receive updates on new
            courses, scholarship opportunities, and tech workshops.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 w-full justify-center items-center'>
            {/* Premium Glassmorphism Input Group */}
            <div className='flex flex-col sm:flex-row w-full max-w-lg bg-white/5 p-2 rounded-3xl border border-white/10 backdrop-blur-md focus-within:border-[#D4AF37]/50 transition-all duration-300'>
              <input
                type='email'
                placeholder='Enter your email'
                className='bg-transparent border-none text-white px-6 py-4 focus:outline-none w-full placeholder:text-gray-500 font-medium'
              />
              <button
                className='whitespace-nowrap px-10 py-4 rounded-2xl bg-[#D4AF37] text-[#0A1F44] font-black text-sm uppercase tracking-widest
                           hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
                           active:scale-95 transition-all duration-300'
              >
                Join Now
              </button>
            </div>
          </div>

          <p className='mt-8 text-xs font-bold text-gray-500 uppercase tracking-[0.2em]'>
            Join <span className='text-white'>500+</span> aspiring techies
            already in our network
          </p>
        </div>
      </div>
    </section>
  )
}
