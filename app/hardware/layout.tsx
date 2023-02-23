import React from "react";

export default function HardwareLayout({children}: { children: React.ReactNode }) {
    return (
        <section
            className="relative m-auto border-2 bg-white p-2 max-w-screen-xl min-w w-full md:min-w-[650px] md:drop-shadow-2xl md:rounded-2xl h-full flex flex-col items-center justify-center">
            {children}
        </section>
    )
}