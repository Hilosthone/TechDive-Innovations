// // layout.tsx
// import './globals.css'
// import type { Metadata } from 'next'
// import Providers from './providers'

// import Navbar from '../app/components/layout/Navbar'
// import Footer from '../app/components/layout/Footer'

// export const metadata: Metadata = {
//   title: 'TechDive Innovation Academy - Upskill in Tech',
//   description: 'Affordable, practical digital skills for everyone',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang='en' className="scroll-smooth">
//       {/* 1. added 'overflow-x-hidden' to prevent horizontal scroll 
//           2. added 'relative' to ensure child positioning works correctly 
//       */}
//       <body className='bg-white text-gray-900 antialiased overflow-x-hidden relative'>
//         <Providers>
//           <Navbar />
          
//           {/* Adding overflow-hidden here acts as a safety net 
//               for AOS animations that slide in from the side. 
//           */}
//           <main className="overflow-hidden">{children}</main>

//           <Footer />
//         </Providers>
//       </body>
//     </html>
//   )
// }

import './globals.css'
import type { Metadata } from 'next'
import Providers from './providers'

import Navbar from '../app/components/layout/Navbar'
import Footer from '../app/components/layout/Footer'

export const metadata: Metadata = {
  title: 'TechDive Innovations',
  description: 'Affordable, practical digital skills for everyone',
  // Add this icons object
  icons: {
    icon: '/LOGOTECHDIVE_Artboard4.png', // Standard favicon
    shortcut: '/LOGOTECHDIVE_Artboard4.png',
    apple: '/LOGOTECHDIVE_Artboard4.png', // For iOS home screen icons
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className='bg-white text-gray-900 antialiased overflow-x-hidden relative'>
        <Providers>
          <Navbar />
          <main className='overflow-hidden'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}