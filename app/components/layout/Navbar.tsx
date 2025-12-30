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
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset'
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
      {/* Container to handle the floating position */}
      <nav
        className={`fixed w-full z-100 transition-all duration-500 ease-in-out px-4 md:px-6 ${
          isScrolled ? 'top-2' : 'top-6'
        }`}
      >
        <div
          className={`relative max-w-7xl mx-auto flex justify-between items-center bg-[#0A1F44] rounded-4xl transition-all duration-500 overflow-hidden border border-white/10 ${
            isScrolled
              ? 'py-3 px-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)] scale-[0.98]'
              : 'py-5 px-10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] scale-100'
          }`}
        >
          {/* Subtle Background Code Shapes inside Navbar */}
          <div className='absolute inset-0 opacity-10 pointer-events-none font-mono text-[10px] text-white hidden md:block'>
            <span className='absolute top-2 left-[20%]'>import</span>
            <span className='absolute bottom-2 right-[25%]'>{'{...}'}</span>
            <span className='absolute top-1/2 left-[45%] opacity-30'>
              git merge
            </span>
          </div>

          {/* Logo */}
          <Link
            href='/'
            className='relative z-10 text-2xl font-black tracking-tighter text-white hover:opacity-90 transition-opacity flex items-center gap-1'
          >
            TechDive<span className='text-[#D4AF37]'>.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-10 relative z-10'>
            <div className='flex items-center space-x-8'>
              {links.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 py-2 group ${
                      isActive
                        ? 'text-[#D4AF37]'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                )
              })}
            </div>

            <Link
              href='/courses'
              className='bg-[#D4AF37] text-[#0A1F44] px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-95 transition-all'
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className='md:hidden relative z-10 p-2 text-white hover:text-[#D4AF37] transition-colors'
          >
            <FaBars size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-500 z-110 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-80 bg-[#0A1F44] z-120 transform transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-between items-center p-8 border-b border-white/5'>
          <span className='text-xl font-black text-white'>
            TECH<span className='text-[#D4AF37]'>DIVE</span>
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className='w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 text-white hover:bg-[#D4AF37] transition-all'
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className='flex flex-col mt-8 space-y-2 px-6'>
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center justify-between text-lg font-bold p-5 rounded-2xl transition-all ${
                pathname === link.href
                  ? 'bg-[#D4AF37] text-[#0A1F44]'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
              <FaChevronRight size={14} className='opacity-30' />
            </Link>
          ))}
          <div className='pt-10'>
            <Link
              href='/courses'
              onClick={() => setMenuOpen(false)}
              className='block w-full text-center bg-[#D4AF37] text-[#0A1F44] py-5 rounded-2xl font-black text-lg uppercase tracking-widest'
            >
              Get Started
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}
