import {DefaultWizardStepProps, useWizardContext} from "../../context/WizardContext";
import {useCallback} from "react";

export default function NavigationComponent() {

    const {activeStepIndex, onNext, onPrevious, goTo, isFirstStep, isLastStep} =
        useWizardContext<DefaultWizardStepProps>();
    return (
        <div>
            <button className={`button rounded-[10px] m-[2px] p-[5px] border-1 border-office-gray-500 ${!isFirstStep ? `bg-office-green-500 text-white`: `bg-office-gray-600 text-black`} transition-colors`}
                    onClick={onPrevious} disabled={isFirstStep}>
                zurück
            </button>
            <button className={`button rounded-[10px] m-[2px] p-[5px] border-1 border-office-green-500 ${!isLastStep ? `bg-office-green-500 text-white` : `bg-office-gray-600 text-black`} transition-colors
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