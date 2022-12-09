import React from "react";
import './global.css'

import HeaderComponent from "../components/page/HeaderComponent";
import FooterComponent from "../components/page/FooterComponent";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html>
        <body>
        {/* See https://www.thefullstackblog.com/how-to-make-the-footer-start-at-the-bottom-of-the-screen-with-tailwind-css  */}
        <main className={"min-h-screen flex flex-col m"}>
            <HeaderComponent/>
            <div className={"flex-grow bg-o-white"}>
                <div className="o-content-container flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                {children}
                </div>
            </div>
            <FooterComponent/>
        </main>
        </body>
        </html>
    )
}
