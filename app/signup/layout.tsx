import React from "react";

export default function SignUpLayout({children}: { children: React.ReactNode }) {
    return (
        <section
            className="relative m-auto bg-white p-2 max-w-screen-xl min-w w-full md:min-w-[650px]
             md:rounded-2xl h-full flex flex-col items-center justify-center my-5 drop-shadow-2xl">
            <h1 className={"px-2 mb-5"}>Registrieren</h1>
            {children}
        </section>
    );
}