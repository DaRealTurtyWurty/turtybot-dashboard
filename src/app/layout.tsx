import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";
import {SessionProvider} from "next-auth/react";
import Providers from "@/providers/Providers";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TurtyBot Dashboard',
  description: 'The web dashboard for TurtyBot',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Providers>
            <main className="flex flex-col min-h-screen bg-gray-900 dark:bg-gray-800">
                <Navbar />
                {children}
            </main>
          </Providers>
      </body>
    </html>
  )
}
