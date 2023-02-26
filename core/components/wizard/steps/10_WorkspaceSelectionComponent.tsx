"use client";
import {WorkspaceTypeEnum} from "../../../misc/enums/WorkspaceTypeEnum";
import Image from "next/image";

import singleDesk from "../../../../public/assets/svg/Single_Desk_Single.svg";
import doubleDesk from "../../../../public/assets/svg/Double_Desk_Single.svg";
import {useWizardStateContext} from "../../../context/WizardStateContext";

export const WorkspaceSelectionComponent = () => {

    const workspaces = [
        {
            "id": "single",
            "name": "Einzelarbeitsplatz",
            "image": singleDesk,
            "type": WorkspaceTypeEnum.SINGLE_DESK
        },
        {
            "id": "double",
            "name": "Doppelarbeitsplatz",
            "image": doubleDesk,
            "type": WorkspaceTypeEnum.DOUBLE_DESK
        }
    ]

    const {setWorkspaceType, workspaceType} = useWizardStateContext();

    return (
        <form id={"form"} className={"h-full w-full"}>
            <h4 className={"font-medium"}>
                Bitte wählen Sie einen Arbeitsplatztyp aus.
            </h4>
            <ul className="flex md:flex-row flex-col gap-2 h-full w-full items-center justify-center">
                {
                    workspaces.map((item, index) => {
                        return (
                            <li key={index} className={"w-full h-40 md:h-60"}
                                onClick={() => {
                                    setWorkspaceType(item.type);
                                }}>
                                <input type="radio" id={item.id}
                                       name="deskType"
                                       className="hidden peer" required
                                       defaultChecked={workspaceType === item.type}/>
                                <label htmlFor={item.id}
                                       className="flex flex-col justify-center items-center w-full h-full text-gray-500 rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-office-green-500 peer-checked:text-office-green-500 hover:text-gray-600 hover:bg-gray-100">
                                    <div
                                        className={"flex flex-col w-full h-full items-center"}>
                                        <Image src={item.image}
                                               alt={"Bild " + item.name}
                                               className={"flex-grow h-full w-auto"}/>
                                        <div
                                            className="text-lg font-semibold ">
                                            {item.name}
                                        </div>
                                    </div>
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
        </form>
    );
}