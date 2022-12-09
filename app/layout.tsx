import React from "react";
import './global.css'

import HeaderComponent from "../components/page/HeaderComponent";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html>
      <body>
      <main>
          <HeaderComponent />
          {children}
      </main>
      </body>
      </html>
  )
}
