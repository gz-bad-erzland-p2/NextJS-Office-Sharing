import Link from "next/link";

export default function SupportMainPage() {
    return (
        <div className="md:padding-above w-full h-full">
            <div className="text-center md:m-10 h-full md:h-auto flex justify-center">
                <div className={"bg-white p-5 w-full md:w-auto h-full md:h-auto md:rounded-2xl"}>
                    <h1 className="text-2xl">Kontaktdaten Technischer
                        Support</h1>
                    <br/>
                    Tel-Nummer: <a href="tel:0351 1931728">0351 1931728</a>
                    <br/>
                    E-Mail-Adresse: <Link
                    href="mailto:support@gz-bad-erzland-P2.de">support@gz-bad-erzland-P2.de</Link>
                    <br/>
                    <br/>
                    Waldorfstraße 2
                    <br/>
                    01023 Dresden
                    <br/>
                    Germany
                    <br/>
                    <br/>
                    {/*          <div>
                        <h1 className="text-2xl">Online Hilfe</h1>
                        <p>Hier finden sie Anleitungen und häufige Fragen rund um das Office Sharing.
                        </p>
                    </div>

                    <div className="padding-above-below">
                        <p>Anleitungen:</p>
                        <div className={supportStyles.buttonContainer}>
                            <Link href="/support/questions/zeitauswahl"
                                className="m-2 text-white bg-office-green-500 hover:bg-office-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 focus:outline-none">
                                Zeitauswahl
                            </Link>
                            <Link href="/support/questions/arbeitsplatzkonfiguration"
                                className="m-2 text-white bg-office-green-500 hover:bg-office-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 focus:outline-none">
                                Konfiguration von Arbeitsplätzen
                            </Link>
    </div>
                    
                </div>*/}
                </div>
            </div>
        </div>
    );
}