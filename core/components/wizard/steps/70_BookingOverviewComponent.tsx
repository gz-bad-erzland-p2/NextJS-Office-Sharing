"use client";
import {useWizardStateContext} from "../../../context/WizardStateContext";
import {WorkspaceTypeEnum} from "../../../misc/enums/WorkspaceTypeEnum";
import {calculateCost, calculateTotalHours} from "../../../misc/CostUtils";
import {HARDWARE_LIST} from "../../../misc/HardwareMocks";
import {HardwareEnum} from "../../../misc/enums/HardwareEnum";
import Image from "next/image";
import {tr} from "date-fns/locale";
import {OperatingSystemList} from "../../../misc/OsMock";
import {PRICE_PER_HOUR} from "../../../misc/Constatns";

export const BookingOverviewComponent = () => {
    const {
        name,
        surname,
        street,
        streetNumber,
        city,
        hardware,
        hardware2,
        operatingSystem,
        operatingSystem2,
        briefing,
        specification,
        startDate,
        endDate,
        zipCode,
        workspaceType,
        gender,
        uuid,
    } = useWizardStateContext();

    const totalHours = calculateTotalHours(startDate, endDate);
    const totalCost = calculateCost(startDate, endDate, hardware, hardware2);
    const mwSt = totalCost * 0.19;

    const filterHardware = (hardwareEnum: HardwareEnum | undefined) => {
        if (hardwareEnum == undefined) return false;
        if (workspaceType === WorkspaceTypeEnum.SINGLE_DESK) {
            if (hardwareEnum === HardwareEnum.BYOD) return false;
            return hardwareEnum === hardware;
        }
        if (workspaceType === WorkspaceTypeEnum.DOUBLE_DESK) {
            if (hardwareEnum === HardwareEnum.BYOD) return false;
            return hardwareEnum === hardware || hardwareEnum === hardware2;

        }
        return false;
    }

    const getOperatingSystemForHardware = (hardwareEnum: HardwareEnum | undefined) => {
        if (workspaceType === WorkspaceTypeEnum.SINGLE_DESK && hardwareEnum !== HardwareEnum.BYOD)
            return operatingSystem;
        if (workspaceType === WorkspaceTypeEnum.DOUBLE_DESK) {
            if (hardwareEnum === HardwareEnum.BYOD)
                return undefined;
            if (hardwareEnum === hardware && hardwareEnum !== hardware2)
                return operatingSystem;

            if (hardwareEnum === hardware2 && hardwareEnum !== hardware)
                return operatingSystem2;
            return operatingSystem;
        }
        return undefined;
    }

    const COL_SPAN = 3;

    return (
        <form id={"form"} className={"w-full relative"}>
            <div>
                Sehr {gender === "Divers" ? "geehrt*" : gender === "Frau" ? "geehrte" : "geehrter"} {gender !== "Divers" ? gender : ""} {surname},
                <br/>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                bitte Bestätigen Sie Ihre Buchung mit "Jetzt buchen". <br/>
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
                                {uuid}
                            </div>
                        </td>
                        <td colSpan={COL_SPAN - 1}/>
                        <td className={"flex"}>
                            <div>Bestellt am&nbsp;</div>
                            <div
                                className={"text-office-gray-900"}>{new Date().toLocaleDateString("de-DE")}</div>
                        </td>
                    </tr>
                    <tr>
                        <td height={60} colSpan={COL_SPAN}>*Vorort bezahlen</td>
                        <td>Adressinformationen</td>
                    </tr>
                    <tr className={"border-b-4 align-text-bottom"}>
                        <td colSpan={COL_SPAN}/>
                        <td className={"pb-5 text-office-gray-900"}>
                            {name} {surname} <br/>
                            {street} {streetNumber} <br/>
                            {zipCode} {city} <br/>
                            DEU <br/>
                            +49 012 345 6789
                        </td>
                    </tr>
                    <tr>
                        <td className={"py-2"}/>
                    </tr>
                    <tr className={"border-b-2"}>
                        <td className={"py-2"}>Bestellübersicht</td>
                    </tr>
                    <tr>
                        <td className={"py-2"}
                            colSpan={COL_SPAN}>Arbeitsplatztyp
                        </td>
                        <td>{workspaceType == WorkspaceTypeEnum.DOUBLE_DESK ? "Doppelarbeitsplatz" : "Einzelarbeitsplatz"}</td>
                    </tr>
                    {/*<tr>*/}
                    {/*    <td className={"py-10"} />*/}
                    {/*</tr>*/}
                    <tr>
                        <td className={"py-2"} colSpan={COL_SPAN}>Weitere
                            Spezifikationen
                        </td>
                        {
                            specification ? (
                                <td className={"py-2"}>{specification}</td>) : (
                                <td className={"py-2"}>Keine</td>)
                        }

                    </tr>
                    <tr>
                        <td className={"py-2"} colSpan={COL_SPAN}>Einweisung
                            durch einen
                            Mitarbeiter
                        </td>
                        <td className={"py-2"}>{briefing ? "Ja" : 'Nein'}</td>
                    </tr>
                    <tr>
                        <td colSpan={COL_SPAN}
                            className={"align-text-top py-2"}>Mietzeitraum
                        </td>
                        <td className={"text-office-gray-900 py-2"}>
                            <table className={"text-left"}>
                                <tbody>
                                <tr className={"text-black"}>
                                    <td>Von</td>
                                    <td>Bis</td>
                                </tr>
                                <tr>
                                    <td className={"pr-10"}>
                                        {
                                            startDate.toLocaleString([], {
                                                dateStyle: 'short',
                                                timeStyle: 'short'
                                            })
                                        }</td>
                                    <td>
                                        {endDate.toLocaleString([], {
                                            dateStyle: 'short',
                                            timeStyle: 'short'
                                        })}</td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={COL_SPAN}
                            className={"align-text-top pt-5"}>Mietdauer
                        </td>
                        <td className={"pt-5 pb-2"}>
                            {totalHours} Stunden ({(PRICE_PER_HOUR).toLocaleString([], {style: 'currency', currency: 'EUR'})} /Stunde)
                        </td>
                    </tr>
                    <tr className={"border-b-2"}/>
                    <tr className={"border-b-2"}>
                        <td className={"py-2.5"}>Mietobjekte</td>
                    </tr>
                    {HARDWARE_LIST.filter(item => filterHardware(item.enum)).map((item, index) => (
                        <tr key={index}
                            className={specification || "border-b-2"}>
                            <td>{item.name}</td>
                            <td><Image
                                src={item.image}
                                alt={item.name} width={96} height={96}/>
                            </td>
                            <td height={120} className={"px-5 py-2"}>
                                {item.specs?.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            {item} <br/>
                                        </li>
                                    )
                                })}
                                <div
                                    className={"pt-2"}>Betriebssystem: {OperatingSystemList.filter(os => os.enum === getOperatingSystemForHardware(item.enum)).map(item => item.name)}</div>
                            </td>
                            <td className={"text-left"}>
                                + {item.price?.toLocaleString([], {
                                style: 'currency',
                                currency: 'EUR',
                            })}/Stunde<br/>
                            </td>
                        </tr>
                    ))}
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
                    <div>{totalCost.toLocaleString([], {
                        style: 'currency',
                        currency: 'EUR',
                    })}
                    </div>
                    <div className={"border-b-2"}>{mwSt.toLocaleString([], {
                        style: 'currency',
                        currency: 'EUR',
                    })}</div>
                    <div
                        className={"underline decoration-double"}>{(totalCost + mwSt).toLocaleString([], {
                        style: 'currency',
                        currency: 'EUR',
                    })}</div>
                </div>
            </div>
        </form>
    );
}