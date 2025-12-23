'use client'

import AOSProvider from './components/shared/AOSProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return <AOSProvider>{children}</AOSProvider>
}
