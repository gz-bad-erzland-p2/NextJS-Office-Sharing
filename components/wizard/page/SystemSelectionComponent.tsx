import Image from "next/image";
import windows_Image from "../../../public/assets/img/windows-gray.png";
import linux_Image from "../../../public/assets/img/linux-gray.png";
import {useWizardStateContext} from "../../../core/context/WizardStateContext";



export const SystemSelectionComponent = () => {

    const {operatingSystem, setOperatingSystem} = useWizardStateContext();

    return (
        <div>
            <p>Wähle Sie zwischen folgenden Arbeitsplatstypen aus</p>
            <div className="flex left-right">
                <input className="hidden"  type={"radio"} name={"system"} id="r-single" /> 
                <label className="label-radio" htmlFor="r-single"> 
                
                Einzelarbeitsplatz </label>

                <input className="hidden" type={"radio"} name={"system"} id="r-duo" />
                <label className="label-radio" htmlFor="r-duo"> 
                
                Doppelarbeitsplatz </label>
            </div>
        </div>
    );
}