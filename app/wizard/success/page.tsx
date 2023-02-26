import Link from "next/link";

export default function BookingSuccessPage() {
    return (
        <div
            className={"h-full w-full flex flex-col items-center justify-center"}>
            <img src={"../assets/svg/success.svg"} alt={"Buchung erfolgreich"}
                 className={"m-2"}/>
            <h1 className="max-w-xl bold text-2xl font-medium mb-5 text-center">
                Ihre Buchung war Erfolgreich!
            </h1>
            <h2 className="max-w-2xl font-normal text-xl text-center">
                Sie erhalten in Kürze eine Bestätigungsmail an die angegebene
                E-Mail Adresse.
            </h2>
            <Link
                href={"/"}
                className={"whitespace-nowrap m-2 text-white bg-office-green-500 hover:bg-office-green-800 font-medium rounded-lg text-sm px-4 py-1.5 md:px-5 md:py-2"}>zurück
                zur Startseite</Link>
        </div>
    );
}