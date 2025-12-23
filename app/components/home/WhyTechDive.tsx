// app/components/home/WhyTechDive.tsx
'use client'

export default function WhyTechDive() {
  return (
    <section className='py-20 px-6 md:px-20 bg-white' data-aos='fade-right'>
      <h2 className='text-4xl font-bold mb-10 text-[#0A1F44]'>
        Why Choose TechDive?
      </h2>

      <div className='space-y-6 max-w-4xl text-lg text-gray-700'>
        <p>
          <strong>Our Mission:</strong> To break barriers and make digital
          education accessible, affordable, and practical for everyone.
        </p>

        <p>
          <strong>Our Vision:</strong> To become the go-to tech training hub
          producing skilled, confident, and job-ready professionals.
        </p>

        <p>
          <strong>Our Approach:</strong> We blend solid theory with hands-on
          projects, real-world tools, and mentorship to ensure students don’t
          just learn — they build.
        </p>
      </div>
    </section>
  )
}
