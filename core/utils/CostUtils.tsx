"use client";

import {DefaultWizardStateProps} from "../context/WizardStateContext";
import {HardwareEnum} from "./enums/HardwareEnum";

export function calculateCost(wizardStateContext: DefaultWizardStateProps): number {
    let cost = 0;
    switch (wizardStateContext.HardWare) {
        case HardwareEnum.BYOD:
            cost += 0;
            break;
        case HardwareEnum.Laptop:
            cost += 1000;
            break;
        case HardwareEnum.PC:
            cost += 2000;
            break;
        case HardwareEnum.BAREBONE:
            cost += 3000;
            break;
    }
    return cost;
}