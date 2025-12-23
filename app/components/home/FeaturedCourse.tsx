// app/components/home/FeaturedCourse.tsx
'use client'

export default function FeaturedCourse() {
  return (
    <section
      className='py-20 px-6 md:px-20 bg-gray-50 text-gray-900'
      data-aos='fade-left'
    >
      <h2 className='text-3xl md:text-4xl font-bold mb-6 text-[#0A1F44]'>
        Featured Course
      </h2>
      <p className='mb-6'>
        Front-End Development (Hybrid) – our highlighted course for beginners
        and intermediates.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='p-6 border rounded-xl shadow hover:shadow-lg transition'>
          <h3 className='text-xl font-semibold mb-2'>Front-End Development</h3>
          <p>
            Learn HTML, CSS, JavaScript, and modern frameworks with practical
            projects.
          </p>
        </div>
        <div className='p-6 border rounded-xl shadow hover:shadow-lg transition'>
          <h3 className='text-xl font-semibold mb-2'>UI/UX Design</h3>
          <p>
            Design engaging interfaces and experiences using Figma and Adobe XD.
          </p>
        </div>
        <div className='p-6 border rounded-xl shadow hover:shadow-lg transition'>
          <h3 className='text-xl font-semibold mb-2'>Data Analysis</h3>
          <p>
            Analyze datasets and create actionable insights using Python and
            Excel.
          </p>
        </div>
      </div>
    </section>
  )
}
