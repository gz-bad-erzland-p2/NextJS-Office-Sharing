"use client";
import React, {Suspense} from "react";
import {WizardStepProvider} from "../../core/context/WizardContext";
import {WizardStateProvider} from "../../core/context/WizardStateContext";
import ProgressComponent from "../../core/components/wizard/ProgressComponent";
import NavigationComponent
    from "../../core/components/wizard/NavigationComponent";


export default function WizardLayout({children}: { children: React.ReactNode }) {
    return (
        <section
            className="relative m-auto border-2 bg-white p-2 md:w-1/2 min-w w-full md:min-w-[650px]  md:drop-shadow-lg md:rounded-md h-full flex flex-col items-center">
            <Suspense fallback={"LADEN"}>
                <WizardStepProvider>
                    <WizardStateProvider>
                        <ProgressComponent/>
                        {children}
                        <NavigationComponent/>
                    </WizardStateProvider>
                </WizardStepProvider>
            </Suspense>
        </section>
    )
}
