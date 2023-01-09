"use client";

import ProgressComponent from "../../components/wizard/ProgressComponent";
import NavigationComponent from "../../components/wizard/NavigationComponent";
import {Step, Steps, WizardStepProvider} from "../../context/WizardContext";
import BasePageComponent from "../../components/wizard/BasePageComponent";
import React from "react";
import {
    SystemSelectionComponent
} from "../../components/wizard/page/SystemSelectionComponent";
import {
    SoftwareSelectionComponent
} from "../../components/wizard/page/SoftwareSelectionComponent";
import {
    PlaceSelectionComponent
} from "../../components/wizard/page/PlaceSelectionComponent";
import {
    PersonalDataComponent
} from "../../components/wizard/page/PersonalDataComponent";
import {WizardStateProvider} from "../../core/context/WizardStateContext";

export default function WizardMainPage() {

    const WizardStepCustom = () => {
        // const {activeStepIndex} = useWizardContext<DefaultWizardStepProps>();

        return (
            <Steps>
                <Step key={`page/1`} id={'1'} className={"w-full h-full"}>
                    <BasePageComponent heading={"Arbeitsplatztyp"}>
                        <div className={"p-5 h-full flex justify-center"}>
                            <SoftwareSelectionComponent/>
                        </div>
                    </BasePageComponent>
                </Step>
                <Step key={`page/2`} id={'2'} className={"w-full h-full"}>
                    <BasePageComponent heading={"Betriebssystem"}>
                        <div className={"p-5 h-full flex justify-center"}>
                            <SystemSelectionComponent/>
                        </div>
                    </BasePageComponent>
                </Step>
                <Step key={`page/3`} id={'3'} className={"w-full h-full"}>
                    <BasePageComponent heading={"Platzwahl"}>
                        <div className={"p-5 h-full flex justify-center"}>
                            <PlaceSelectionComponent/>
                        </div>
                    </BasePageComponent>
                </Step>
                <Step key={`page/3`} id={'3'} className={"w-full h-full"}>
                    <BasePageComponent heading={"Persönliche Daten"}>
                        <div className={"p-5 h-full flex justify-center"}>
                            <PersonalDataComponent/>
                        </div>
                    </BasePageComponent>
                </Step>
            </Steps>
        );
    };
    return (
        <div
            className="relative m-auto border-2 bg-white p-2 w-1/2 drop-shadow-lg rounded-md h-full flex flex-col items-center">
            <WizardStepProvider>
                <WizardStateProvider>
                    <ProgressComponent/>
                    <div
                        className={"w-full h-full my-3"}> {/*Keeps the buttons down there*/}
                        <WizardStepCustom/>
                    </div>
                    <NavigationComponent/>
                </WizardStateProvider>
            </WizardStepProvider>
        </div>
    );
}