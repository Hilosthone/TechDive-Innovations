'use client'

import { useState } from 'react'
import { FaPlus, FaMinus, FaQuestionCircle } from 'react-icons/fa'

export default function FAQ() {
  const items = [
    {
      question: 'Who can enroll in TechDive programs?',
      answer:
        'Our programs are designed for beginners and intermediate learners looking to gain practical digital skills. Whether you are a student, graduate, or career-switcher, we have a path for you.',
    },
    {
      question: 'Are your courses online or onsite?',
      answer:
        'We offer hybrid learning: both online and onsite options are available. Onsite sessions take place at our Lagos hub, while online students join via our interactive live platform.',
    },
    {
      question: 'Do I get a certificate after completion?',
      answer:
        'Yes! All our programs provide an industry-recognized certificate that validates your skills, project work, and knowledge upon successful completion.',
    },
    {
      question: 'How long do courses usually last?',
      answer:
        'Most programs last between 4 to 12 weeks. For example, our MERN Stack program led by Hilosthone typically runs for 12 weeks to ensure deep mastery.',
    },
    {
      question: 'Do you provide mentorship during the programs?',
      answer:
        'Absolutely. You will have direct access to mentors like Mr. Sid, Hilosthone, and Mr. Daniel for project reviews, technical troubleshooting, and career advice.',
    },
    {
      question: 'What payment methods are accepted?',
      answer:
        'We accept bank transfers, credit/debit cards, and installment payments to make our premium tech education accessible to everyone.',
    },
    {
      question: 'Is there career support after completing a course?',
      answer:
        'Yes! Our Career Acceleration program includes portfolio reviews, LinkedIn optimization, and connections to our network of hiring partners in the tech industry.',
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className='py-24 px-6 md:px-20 bg-white' id='faq'>
      <div className='max-w-4xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16' data-aos='fade-up'>
          <div className='inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full text-sm font-bold mb-4 uppercase tracking-widest'>
            <FaQuestionCircle /> Support Center
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-[#0A1F44]'>
            Have <span className='text-[#D4AF37]'>Questions?</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className='space-y-4'>
          {items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`transition-all duration-300 rounded-2xl border ${
                  isOpen
                    ? 'border-[#D4AF37] bg-gray-50 shadow-lg'
                    : 'border-gray-100 bg-white hover:border-[#D4AF37]/50'
                }`}
                data-aos='fade-up'
                data-aos-delay={index * 50}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className='w-full text-left px-8 py-6 flex justify-between items-center group'
                >
                  <span
                    className={`font-bold text-lg transition-colors ${
                      isOpen ? 'text-[#D4AF37]' : 'text-[#0A1F44]'
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isOpen
                        ? 'bg-[#D4AF37] text-white rotate-180'
                        : 'bg-[#0A1F44] text-white'
                    }`}
                  >
                    {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
                  </div>
                </button>

                {/* Animated Answer Container */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className='px-8 pb-8 text-gray-600 leading-relaxed border-t border-gray-100 pt-4'>
                    {item.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Call to Action */}
        <div
          className='mt-16 text-center p-8 bg-[#0A1F44] rounded-4xl shadow-xl'
          data-aos='zoom-in'
        >
          <p className='text-white mb-4'>
            Still have questions that aren't answered here?
          </p>
          <a
            href='https://wa.me/2349058263561'
            target='_blank'
            className='inline-block bg-[#D4AF37] text-[#0A1F44] px-8 py-3 rounded-full font-bold hover:bg-white transition-colors'
          >
            Chat with an Advisor
          </a>
        </div>
      </div>
    </section>
  )
}