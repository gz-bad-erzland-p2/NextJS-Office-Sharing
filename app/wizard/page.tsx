"use client";
import {
    DefaultWizardStepProps,
    Step,
    Steps,
    useWizardStepContext
} from "../../core/context/WizardStepContext";
import WizardBasePageComponent
    from "../../core/components/wizard/layout/WizardBasePageComponent";
import React from "react";
import dynamic from "next/dynamic";
import Loading from "../loading";
import {
    BookingOverviewComponent
} from "../../core/components/wizard/steps/70_BookingOverviewComponent";
import {useWizardStateContext} from "../../core/context/WizardStateContext";
import {
    IntroductionComponent
} from "../../core/components/wizard/steps/00_IntroductionComponent";

export default function WizardMainPage() {
    const WizardStepCustom = () => {
        const {
            activeStepIndex,
            isRegister
        } = useWizardStepContext<DefaultWizardStepProps>();
        // const {hardware} = useWizardStateContext();
        const PersonalDataComponent = dynamic(() => import('../../core/components/wizard/steps/61_PersonalDataComponent').then((mod) => mod.PersonalDataComponent), {
            loading: () => <Loading/>,
        });
        const SignInComponent = dynamic(() => import('../../core/components/wizard/steps/60_UserLoginComponent').then((mod) => mod.UserLoginComponent), {
            loading: () => <Loading/>,
        });

        const WorkspaceTypeComponent = dynamic(() => import('../../core/components/wizard/steps/10_WorkspaceSelectionComponent').then((mod) => mod.WorkspaceSelectionComponent), {
            loading: () => <Loading/>,
        });

        const ITComponent = dynamic(() => import('../../core/components/wizard/steps/20_HardwareSelectionComponent').then((mod) => mod.HardwareSelectionComponent), {
            loading: () => <Loading/>,
        });

        const OperatingSystemComponent = dynamic(() => import('../../core/components/wizard/steps/30_OsSelectionComponent').then((mod) => mod.OsSelectionComponent), {
            loading: () => <Loading/>,
        });

        const AdditionalSpecsComponent = dynamic(() => import('../../core/components/wizard/steps/40_AdditionalSpecsComponent').then((mod) => mod.AdditionalSpecsComponent), {
            loading: () => <Loading/>,
        });

        const TimeSelectionComponent = dynamic(() => import('../../core/components/wizard/steps/50_DateTimeSelectionComponent').then((mod) => mod.AppointmentSelectionComponent), {
            loading: () => <Loading/>,
        });


        return (
            <Steps>
                <Step key={`page/0`} id={'0'}
                      className={"w-full h-full transition-opacity"}>
                    <WizardBasePageComponent heading={""}>
                        <div className={"p-5 h-full flex justify-center"}>
                            <IntroductionComponent />
                        </div>
                    </WizardBasePageComponent>
                </Step>
                <Step key={`page/1`} id={'1'}
                      className={"w-full h-full transition-opacity"}>
                    <WizardBasePageComponent heading={"Arbeitsplatztyp"}>
                        <div className={"p-5 h-full flex justify-center"}>
                            <WorkspaceTypeComponent/>
                        </div>
                    </WizardBasePageComponent>
                </Step>
                <Step key={`page/2`} id={'2'}
                      className={"w-full h-full transition-opacity"}>
                    <WizardBasePageComponent heading={"Hardware/ Geräte"}>
                        <div className={"p-5 h-full flex justify-center"}>
                            <ITComponent/>
                        </div>
                    </WizardBasePageComponent>
                </Step>
                <Step key={`page/3`} id={'3'}
                      className={"w-full h-full transition-opacity"}>
                    <WizardBasePageComponent heading={"Betriebssystem"}>
                        <div className={"p-5 h-full flex justify-center"}>
                            <OperatingSystemComponent/>
                        </div>
                    </WizardBasePageComponent>
                </Step>
                <Step key={`page/4`} id={'4'} className={"w-full h-full"}>
                    <WizardBasePageComponent
                        heading={"Weitere Spezifikationen"}>
                        <div className={"p-5 h-full flex justify-center"}>
                            <AdditionalSpecsComponent/>
                        </div>
                    </WizardBasePageComponent>
                </Step>
                <Step key={`page/5`} id={'5'}
                      className={"w-full h-full"}>
                    <WizardBasePageComponent heading={"Zeitauswahl"}>
                        <div
                            className={"p-5 h-full flex justify-center"}>
                            <TimeSelectionComponent/>
                        </div>
                    </WizardBasePageComponent>
                </Step>
                {isRegister ? (
                        <Step key={`page/6`} id={'6'}
                              className={"w-full h-full transition-all duration-150 ease-out"}>
                            <WizardBasePageComponent heading={"Registrierung"}>
                                <div className={"p-5 h-full flex justify-center"}>
                                    <PersonalDataComponent/>
                                </div>
                            </WizardBasePageComponent>
                        </Step>
                    ) :
                    <Step key={`page/7`} id={'7'}
                          className={"w-full h-full transition-all duration-150 ease-out"}>
                        <WizardBasePageComponent heading={"Login"}>
                            <div className={"p-5 h-full flex justify-center"}>
                                <SignInComponent/>
                            </div>
                        </WizardBasePageComponent>
                    </Step>
                }
                <Step key={`page/8`} id={'8'} className={"w-full h-full"}>
                    <WizardBasePageComponent
                        heading={"Office Sharing mit Bad Erzland"}>
                        <div className={"p-5 h-full flex justify-center"}>
                            <BookingOverviewComponent/>
                        </div>
                    </WizardBasePageComponent>
                </Step>
            </Steps>
        );
    };
    return (
        <WizardStepCustom/>
    );
}