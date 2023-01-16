import { useWizardContext } from "../../../context/WizardContext";
import { useWizardStateContext } from "../../../context/WizardStateContext";

export const SoftwareSpecsComponent = () => {
    const {briefing, setBriefing} = useWizardStateContext();

    return (
        <form id={"form"} className={"w-full h-full flex flex-col justify-center"}>
            <label htmlFor="message"
                   className="block mb-2 text-sm font-medium text-gray-900">Haben sie weitere Anforderungen?</label>
            <textarea id="message" rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                      placeholder="Weitere Spezifikationen, Betriebssystem,..."></textarea>
            <label className="pt-2" >
            
            <input type="radio" id="windows" name="operating-system"
                           className="align-left mr-2" required
                           defaultChecked={briefing === true}/>
                            Einweisung durch einen Mitarbeiter
            </label>
        </form>
    );
}