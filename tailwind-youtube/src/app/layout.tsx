import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Youtube Project',
  description: 'View to media',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
