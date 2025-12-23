// app/page.tsx
import Hero from '../app/components/home/Hero'
import WhyTechDive from '../app/components/home/WhyTechDive'
import FeaturedCourse from '../app/components/home/FeaturedCourse'
import TargetAudience from '../app/components/home/TargetAudience'
import Courses from '../app/components/home/Courses'
import CTA from '../app/components/home/CTA'
import FAQ from './components/shared/FAQ'
import Testimonial from './components/home/Testimonial'
import Contact from './components/contact/Contact'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhyTechDive />
      <FeaturedCourse />
      <TargetAudience />
      <Courses />
      <CTA />
      <Testimonial />
      <FAQ />
      <Contact />
    </main>
  )
}
