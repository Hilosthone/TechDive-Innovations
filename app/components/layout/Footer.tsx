'use client'

import Link from 'next/link'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { Icon: FaFacebookF, href: '#', label: 'Facebook' },
    { Icon: FaTwitter, href: '#', label: 'Twitter' },
    { Icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { Icon: FaInstagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className='relative bg-[#0A1F44] text-gray-300 pt-20 border-t border-white/5 overflow-hidden'>
      {/* Background Tech DNA Layer */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none select-none'>
        <div className='absolute top-10 right-[10%] text-white/5 text-7xl font-mono rotate-12'>
          {'</footer>'}
        </div>
        <div className='absolute bottom-20 left-[5%] text-[#D4AF37]/5 text-8xl font-mono -rotate-12'>
          {'</body>'}
        </div>
        <div className='absolute top-1/2 left-1/3 text-white/5 text-4xl font-mono opacity-20'>
          {"console.log('Success');"}
        </div>
        {/* Subtle Glow */}
        <div className='absolute bottom-0 center-0 w-full h-1/2 bg-linear-to-t from-blue-900/20 to-transparent' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-2 lg:grid-cols-4 pb-12'>
        {/* Brand / About */}
        <div className='space-y-6'>
          <Link
            href='/'
            className='text-2xl font-bold text-white tracking-tight'
          >
            TechDive<span className='text-[#D4AF37]'>.</span>
          </Link>
          <p className='text-sm leading-relaxed text-gray-400'>
            Empowering the next generation of digital talent with practical,
            affordable, and industry-led tech education in Nigeria.
          </p>
          <div className='flex space-x-3'>
            {socialLinks.map(({ Icon, label, href }, index) => (
              <a
                key={index}
                href={href}
                className='w-10 h-10 flex items-center justify-center
                           bg-white/5 rounded-xl border border-white/10
                           hover:bg-[#D4AF37] hover:text-[#0A1F44] hover:-translate-y-1
                           transition-all duration-300'
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className='text-lg font-bold text-white mb-6'>Navigation</h4>
          <ul className='space-y-4 text-sm'>
            {[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/about' },
              { label: 'Explore Courses', href: '/courses' },
              { label: 'Contact Support', href: '/contact' },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className='hover:text-[#D4AF37] hover:translate-x-1 inline-block transition-all duration-200'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className='text-lg font-bold text-white mb-6'>Get in Touch</h4>
          <ul className='space-y-4 text-sm'>
            <li className='flex items-center gap-3'>
              <FaEnvelope className='text-[#D4AF37]' />
              <a
                href='mailto:TechDiveInnovations@gmail.com'
                className='hover:text-white transition-colors'
              >
                TechDiveInnovations@gmail.com
              </a>
            </li>
            <li className='flex items-start gap-3'>
              <FaPhoneAlt className='mt-1 text-[#D4AF37]' />
              <div className='flex flex-col gap-1'>
                <a
                  href='https://wa.me/2349058263561'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-[#D4AF37] transition-colors'
                >
                  0905 826 3561
                </a>
                <a
                  href='https://wa.me/2349051772499'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-[#D4AF37] transition-colors'
                >
                  0905 177 2499
                </a>
              </div>
            </li>
            <li className='flex items-center gap-3'>
              <FaMapMarkerAlt className='text-[#D4AF37]' />
              <span>Lagos, Nigeria</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className='text-lg font-bold text-white mb-6'>Stay Updated</h4>
          <p className='text-sm text-gray-400 mb-6 leading-relaxed'>
            Subscribe to our newsletter for the latest tech news and course
            updates.
          </p>
          <form className='flex flex-col gap-3'>
            <input
              type='email'
              placeholder='Email address'
              className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white 
                         placeholder:text-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all'
            />
            <button
              type='submit'
              className='bg-[#D4AF37] text-[#0A1F44] px-5 py-3 rounded-xl
                         font-bold hover:bg-white transition-all duration-300 active:scale-95'
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='relative z-10 border-t border-white/5 py-8'>
        <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-xs text-gray-500'>
            © {currentYear} TechDive Innovations. All rights reserved.
          </p>
          <div className='flex gap-6 text-xs text-gray-500'>
            <Link href='#' className='hover:text-[#D4AF37] transition-colors'>
              Privacy Policy
            </Link>
            <Link href='#' className='hover:text-[#D4AF37] transition-colors'>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}