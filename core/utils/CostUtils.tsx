"use client";

import {DefaultWizardStateProps} from "../context/WizardStateContext";
import { Price } from "../mocks/HardwareMocks";
import {HardwareEnum} from "./enums/HardwareEnum";
import {WorkspaceTypeEnum} from "./enums/WorkspaceTypeEnum";

export function calculateCost(wizardStateContext: DefaultWizardStateProps): number {
    let cost = 0;
    //TODO: Add time calculation
    const hours = 0;

    switch (wizardStateContext.hardware) {
        case HardwareEnum.BYOD:
            cost += Price.byod;
            break;
        case HardwareEnum.Laptop:
            cost += Price.laptop;
            break;
        case HardwareEnum.PC:
            cost += Price.pc;
            break;
        case HardwareEnum.BAREBONE:
            cost += Price.barebone;
            break;
    }
    cost = cost * hours;
    if(wizardStateContext.workspaceType == WorkspaceTypeEnum.DOUBLE_DESK){
        cost = cost * 2;
    }
    return cost;
}