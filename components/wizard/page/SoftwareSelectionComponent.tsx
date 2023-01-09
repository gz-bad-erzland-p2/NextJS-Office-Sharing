import Image from "next/image";
import windows_Image from "../../../public/assets/img/windows-green.png";
import linux_Image from "../../../public/assets/img/linux-green.png";
import {useWizardStateContext} from "../../../core/context/WizardStateContext";
import { OperatingSystemEnum } from "../../../core/utils/enums/OperatingSystemEnum";


export const SoftwareSelectionComponent = () => {
    const {operatingSystem, setOperatingSystem} = useWizardStateContext();
    
    return (
        <div>
            <p>Wähle Sie ein Betriebssystem für ihren Arbeitsplatz aus</p>
            <div className="flex left-right">
                <input className="hidden"  type={"radio"} name={"system"} id="r-linux" checked={operatingSystem == OperatingSystemEnum.WINDOWS} onClick={() => setOperatingSystem(OperatingSystemEnum.WINDOWS)} /> 
                <label className="label-radio" htmlFor="r-linux"> 
                <Image src={linux_Image} alt={"Workspaces"} className="w-[150px]" />
                Linux Ubuntu</label>

                <input className="hidden" type={"radio"} name={"system"} id="r-windows" checked={operatingSystem == OperatingSystemEnum.LINUX} onClick={() => setOperatingSystem(OperatingSystemEnum.LINUX)} />
                <label className="label-radio" htmlFor="r-windows"> 
                <Image src={windows_Image} alt={"Workspaces"} className="w-[150px]" />
                Windows 11 Home</label>
            </div>
        </div>
    );
}