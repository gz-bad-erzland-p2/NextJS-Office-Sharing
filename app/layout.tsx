import React from "react";
import './global.css'

import HeaderComponent from "../core/components/layout/HeaderComponent";
import FooterComponent from "../core/components/layout/FooterComponent";
/*import { Inter } from '@next/font/google';

const inter = Inter({
    variable: '--font-inter',
});*/
export default function RootLayout({children}: { children: React.ReactNode }) {

    // https://shippingchimp.com/blog/wp-content/uploads/2021/01/image-19-644x1024.png
    return (
        <html lang={"de"} /*className={inter.className}*/
              className={"h-full w-full"}>
        <body className={"h-full w-full"}>
        {/* See https://www.thefullstackblog.com/how-to-make-the-footer-start-at-the-bottom-of-the-screen-with-tailwind-css  */}
        <main
            className={"h-full min-h-full flex flex-col min-w-0 bg-office-gray-500 "}>
            <HeaderComponent/>
            <div className={"flex flex-col justify-center flex-1 m-2"}>
                {children}
            </div>
            <FooterComponent/>
        </main>
        </body>
        </html>
    )
}
