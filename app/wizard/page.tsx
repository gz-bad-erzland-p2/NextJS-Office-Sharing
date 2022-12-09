"use client";

import {DefaultWizardStepProps, Step, Steps, useWizardContext, WizardStepProvider} from "../../context/WizardContext";



export default function WizardMainPage() {

    const { activeStepIndex, onNext, onPrevious, goTo, isFirstStep, isLastStep } =
        useWizardContext<DefaultWizardStepProps>();

    const WizardStepCustom = () => {
        const {activeStepIndex} = useWizardContext<DefaultWizardStepProps>();

        return (
            <Steps>
                <Step key={`page/1`} id={'1'}>
                    <div>
                        Test Page 1
                    </div>
                </Step>
                <Step key={`page/2`} id={'2'}>
                    <div>
                        Test Page 2
                    </div>
                </Step>
            </Steps>
        );
    };

    return (
        <WizardStepProvider>
            <WizardStepCustom />
        </WizardStepProvider>
    );
    }