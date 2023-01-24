"use client";
import {
    useWizardStateContext
} from "../../../context/WizardStateContext";
import {
    OperatingSystemEnum
} from "../../../utils/enums/OperatingSystemEnum";
import Image from "next/image";

import windows from "../../../../public/assets/svg/windows.svg";
import linux from "../../../../public/assets/svg/linux.svg";
import { WorkspaceTypeEnum } from "../../../utils/enums/WorkspaceTypeEnum";
import { HardwareEnum } from "../../../utils/enums/HardwareEnum";
import SelectOption from "../SelectOption";

export const OsSelectionComponent = () => {
    const {operatingSystem,operatingSystem2, setOperatingSystem, setOperatingSystem2, hardware, hardware2} = useWizardStateContext();
    const {workspaceType} = useWizardStateContext();

    const softwareList = [
        {
            name: "Windows 10 Pro",
            img:"../../../assets/svg/windows.svg",
            category:"software",
            value:OperatingSystemEnum.WINDOWS,

    },
        {
            name: "Ubuntu 22.04.1 LTS",
            img:"../../../assets/svg/linux.svg",
            category:"software",
            value:OperatingSystemEnum.LINUX,
    },
        {
            name: "Linux Mint 21.3",
            img:"../../../assets/svg/linux.svg",
            category:"software",
            value:OperatingSystemEnum.LINUXMINT,
    },
        

]


    return (
        <form id={"form"} className={"h-full w-full"}>
            
                <h3 className=" text-lg font-medium">Bitte wählen Sie ein
                Betriebssystem aus. </h3>
                <h4 className="font-slim mb-5" >(falls es ihr gewünschtes Betriebssystem nicht auftaucht spezifizieren sie es bitte in der folgenden Seite)</h4>
            
            {hardware != HardwareEnum.BYOD &&
            <ul className="flex md:flex-row flex-col min-w-0 gap-2 h-max w-full items-center justify-center ">
                
                {
                    softwareList.map((item, index) => {
                        return (
                            <SelectOption key={item.name + "-" + index} setter={setOperatingSystem} getter={operatingSystem} name ={item.name} img={item.img} value={item.value} category={item.category} />
                        );
                    })
                }
                
                
                
                
            </ul>
            }
            {workspaceType == WorkspaceTypeEnum.DOUBLE_DESK && hardware2 != HardwareEnum.BYOD &&
            <div>
                <br></br>
                <h3 className="mb-5 text-lg font-medium">Arbeitsplatz 2</h3>
                <ul className="flex md:flex-row flex-col min-w-0 gap-2 h-full w-full items-center justify-center my-auto">
                {
                    softwareList.map((item, index) => {
                        return (
                            <SelectOption key={item.name + "-" + index} setter={setOperatingSystem2} getter={operatingSystem2} name ={item.name} img={item.img} value={item.value} category={item.category+"2"} id={2} />
                        );
                    })
                }

            </ul>
            </div>

            }
            {hardware == HardwareEnum.BYOD && hardware2 == HardwareEnum.BYOD &&
                <h3 className="mb-5  font-medium h-max" >Sie haben kein Gerät gebucht das konfiguriert werden kann!</h3>
            }

        </form>
    );
}