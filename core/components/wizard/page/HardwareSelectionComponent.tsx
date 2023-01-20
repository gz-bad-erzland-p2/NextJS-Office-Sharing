"use client";
import {
    useWizardStateContext
} from "../../../context/WizardStateContext";
import {
    HardwareEnum
} from "../../../utils/enums/HardwareEnum";
import Image from "next/image";

import desktop from "../../../../public/assets/svg/desktop.svg";
import laptop from "../../../../public/assets/svg/laptop.svg";
import devices from "../../../../public/assets/svg/devices.svg";

import { WorkspaceTypeEnum } from "../../../utils/enums/WorkspaceTypeEnum";
import SelectOption from "../SelectOption";
import { Price } from "../../../mocks/HardwareMocks";

export const HardwareSelectionComponent = () => {
    const { hardware, hardware2, setHardware, setHardware2, workspaceType } = useWizardStateContext();

    const hardwareList = [
        {
            name: "Laptop",
            img:"../../../assets/svg/laptop.svg",
            category:"hardware",
            value:HardwareEnum.Laptop,
            info: "hardware",
            price: Price.laptop

    },
        {
            name: "PC",
            img:"../../../assets/svg/desktop.svg",
            category:"hardware",
            value:HardwareEnum.PC,
            price: Price.pc
    },
        {
            name: "Barebone",
            img:"../../../assets/svg/barebone.svg",
            category:"hardware",
            value:HardwareEnum.BAREBONE,
            price: Price.barebone
    },
        {
            name: "Bringe eigenes Gerät",
            img:"../../../assets/svg/devices.svg",
            category:"hardware",
            value:HardwareEnum.BYOD,
            price: Price.byod
    },

]

    return (
        <form id={"form"} className={"h-full w-full"}>
            <h3 className="mb-5 text-lg font-medium text-red ">Benötigen sie einen Rechner?</h3>
            <ul className="flex md:flex-row flex-col min-w-0 gap-2  w-full items-center justify-center">
                

                {
                    hardwareList.map((item, index) => {
                        return (
                            //<div>{item.name}</div>
                            <SelectOption key={item.name + "-" + index} setter={setHardware} getter={hardware} name ={item.name} img={item.img} value={item.img} category={item.category} infoUrl={item.info} price={item.price}/>
                        );
                    })
                }
                

                
                

            </ul>
            {workspaceType == WorkspaceTypeEnum.DOUBLE_DESK &&
                <div>
                    <br></br>
                    <h3 className="mb-5 text-lg font-medium">Arbeitsplatz 2</h3>
                    <ul className="flex md:flex-row flex-col min-w-0 gap-2 w-full items-center justify-center">
                        <li className={"w-full h-10 md:h-40"} onClick={() => {
                            setHardware2(HardwareEnum.PC);
                        }}>
                            <input type="radio" id="PC2" name="hardware2"
                                className="hidden peer" required

                                defaultChecked={hardware2 === HardwareEnum.PC} />

                            <label htmlFor="PC2"
                                className="flex flex-col items-center w-full h-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-office-green-500 peer-checked:text-office-green-500 hover:text-gray-600 hover:bg-gray-100">
                                <div
                                    className={"flex flex-row md:flex-row md:flex-col w-full h-full items-center"}>
                                    <Image src={desktop}
                                        alt={"Bild Doppelarbeitsplatz"}
                                        className={"flex-grow md:w-full h-full !max-w-[90px] md:max-w-none"} />
                                    <div className="text-lg font-semibold">
                                        PC
                                    </div>
                                </div>
                            </label>
                        </li>
                        <li className={"w-full h-10 md:h-40"} onClick={() => {
                            setHardware2(HardwareEnum.Laptop);
                        }}>
                            <input type="radio" id="laptop2" name="hardware2"
                                className="hidden peer"

                                defaultChecked={hardware2 === HardwareEnum.Laptop} />

                            <label htmlFor="laptop2"
                                className="inline-flex justify-center items-center h-full w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-office-green-500 peer-checked:text-office-green-500 hover:text-gray-600 hover:bg-gray-100">
                                <div
                                    className={"flex flex-row md:flex-col w-full h-full items-center justify-left md:justify-between"}>
                                    <Image src={laptop}
                                        alt={"Bild Doppelarbeitsplatz"}
                                        className={"flex-grow md:w-full h-full !max-w-[90px] md:max-w-none"} />
                                    <div className="text-lg font-semibold">
                                        Laptop
                                    </div>
                                </div>
                            </label>
                        </li>
                        <li className={"w-full h-10 md:h-40"} onClick={() => {
                            setHardware2(HardwareEnum.BYOD);
                        }}>
                            <input type="radio" id="byod2" name="hardware2"
                                className="hidden peer"
                                defaultChecked={hardware2 === HardwareEnum.BYOD} />

                            <label htmlFor="byod2"
                                className="inline-flex justify-center items-center h-full w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-office-green-500 peer-checked:text-office-green-500 hover:text-gray-600 hover:bg-gray-100">
                                <div
                                    className={"flex flex-row md:flex-col w-full h-full items-center justify-left md:justify-between"}>
                                    <Image src={devices}
                                        alt={"Bild Doppelarbeitsplatz"}
                                        className={"flex-grow md:w-full h-full !max-w-[90px] md:max-w-none"} />
                                    <div className="text-lg font-semibold">
                                        Bringe eigenes Gerät
                                    </div>
                                </div>
                            </label>
                        </li>

                    </ul>
                </div>
}
            </form>
    );
}