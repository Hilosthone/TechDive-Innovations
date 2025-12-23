import courses from '../../data/courses'
import { notFound } from 'next/navigation'
import Button from '../../../app/components/shared/Button'

interface CoursePageProps {
  params: {
    slug: string
  }
}

export default function CourseDetailPage({ params }: CoursePageProps) {
  const course = courses.find((c) => c.slug === params.slug)

  if (!course) {
    notFound()
  }

  return (
    <section className='py-20 px-6 md:px-20 max-w-4xl mx-auto'>
      <h1 className='text-4xl font-bold mb-6 text-navy' data-aos='fade-right'>
        {course.title}
      </h1>

      <p className='text-lg text-gray-700 mb-6' data-aos='fade-up'>
        {course.description}
      </p>

      <p className='mb-8 font-medium' data-aos='fade-up'>
        Delivery Mode: <span className='text-gold'>{course.type}</span>
      </p>

      <Button data-aos='zoom-in'>Enroll Now</Button>
    </section>
  )
}
