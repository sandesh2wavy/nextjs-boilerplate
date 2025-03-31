import { ThemeProvider } from './providers'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sandesh Bhandari - Software Engineer & Web Developer',
  description: 'Personal website of Sandesh Bhandari - Software Engineer & Web Developer',
  openGraph: {
    title: 'Sandesh Bhandari - Software Engineer & Web Developer',
    description: 'Personal website of Sandesh Bhandari - Software Engineer & Web Developer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
