import React from "react";
import Link from "next/link";
import './global.css'
import OfficeFooter from "./footer";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html className={"min-h-full"}>
        <body>
        <main>
            <div className="relative w-full float-left bg-gray-100 mb-5">
                <div className="text-gray-800 px-4 py-2 m-2 float-left">Office-Sharing Bad-Erzland</div>
                <ul className={"relative list-none "}>
                    <li className={"float-right text-gray-800 bg-gray-300 px-4 py-2 m-2 block"}>
                        <Link href={"/"}>
                            Abmelden
                        </Link>
                    </li>
                </ul>
            </div>
            {children}
            <OfficeFooter />
        </main>
        </body>
        </html>
    )
}
