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


export function calculateTime(wizardStateContext: any){

    const openingTime = 7;
    const closingTime = 20;

    let hoursFinal = 0; //final time

    const start = wizardStateContext.startDate;
    const end = wizardStateContext.endDate;

    const hoursTemp = Math.abs(start.getTime() - end.getTime()) / 36e5;

    if(hoursTemp <= closingTime -openingTime){
        hoursFinal = hoursTemp;
    }else{
        const startTime = (start.getTime()-start.getDate()) / 36e5;
        const endTime = (end.getTime()-end.getDate()) / 36e5;
        const daysBetween = Math.ceil((start.getTime() - end.getTime())  / (1000 * 3600 * 24)) -1;//TODO anzahl tage dazwischen richtig berechnen
        hoursFinal +=  (closingTime -openingTime)* daysBetween;
        hoursFinal += startTime - openingTime;
        hoursFinal += endTime - openingTime;

        //TODO subtract weekends
        
    }

    

    return(hoursFinal);

}