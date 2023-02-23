import Link from "next/link";
import Image from "next/image";

export default function SupportMainPage() {
    return (
        <div className="w-full h-full">
            <div
                className="">
                <div
                    className={"bg-white p-5 w-full md:w-auto h-full md:h-auto md:rounded-2xl grid md:grid-cols-2 sm:grid-cols-1"}>
                    <div
                        className={"grid md:grid-cols-2 smd:grid-cols-1 md:col-span-2"}>
                        <div>
                            <h1>Sie haben Fragen?
                                <br/>
                                Senden Sie uns eine <Link
                                    className={"text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"}
                                    href="mailto:support@gz-bad-erzland-P2.de">Email.</Link>
                            </h1>
                            <p>
                                Wir bieten Ihnen eine Vielzahl an Möglichkeiten,
                                um mit
                                uns in Kontakt zu treten.
                                <br/>
                                <br/>
                                Haben Sie eine Frage zu einem unseren Produkten?
                                <br/>
                                Bitte schreiben Sie uns eine E-Mail an diese
                                Adresse:
                                <br/>
                                <Link
                                    className={"underline text-office-green-500 hover:text-office-green-800"}
                                    href="mailto:support@gz-bad-erzland-P2.de">support@gz-bad-erzland-P2.de</Link>
                                <br/>
                                <br/>
                                Sie erreichen uns auch telefonisch unter <Link
                                className={"underline text-office-green-500 hover:text-office-green-800"}
                                href="tel:0351 1931728">+49 351
                                1931728.</Link>
                                <br/>
                                <br/>
                            </p>
                        </div>

                        <Image src={"/assets/img/Contact-1x.webp"}
                               alt={"contact"}
                               width={690} height={460} className={"mb-10"}/>
                    </div>

                    <div className={"col-span-2"}>
                        <h2>Keine Lust zu warten?</h2>
                        In unserer Online-Hilfe finden sie Anleitungen und
                        häufig gestellte
                        Fragen rund um das Office Sharing.
                        <div className={"my-2"}>
                            Informieren Sie sich selber, mit der
                            <Link
                                href={"https://gz-bad-erzland-p2.github.io/Dokumentation/"}
                                target={"_blank"}
                                className={"whitespace-nowrap m-2 text-white bg-office-green-500 hover:bg-office-green-800 font-medium rounded-lg text-sm px-4 py-1.5 md:px-5 md:py-2"}>Online
                                Hilfe</Link>
                        </div>
                        Für weitere Informationen zu unserer Hardware,
                        nutzen
                        Sie bitte die<Link
                        href={"/hardware"}
                        className={"whitespace-nowrap m-2 text-white bg-office-green-500 hover:bg-office-green-800 font-medium rounded-lg text-sm px-4 py-1.5 md:px-5 md:py-2"}>Hardware
                        Informationsseite</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}