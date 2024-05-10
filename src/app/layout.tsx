import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/header'
import Footer from './components/footer'
import { Providers } from './providers/providerWrapper'
import { headers } from 'next/headers'
import { logger } from './server/analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
      title: 'Portfolio Jesus Pedro',
      description: '',
      icons: {
            icon: '/favicon.ico'
      }
}

export default function RootLayout({ children }: { children: ReactNode }) {
      logger(
            headers().get('ip') || '',
            headers().get('userAgent') || '',
            headers().get('time') || '',
            headers().get('project') || ''
      )
      return (
            <html lang="es">
                  <body className={inter.className}>
                        <Providers>
                              <Header />
                              {children}
                              <Footer />
                              <ToastContainer />
                        </Providers>
                  </body>
            </html>
      )
}
