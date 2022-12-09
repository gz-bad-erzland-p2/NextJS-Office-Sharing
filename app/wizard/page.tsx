"use client";


import ProgressComponent from "../../components/wizard/ProgressComponent";
import NavigationComponent from "../../components/wizard/NavigationComponent";
import {DefaultWizardStepProps, Step, Steps, useWizardContext, WizardStepProvider} from "../../context/WizardContext";
import DynamicTestPageComponent from "../../components/wizard/DynamicTestPageComponent";

export default function WizardMainPage() {

    const WizardStepCustom = () => {
        const {activeStepIndex} = useWizardContext<DefaultWizardStepProps>();

        return (
            <Steps>
                <Step key={`page/1`} id={'1'}>
                    <div>
                        Test Seite 1
                    </div>
                </Step>
                <Step key={`page/2`} id={'2'}>
                    <div>
                        Test Seite 2
                    </div>
                </Step>
                {
                    Array.from({length: activeStepIndex > 0 ? 10 : 3}).map((_, i) => (
                        <Step key={`page/${i + 3}`} id={`${i + 3}`}>
                            <DynamicTestPageComponent counter={i + 3}/>
                        </Step>
                    ))
                }
            </Steps>
        );
    };


    return (
        <WizardStepProvider>
            sdasd
            <div className="wizard-container">
                <div className="container">
                    <NavigationComponent/>
                </div>
                <WizardStepCustom/>
                <ProgressComponent/>
            </div>
        </WizardStepProvider>
    );
}