
// import './globals.css'
// import type { Metadata } from 'next'
// import Providers from './providers'

// export const metadata: Metadata = {
//   title: 'TechDive Innovations',
//   description: 'Affordable, practical digital skills for everyone',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang='en'>
//       <body className='bg-white text-gray-900 antialiased'>
//         <Providers>{children}</Providers>
//       </body>
//     </html>
//   )
// }

//layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Providers from './providers'

import Navbar from '../app/components/layout/Navbar'
import Footer from '../app/components/layout/Footer'

export const metadata: Metadata = {
  title: 'TechDive Innovations',
  description: 'Affordable, practical digital skills for everyone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='bg-white text-gray-900 antialiased'>
        <Providers>
          <Navbar />

          <main>{children}</main>

          <Footer />
        </Providers>
      </body>
    </html>
  )
}
