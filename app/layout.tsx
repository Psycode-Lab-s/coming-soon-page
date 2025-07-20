import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Colombo Coffee Company',
  description: "Created by Psycode Lab's",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
