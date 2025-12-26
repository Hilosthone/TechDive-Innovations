'use client'

import { FaLinkedin, FaTwitter, FaGithub, FaAward } from 'react-icons/fa'

export default function Tutors() {
  const tutors = [
    {
      name: 'Mr. Sid',
      role: 'Lead Data Scientist',
      specialty: 'Data Analysis & Data Science',
      bio: 'Expert in transforming complex datasets into actionable business insights using Python and R.',
      image: 'S', 
      color: 'border-blue-500',
    },
    {
        name: 'Hilosthone',
        role: 'Full-Stack Software Engineer',
        specialty: 'MERN Stack & Next.js Development',
        bio: 'Expert in building high-performance web applications using the MERN stack. Hilosthone focuses on seamless user experiences with React/Next.js and robust backend architecture with Node.js and MongoDB.',
        image: 'H',
        color: 'border-[#D4AF37]',
        stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Next.js', 'Tailwind CSS'],
        experience: 'Full-Stack Specialist'
  },
    {
      name: 'Mr. Daniel',
      role: 'Senior Creative Lead',
      specialty: 'Graphic Design & UI/UX',
      bio: 'Master of visual storytelling and user-centered design with 8+ years of industry experience.',
      image: 'D',
      color: 'border-purple-500',
    },
  ]

  return (
    <section className='py-24 px-6 md:px-20 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16' data-aos='fade-up'>
          <h2 className='text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4'>
            Meet Your <span className='text-[#D4AF37]'>Instructors</span>
          </h2>
          <p className='text-gray-500 max-w-2xl mx-auto'>
            Learn from industry veterans who are passionate about mentoring the
            next generation of tech leaders.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {tutors.map((tutor, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={index * 100}
              className='group relative bg-gray-50 rounded-[2.5rem] p-8 text-center hover:bg-white hover:shadow-2xl transition-all duration-500'
            >
              {/* Profile Image Circle */}
              <div
                className={`w-32 h-32 mx-auto mb-6 rounded-full border-4 ${tutor.color} p-1 flex items-center justify-center bg-white shadow-lg overflow-hidden transition-transform duration-500 group-hover:scale-110`}
              >
                <div className='w-full h-full rounded-full bg-[#0A1F44] flex items-center justify-center text-white text-4xl font-bold'>
                  {tutor.image}
                </div>
              </div>

              {/* Tag */}
              <div className='inline-flex items-center gap-1 bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase'>
                <FaAward /> Verified Expert
              </div>

              <h3 className='text-2xl font-bold text-[#0A1F44] mb-1'>
                {tutor.name}
              </h3>
              <p className='text-[#D4AF37] font-semibold text-sm mb-4'>
                {tutor.role}
              </p>

              <div className='h-px w-12 bg-gray-200 mx-auto mb-4'></div>

              <p className='text-gray-500 text-sm leading-relaxed mb-8'>
                <span className='block font-bold text-[#0A1F44] mb-1'>
                  Focus: {tutor.specialty}
                </span>
                {tutor.bio}
              </p>

              {/* Social Links */}
              <div className='flex justify-center gap-4'>
                <button className='text-gray-400 hover:text-[#0A1F44] transition-colors'>
                  <FaLinkedin size={20} />
                </button>
                <button className='text-gray-400 hover:text-[#0A1F44] transition-colors'>
                  <FaTwitter size={20} />
                </button>
                <button className='text-gray-400 hover:text-[#0A1F44] transition-colors'>
                  <FaGithub size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
