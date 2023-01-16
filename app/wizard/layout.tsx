"use client";
import React, {Suspense} from "react";
import {
    WizardStepProvider
} from "../../core/context/WizardStepContext";
import {WizardStateProvider} from "../../core/context/WizardStateContext";
import HeaderProgressComponent from "../../core/components/wizard/layout/HeaderProgressComponent";
import FooterNavigationComponent
    from "../../core/components/wizard/layout/FooterNavigationComponent";


export default function WizardLayout({children}: { children: React.ReactNode }) {
    
    return (
        <section
            className="relative m-auto border-2 bg-white p-2 md:w-1/2 min-w w-full md:min-w-[650px] md:drop-shadow-lg md:rounded-md h-full flex flex-col items-center">
            <Suspense fallback={"Loading"}>
                <WizardStepProvider>
                    <WizardStateProvider>
                        <HeaderProgressComponent/>
                        {children}
                        <FooterNavigationComponent/>
                    </WizardStateProvider>
                </WizardStepProvider>
            </Suspense>
        </section>
    )
}
