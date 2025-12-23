// app/components/home/CTA.tsx
'use client'

import Button from '../shared/Button'

export default function CTA() {
  return (
    <section
      className='py-20 px-6 md:px-20 bg-[#0A1F44] text-white text-center'
      data-aos='zoom-in'
    >
      <h2 className='text-3xl md:text-4xl font-bold mb-6'>
        Join TechDive Today!
      </h2>
      <p className='mb-8'>
        Subscribe to stay updated on our courses and programs.
      </p>
      <button
        className='px-10 py-4 rounded-xl bg-[#D4AF37] text-[#0A1F44] font-semibold text-lg
                   hover:bg-yellow-400 hover:scale-105
                   active:scale-95 transition-all duration-300
                   focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/50'
      >
        Subscribe Now
      </button>
    </section>
  )
}
