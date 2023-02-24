"use client";
import {useWizardStateContext} from "../../../context/WizardStateContext";
import {WorkspaceTypeEnum} from "../../../utils/enums/WorkspaceTypeEnum";
import {HardwareEnum} from "../../../utils/enums/HardwareEnum";
import SelectOption from "../SelectOption";
import {OperatingSystemList} from "../../../misc/OsMock";

export const OsSelectionComponent = () => {
    const {
        operatingSystem,
        operatingSystem2,
        setOperatingSystem,
        setOperatingSystem2,
        hardware,
        hardware2,
        workspaceType
    } = useWizardStateContext();

    return (
        <form id={"form"} className={"h-full w-full"}>
            {hardware == HardwareEnum.BYOD && hardware2 == HardwareEnum.BYOD ? (
                <h3 className="mb-5 font-medium h-max">Sie haben kein Gerät
                    gebucht das konfiguriert werden kann!</h3>
            ) : (
                <div>
                    <h4 className={"font-medium"}>Bitte wählen Sie die
                        benötigten
                        Betriebssysteme aus. </h4>
                    <p>(falls es ihr gewünschtes
                        Betriebssystem nicht auftaucht spezifizieren sie es
                        bitte in der
                        folgenden Seite)</p>
                </div>
            )
            }

            {hardware != HardwareEnum.BYOD &&
                <div>
                    <h4>Arbeitsplatz 1</h4>
                    <ul className="grid md:grid-cols-4 min-w-0 gap-2 w-full sm:grid-cols-2 grid-cols-1">
                        {OperatingSystemList.map((item, index) =>
                            <SelectOption key={item.name + "-" + index}
                                          setter={setOperatingSystem}
                                          getter={operatingSystem}
                                          name={item.name} img={item.img}
                                          value={item.value}
                                          category={item.category}/>
                        )}
                    </ul>
                </div>
            }
            {workspaceType == WorkspaceTypeEnum.DOUBLE_DESK && hardware2 != HardwareEnum.BYOD &&
                <div>
                    <br/>
                    <h4>Arbeitsplatz 2</h4>
                    <ul className="grid md:grid-cols-4 min-w-0 gap-2 w-full sm:grid-cols-2 grid-cols-1">
                        {OperatingSystemList.map((item, index) =>
                            <SelectOption key={item.name + "-" + index}
                                          setter={setOperatingSystem2}
                                          getter={operatingSystem2}
                                          name={item.name}
                                          img={item.img}
                                          value={item.value}
                                          category={item.category + "2"}
                                          id={2}/>
                        )}
                    </ul>
                </div>
            }
        </form>
    );
}