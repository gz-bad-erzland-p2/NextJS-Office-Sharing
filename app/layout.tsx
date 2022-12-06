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
          <nav className={"font-bold underline"}>
              <Link href="/">
                  Abmelden
              </Link>
          </nav>
          {children}
      </main>
      </body>
      </html>
  )
}
