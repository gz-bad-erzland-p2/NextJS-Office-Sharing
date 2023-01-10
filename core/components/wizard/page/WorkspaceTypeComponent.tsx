"use client";
import {
    WorkspaceTypeEnum
} from "../../../utils/enums/WorkspaceTypeEnum";
import Image from "next/image";

import singleDesk from "../../../../public/assets/svg/Single_Desk_Single.svg";
import doubleDesk from "../../../../public/assets/svg/Double_Desk_Single.svg";
import {
    useWizardStateContext
} from "../../../context/WizardStateContext";

export const WorkspaceTypeComponent = () => {

    const {setWorkspaceType, workspaceType} = useWizardStateContext();

    return (
        <form id={"form"} className={"h-full w-full"}>
            <h3 className="mb-5 text-lg font-medium">Bitte wählen Sie ein
                Arbeitsplatztyp aus.</h3>
            <ul className="flex md:flex-row flex-col gap-2 h-full w-full items-center justify-center">
                <li className={"w-full h-40"} onClick={() => {
                    setWorkspaceType(WorkspaceTypeEnum.SINGLE_DESK);
                }}>
                    <input type="radio" id="single" name="deskType"
                           className="hidden peer" required
                           defaultChecked={workspaceType === WorkspaceTypeEnum.SINGLE_DESK}/>
                    <label htmlFor="single"
                           // bg-office-gray-300
                           className="flex flex-col justify-center items-center w-full h-full text-gray-500 rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-office-green-500 peer-checked:text-office-green-500 hover:text-gray-600 hover:bg-gray-100">
                        <div
                            className={"flex flex-col w-full h-full items-center"}>
                            <Image src={singleDesk}
                                   alt={"Bild Einzelarbeitsplatz"}
                                   className={"flex-grow"}/>
                            <div className="text-lg font-semibold ">
                                Einzelarbeitsplatz
                            </div>
                        </div>
                    </label>
                </li>
                <li className={"w-full h-40"} onClick={() => {
                    setWorkspaceType(WorkspaceTypeEnum.DOUBLE_DESK);
                }}>
                    <input type="radio" id="double" name="deskType"
                           className="hidden peer"
                           defaultChecked={workspaceType === WorkspaceTypeEnum.DOUBLE_DESK}/>
                    <label htmlFor="double"
                           // bg-office-gray-300
                           className="flex flex-col items-center justify-center w-full h-full max-h-40 text-gray-500 rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-office-green-500 peer-checked:text-office-green-500 hover:text-gray-600 hover:bg-gray-100">
                        <div className={"flex flex-col w-full h-full items-center"}>
                            <Image src={doubleDesk}
                                   alt={"Bild Doppelarbeitsplatz"}
                                   className={"flex-grow"}/>
                            <div className="text-lg font-semibold">
                                Doppelarbeitsplatz
                            </div>
                        </div>
                    </label>
                </li>
            </ul>
        </form>
        // <div className={"w-full h-full"}>
        //     <h2 className={"text-center"}>Bitte wählen Sie ein Arbeitsplatztyp aus.</h2>
        //     <div
        //         className={"flex flex-row gap-2 h-full w-full justify-center items-center"}>
        //         <div
        //             className={`border-4 ${workspaceType === WorkspaceTypeEnum.SINGLE_DESK ? "border-office-green-500 shadow-lg" : "border-black"} rounded-2xl w-full flex flex-col items-center justify-end cursor-pointer bg-office-gray-500`}
        //             onClick={() => {
        //                 setWorkspaceType(WorkspaceTypeEnum.SINGLE_DESK);
        //             }}>
        //             <Image src={singleDesk} alt={"Bild Einzelarbeitsplatz"}
        //                    className={"p-1"}/>
        //             <h3 className={`mb-2 font-bold text-xl ${workspaceType === WorkspaceTypeEnum.SINGLE_DESK ? "text-office-green-500" : ""}`}>Einzeltisch</h3>
        //         </div>
        //         <div
        //             className={`border-4 ${workspaceType === WorkspaceTypeEnum.DOUBLE_DESK ? "border-office-green-500 shadow-lg" : "border-black"} rounded-2xl w-full flex flex-col items-center justify-end cursor-pointer bg-office-gray-500`}
        //             onClick={() => {
        //                 setWorkspaceType(WorkspaceTypeEnum.DOUBLE_DESK);
        //             }
        //             }>
        //             <Image src={doubleDesk} alt={"Bild Doppelarbeitsplatz"}
        //                    className={"p-1"}/>
        //             <h3 className={`mb-2 font-bold text-xl ${workspaceType === WorkspaceTypeEnum.DOUBLE_DESK ? "text-office-green-500" : ""}`}>Doppeltisch</h3>
        //         </div>
        //     </div>
        // </div>
    );
}