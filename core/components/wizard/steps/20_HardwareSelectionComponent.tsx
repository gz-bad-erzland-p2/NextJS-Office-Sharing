import {useWizardStateContext} from "../../../context/WizardStateContext";

import {WorkspaceTypeEnum} from "../../../utils/enums/WorkspaceTypeEnum";
import SelectOption from "../SelectOption";
import {Price} from "../../../misc/HardwareMocks";
import {HardwareEnum} from "../../../utils/enums/HardwareEnum";

export const HardwareSelectionComponent = () => {

    const HardwareList = [
        {
            name: "Laptop",
            img: "assets/svg/laptop.svg",
            category: "hardware",
            value: HardwareEnum.Laptop,
            info: "hardware#laptop",
            price: Price.laptop

        },
        {
            name: "Desktop PC",
            img: "assets/svg/desktop.svg",
            category: "hardware",
            value: HardwareEnum.PC,
            info: "hardware#pc",
            price: Price.pc
        },
        {
            name: "Barebone",
            img: "assets/svg/barebone.svg",
            category: "hardware",
            value: HardwareEnum.BAREBONE,
            info: "hardware#barebone",
            price: Price.barebone
        },
        {
            name: "Eigenes Gerät",
            img: "assets/svg/devices.svg",
            category: "hardware",
            value: HardwareEnum.BYOD,
            price: Price.byod,
        },
    ]

    const {
        hardware,
        hardware2,
        setHardware,
        setHardware2,
        workspaceType
    } = useWizardStateContext();

    return (
        <form id={"form"} className={"h-full w-full"}>
            <h4 className={"font-medium"}>
                Bitte wählen Sie die benötigte Hardware aus.</h4>
            <h5>Arbeitsplatz 1</h5>
            <ul className="grid md:grid-cols-4 min-w-0 gap-2 w-full sm:grid-cols-2 grid-cols-1">
                {HardwareList.map((item, index) =>
                    <SelectOption key={index + item.name}
                                  setter={setHardware}
                                  getter={hardware}
                                  name={item.name} img={item.img}
                                  value={item.value}
                                  category={item.category}
                                  infoUrl={item.info}
                                  price={item.price}/>
                )}
            </ul>

            {workspaceType == WorkspaceTypeEnum.DOUBLE_DESK &&
                <>
                    <br/>
                    <h5>Arbeitsplatz 2</h5>
                    <ul className="grid md:grid-cols-4 min-w-0 gap-2 w-full sm:grid-cols-2 grid-cols-1">
                        {HardwareList.map((item, index) =>
                            <SelectOption key={index + item.name}
                                          setter={setHardware2}
                                          getter={hardware2}
                                          name={item.name}
                                          img={item.img}
                                          value={item.value}
                                          category={item.category + "2"}
                                          infoUrl={item.info}
                                          price={item.price}
                                          id={2}/>
                        )}
                    </ul>
                </>
            }
        </form>
    );
}