import React from "react";
import Link from "next/link";
import './global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html>
      <body>
      <main>
          <nav>
              <Link href="/">
                  Home
              </Link>
              <Link href="/notes">
                  Notes
              </Link>
          </nav>
          {children}
      </main>
      </body>
      </html>
  )
}
