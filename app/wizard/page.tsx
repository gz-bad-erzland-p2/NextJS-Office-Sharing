"use client";

import {DefaultWizardStepProps, Step, Steps, useWizardContext, WizardStepProvider} from "../../context/WizardContext";



import ProgressWizard from "../progresswizard";

export default function WizardMainPage() {
    return (
      <div >
        sdasd
        <div className="wizard-container">
          <div className="container">
            <button className="button border-1 border-o-gray text-o-gray"> zurück </button>
            <button className="button border-1 border-o-green-light bg-o-green-light text-o-white ">nächster</button>

          </div>
          <ProgressWizard prog={2} anzahl={5}/>
        </div>
      </div>

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