// app/components/home/TargetAudience.tsx
'use client'

export default function TargetAudience() {
  return (
    <section
      className='py-20 px-6 md:px-20 bg-white text-gray-900'
      data-aos='fade-up'
    >
      <h2 className='text-3xl md:text-4xl font-bold mb-6 text-[#0A1F44]'>
        Who We Serve
      </h2>
      <ul className='list-disc list-inside space-y-2'>
        <li>People looking to transition, upskill, or learn from scratch</li>
        <li>Skill levels: Beginners and Intermediate</li>
        <li>Audience: Local and National</li>
      </ul>
    </section>
  )
}
