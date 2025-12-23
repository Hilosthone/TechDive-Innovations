// app/components/home/Hero.tsx
'use client'

export default function Hero() {
  return (
    <section
      className='min-h-screen mx-auto flex flex-col justify-center items-center text-center bg-[#0A1F44] text-white px-6 md:px-20'
      data-aos='fade-up'
    >
      <h1 className='text-5xl md:text-6xl font-extrabold mb-6 leading-tight'>
        Build In-Demand Tech Skills.
        <br />
        Launch Your Digital Career.
      </h1>

      <p className='text-lg md:text-2xl max-w-3xl mb-10 text-gray-200'>
        TechDive Innovations empowers beginners and career-switchers with
        practical, affordable, and industry-relevant digital skills.
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
