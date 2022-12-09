import {createContext, useContext} from "react";

export interface DefaultWizardStepProps {
    id: number | string;
}
interface WizardStepperContextProps<T = DefaultWizardStepProps> {
    activeStepIndex: number;
    steps: T[];
    isFirstStep: boolean;
    isLastStep: boolean;
    goTo: (id: number | string) => void;
    onNext: (cb?: () => void) => void;
    onPrevious: () => void;
    getActiveStep: () => T;
    setSteps: (steps: T[] | T) => void;
}


const WizardStepperContext = createContext({});

export const useWizardContext = <T, _P = never>() => {
    const context = useContext(WizardStepperContext);
    if (Object.keys(context).length === 0) {
        throw new Error("Alle Wizard Steps müssen innerhalb eines WizardContext sein");
    }
    return context as Readonly<WizardStepperContextProps<T>>
}