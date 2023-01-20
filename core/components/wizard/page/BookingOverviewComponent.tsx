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
            <h2>Bestellbestätigung</h2>
            <p>Sehr geehrte Herr {surname},
                <br />
                vielen Dank für Ihre Buchung.
                <br/>< br/>
                Ihre Bestellnummer lautet: {OrderID}

                Bitte überweisen Sie den Betrag von {Endpreis}€ auf das Konto:

                Ihre Buchung ist
                bei uns eingegangen und Ihr Arbeitsplatz wird für Sie
                vorbereitet sein. Dies ist Ihre Bestellnummer: {OrderID} </p>
            <h2>Die Buchung im Überblick:</h2>
            <p>Buchungsdauer: 01.01.2021</p>
            <p>Arbeitsplatztyp: </p>
            <p>Arbeitsplatznummer: </p>
            <p>Arbeitsplatzpreis: {Endpreis}€</p>


            <p>Bestellnummer: {OrderID}</p>
            <p>##Bestelldatum</p>
        </div>
    );
}