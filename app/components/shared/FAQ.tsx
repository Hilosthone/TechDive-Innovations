'use client'

import { useState, useRef } from 'react'
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
        'Most programs last between 4 to 12 weeks. For example, our MERN Stack program typically runs for 12 weeks to ensure deep mastery.',
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
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleToggle = (index: number) => {
    const isOpening = openIndex !== index
    setOpenIndex(isOpening ? index : null)

    if (isOpening) {
      setTimeout(() => {
        itemRefs.current[index]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }, 300)
    }
  }

  return (
    <section
      className='relative py-32 px-6 md:px-20 bg-white overflow-hidden'
      id='faq'
    >
      {/* Background Tech DNA Layer - Very Subtle */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] select-none'>
        <div className='absolute top-20 left-[5%] text-black text-7xl font-mono'>
          {'find()'}
        </div>
        <div className='absolute bottom-40 right-[5%] text-black text-8xl font-mono -rotate-12'>
          {'query'}
        </div>
        <div className='absolute top-1/2 left-1/4 text-black text-5xl font-mono opacity-20'>
          {'filter((q) => ans)'}
        </div>
      </div>

      <div className='relative z-10 max-w-4xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-20' data-aos='fade-up'>
          <div className='inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-5 py-2 rounded-full text-[10px] font-black mb-6 uppercase tracking-[0.2em]'>
            <FaQuestionCircle /> Support Center
          </div>
          <h2 className='text-4xl md:text-6xl font-black text-[#0A1F44] tracking-tighter'>
            Have <span className='text-[#D4AF37]'>Questions?</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className='space-y-6'>
          {items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                className={`transition-all duration-500 rounded-4xl border ${
                  isOpen
                    ? 'border-[#D4AF37]/40 bg-gray-50/50 shadow-2xl shadow-[#0A1F44]/5 scale-[1.01]'
                    : 'border-gray-100 bg-white hover:border-[#D4AF37]/30'
                }`}
                data-aos='fade-up'
                data-aos-delay={index * 50}
              >
                <button
                  onClick={() => handleToggle(index)}
                  className='w-full text-left px-8 py-7 flex justify-between items-center group'
                >
                  <span
                    className={`font-black text-lg md:text-xl transition-colors pr-6 tracking-tight ${
                      isOpen ? 'text-[#D4AF37]' : 'text-[#0A1F44]'
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      isOpen
                        ? 'bg-[#D4AF37] text-[#0A1F44] rotate-180 shadow-lg shadow-[#D4AF37]/30'
                        : 'bg-[#0A1F44] text-white group-hover:bg-[#D4AF37]'
                    }`}
                  >
                    {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className='px-8 pb-8 text-gray-500 text-lg leading-relaxed border-t border-gray-100/50 pt-6 font-medium'>
                    {item.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Card */}
        <div
          className='mt-24 text-center p-12 bg-linear-to-br from-[#0A1F44] to-[#112d61] rounded-[3rem] shadow-2xl border border-white/5 relative overflow-hidden'
          data-aos='zoom-in'
        >
          {/* Subtle DNA background inside the CTA */}
          <div className='absolute top-0 right-0 p-4 opacity-5 text-white font-mono text-xs'>
            {'contact.init()'}
          </div>

          <p className='text-white/80 mb-8 text-xl font-medium relative z-10'>
            Still have questions that aren't answered here?
          </p>
          <a
            href='https://wa.me/2349058263561'
            target='_blank'
            rel='noopener noreferrer'
            className='relative z-10 inline-block bg-[#D4AF37] text-[#0A1F44] px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:shadow-[0_20px_40px_rgba(212,175,55,0.3)] transition-all duration-500 active:scale-95'
          >
            Chat with an Advisor
          </a>
        </div>
      </div>
    </section>
  )
}