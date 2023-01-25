import {useWizardStateContext} from "../../../context/WizardStateContext";

import {WorkspaceTypeEnum} from "../../../utils/enums/WorkspaceTypeEnum";
import SelectOption from "../SelectOption";
import {HardwareList} from "../../../mocks/HardwareMocks";

export const HardwareSelectionComponent = () => {
    const {
        hardware,
        hardware2,
        setHardware,
        setHardware2,
        workspaceType
    } = useWizardStateContext();

    return (
        <form id={"form"} className={"h-full w-full z-0"}>
            <h3 className="mb-5 text-lg font-medium  ">Bitte wählen Sie die
                benötigte Hardware aus.</h3>
            <h3 className="mb-5 text-lg font-medium">Arbeitsplatz 1</h3>
            <ul className="flex md:flex-row flex-col min-w-0 gap-2  w-full items-center justify-center">
                {HardwareList.map((item, index) =>
                    <SelectOption key={index + item.name}
                                  setter={setHardware} getter={hardware}
                                  name={item.name} img={item.img}
                                  value={item.value}
                                  category={item.category}
                                  infoUrl={item.info}
                                  price={item.price}/>
                )}
            </ul>
            {workspaceType == WorkspaceTypeEnum.DOUBLE_DESK &&
                <div>
                    <br />
                    <h3 className="mb-5 text-lg font-medium">Arbeitsplatz 2</h3>
                    <ul className="flex md:flex-row flex-col min-w-0 gap-2 w-full items-center justify-center">
                        {HardwareList.map((item, index) =>
                            <SelectOption key={index + item.name}
                                          setter={setHardware2}
                                          getter={hardware2}
                                          name={item.name}
                                          img={item.img}
                                          value={item.value}
                                          category={item.category + "2"}
                                          infoUrl={item.info}
                                          price={item.price} id={2}/>
                        )}
                    </ul>
                </div>
            }
        </form>
    );
}