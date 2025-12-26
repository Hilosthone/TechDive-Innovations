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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Courses', href: '/courses' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 transition-all duration-300 z-90 bg-[#0A1F44] ${
          isScrolled
            ? 'py-3 shadow-2xl border-b border-white/10'
            : 'py-5 border-b border-transparent'
        }`}
      >
        <div className='max-w-7xl mx-auto px-6 flex justify-between items-center'>
          <Link
            href='/'
            className='text-2xl font-black tracking-tighter text-white hover:opacity-90 transition-opacity'
          >
            TechDive<span className='text-[#D4AF37]'>.</span>
          </Link>

          {/* Desktop Navigation with Hover Effects */}
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
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ease-in-out ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                )
              })}
            </div>
            <Link
              href='/courses'
              className='bg-[#D4AF37] text-[#0A1F44] px-7 py-2.5 rounded-full font-bold text-sm hover:bg-white hover:scale-105 active:scale-95 transition-all'
            >
              Join Now
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className='md:hidden p-2 text-white hover:text-[#D4AF37] transition-colors'
            aria-label='Open menu'
          >
            <FaBars size={26} />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 z-100 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-80 bg-[#0A1F44] shadow-2xl z-110 transform transition-transform duration-500 ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-between items-center p-8 border-b border-white/10'>
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

        <div className='flex flex-col mt-6 space-y-2 px-6'>
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center justify-between text-2xl font-bold p-4 rounded-xl transition-all ${
                pathname === link.href
                  ? 'bg-[#D4AF37]/10 text-[#D4AF37]'
                  : 'text-white/80 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
              <FaChevronRight
                size={14}
                className={
                  pathname === link.href ? 'opacity-100' : 'opacity-20'
                }
              />
            </Link>
          ))}

          <div className='pt-8 px-4'>
            <Link
              href='/courses'
              onClick={() => setMenuOpen(false)}
              className='block w-full text-center bg-[#D4AF37] text-[#0A1F44] py-4 rounded-2xl font-bold text-lg shadow-lg shadow-[#D4AF37]/20'
            >
              Get Started
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}
