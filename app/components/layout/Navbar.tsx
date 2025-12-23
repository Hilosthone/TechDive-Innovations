'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Courses', href: '/courses' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A1F44] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white'>
        {/* Logo */}
        <Link href='/' className='text-2xl font-bold'>
          TechDive
        </Link>

        {/* Desktop Links */}
        <div className='hidden md:flex space-x-6'>
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className='hover:text-[#D4AF37] transition-colors duration-200'
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className='md:hidden'>
          <button
            onClick={() => setMenuOpen(true)}
            className='focus:outline-none z-50'
            aria-label='Open menu'
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0A1F44] text-white
                    transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
                    transition-transform duration-300 ease-in-out shadow-lg z-40`}
      >
        {/* Close Button */}
        <div className='flex justify-end p-4'>
          <button
            onClick={() => setMenuOpen(false)}
            className='focus:outline-none'
            aria-label='Close menu'
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className='flex flex-col mt-8 space-y-6 px-6 text-lg'>
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className='hover:text-[#D4AF37] transition-colors duration-200'
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {menuOpen && (
        <div
          className='fixed inset-0 bg-opacity-50 z-30'
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  )
}
