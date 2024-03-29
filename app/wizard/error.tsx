"use client";
import Link from "next/link";

export default function ErrorComponent() {
    return (
        <div className={"h-full w-full flex flex-col items-center justify-center"}>
            <img src={"/assets/svg/error500.svg"} alt={"Error 500"} className={"m-5"}/>
            <h1 className="max-w-xl bold text-2xl font-medium mb-5 text-center">
                Ooops! <br/>Etwas ist beim Buchungsprozess schiefgelaufen :(
            </h1>
            <h2 className="max-w-2xl font-normal text-xl text-center">
                Bitte melde dich bei uns, wenn das Problem weiterhin besteht.
            </h2>
            <Link
                href={"/support"}
                className={"whitespace-nowrap m-2 text-white bg-office-gray-800 hover:bg-office-green-800 font-medium rounded-lg text-sm px-4 py-1.5 md:px-5 md:py-2"}>Weitere Informationen</Link>
        </div>
    )
}