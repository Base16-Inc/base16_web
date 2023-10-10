import 'css/tailwind.css'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

const nunito_sans = Nunito_Sans({ subsets: ['latin'], variable: '--font-nunito-sans' })

export const metadata: Metadata = {
  title: 'Base 16',
  description: 'Building Things'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${nunito_sans.variable} scroll-smooth`}>
      <Header />
      <main className={nunito_sans.className}>{children}</main>
      <Footer />
    </html>
  )
}
