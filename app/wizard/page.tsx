"use client";
import {Step, Steps} from "../../core/context/WizardContext";
import BasePageComponent from "../../core/components/wizard/BasePageComponent";
import React from "react";
import dynamic from "next/dynamic";
import Loading from "../loading";

export default function WizardMainPage() {
    const WizardStepCustom = () => {
        // const {activeStepIndex} = useWizardContext<DefaultWizardStepProps>();
        const PersonalDataComponent = dynamic(() => import('../../core/components/wizard/page/PersonalDataComponent').then((mod) => mod.PersonalDataComponent), {
            loading: () => <Loading/>,
        });

        const WorkspaceTypeComponent = dynamic(() => import('../../core/components/wizard/page/WorkspaceTypeComponent').then((mod) => mod.WorkspaceTypeComponent), {
            loading: () => <Loading/>,
        });


        const ITComponent = dynamic(() => import('../../core/components/wizard/page/ITComponent').then((mod) => mod.ITComponent), {
            loading: () => <Loading/>,
        });

        const OperatingSystemComponent = dynamic(() => import('../../core/components/wizard/page/OperatingSystemComponent').then((mod) => mod.OperatingSystemComponent), {
            loading: () => <Loading/>,
        });

        const SoftwareSpecsComponent = dynamic(() => import('../../core/components/wizard/page/SoftwareSpecsComponent').then((mod) => mod.SoftwareSpecsComponent), {
            loading: () => <Loading/>,
        });

        const TimeSelectionComponent = dynamic(() => import('../../core/components/wizard/page/TimeSelectionComponent').then((mod) => mod.TimeSelectionComponent), {
            loading: () => <Loading/>,
        });

       

        return (
            <Steps>
                <Step key={`page/1`} id={'1'}
                      className={"w-full h-full transition-opacity"}>
                    <BasePageComponent heading={"Arbeitsplatztyp"}>
                        <div className={"p-5 h-full flex justify-center"}>
                            <WorkspaceTypeComponent/>
                        </div>
                    </BasePageComponent>
                </Step>
                <Step key={`page/2`} id={'2'}
                      className={"w-full h-full transition-opacity"}>
                    <BasePageComponent heading={"Betriebssystem"}>
                        <div className={"p-5 h-full flex justify-center"}>
                            <ITComponent/>
                        </div>
                    </BasePageComponent>
                </Step>

                <Step key={`page/3`} id={'3'}
                      className={"w-full h-full transition-opacity"}>
                    <BasePageComponent heading={"Betriebssystem"}>
                        <div className={"p-5 h-full flex justify-center"}>
                            <OperatingSystemComponent/>
                        </div>
                    </BasePageComponent>
                </Step>
                <Step key={`page/4`} id={'4'} className={"w-full h-full"}>
                    <BasePageComponent heading={"Weitere Spezifikationen"}>
                        <div className={"p-5 h-full flex justify-center"}>
                            <SoftwareSpecsComponent/>
                        </div>
                    </BasePageComponent>
                </Step>
                <Step key={`page/5`} id={'5'}
                      className={"w-full h-full"}>
                    <BasePageComponent heading={"Zeitauswahl"}>
                        <div
                            className={"p-5 h-full flex justify-center"}>
                            <TimeSelectionComponent/>
                        </div>
                    </BasePageComponent>
                </Step>

               

                <Step key={`page/6`} id={'6'} className={"w-full h-full"}>
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
        <WizardStepCustom/>
    );
}