'use client'

import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'

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
  const [isFading, setIsFading] = useState(false)

  const changeSlide = (action: () => void) => {
    setIsFading(true)
    setTimeout(() => {
      action()
      setIsFading(false)
    }, 300)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(() => setCurrent((prev) => (prev + 1) % testimonials.length))
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const prevSlide = () =>
    changeSlide(() =>
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    )
  const nextSlide = () =>
    changeSlide(() => setCurrent((prev) => (prev + 1) % testimonials.length))

  const currentTestimonial = testimonials[current]

  return (
    <section className='py-24 px-6 md:px-20 bg-white relative overflow-hidden'>
      {/* Decorative Background Icon */}
      <FaQuoteLeft className='absolute top-10 left-10 text-gray-100 text-[15rem] z-0 opacity-50' />

      <div className='max-w-5xl mx-auto relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4'>
            Success Stories
          </h2>
          <p className='text-[#D4AF37] font-semibold tracking-widest uppercase text-sm'>
            Hear from our graduates
          </p>
        </div>

        <div className='relative flex flex-col md:flex-row items-center gap-10 bg-gray-50 rounded-4xl p-8 md:p-16 shadow-2xl shadow-gray-200/50'>
          {/* Left Side: Avatar */}
          <div
            className={`flex flex-col items-center transition-opacity duration-300 ${
              isFading ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className='w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-[#0A1F44] flex items-center justify-center text-[#D4AF37] font-bold text-4xl shadow-lg transform -rotate-3 hover:rotate-0 transition-transform'>
              {currentTestimonial.name.charAt(0)}
            </div>
            <div className='mt-6 text-center'>
              <h4 className='text-xl font-bold text-[#0A1F44]'>
                {currentTestimonial.name}
              </h4>
              <p className='text-[#D4AF37] font-medium text-sm'>
                {currentTestimonial.role}
              </p>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div
            className={`flex-1 transition-all duration-300 ${
              isFading ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
            }`}
          >
            <FaQuoteLeft className='text-[#D4AF37] text-3xl mb-4 opacity-50' />
            <p className='text-xl md:text-2xl text-[#0A1F44] leading-relaxed font-medium italic'>
              {currentTestimonial.text}
            </p>

            {/* Nav Controls Inside the Box for better Mobile UX */}
            <div className='flex gap-4 mt-8'>
              <button
                onClick={prevSlide}
                className='w-12 h-12 flex items-center justify-center rounded-xl bg-white text-[#0A1F44] shadow-md hover:bg-[#D4AF37] transition-all'
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className='w-12 h-12 flex items-center justify-center rounded-xl bg-[#0A1F44] text-white shadow-md hover:bg-[#D4AF37] transition-all'
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Minimal Progress Indicator */}
        <div className='flex justify-center mt-10 gap-2'>
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                index === current ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
