"use client";
import {useWizardStateContext} from "../../../context/WizardStateContext";

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
        <div className={"justify-center flex flex-col items-center"}>
            <h2>BestellInformationen</h2>
            <p>Hi {name}, vielen Dank für Ihre Buchung!<br/> Ihre Buchung ist
                bei uns eingegangen und Ihr Arbeitsplatz wird für Sie
                vorbereitet sein. Dies ist Ihre Bestellnummer: {OrderID} </p>
            <h2>Zusammenfassung</h2>
            <p></p>
        </div>
    );
}