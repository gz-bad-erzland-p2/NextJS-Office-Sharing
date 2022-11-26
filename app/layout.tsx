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
      <body className={"p-8"}>
      <main className={"p-4 flex flex-col content-start items-start"}>
          <nav className={"font-bold m-2 underline"}>
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
