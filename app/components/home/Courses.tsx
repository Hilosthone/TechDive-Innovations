// app/components/home/Courses.tsx
'use client'

import courses from '../../data/courses'

export default function Courses() {
  return (
    <section
      className='py-20 px-6 md:px-20 bg-gray-50 text-gray-900'
      data-aos='fade-up'
    >
      <h2 className='text-3xl md:text-4xl font-bold mb-6 text-[#0A1F44]'>
        All Courses
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {courses.map((course) => (
          <div
            key={course.id}
            className='p-6 border rounded-xl shadow hover:shadow-lg transition'
          >
            <h3 className='text-xl font-semibold mb-2'>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
