'use client'

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
} from 'react-icons/fa'

export default function ContactPage() {
  return (
    <main className='bg-white min-h-screen'>
      {/* Header Section */}
      <section className='bg-[#0A1F44] pt-32 pb-20 px-6 text-center'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='text-4xl md:text-6xl font-extrabold text-white mb-4'>
            Get In <span className='text-[#D4AF37]'>Touch</span>
          </h1>
          <p className='text-gray-300 max-w-xl mx-auto text-lg'>
            Have questions about our courses or enrollment? We're here to help
            you dive into your new career.
          </p>
        </div>
      </section>

      <section className='py-20 px-6 md:px-20'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
            {/* Left Side: Contact Information */}
            <div data-aos='fade-right'>
              <h2 className='text-3xl font-bold text-[#0A1F44] mb-8'>
                Contact Information
              </h2>

              <div className='space-y-8'>
                {/* Email Card */}
                <div className='flex items-start gap-5 p-6 bg-gray-50 rounded-2xl border-l-4 border-[#D4AF37]'>
                  <div className='bg-[#0A1F44] p-3 rounded-xl text-[#D4AF37]'>
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <h4 className='font-bold text-[#0A1F44] mb-1'>Email Us</h4>
                    <p className='text-gray-600'>
                      TechDiveInnovations@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone/WhatsApp Card */}
                <div className='flex items-start gap-5 p-6 bg-gray-50 rounded-2xl border-l-4 border-[#D4AF37]'>
                  <div className='bg-[#0A1F44] p-3 rounded-xl text-[#D4AF37]'>
                    <FaWhatsapp size={24} />
                  </div>
                  <div>
                    <h4 className='font-bold text-[#0A1F44] mb-1'>
                      Call or WhatsApp
                    </h4>
                    <div className='flex flex-col text-gray-600'>
                      <a
                        href='https://wa.me/2349058263561'
                        target='_blank'
                        className='hover:text-[#D4AF37]'
                      >
                        0905 826 3561
                      </a>
                      <a
                        href='https://wa.me/2349051772499'
                        target='_blank'
                        className='hover:text-[#D4AF37]'
                      >
                        0905 177 2499
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className='flex items-start gap-5 p-6 bg-gray-50 rounded-2xl border-l-4 border-[#D4AF37]'>
                  <div className='bg-[#0A1F44] p-3 rounded-xl text-[#D4AF37]'>
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h4 className='font-bold text-[#0A1F44] mb-1'>
                      Office Location
                    </h4>
                    <p className='text-gray-600'>Lagos, Nigeria</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className='flex items-start gap-5 p-6 bg-gray-50 rounded-2xl border-l-4 border-[#D4AF37]'>
                  <div className='bg-[#0A1F44] p-3 rounded-xl text-[#D4AF37]'>
                    <FaClock size={24} />
                  </div>
                  <div>
                    <h4 className='font-bold text-[#0A1F44] mb-1'>
                      Training Hours
                    </h4>
                    <p className='text-gray-600'>
                      Mon - Fri: 9:00 AM - 5:00 PM
                    </p>
                    <p className='text-gray-600 text-sm'>
                      Weekend sessions available for Hybrid courses.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Message Form */}
            <div
              data-aos='fade-left'
              className='bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-gray-100'
            >
              <h3 className='text-2xl font-bold text-[#0A1F44] mb-6'>
                Send a Message
              </h3>
              <form className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-bold text-[#0A1F44] mb-2 uppercase tracking-wide'>
                      First Name
                    </label>
                    <input
                      type='text'
                      className='w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-none transition-all'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-bold text-[#0A1F44] mb-2 uppercase tracking-wide'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      className='w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-none transition-all'
                    />
                  </div>
                </div>
                <div>
                  <label className='block text-sm font-bold text-[#0A1F44] mb-2 uppercase tracking-wide'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    className='w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-none transition-all'
                  />
                </div>
                <div>
                  <label className='block text-sm font-bold text-[#0A1F44] mb-2 uppercase tracking-wide'>
                    Interest Course
                  </label>
                  <select className='w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-none transition-all appearance-none'>
                    <option>Select a Course</option>
                    <option>Front-End Development</option>
                    <option>Data Analysis</option>
                    <option>UI/UX Design</option>
                  </select>
                </div>
                <div>
                  <label className='block text-sm font-bold text-[#0A1F44] mb-2 uppercase tracking-wide'>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className='w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-none transition-all'
                  ></textarea>
                </div>
                <button className='w-full bg-[#0A1F44] text-white py-5 rounded-xl font-bold text-lg hover:bg-[#D4AF37] hover:text-[#0A1F44] transition-all duration-300 shadow-xl'>
                  Send Your Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}