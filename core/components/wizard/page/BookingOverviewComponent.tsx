"use client";
import {useWizardStateContext} from "../../../context/WizardStateContext";
import {Hardware} from "../../../mocks/HardwareMocks";
import {WorkspaceTypeEnum} from "../../../utils/enums/WorkspaceTypeEnum";
import Image from "next/image";
import {HardwareEnum} from "../../../utils/enums/HardwareEnum";
import { calculateTime } from "../../../utils/CostUtils";

export const BookingOverviewComponent = () => {
    const {
        name,
        surname,
        street,
        streetNumber,
        city,
        hardware,
        briefing,
        specification,
        startDate,
        endDate,
        zipCode,
        workspaceType
    } = useWizardStateContext();

    return (
        <form id={"form"} className={"w-full relative"}>
            <div>
                Sehr geehrte Herr {surname},
                <br/>
                vielen Dank für Ihre Buchung. Wir haben sie soeben
                erhalten. <br/>
                <br/>< br/>
            </div>
            <div className={"mt-5"}>
                <table className={"w-full"}>
                    <tbody>
                    <tr className={"border-b-2 align-text-top"}>
                        <td height={40} className={"flex"}>
                            <div>
                                Best.-Nr.:&nbsp;
                            </div>
                            <div className={"text-office-gray-800"}>
                                {'OrderID'}
                            </div>
                        </td>
                        <td/>
                        <td className={"flex"}>
                            <div>Bestellt am&nbsp;</div>
                            <div
                                className={"text-office-gray-900"}>{new Date().toLocaleDateString("de-DE")}</div>
                        </td>
                    </tr>
                    <tr>
                        <td height={60} colSpan={2}>*Vorort bezahlen</td>
                        <td>Adressinformationen</td>
                    </tr>
                    <tr className={"border-b-2 align-text-bottom"}>
                        <td colSpan={2}/>
                        <td className={"pb-5 text-office-gray-900"}>
                            {name} {surname} <br/>
                            {street} {streetNumber} <br/>
                            {zipCode} {city} <br/>
                            DEU <br/>
                            +49 012 345 6789
                        </td>
                    </tr>
                    <tr className={"border-b-2"}>
                        <td className={"py-2.5"}>Bestellübersicht</td>
                    </tr>

                    <tr>
                        <td height={50} colSpan={2}>Arbeitsplatztyp</td>
                        <td>{workspaceType == WorkspaceTypeEnum.DOUBLE_DESK ? "Doppelarbeitsplatz" : "Einzelarbeitsplatz"}</td>
                    </tr>
                    <tr className={"border-b-2"}>
                        <td colSpan={2}>Einweisung</td>
                        <td>{briefing ? "Ja" : 'Nein'}</td>
                    </tr>
                    <tr>
                        <td>Mietzeitraum</td>
                        <td>Von</td>
                        <td>Bis</td>
                        <td>Mietdauer (Stunden)</td>
                    </tr>
                    <tr className={"border-b-2"}>
                        <td></td>
                        <td className={"text-office-gray-900"}>{startDate.toLocaleString("de-DE")}</td>
                        <td className={"text-office-gray-900"}>{endDate.toLocaleString("de-DE")}</td>
                        <td className={"text-office-gray-900"}>{calculateTime({startDate: startDate, endDate: endDate}) }</td>
                    </tr>
                    {Hardware.map((item, index) => (
                        <tr key={index}
                            className={specification || "border-b-2"}>
                            <td><Image
                                src={hardware == HardwareEnum.BAREBONE ? "assets/svg/barebone.svg" : hardware == HardwareEnum.PC ? "assets/svg/desktop.svg" : "assets/svg/laptop.svg"}
                                alt={"Bild"} width={96} height={96}/></td>
                            <td height={120}>
                                {item.processor} <br/>
                                {item.memory} <br/>
                                {item.graphics} <br/>
                                {item.storage}
                            </td>
                            <td className={"text-right"}>
                                6.75€ <br/>
                            </td>
                        </tr>
                    ))}
                    {specification &&
                        <tr className={"border-b-2"}>
                            <td className={"py-2.5"}>Spezifikationen</td>
                            <td colSpan={2}>{specification}</td>
                        </tr>
                    }
                    </tbody>
                </table>
            </div>

            <div className={"flex text-right justify-end mt-10"}>
                <div className={"text-left"}>
                    <div className={"pr-10"}>Zwischensumme</div>
                    <div className={"border-b-2 pr-10"}>MwSt.</div>
                    <div className={"pr-10"}>Gesamtsumme</div>
                </div>
                <div>
                    <div>5,67€</div>
                    <div className={"border-b-2"}>1,08€</div>
                    <div>12,35€</div>
                </div>
            </div>
        </form>
    );
}