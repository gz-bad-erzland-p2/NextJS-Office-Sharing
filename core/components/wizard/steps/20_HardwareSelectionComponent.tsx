import {useWizardStateContext} from "../../../context/WizardStateContext";

import {WorkspaceTypeEnum} from "../../../misc/enums/WorkspaceTypeEnum";
import SelectOption from "../SelectOption";
import {HardwareEnum} from "../../../misc/enums/HardwareEnum";
import {HARDWARE_LIST} from "../../../misc/Mocks";

export const HardwareSelectionComponent = () => {

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
                {HARDWARE_LIST.filter(item => item.id !== "keyboard" && item.id !== "mouse" && item.id !== "monitor").map((item, index) =>
                    <SelectOption key={index + item.name}
                                  setter={setHardware}
                                  getter={hardware}
                                  name={item.name}
                                  img={item.svg}
                                  value={item.enum}
                                  infoUrl={item.info}
                                  price={item.price}
                                    id={1}/>
                )}
            </ul>

            {workspaceType == WorkspaceTypeEnum.DOUBLE_DESK &&
                <>
                    <br/>
                    <h5>Arbeitsplatz 2</h5>
                    <ul className="grid md:grid-cols-4 min-w-0 gap-2 w-full sm:grid-cols-2 grid-cols-1">
                        {HARDWARE_LIST.filter(item => item.id !== "keyboard" && item.id !== "mouse" && item.id !== "monitor").map((item, index) =>
                            <SelectOption key={index + item.name}
                                          setter={setHardware2}
                                          getter={hardware2}
                                          name={item.name}
                                          img={item.svg}
                                          value={item.enum}
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