'use client'
import Link from 'next/link'

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='bg-[#0A1F44] text-gray-200 pt-16'>
      <div className='max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-4'>
        {/* Brand / About */}
        <div>
          <h3 className='text-2xl font-bold text-white mb-4'>
            TechDive Innovations
          </h3>
          <p className='text-sm leading-relaxed'>
            Empowering individuals with practical, affordable digital skills to
            succeed in today’s tech-driven world.
          </p>
        </div>

        {/* Quick Links */}
        <div className='w-full sm:w-auto'>
          <h4 className='text-lg font-semibold text-white mb-4'>Quick Links</h4>

          <ul className='space-y-3 text-sm'>
            {[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Courses', href: '/courses' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className='block w-fit
                         text-gray-300
                         hover:text-[#D4AF37]
                         focus:text-[#D4AF37]
                         transition-colors duration-200'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className='text-lg font-semibold text-white mb-4'>Contact Us</h4>
          <ul className='space-y-2 text-sm'>
            <li>Email: TechDiveInnovations@gmail.com</li>
            <li>Phone: +234 XXX XXX XXXX</li>
            <li>Location: Nigeria</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className='text-lg font-semibold text-white mb-4'>Newsletter</h4>
          <p className='text-sm mb-4'>
            Subscribe to get updates on new courses, programs, and
            opportunities.
          </p>

          <form className='flex'>
            <input
              type='email'
              placeholder='Your email address'
              className='w-full px-4 py-2 rounded-l-lg text-white focus:outline-none'
            />
            <button
              type='submit'
              className='bg-[#D4AF37] text-[#0A1F44] px-5 py-2 rounded-r-lg
                         font-semibold hover:bg-yellow-400 transition'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className='border-t border-gray-700 mt-12' />

      {/* Bottom Section */}
      <div
        className='max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row
                      justify-between items-center gap-4'
      >
        <p className='text-sm'>
          © {new Date().getFullYear()} TechDive Innovations. All rights
          reserved.
        </p>

        {/* Social Icons */}
        <div className='flex space-x-4'>
          {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
            (Icon, index) => (
              <button
                key={index}
                className='w-9 h-9 flex items-center justify-center
                           border border-gray-500 rounded-full
                           hover:border-[#D4AF37] hover:text-[#D4AF37]
                           transition'
                aria-label='Social media'
              >
                <Icon size={16} />
              </button>
            )
          )}
        </div>
      </div>
    </footer>
  )
}