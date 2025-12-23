// app/components/home/Contact.tsx
'use client'

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  return (
    <section
      className='py-20 px-6 md:px-20 bg-gray-50'
      id='contact'
      data-aos='fade-up'
    >
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-[#0A1F44] mb-4'>Contact Us</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Have questions about our programs or want to get started? Reach out
            to TechDive Innovations — we’re here to help.
          </p>
        </div>

        {/* Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-14'>
          {/* Contact Info */}
          <div className='space-y-8'>
            <div className='flex items-start gap-4'>
              <FaEnvelope className='text-[#D4AF37] text-xl mt-1' />
              <div>
                <h4 className='font-semibold text-[#0A1F44]'>Email Address</h4>
                <p className='text-gray-600'>TechDiveInnovations@gmail.com</p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <FaPhoneAlt className='text-[#D4AF37] text-xl mt-1' />
              <div>
                <h4 className='font-semibold text-[#0A1F44]'>Phone Number</h4>
                <p className='text-gray-600'>+234 XXX XXX XXXX</p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <FaMapMarkerAlt className='text-[#D4AF37] text-xl mt-1' />
              <div>
                <h4 className='font-semibold text-[#0A1F44]'>
                  Office Location
                </h4>
                <p className='text-gray-600'>Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className='bg-white p-10 rounded-2xl shadow-lg space-y-6'
            data-aos='fade-left'
          >
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Full Name
              </label>
              <input
                type='text'
                placeholder='Your full name'
                className='w-full px-4 py-3 border rounded-lg focus:ring-2
                           focus:ring-[#D4AF37] focus:outline-none'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Email Address
              </label>
              <input
                type='email'
                placeholder='your@email.com'
                className='w-full px-4 py-3 border rounded-lg focus:ring-2
                           focus:ring-[#D4AF37] focus:outline-none'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Message
              </label>
              <textarea
                rows={4}
                placeholder='How can we help you?'
                className='w-full px-4 py-3 border rounded-lg focus:ring-2
                           focus:ring-[#D4AF37] focus:outline-none resize-none'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-[#0A1F44] text-white py-3 rounded-lg
                         hover:bg-[#D4AF37] hover:text-[#0A1F44]
                         transition-all duration-300 font-semibold'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
