import './globals.css'
import { Overpass } from 'next/font/google'

const overpass = Overpass({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${overpass.className} bg-[#131518] grid place-content-center
        w-screen h-screen justify-items-center text-white`}
      >
        {children}
      </body>
    </html>
  )
}
