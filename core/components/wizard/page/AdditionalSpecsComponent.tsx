import {useWizardStateContext} from "../../../context/WizardStateContext";

export const AdditionalSpecsComponent = () => {
    const {
        briefing,
        specification,
        setBriefing,
        setSpecification
    } = useWizardStateContext();


    return (
        <form id={"form"}
              className={"w-full h-full flex flex-col justify-center"}>
            <label htmlFor="message"
                   className="block mb-2 text-lg font-medium text-gray-900">Bitte
                nennen Sie weitere benötigte Anforderungen.</label>
            <br/>
            <span className="text-sm mb-2">(Bereits vorinstallierte Software: Firefox, Chrome,
                LibreOffice, Gimp2, Discord, AdobeAcrobatReader, VLC
                Mediaplayer)
            </span>
            <textarea id="message" rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                      placeholder="Weitere Spezifikationen, Betriebssystem,..."
                      value={specification} onChange={() => {
                setSpecification((document.getElementById("message") as HTMLInputElement).value);
            }}
            />
            <br/>
            <div className="pt-2 text-left">
                <li className={"w-full list-none"} onClick={() => {
                    setBriefing(!briefing);
                }}> <label htmlFor= "ew"> <input type= "checkbox" name= "einweisung" value= "einweisung" id="ew" checked={briefing}></input>Einweisung durch einen Mitarbeiter</label>
                    

                </li>
            </div>
        </form>
    );
}