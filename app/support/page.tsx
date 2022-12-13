import Link from "next/link";
import supportStyles from "./support.module.css";

export default function SupportMainPage() {
    return (
        <div className="padding-above">
            <div /** Einleitungstext*/>
                <h1>Online Hilfe</h1>
                <p>Hier finden sie Anleitungen und häufige Fragen rund um das Office Sharing.
                </p>
            </div>

            <div className="padding-above-below">
                <p>Anleitungen:</p>
                <div className={supportStyles.buttonContainer}>
                    <Link href="/support/questions/zeitauswahl"
                        className="text-white bg-office-green-500 hover:bg-office-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 focus:outline-none">
                        Zeitauswahl
                    </Link>
                    <Link href="/support/questions/arbeitsplatzkonfiguration"
                        className="text-white bg-office-green-500 hover:bg-office-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 focus:outline-none">
                        Konfiguration von Arbeitsplätzen
                    </Link>
                </div>
            </div>

            <div className="wizard-container">
                <h1>Direkter Support</h1>
                <div className="padding-above">
                    <h2>Kontakt:</h2>
                    <table>
                        <tr>
                            <td>Email:</td>
                            <td>support@bad-erzand.de</td>
                        </tr>
                        <tr>
                            <td>Telefon:</td>
                            <td>0176 37056268</td>
                        </tr>
                    </table>
                </div>
                <div className="padding-above">
                    <h2>Erreichbarkeit:</h2>
                    <p>Unsere Mitarbeiter helfen Ihnen, innerhalb der Öffnungszeiten des Gemeindezentrums Bad Erzland, von 7 bis 20 Uhr gerne weiter.</p>
                </div>
            </div>

        </div>
    );
}