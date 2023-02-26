import {useWizardStateContext} from "../../../context/WizardStateContext";
import React from "react";
import {CheckboxComponent} from "../../CheckboxComponent";

export const AdditionalSpecsComponent = () => {
    const {
        briefing,
        specification,
        setBriefing,
        setSpecification
    } = useWizardStateContext();

    return (
        <form id={"form"}
              className={"w-full h-full"}>
            <h4 className={"font-medium"}>Bitte nennen Sie weitere benötigte
                Anforderungen.</h4>
            <p className={"mb-2"}>(Bereits vorinstallierte Software: Firefox,
                Chrome,
                LibreOffice, Gimp2, Discord, AdobeAcrobatReader, VLC
                Mediaplayer)
            </p>
            <textarea
                rows={8}
                className="mt-4 mb-2 p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                placeholder="Weitere Spezifikationen, Betriebssystem,..."
                defaultValue={specification}
                onChange={(event) => setSpecification(event.target.value)}
            />
            <br/>
            <CheckboxComponent id={"instruction"}
                               label={"Es wird eine Einweisung durch einen Mitarbeiter benötigt."}
                               checked={briefing}
                               onChange={() => setBriefing(!briefing)}
                               classNameLabel={"ml-2 font-medium text-gray-900"}/>
        </form>
    );
}