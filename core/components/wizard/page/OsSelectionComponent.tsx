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

export const OsSelectionComponent = () => {
    const {operatingSystem, setOperatingSystem} = useWizardStateContext();

    return (
        <form id={"form"} className={"h-full w-full"}>
            <h3 className="mb-5 text-lg font-medium">Bitte wählen Sie ein
                Betriebssystem aus.</h3>
            <ul className="flex md:flex-row flex-col min-w-0 gap-2 h-full w-full items-center justify-center">
                <li className={"w-full h-40"} onClick={() => {
                    setOperatingSystem(OperatingSystemEnum.WINDOWS);
                }}>
                    <input type="radio" id="windows" name="operating-system"
                           className="hidden peer" required
                           defaultChecked={operatingSystem === OperatingSystemEnum.WINDOWS}/>
                    <label htmlFor="windows"
                           className="flex flex-col items-center w-full h-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-office-green-500 peer-checked:text-office-green-500 hover:text-gray-600 hover:bg-gray-100">
                        <div
                            className={"flex flex-col w-full h-full items-center"}>
                            <Image src={windows}
                                   alt={"Bild Doppelarbeitsplatz"}
                                   className={"flex-grow"}/>
                            <div className="text-lg font-semibold">
                                Windows 11 Home 2022
                            </div>
                        </div>
                    </label>
                </li>
                <li className={"w-full h-40"} onClick={() => {
                    setOperatingSystem(OperatingSystemEnum.LINUX);
                }}>
                    <input type="radio" id="linux" name="operating-system"
                           className="hidden peer"
                           defaultChecked={operatingSystem === OperatingSystemEnum.LINUX}/>
                    <label htmlFor="linux"
                           className="inline-flex justify-center items-center h-full w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-office-green-500 peer-checked:text-office-green-500 hover:text-gray-600 hover:bg-gray-100">
                        <div
                            className={"flex flex-col w-full h-full items-center justify-between"}>
                            <Image src={linux}
                                   alt={"Bild Doppelarbeitsplatz"}
                                   className={"flex-grow w-full h-full"}/>
                            <div className="text-lg font-semibold">
                                Linux
                            </div>
                        </div>
                    </label>
                </li>
            </ul>
        </form>
    );
}