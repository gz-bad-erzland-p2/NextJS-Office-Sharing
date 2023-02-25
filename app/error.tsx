"use client";
export default function ErrorComponent() {
    return (
        <div className={"h-full w-full flex flex-col items-center justify-center"}>
            <img src={"/assets/svg/error500.svg"} alt={"Error 500"} className={"m-5"}/>
            <h1 className="max-w-xl bold text-2xl font-medium mb-5 text-center">
                Ooops! <br/>Etwas ist an unserem Ende schief gelaufen :(
            </h1>
            <h2 className="max-w-2xl font-normal text-xl text-center">
                Hast du schon versucht, die Seite neu zu laden?
            </h2>
        </div>
    )
}