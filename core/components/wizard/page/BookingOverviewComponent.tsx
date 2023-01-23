"use client";
import {useWizardStateContext} from "../../../context/WizardStateContext";
import {Hardware} from "../../../mocks/HardwareMocks";

export const BookingOverviewComponent = () => {
    const {name, surname, street, streetNumber} = useWizardStateContext();

    const Vorname = "Jannik";
    const Nachname = "Heinrich";
    const Strasse = "Bahnhofstraße";
    const Hausnummer = 1;
    const Telefonnummer = "+49 162 7982939";
    const Postleitzahl = "01067";
    const Arbeitsplaetze = 1;
    const Endpreis = 36.50;
    const OrderID = "32912346123";

    return (
        <div className={"w-full"}>
            <div>
                <h2>Office Sharing in Bad Erzland</h2>
                Sehr geehrte Herr {surname},
                <br/>
                vielen Dank für Ihre Buchung.
                <br/>< br/>
            </div>
            <div className={"mt-5"}>
                <table className={"w-full"}>
                    <tr className={"border-b-2 pb-5"}>
                        <td colSpan={2}>Best.-Nr.: {OrderID}</td>
                        <td>Bestellt am {new Date().toDateString()}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>*Vorort bezahlen</td>
                        <td>Adressinformationen</td>
                    </tr>
                    <tr className={"border-b-2 mb-2 pb-2"}>
                        <td colSpan={2}/>
                        <td>
                            Testkunde <br/>
                            Max Musterstraße 2 <br/>
                            01067 Dresden <br/>
                            DEU <br/>
                            +49 162 7982939
                        </td>
                    </tr>
                    <tr className={"border-b-2 mb-2 pb-2"}>
                        <td>Bestellübersicht</td>
                    </tr>
                    {Hardware.map((hardware, index) => (
                        <tr key={index} className={"border-b-2 mb-2 pb-2"}>
                            <td/>
                            <td>
                                {hardware.processor} <br/>
                                {hardware.memory} <br/>
                                {hardware.graphics} <br/>
                                {hardware.storage}
                            </td>
                            <td>
                                6.75€ <br/>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>

            <div className={"flex flex-col items-end mt-5"}>
                <table>
                    <tr>
                        <td>Zwischensumme</td>
                        <td>5.67€</td>
                    </tr>
                    <tr className={"border-b-2 mb-2 pb-2"}>
                        <td>MwSt.</td>
                        <td>1.08€</td>
                    </tr>
                    <tr>
                        <td>Gesamtsumme</td>
                        <td>12,35€</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}