'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  // Simple state for a "Thank You" message after clicking send
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // You can add your form submission logic here (e.g., EmailJS or a backend API)
  }

  return (
    <section
      className='py-20 px-6 md:px-20 bg-gray-50'
      id='contact'
      data-aos='fade-up'
    >
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-[#0A1F44] mb-4'>
            Get In Touch
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Have questions about our tech programs or want to collaborate? Reach
            out to TechDive Innovations — we’re here to help you dive deep into
            tech.
          </p>
        </div>

        {/* Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-14'>
          {/* Contact Info */}
          <div className='space-y-8'>
            <div className='flex items-start gap-5 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300'>
              <div className='bg-[#D4AF37]/10 p-3 rounded-lg'>
                <FaEnvelope className='text-[#D4AF37] text-2xl' />
              </div>
              <div>
                <h4 className='font-semibold text-[#0A1F44] text-lg'>
                  Email Address
                </h4>
                <a
                  href='mailto:TechDiveInnovations@gmail.com'
                  className='text-gray-600 hover:text-[#D4AF37] transition-colors'
                >
                  TechDiveInnovations@gmail.com
                </a>
              </div>
            </div>

            <div className='flex items-start gap-5 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300'>
              <div className='bg-[#D4AF37]/10 p-3 rounded-lg'>
                <FaPhoneAlt className='text-[#D4AF37] text-2xl' />
              </div>
              <div>
                <h4 className='font-semibold text-[#0A1F44] text-lg'>
                  Phone Numbers
                </h4>
                <p className='text-gray-600'>0905 826 3561</p>
                <p className='text-gray-600'>0905 177 2499</p>
              </div>
            </div>

            <div className='flex items-start gap-5 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300'>
              <div className='bg-[#D4AF37]/10 p-3 rounded-lg'>
                <FaMapMarkerAlt className='text-[#D4AF37] text-2xl' />
              </div>
              <div>
                <h4 className='font-semibold text-[#0A1F44] text-lg'>
                  Office Location
                </h4>
                <p className='text-gray-600'>Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='relative'>
            {submitted ? (
              <div className='bg-white p-10 rounded-2xl shadow-lg h-full flex flex-col items-center justify-center text-center animate-in fade-in duration-500'>
                <div className='w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    className='w-8 h-8'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 13l4 4L19 7'
                    ></path>
                  </svg>
                </div>
                <h3 className='text-2xl font-bold text-[#0A1F44]'>
                  Message Sent!
                </h3>
                <p className='text-gray-600 mt-2'>
                  We will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className='mt-6 text-[#D4AF37] underline'
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className='bg-white p-10 rounded-2xl shadow-xl space-y-6 border-t-4 border-[#D4AF37]'
                data-aos='fade-left'
              >
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Full Name
                  </label>
                  <input
                    required
                    type='text'
                    placeholder='Your full name'
                    className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition-all'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Email Address
                  </label>
                  <input
                    required
                    type='email'
                    placeholder='your@email.com'
                    className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition-all'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder='How can we help you?'
                    className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:outline-none resize-none transition-all'
                  />
                </div>

                <button
                  type='submit'
                  className='w-full bg-[#0A1F44] text-white py-4 rounded-lg hover:bg-[#D4AF37] hover:text-[#0A1F44] transition-all duration-300 font-bold uppercase tracking-wide'
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
