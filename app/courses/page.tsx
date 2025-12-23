import Link from 'next/link'
import courses from '../data/courses'

export default function CoursesPage() {
  return (
    <section className='py-20 px-6 md:px-20'>
      <h1 className='text-4xl font-bold mb-10 text-navy'>Our Courses</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {courses.map((course) => (
          <Link
            key={course.id}
            href={`/courses/${course.slug}`}
            className='block border rounded-xl p-6 shadow hover:shadow-xl transition'
            data-aos='fade-up'
          >
            <h2 className='text-2xl font-semibold mb-3'>{course.title}</h2>
            <p className='mb-4 text-gray-700'>{course.description}</p>
            <span className='inline-block text-sm font-medium text-gold'>
              {course.type}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}