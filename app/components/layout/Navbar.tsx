'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { FaTimes, FaBars, FaChevronRight } from 'react-icons/fa'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

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
      className={`fixed w-full top-0 z-100 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0A1F44]/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 flex justify-between items-center'>
        {/* Logo */}
        <Link
          href='/'
          className='text-2xl font-black tracking-tighter text-white hover:scale-105 transition-transform'
        >
          TechDive<span className='text-[#D4AF37]'>.</span>
        </Link>

        {/* Desktop Links */}
        <div className='hidden md:flex items-center space-x-10'>
          <div className='flex items-center space-x-8'>
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 py-2 group ${
                    isActive
                      ? 'text-[#D4AF37]'
                      : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {link.label}
                  {/* Animated Underline */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] transform transition-transform duration-300 ${
                      isActive
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          <Link
            href='/courses'
            className='bg-[#D4AF37] text-[#0A1F44] px-7 py-2.5 rounded-full font-bold text-sm 
                       hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] 
                       active:scale-95 transition-all duration-300'
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className='md:hidden p-2 text-white hover:text-[#D4AF37] transition-colors'
          aria-label='Open menu'
        >
          <FaBars size={26} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-80 bg-[#0A1F44] shadow-[-20px_0_50px_rgba(0,0,0,0.5)]
                    transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
                    transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) z-110`}
      >
        <div className='flex justify-between items-center p-8 border-b border-white/5'>
          <span className='text-xl font-black text-white tracking-tighter'>
            NAV<span className='text-[#D4AF37]'>IGATION</span>
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className='w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-[#D4AF37] transition-colors'
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className='flex flex-col mt-10 space-y-4 px-8'>
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center justify-between text-2xl font-bold py-3 transition-all ${
                pathname === link.href
                  ? 'text-[#D4AF37]'
                  : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              <FaChevronRight size={14} className='opacity-30' />
            </Link>
          ))}

          <div className='pt-10'>
            <Link
              href='/courses'
              onClick={() => setMenuOpen(false)}
              className='block w-full text-center bg-[#D4AF37] text-[#0A1F44] py-4 rounded-2xl font-bold text-lg'
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Glassmorphism Overlay */}
      {menuOpen && (
        <div
          className='fixed inset-0 bg-[#0A1F44]/40 backdrop-blur-md z-105 animate-fade-in'
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  )
}
