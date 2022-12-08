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
          <div className="flex bg-gray-100 justify-between">
              <div className="text-gray-800 bg-gray-300 px-4 py-2 m-2">Office-Sharing</div>
              <Link href={"/"} className="text-gray-800 bg-gray-300 px-4 py-2 m-2">
                  Abmelden
              </Link>
          </div>
          {children}
      </main>
      </body>
      </html>
  )
}
