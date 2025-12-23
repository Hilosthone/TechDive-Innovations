'use client'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

import { useState } from 'react'

export default function FAQ() {

const items = [
  {
    question: 'Who can enroll in TechDive programs?',
    answer:
      'Our programs are designed for beginners and intermediate learners looking to gain practical digital skills.',
  },
  {
    question: 'Are your courses online or onsite?',
    answer:
      'We offer hybrid learning: both online and onsite options are available depending on the course.',
  },
  {
    question: 'Do I get a certificate after completion?',
    answer:
      'Yes! All our programs provide a certificate that validates your skills and knowledge.',
  },
  {
    question: 'How long do courses usually last?',
    answer:
      'Most programs last between 4 to 12 weeks depending on the complexity and depth of the course.',
  },
  {
    question: 'Do you provide mentorship during the programs?',
    answer:
      'Yes, all our courses include mentorship sessions to guide students through practical projects and career advice.',
  },
  {
    question: 'Can I switch between online and onsite learning?',
    answer:
      'Yes, students enrolled in hybrid programs can choose to attend sessions online or onsite based on their preference and schedule.',
  },
  {
    question: 'What payment methods are accepted?',
    answer:
      'We accept multiple payment options including bank transfer, credit/debit cards, and digital wallets.',
  },
  {
    question: 'Are there any prerequisites?',
    answer:
      'Most beginner courses do not require any prior knowledge, but some advanced courses may require basic understanding of related skills.',
  },
  {
    question: 'Is there career support after completing a course?',
    answer:
      'Yes! We provide career guidance, portfolio reviews, and job placement support for students completing our programs.',
  },
]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className='py-20 px-6 md:px-20 bg-gray-50' data-aos='fade-up'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-4xl font-bold text-[#0A1F44] mb-12 text-center'>
          Frequently Asked Questions
        </h2>

        <div className='space-y-4'>
          {items.map((item, index) => (
            <div
              key={index}
              className='bg-white border rounded-xl shadow hover:shadow-lg transition-all duration-300'
              data-aos='fade-up'
              data-aos-delay={index * 100}
            >
              <button
                onClick={() => toggleIndex(index)}
                className='w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none'
              >
                <span className='font-medium text-[#0A1F44]'>
                  {item.question}
                </span>
                <span className='text-[#D4AF37] font-bold text-xl'>
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div className='px-6 pb-4 text-gray-700'>{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
