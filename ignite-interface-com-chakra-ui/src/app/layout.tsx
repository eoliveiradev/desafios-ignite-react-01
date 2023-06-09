"use client"

import { ChakraProvider } from '@/context/ChakraProvider'
import { Inter } from 'next/font/google'
import { DefaultLayout } from '@/components/layouts/DefaultLayout/DefaultLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={inter.className}>
          <DefaultLayout>
            {children}
          </DefaultLayout>
      </body>
    </html>
  )
}
