import {DefaultWizardStepProps, useWizardContext} from "../../context/WizardContext";
import {useCallback} from "react";

export default function NavigationComponent() {

    const {activeStepIndex, onNext, onPrevious, goTo, isFirstStep, isLastStep} =
        useWizardContext<DefaultWizardStepProps>();
    return (
        <div>
            <button className={`button border-1 border-o-gray text-o-gray ${!isFirstStep && `bg-o-green-light`} transition-colors`}
                    onClick={onPrevious} disabled={isFirstStep}>
                zurück
            </button>
            <button className={`button border-1 border-o-green-light ${!isLastStep && `bg-o-green-light`} text-o-white transition-colors
            `}
                    onClick={useCallback(() => {
                        if (activeStepIndex === 1) {
                            goTo(5);
                        } else {
                            onNext(() => console.log('Calling `onNext`'));
                        }
                    }, [goTo, onNext, activeStepIndex])}
                    disabled={isLastStep}>
                nächster
            </button>
        </div>
    );
}