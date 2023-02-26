"use client";

import {DefaultWizardStateProps} from "../context/WizardStateContext";
import {HardwareEnum} from "./enums/HardwareEnum";
import {
    BUSINESS_HOURS_END,
    BUSINESS_HOURS_START,
    PRICE_PER_HOUR
} from "./Constatns";
import {HARDWARE_LIST} from "./HardwareMocks";

export function calculateCost(startDate: Date, endDate: Date, hardware: HardwareEnum, hardware2: HardwareEnum): number {
    const totalHours = calculateTotalHours(startDate, endDate);
    return totalHours * (PRICE_PER_HOUR + getHardwarePrice(hardware) + getHardwarePrice(hardware2));
}

export const getHardwarePrice = (hardware: HardwareEnum) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return HARDWARE_LIST.filter(item => item.enum === hardware)[0]?.price || 0;
}


export function calculateTotalHours(startDate: Date, endDate: Date): number {
    let hours = 0;

    for (let current = new Date(startDate); current <= endDate; current.setHours(current.getHours() + 1)) {
        const dayOfWeek = current.getDay(); // 0 (Sonntag) bis 6 (Samstag)
        const currentHour = current.getHours();

        if (dayOfWeek !== 0 && dayOfWeek !== 6 && currentHour >= BUSINESS_HOURS_START && currentHour < BUSINESS_HOURS_END) {
            hours++;
        }
    }
    return hours;
}
