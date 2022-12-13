"use client";


import ProgressComponent from "../../components/wizard/ProgressComponent";
import NavigationComponent from "../../components/wizard/NavigationComponent";
import {Step, Steps, WizardStepProvider} from "../../context/WizardContext";
import BasePageComponent from "../../components/wizard/BasePageComponent";
import React from "react";
import TimeSlotSelectorComponent from "../../components/wizard/page/TimeSlotSelectorComponent";
export default function WizardMainPage() {

    const WizardStepCustom = () => {
        // const {activeStepIndex} = useWizardContext<DefaultWizardStepProps>();

        return (
            <Steps>
                <Step key={`page/1`} id={'1'} className={"w-full h-full"}>
                    <BasePageComponent heading={"Arbeitsplatztyp"}>
                        <div className={"p-5 bg-blue-100 h-full flex justify-center"}>
                            Test content
                        </div>
                    </BasePageComponent>
                </Step>
                <Step key={`page/2`} id={'2'}>
                    <BasePageComponent heading={"Betriebssystem"}>
                        <div className={"p-5 bg-blue-100 h-full flex justify-center"}>
                        <TimeSlotSelectorComponent></TimeSlotSelectorComponent>
                
                        </div>
                    </BasePageComponent>
                </Step>


                <Step key={`page/3`} id={'3'}>
                    <BasePageComponent heading={"Betriebssystem"}>
                        <div className={"p-5 bg-blue-100 h-full flex justify-center"}>
                            Test content
                        </div>
                    </BasePageComponent>
                </Step>

                
            </Steps>
        );
    };
    return (
        <div className="relative m-auto border-2 bg-white p-2 w-1/2 drop-shadow-lg rounded-md h-full flex flex-col items-center">
            <WizardStepProvider>
                <ProgressComponent/>
                <div className={"w-full h-full my-3"}> {/*Keeps the buttons down there*/ }
                    <WizardStepCustom/>
                </div>
                <NavigationComponent/>
                {/*<div className={"items-end justify-center"}>*/}

                {/*<div className={"bg-red-600 w-full flex flex-col"}>*/}
                {/*    <button className={"bg-blue-200 border-2 self-end"}>top</button>*/}
                {/*</div>*/}
                {/*<div className={"bg-red-500 w-full h-full flex flex-col justify-center"}>*/}
                {/*    <button className={"bg-blue-200 border-2 self-center"}>center</button>*/}
                {/*</div>*/}
                {/*<div className={"bg-red-400 w-1/4 flex flex-row justify-between"}>*/}
                {/*    <button className={"bg-blue-200 border-2"}>bottom</button>*/}
                {/*    <button className={"bg-blue-200 border-2"}>bottom</button>*/}
                {/*</div>*/}

                {/*</div>*/}
            </WizardStepProvider>
        </div>
    );
}