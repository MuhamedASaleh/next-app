// 'use client'
import { Inter } from 'next/font/google'
import './globals.css'
// import React , { useEffect } from 'react'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home',
  description: 'Welcome Home',
}

export default function RootLayout({ children }) {

  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap")
  // }, [])

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
