'use client'

import { useState } from 'react'

const categories = ['All', 'Events', 'In Class', 'With Tutors']

const galleryImages = [
  // --- EVENTS ---
  {
    id: 1,
    category: 'Events',
    title: 'Tech Summit 2024',
    url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800',
  },
  {
    id: 4,
    category: 'Events',
    title: 'Hackathon Finalists',
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800',
  },
  {
    id: 5,
    category: 'Events',
    title: 'Certificate Award Night',
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800',
  },

  // --- IN CLASS ---
  {
    id: 2,
    category: 'In Class',
    title: 'Frontend Workshop',
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800',
  },
  {
    id: 6,
    category: 'In Class',
    title: 'Pair Programming Session',
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800',
  },
  {
    id: 7,
    category: 'In Class',
    title: 'UI/UX Design Lab',
    url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800',
  },
  {
    id: 8,
    category: 'In Class',
    title: 'Data Science Bootcamp',
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800',
  },

  // --- WITH TUTORS ---
  {
    id: 3,
    category: 'With Tutors',
    title: 'Mentorship Session',
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800',
  },
  {
    id: 9,
    category: 'With Tutors',
    title: 'One-on-One Debugging',
    url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800',
  },
  {
    id: 10,
    category: 'With Tutors',
    title: 'Career Coaching',
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800',
  },
]

export default function GalleryPage() {
  const [filter, setFilter] = useState('All')

  const filteredImages =
    filter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter)

  return (
    <main className='min-h-screen bg-gray-50 pt-32 pb-24 px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-black text-[#0A1F44] mb-4'>
            Our <span className='text-[#D4AF37]'>Community</span> in Action
          </h1>
          <p className='text-gray-500 max-w-2xl mx-auto'>
            Glimpses of life at TechDive—from intensive coding sessions to
            celebratory events.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                filter === cat
                  ? 'bg-[#0A1F44] text-white shadow-lg'
                  : 'bg-white text-gray-500 hover:text-[#0A1F44]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className='group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500'
            >
              <div className='aspect-4/3 overflow-hidden'>
                <img
                  src={img.url}
                  alt={img.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                />
              </div>
              <div className='absolute inset-0 bg-linear-to-t from-[#0A1F44]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>
                <span className='text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-1'>
                  {img.category}
                </span>
                <h3 className='text-white text-lg font-bold'>{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
