import Image from "next/image";
import windows_Image from "../../../public/assets/img/windows-gray.png";
import linux_Image from "../../../public/assets/img/linux-gray.png";
import {useWizardStateContext} from "../../../core/context/WizardStateContext";



export const SystemSelectionComponent = () => {

    const {operatingSystem, setOperatingSystem} = useWizardStateContext();

    return (
        <div>
            <p>Beschreibung</p>
            <div className="flex">
                <input type={"radio"} name={"system"} id="r-linux" /> 
                <label className="label-radio" htmlFor="r-linux"> 
                <Image src={linux_Image} alt={"Workspaces"} className="w-[150px]" />
                Linux </label>

                <input type={"radio"} name={"system"} id="r-windows" />
                <label className="label-radio" htmlFor="r-windows"> 
                <Image src={windows_Image} alt={"Workspaces"} className="w-[150px]" />
                Windows </label>
            </div>
        </div>
    );
}