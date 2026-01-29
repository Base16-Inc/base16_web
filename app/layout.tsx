import 'css/tailwind.css'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Base16 Inc.',
  description: 'Building Things'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth bg-[#121212] h-full">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </html>
  )
}
