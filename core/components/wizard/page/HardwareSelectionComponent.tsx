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
            name: "Notebook",
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
            info: "hardware",
            price: Price.pc
    },
        {
            name: "Barebone",
            img:"../../../assets/svg/barebone.svg",
            category:"hardware",
            value:HardwareEnum.BAREBONE,
            info: "hardware",
            price: Price.barebone
    },
        {
            name: "eigenes Gerät",
            img:"../../../assets/svg/devices.svg",
            category:"hardware",
            value:HardwareEnum.BYOD,
            price: Price.byod
    },

]



    return (
        <form id={"form"} className={"h-full w-full"}>
            <h3 className="mb-5 text-lg font-medium  ">Benötigen sie einen Rechner?</h3>
            <ul className="flex md:flex-row flex-col min-w-0 gap-2  w-full items-center justify-center">
                

                {
                    hardwareList.map((item, index) => {
                        return (
                            //<div>{item.name}</div>
                            <SelectOption key={item.name + "-" + index} setter={setHardware} getter={hardware} name ={item.name} img={item.img} value={item.value} category={item.category} infoUrl={item.info} price={item.price}/>
                        );
                    })
                }
                

                
                

            </ul>
            {workspaceType == WorkspaceTypeEnum.DOUBLE_DESK &&
                <div>
                    <br></br>
                    <h3 className="mb-5 text-lg font-medium">Arbeitsplatz 2</h3>
                    <ul className="flex md:flex-row flex-col min-w-0 gap-2 w-full items-center justify-center">
                        {
                        hardwareList.map((item, index) => {
                            return (
                                //<div>{item.name}</div>
                                <SelectOption key={item.name + "-" + index} setter={setHardware2} getter={hardware2} name ={item.name} img={item.img} value={item.value} category={item.category+"2"} infoUrl={item.info} price={item.price} id={2} />
                            );
                        })
                    }

                    </ul>
                </div>
}
            </form>
    );
}