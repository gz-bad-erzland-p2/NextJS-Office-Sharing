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

export const OsSelectionComponent = () => {
    const {operatingSystem,operatingSystem2, setOperatingSystem, setOperatingSystem2, Hardware, Hardware2, setHardware, setHardware2} = useWizardStateContext();
    const {workspaceType} = useWizardStateContext();

    return (
        <form id={"form"} className={"h-full w-full"}>
            
                <h3 className=" text-lg font-medium">Bitte wählen Sie ein
                Betriebssystem aus. </h3>
                <h4 className="font-slim mb-5" >(falls es ihr gewünschtes Betriebssystem nicht auftaucht spezifizieren sie es bitte in der folgenden Seite)</h4>
            
            {Hardware != HardwareEnum.BYOD &&
            <ul className="flex md:flex-row flex-col min-w-0 gap-2 h-max w-full items-center justify-center">
                <li className={"w-full h-10 md:h-40"} onClick={() => {
                    setOperatingSystem(OperatingSystemEnum.WINDOWS);
                }}>
                    <input type="radio" id="windows" name="operating-system"
                           className="hidden peer" required
                           defaultChecked={operatingSystem === OperatingSystemEnum.WINDOWS}/>
                    <label htmlFor="windows"
                           className="flex flex-col items-center w-full h-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-office-green-500 peer-checked:text-office-green-500 hover:text-gray-600 hover:bg-gray-100">
                        <div
                            className={"flex flex-row md:flex-col w-full h-full items-center"}>
                            <Image src={windows}
                                   alt={"Bild Doppelarbeitsplatz"}
                                   className={"flex-grow md:w-full h-full !max-w-[90px] md:max-w-none p-2"}/>
                            <div className="text-lg font-semibold">
                                Windows 10 Pro
                            </div>
                        </div>
                    </label>
                </li>
                <li className={"w-full h-10 md:h-40"} onClick={() => {
                    setOperatingSystem(OperatingSystemEnum.LINUX);
                }}>
                    <input type="radio" id="linux" name="operating-system"
                           className="hidden peer"
                           defaultChecked={operatingSystem === OperatingSystemEnum.LINUX}/>
                    <label htmlFor="linux"
                           className="inline-flex justify-center items-center h-full w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-office-green-500 peer-checked:text-office-green-500 hover:text-gray-600 hover:bg-gray-100">
                        <div
                            className={"flex flex-row md:flex-col w-full h-full items-center justify-left md:justify-between"}>
                            <Image src={linux}
                                   alt={"Bild Doppelarbeitsplatz"}
                                   className={"flex-grow md:w-full h-full !max-w-[90px] md:max-w-none"}/>
                            <div className="text-lg font-semibold">
                                Linux Ubuntu
                            </div>
                        </div>
                    </label>
                </li>
                <li className={"w-full h-10 md:h-40"} onClick={() => {
                    setOperatingSystem(OperatingSystemEnum.LINUXMINT);
                }}>
                    <input type="radio" id="linuxmint" name="operating-system"
                           className="hidden peer"
                           defaultChecked={operatingSystem === OperatingSystemEnum.LINUXMINT}/>
                    <label htmlFor="linuxmint"
                           className="inline-flex justify-center items-center h-full w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-office-green-500 peer-checked:text-office-green-500 hover:text-gray-600 hover:bg-gray-100">
                        <div
                            className={"flex flex-row md:flex-col w-full h-full items-center justify-left md:justify-between"}>
                            <Image src={linux}
                                   alt={"Bild Doppelarbeitsplatz"}
                                   className={"flex-grow md:w-full h-full !max-w-[90px] md:max-w-none"}/>
                            <div className="text-lg font-semibold">
                                Linux Mint 21.3
                            </div>
                        </div>
                    </label>
                </li>
            </ul>
            }
            {workspaceType == WorkspaceTypeEnum.DOUBLE_DESK && Hardware2 != HardwareEnum.BYOD &&
            <div>
                <h3 className="mb-5 text-lg font-medium" >Arbeitsplatz 2</h3>
                <ul className="flex md:flex-row flex-col min-w-0 gap-2 h-full w-full items-center justify-center">
                <li className={"w-full h-10 md:h-40"} onClick={() => {
                    setOperatingSystem2(OperatingSystemEnum.WINDOWS);
                }}>
                    <input type="radio" id="windows2" name="operating-system2"
                           className="hidden peer" required
                           defaultChecked={operatingSystem2 === OperatingSystemEnum.WINDOWS}/>
                    <label htmlFor="windows2"
                           className="flex flex-col items-center w-full h-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-office-green-500 peer-checked:text-office-green-500 hover:text-gray-600 hover:bg-gray-100">
                        <div
                            className={"flex flex-row md:flex-col w-full h-full items-center"}>
                            <Image src={windows}
                                   alt={"Bild Doppelarbeitsplatz"}
                                   className={"flex-grow md:w-full h-full !max-w-[90px] md:max-w-none p-2"}/>
                            <div className="text-lg font-semibold">
                                Windows 10 Pro
                            </div>
                        </div>
                    </label>
                </li>
                <li className={"w-full h-10 md:h-40"} onClick={() => {
                    setOperatingSystem2(OperatingSystemEnum.LINUX);
                }}>
                    <input type="radio" id="linux2" name="operating-system2"
                           className="hidden peer"
                           defaultChecked={operatingSystem2 === OperatingSystemEnum.LINUX}/>
                    <label htmlFor="linux2"
                           className="inline-flex justify-center items-center h-full w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-office-green-500 peer-checked:text-office-green-500 hover:text-gray-600 hover:bg-gray-100">
                        <div
                            className={"flex flex-row md:flex-col w-full h-full items-center justify-left md:justify-between"}>
                            <Image src={linux}
                                   alt={"Bild Doppelarbeitsplatz"}
                                   className={"flex-grow md:w-full h-full !max-w-[90px] md:max-w-none "}/>
                            <div className="text-lg font-semibold">
                                Linux Ubuntu
                            </div>
                        </div>
                    </label>
                </li>
                <li className={"w-full h-10 md:h-40"} onClick={() => {
                    setOperatingSystem2(OperatingSystemEnum.LINUXMINT);
                }}>
                    <input type="radio" id="linuxmint2" name="operating-system2"
                           className="hidden peer"
                           defaultChecked={operatingSystem2 === OperatingSystemEnum.LINUXMINT}/>
                    <label htmlFor="linuxmint2"
                           className="inline-flex justify-center items-center h-full w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-office-green-500 peer-checked:text-office-green-500 hover:text-gray-600 hover:bg-gray-100">
                        <div
                            className={"flex flex-row md:flex-col w-full h-full items-center justify-left md:justify-between"}>
                            <Image src={linux}
                                   alt={"Bild Doppelarbeitsplatz"}
                                   className={"flex-grow md:w-full h-full !max-w-[90px] md:max-w-none"}/>
                            <div className="text-lg font-semibold">
                                Linux Mint 21.3
                            </div>
                        </div>
                    </label>
                </li>
            </ul>
            </div>

            }
            {Hardware == HardwareEnum.BYOD && Hardware2 == HardwareEnum.BYOD &&
                <h3 className="mb-5  font-medium h-max" >Sie haben kein Gerät gebucht das konfiguriert werden kann!</h3>
            }

        </form>
    );
}