'use client'
import '../../app/global.css';
import {DefaultWizardStepProps, useWizardContext} from "../../context/WizardContext";

export default function ProgressComponent() {

    const {activeStepIndex, steps} = useWizardContext<DefaultWizardStepProps>();

    return (
        <div className="relative">
            <div className="w-full bg-o-gray rounded-full h-2.5 dark:bg-o-gray">
                <div className="bg-o-green-light h-2.5 rounded-full transition-width ease-in-out duration-500"
                     style={{width: 100 / steps.length * (activeStepIndex + 1) + "%"}}></div>
            </div>
        </div>

    )
}
