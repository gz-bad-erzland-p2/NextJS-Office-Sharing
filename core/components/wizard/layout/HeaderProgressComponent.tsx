'use client'
import '../../../../app/global.css';
import {
    DefaultWizardStepProps,
    useWizardStepContext
} from "../../../context/WizardStepContext";

export default function HeaderProgressComponent() {

    const {activeStepIndex, steps} = useWizardStepContext<DefaultWizardStepProps>();

    return (
        <div
            className={`w-full bg-office-gray-600 rounded-full bg-office-gray-600 transition-opacity ease-in-out duration-300 ${steps.length == 0 && 'opacity-0'}`}>
            <div
                className="bg-office-green-600 h-2.5 rounded-full transition-width ease-in-out duration-500"
                style={{width: steps.length && (100 / steps.length * (activeStepIndex +1)) + "%"}}></div>
        </div>
    )
}
