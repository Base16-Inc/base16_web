import 'css/tailwind.css'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Base16 Inc.',
  description: 'Building Things',
  icons: {
    icon: '/data/b16_logo_128_rounded.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth bg-[#121212] h-full">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center bg-[#181818]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
