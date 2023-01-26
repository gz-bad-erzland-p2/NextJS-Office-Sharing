"use client";
import {DefaultWizardStepProps, Step, Steps, useWizardStepContext} from "../../core/context/WizardStepContext";
import BasePageComponent from "../../core/components/wizard/layout/BasePageComponent";
import React from "react";
import dynamic from "next/dynamic";
import Loading from "../loading";
import {BookingOverviewComponent} from "../../core/components/wizard/page/BookingOverviewComponent";

export default function WizardMainPage() {
    const WizardStepCustom = () => {
        const {activeStepIndex, isRegister} = useWizardStepContext<DefaultWizardStepProps>();
        const PersonalDataComponent = dynamic(() => import('../../core/components/wizard/page/PersonalDataComponent').then((mod) => mod.PersonalDataComponent), {
            loading: () => <Loading/>,
        });
        const UserLoginComponent = dynamic(() => import('../../core/components/wizard/page/UserLoginComponent').then((mod) => mod.UserLoginComponent), {
            loading: () => <Loading/>,
        });

        const WorkspaceTypeComponent = dynamic(() => import('../../core/components/wizard/page/WorkspaceSelectionComponent').then((mod) => mod.WorkspaceSelectionComponent), {
            loading: () => <Loading/>,
        });

        const ITComponent = dynamic(() => import('../../core/components/wizard/page/HardwareSelectionComponent').then((mod) => mod.HardwareSelectionComponent), {
            loading: () => <Loading/>,
        });

        const OperatingSystemComponent = dynamic(() => import('../../core/components/wizard/page/OsSelectionComponent').then((mod) => mod.OsSelectionComponent), {
            loading: () => <Loading/>,
        });

        const AdditionalSpecsComponent = dynamic(() => import('../../core/components/wizard/page/AdditionalSpecsComponent').then((mod) => mod.AdditionalSpecsComponent), {
            loading: () => <Loading/>,
        });

        const TimeSelectionComponent = dynamic(() => import('../../core/components/wizard/page/AppointmentSelectionComponent').then((mod) => mod.AppointmentSelectionComponent), {
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
                    <BasePageComponent heading={"Hardware/ Geräte"}>
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
                            <AdditionalSpecsComponent/>
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
                {isRegister ? (
                        <Step key={`page/6`} id={'6'} className={"w-full h-full transition-all duration-150 ease-out"}>
                            <BasePageComponent heading={"Registrierung"}>
                                <div className={"p-5 h-full flex justify-center"}>
                                    <PersonalDataComponent/>
                                </div>
                            </BasePageComponent>
                        </Step>
                    ) :
                    <Step key={`page/7`} id={'7'} className={"w-full h-full transition-all duration-150 ease-out"}>
                        <BasePageComponent heading={"Login"}>
                            <div className={"p-5 h-full flex justify-center"}>
                                <UserLoginComponent/>
                            </div>
                        </BasePageComponent>
                    </Step>
                }
                <Step key={`page/8`} id={'8'} className={"w-full h-full"}>
                    <BasePageComponent heading={"Office Sharing mit Bad Erzland"}>
                        <div className={"p-5 h-full flex justify-center"}>
                            <BookingOverviewComponent/>
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