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
      {/* Header Section with Tech DNA Background */}
      <section className='relative bg-[#0A1F44] pt-40 pb-24 px-6 text-center overflow-hidden'>
        {/* Background Decoration Layer */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          {/* Subtle Glows */}
          <div className='absolute top-[-10%] left-[-5%] w-100 h-100 bg-blue-500/10 rounded-full blur-[100px]' />
          <div className='absolute bottom-[-10%] right-[-5%] w-75 h-75 bg-[#D4AF37]/10 rounded-full blur-[80px]' />

          {/* Floating Code Symbols */}
          <div className='absolute top-[25%] left-[10%] text-white/5 text-6xl font-mono -rotate-12 animate-pulse'>
            {'import'}
          </div>
          <div className='absolute top-[40%] right-[12%] text-[#D4AF37]/10 text-8xl font-mono rotate-12'>
            {'{...}'}
          </div>
          <div className='absolute bottom-[15%] left-[15%] text-blue-400/5 text-5xl font-mono'>
            {'git push'}
          </div>
          <div className='absolute bottom-[20%] right-[20%] text-white/5 text-7xl font-mono -rotate-6'>
            {'() =>'}
          </div>
        </div>

        {/* Content Layer */}
        <div className='relative z-10 max-w-7xl mx-auto'>
          <h1 className='text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tighter'>
            Get In <span className='text-[#D4AF37]'>Touch</span>
          </h1>
          <p className='text-gray-300 max-w-xl mx-auto text-lg leading-relaxed'>
            Have questions about our courses or enrollment? We're here to help
            you dive into your new career in tech.
          </p>
        </div>
      </section>

      {/* Info & Form Section */}
      <section className='py-24 px-6 md:px-20'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
            {/* Left Side: Contact Information */}
            <div>
              <h2 className='text-3xl font-bold text-[#0A1F44] mb-10 tracking-tight'>
                Contact Information
              </h2>

              <div className='space-y-6'>
                {/* Email Card */}
                <div className='flex items-start gap-5 p-6 bg-gray-50 rounded-2xl border-l-4 border-[#D4AF37] hover:shadow-lg transition-shadow'>
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
                <div className='flex items-start gap-5 p-6 bg-gray-50 rounded-2xl border-l-4 border-[#D4AF37] hover:shadow-lg transition-shadow'>
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
                        rel='noreferrer'
                        className='hover:text-[#D4AF37] transition-colors'
                      >
                        0905 826 3561
                      </a>
                      <a
                        href='https://wa.me/2349051772499'
                        target='_blank'
                        rel='noreferrer'
                        className='hover:text-[#D4AF37] transition-colors'
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
                    <p className='text-gray-600 font-medium'>
                      Mon - Fri: 9:00 AM - 5:00 PM
                    </p>
                    <p className='text-gray-500 text-sm italic'>
                      Weekend sessions available for Hybrid courses.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Message Form */}
            <div className='bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-gray-100 ring-1 ring-gray-50'>
              <h3 className='text-2xl font-bold text-[#0A1F44] mb-8'>
                Send a Message
              </h3>
              <form className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <label className='text-xs font-black text-[#0A1F44] uppercase tracking-widest'>
                      First Name
                    </label>
                    <input
                      type='text'
                      className='w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label className='text-xs font-black text-[#0A1F44] uppercase tracking-widest'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      className='w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all'
                    />
                  </div>
                </div>
                <div className='space-y-2'>
                  <label className='text-xs font-black text-[#0A1F44] uppercase tracking-widest'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    className='w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all'
                  />
                </div>
                <div className='space-y-2'>
                  <label className='text-xs font-black text-[#0A1F44] uppercase tracking-widest'>
                    Interest Course
                  </label>
                  <select className='w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-none transition-all appearance-none cursor-pointer'>
                    <option>Select a Course</option>
                    <option>Front-End Development</option>
                    <option>Back-End Development</option>
                    <option>UI/UX Design</option>
                  </select>
                </div>
                <div className='space-y-2'>
                  <label className='text-xs font-black text-[#0A1F44] uppercase tracking-widest'>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className='w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all'
                    placeholder='How can we help you?'
                  ></textarea>
                </div>
                <button className='w-full bg-[#0A1F44] text-white py-5 rounded-xl font-black uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#0A1F44] transition-all duration-300 shadow-xl active:scale-95'>
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