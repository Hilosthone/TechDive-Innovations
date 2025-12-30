'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className='relative w-full min-h-[90vh] flex items-center justify-center bg-[#0A1F44] text-white overflow-hidden'
      id='home'
    >
      {/* Background Decoration Layer */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* Glow Effects */}
        <div className='absolute top-[-10%] right-[-10%] w-500px h-500px bg-[#D4AF37]/10 rounded-full blur-[120px]' />
        <div className='absolute bottom-[-10%] left-[-10%] w-500px h-500px bg-blue-500/10 rounded-full blur-[120px]' />

        {/* Floating Code Shapes */}
        <div className='absolute top-[15%] left-[10%] text-white/10 text-7xl font-mono rotate-12 animate-bounce-slow'>
          {'{ }'}
        </div>
        <div className='absolute top-[20%] right-[15%] text-[#D4AF37]/10 text-8xl font-mono -rotate-12 animate-pulse'>
          {'</>'}
        </div>
        <div className='absolute bottom-[20%] left-[15%] text-blue-400/10 text-6xl font-mono -rotate-6 animate-bounce-slow'>
          {'[ ]'}
        </div>
        <div className='absolute bottom-[15%] right-[20%] text-white/5 text-9xl font-mono rotate-45'>
          {'('}
        </div>
        <div className='absolute top-1/2 left-1/4 text-[#D4AF37]/5 text-4xl font-mono -rotate-12'>
          {'const'}
        </div>
        <div className='absolute top-1/3 right-1/4 text-blue-300/5 text-5xl font-mono rotate-12'>
          {';'}
        </div>
      </div>

      <div
        className='relative z-10 max-w-7xl mx-auto px-6 pt-12 md:px-20 flex flex-col items-center text-center'
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
          <Link
            href='/contact'
            className='px-8 py-4 rounded-xl bg-[#D4AF37] text-[#0A1F44] font-bold text-lg text-center
                       hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]
                       active:scale-95 transition-all duration-300'
          >
            Get Started Now
          </Link>

          <Link
            href='/courses'
            className='px-8 py-4 rounded-xl border-2 border-white/20 text-white font-bold text-lg text-center
                       hover:bg-white/10 active:scale-95 transition-all duration-300'
          >
            View Courses
          </Link>
        </div>
      </div>

      {/* Adding custom animation styles */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0) rotate(12deg);
          }
          50% {
            transform: translateY(-20px) rotate(15deg);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
