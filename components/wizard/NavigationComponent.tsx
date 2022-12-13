import {DefaultWizardStepProps, useWizardContext} from "../../context/WizardContext";
import {useCallback} from "react";
import {BsArrowRight} from "react-icons/bs";
import {SlArrowLeft} from "react-icons/sl";

export default function NavigationComponent() {

    const {activeStepIndex, onNext, onPrevious, goTo, isFirstStep, isLastStep} =
        useWizardContext<DefaultWizardStepProps>();
    return (
        <div className={"flex gap-3"}>
            <button className={`rounded px-2 py-1.5 border-1 border-office-gray-500 ${!isFirstStep ? `bg-office-green-500 text-white`: `bg-office-gray-600 text-black`} transition-colors`}
                    onClick={onPrevious} disabled={isFirstStep}>
                <SlArrowLeft />
            </button>
            <button className={`rounded px-2 py-1.5 border-1 border-office-green-500 ${!isLastStep ? `bg-office-green-500 text-white` : `bg-office-gray-600 text-black`} transition-colors flex items-center
            `}
                    onClick={useCallback(() => {
                        if (activeStepIndex === 1) {
                            goTo(5);
                        } else {
                            onNext(() => console.log('Calling `onNext`'));
                        }
                    }, [goTo, onNext, activeStepIndex])}
                    disabled={isLastStep}>
                weiter <BsArrowRight className={"mx-2"}/>
            </button>
        </div>
    );
}