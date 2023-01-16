"use client";
import {
    useWizardStateContext
} from "../../../context/WizardStateContext";
import {
    ITEnum
} from "../../../utils/enums/ITEnum";
import Image from "next/image";

import desktop from "../../../../public/assets/svg/desktop.svg";
import laptop from "../../../../public/assets/svg/laptop.svg";

export const ITComponent = () => {
    const {ITSystem, setITSystem} = useWizardStateContext();
    const {ITSystem2, setITSystem2} = useWizardStateContext();

    return (
        <form id={"form"} className={"h-full w-full"}>
            <h3 className="mb-5 text-lg font-medium">Benötigen sie einen Rechner?</h3>
            <ul className="flex md:flex-row flex-col min-w-0 gap-2  w-full items-center justify-center">
                <li className={"w-full h-40"} onClick={() => {
                    setITSystem(ITEnum.PC);
                }}>
                    <input type="radio" id="PC" name="it-system"
                           className="hidden peer" required
                           defaultChecked={ITSystem === ITEnum.PC}/>
                    <label htmlFor="PC"
                           className="flex flex-col items-center w-full h-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-office-green-500 peer-checked:text-office-green-500 hover:text-gray-600 hover:bg-gray-100">
                        <div
                            className={"flex flex-col w-full h-full items-center"}>
                            <Image src={desktop}
                                   alt={"Bild Doppelarbeitsplatz"}
                                   className={"flex-grow w-full h-full"}/>
                            <div className="text-lg font-semibold">
                                PC 
                            </div>
                        </div>
                    </label>
                </li>
                <li className={"w-full h-40"} onClick={() => {
                    setITSystem(ITEnum.Laptop);
                }}>
                    <input type="radio" id="laptop" name="it-system"
                           className="hidden peer"
                           defaultChecked={ITSystem === ITEnum.Laptop}/>
                    <label htmlFor="laptop"
                           className="inline-flex justify-center items-center h-full w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-office-green-500 peer-checked:text-office-green-500 hover:text-gray-600 hover:bg-gray-100">
                        <div
                            className={"flex flex-col w-full h-full items-center justify-between"}>
                            <Image src={laptop}
                                   alt={"Bild Doppelarbeitsplatz"}
                                   className={"flex-grow w-full h-full"}/>
                            <div className="text-lg font-semibold">
                                Laptop
                            </div>
                        </div>
                    </label>
                </li>

                <li className={"w-full h-40"} onClick={() => {
                    setITSystem(ITEnum.BYOD);
                }}>
                    <input type="radio" id="byod" name="it-system"
                           className="hidden peer"
                           defaultChecked={ITSystem === ITEnum.BYOD}/>
                    <label htmlFor="byod"
                           className="inline-flex justify-center items-center h-full w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-office-green-500 peer-checked:text-office-green-500 hover:text-gray-600 hover:bg-gray-100">
                        <div
                            className={"flex flex-col w-full h-full items-center justify-between"}>
                            <Image src={laptop}
                                   alt={"Bild Doppelarbeitsplatz"}
                                   className={"flex-grow w-full h-full"}/>
                            <div className="text-lg font-semibold">
                                Bringe eigenes Gerät
                            </div>
                        </div>
                    </label>
                </li>

            </ul>

            <br></br>
            <h3 className="mb-5 text-lg font-medium">Arbeitsplatz 2</h3>
            <ul className="flex md:flex-row flex-col min-w-0 gap-2 w-full items-center justify-center">
            <li className={"w-full h-40"} onClick={() => {
                    setITSystem2(ITEnum.PC);
                }}>
                    <input type="radio" id="PC2" name="it-system2"
                           className="hidden peer" required
                           defaultChecked={ITSystem2 === ITEnum.PC}/>
                    <label htmlFor="PC2"
                           className="flex flex-col items-center w-full h-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-office-green-500 peer-checked:text-office-green-500 hover:text-gray-600 hover:bg-gray-100">
                        <div
                            className={"flex flex-col w-full h-full items-center"}>
                            <Image src={desktop}
                                   alt={"Bild Doppelarbeitsplatz"}
                                   className={"flex-grow w-full h-full"}/>
                            <div className="text-lg font-semibold">
                                PC 
                            </div>
                        </div>
                    </label>
                </li>
                <li className={"w-full h-40"} onClick={() => {
                    setITSystem2(ITEnum.Laptop);
                }}>
                    <input type="radio" id="laptop2" name="it-system2"
                           className="hidden peer"
                           defaultChecked={ITSystem2 === ITEnum.Laptop}/>
                    <label htmlFor="laptop2"
                           className="inline-flex justify-center items-center h-full w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-office-green-500 peer-checked:text-office-green-500 hover:text-gray-600 hover:bg-gray-100">
                        <div
                            className={"flex flex-col w-full h-full items-center justify-between"}>
                            <Image src={laptop}
                                   alt={"Bild Doppelarbeitsplatz"}
                                   className={"flex-grow w-full h-full"}/>
                            <div className="text-lg font-semibold">
                                Laptop
                            </div>
                        </div>
                    </label>
                </li>
            </ul>
        </form>
    );
}