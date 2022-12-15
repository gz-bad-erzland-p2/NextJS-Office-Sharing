import Link from "next/link";
import supportStyles from "./support.module.css";
import workspace_Image from "../../public/assets/img/workspaces.png";
import Image from "next/image";

export default function SupportMainPage() {
    return (
        <div className="padding-above">
            
            <div className="text-center m-10">
                <div>
                    <h1 className="text-2xl">Kontaktdaten Technischer Support</h1><br></br>
                    Tel-Nummer: 0351 1931728<br></br>
                    E-Mail-Adresse: <Link href="mailto:support@gz-bad-erzland-P2.de">support@gz-bad-erzland-P2.de</Link> <br></br>
                    <br></br>
                    Waldorfstraße 2<br></br>
                    01023 Dresden<br></br>
                    Germany<br></br>
                    <br></br>




                    <div /** Einleitungstext*/>
                        <h1 className="text-2xl">Online Hilfe</h1>
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
                    <Image src={workspace_Image} alt="Bild hier"></Image>
                
            </div>
            
            
            
            
            </div>

            
        </div>
    );
}