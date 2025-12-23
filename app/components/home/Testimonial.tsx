// 'use client'

// import { useState, useEffect } from 'react'
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// interface TestimonialItem {
//   name: string
//   role: string
//   text: string
// }

// const testimonials: TestimonialItem[] = [
//   {
//     name: 'Alice Johnson',
//     role: 'Frontend Developer',
//     text: 'TechDive transformed my career! The hands-on approach made learning web development fun and practical.',
//   },
//   {
//     name: 'Brian Smith',
//     role: 'Data Analyst',
//     text: 'I was able to upskill quickly and land my dream job thanks to TechDive’s comprehensive programs.',
//   },
//   {
//     name: 'Clara Williams',
//     role: 'UI/UX Designer',
//     text: 'The mentorship and project-based learning at TechDive gave me the confidence to build my portfolio.',
//   },
//   {
//     name: 'David Lee',
//     role: 'Digital Marketer',
//     text: 'Affordable, practical, and highly engaging courses. TechDive is the best tech learning platform I’ve experienced.',
//   },
//   {
//     name: 'Emma Davis',
//     role: 'Backend Developer',
//     text: 'The hybrid learning model worked perfectly for my schedule. I loved the community and support.',
//   },
// ]

// export default function Testimonial() {
//   const [current, setCurrent] = useState(0)

//   // Auto-slide every 6 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % testimonials.length)
//     }, 6000)
//     return () => clearInterval(interval)
//   }, [])

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
//   }

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % testimonials.length)
//   }

//   const currentTestimonial = testimonials[current]

//   return (
//     <section className='py-20 px-6 md:px-20 bg-gray-50' data-aos='fade-up'>
//       <div className='max-w-3xl mx-auto text-center relative'>
//         <h2 className='text-4xl font-bold text-[#0A1F44] mb-12'>
//           What Our Students Say
//         </h2>

//         <div className='bg-white p-10 rounded-2xl shadow-xl relative'>
//           {/* Avatar */}
//           <div className='flex justify-center mb-4'>
//             <div className='w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold text-2xl'>
//               {currentTestimonial.name.charAt(0)}
//             </div>
//           </div>

//           {/* Name & Role */}
//           <h4 className='font-semibold text-[#0A1F44]'>
//             {currentTestimonial.name}
//           </h4>
//           <p className='text-gray-500 text-sm mb-6'>
//             {currentTestimonial.role}
//           </p>

//           {/* Testimonial Text */}
//           <p className='text-gray-700 text-lg italic'>
//             "{currentTestimonial.text}"
//           </p>

//           {/* Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             className='absolute top-1/2 left-4 -translate-y-1/2 bg-[#0A1F44] text-white p-2 rounded-full hover:bg-[#D4AF37] hover:text-[#0A1F44] transition'
//             aria-label='Previous testimonial'
//           >
//             <FaChevronLeft />
//           </button>
//           <button
//             onClick={nextSlide}
//             className='absolute top-1/2 right-4 -translate-y-1/2 bg-[#0A1F44] text-white p-2 rounded-full hover:bg-[#D4AF37] hover:text-[#0A1F44] transition'
//             aria-label='Next testimonial'
//           >
//             <FaChevronRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface TestimonialItem {
  name: string
  role: string
  text: string
}

const testimonials: TestimonialItem[] = [
  {
    name: 'Alice Johnson',
    role: 'Frontend Developer',
    text: 'TechDive transformed my career! The hands-on approach made learning web development fun and practical.',
  },
  {
    name: 'Brian Smith',
    role: 'Data Analyst',
    text: 'I was able to upskill quickly and land my dream job thanks to TechDive’s comprehensive programs.',
  },
  {
    name: 'Clara Williams',
    role: 'UI/UX Designer',
    text: 'The mentorship and project-based learning at TechDive gave me the confidence to build my portfolio.',
  },
  {
    name: 'David Lee',
    role: 'Digital Marketer',
    text: 'Affordable, practical, and highly engaging courses. TechDive is the best tech learning platform I’ve experienced.',
  },
  {
    name: 'Emma Davis',
    role: 'Backend Developer',
    text: 'The hybrid learning model worked perfectly for my schedule. I loved the community and support.',
  },
  {
    name: 'Franklin Torres',
    role: 'Mobile App Developer',
    text: 'I learned practical skills that allowed me to develop my first mobile app within a few weeks.',
  },
  {
    name: 'Grace Liu',
    role: 'Data Scientist',
    text: 'The Data Analysis program was structured perfectly for beginners and gave me real-world project experience.',
  },
  {
    name: 'Hannah Kim',
    role: 'Graphic Designer',
    text: 'TechDive’s approach to creative skills is unmatched — I now confidently design professional projects.',
  },
  {
    name: 'Isaac Martinez',
    role: 'Full-Stack Developer',
    text: 'I was amazed at how quickly I could build full-stack applications. The mentorship was incredibly helpful.',
  },
  {
    name: 'Julia Roberts',
    role: 'Digital Marketing Specialist',
    text: 'The digital marketing program is practical, engaging, and helped me land freelance projects immediately.',
  },
]

export default function Testimonial() {
  const [current, setCurrent] = useState(0)

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrent(index)
  }

  const currentTestimonial = testimonials[current]

  return (
    <section className='py-20 px-6 md:px-20 bg-gray-50' data-aos='fade-up'>
      <div className='max-w-3xl mx-auto text-center relative'>
        <h2 className='text-4xl font-bold text-[#0A1F44] mb-12'>
          What Our Students Say
        </h2>

        <div className='bg-white p-10 rounded-2xl shadow-xl relative'>
          {/* Avatar */}
          <div className='flex justify-center mb-4'>
            <div className='w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold text-2xl'>
              {currentTestimonial.name.charAt(0)}
            </div>
          </div>

          {/* Name & Role */}
          <h4 className='font-semibold text-[#0A1F44]'>
            {currentTestimonial.name}
          </h4>
          <p className='text-gray-500 text-sm mb-6'>
            {currentTestimonial.role}
          </p>

          {/* Testimonial Text */}
          <p className='text-gray-700 text-lg italic'>
            "{currentTestimonial.text}"
          </p>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className='absolute top-1/2 left-4 -translate-y-1/2 bg-[#0A1F44] text-white p-2 rounded-full hover:bg-[#D4AF37] hover:text-[#0A1F44] transition'
            aria-label='Previous testimonial'
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className='absolute top-1/2 right-4 -translate-y-1/2 bg-[#0A1F44] text-white p-2 rounded-full hover:bg-[#D4AF37] hover:text-[#0A1F44] transition'
            aria-label='Next testimonial'
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className='flex justify-center mt-6 gap-3'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? 'bg-[#D4AF37] scale-125' : 'bg-gray-300'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}
