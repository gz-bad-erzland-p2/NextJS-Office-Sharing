import React, {Suspense} from "react";

export default function SupportLayout({children}: { children: React.ReactNode }) {

    return (
        <section
            className="relative m-auto border-2 bg-white p-2 max-w-screen-xl min-w w-full md:min-w-[650px] md:drop-shadow-2xl md:rounded-2xl h-auto flex flex-col items-center justify-center">
            <Suspense fallback={"Loading"}>
                {children}
            </Suspense>
        </section>
    );
}