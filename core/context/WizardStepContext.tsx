"use client";
import React, {
    Children,
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useReducer
} from "react";

type Action =
    | { type: 'NEXT_PAGE' }
    | { type: 'PREV_PAGE' }
    | { type: 'GOTO_PAGE'; payload: { stepId: number } }
    | { type: 'SET_STEP_COUNT'; payload: { steps: DefaultWizardStepProps[] } }
    | { type: 'SET_REGISTER'; payload: { isRegister: boolean } };

export interface DefaultWizardStepProps {
    id: number | string;
}

interface WizardStepperReducerState {
    activeStepIndex: number;
    steps: DefaultWizardStepProps[];

    isRegister: boolean;
}

interface StepsProps {
    children: JSX.Element | JSX.Element[] | ReactNode;
}

interface StepProps {
    id: string;
    children: ReactNode | JSX.Element | JSX.Element[];
    className?: string;
}

interface WizardStepperContextProps<T = DefaultWizardStepProps> {
    activeStepIndex: number;
    steps: T[];
    isFirstStep: boolean;
    isLastStep: boolean;
    isRegister: boolean;
    setIsRegister: (isRegister: boolean) => void;
    goTo: (id: number | string) => void;
    onNext: (cb?: () => void) => void;
    onPrevious: () => void;
    getActiveStep: () => T;
    setSteps: (steps: T[] | T) => void;
}


const WizardStepperContext = createContext({});

export const useWizardStepContext = <T, _P = never>() => {
    const context = useContext(WizardStepperContext);
    if (Object.keys(context).length === 0) {
        throw new Error("Alle Wizard Steps müssen innerhalb eines WizardContext sein");
    }
    return context as Readonly<WizardStepperContextProps<T>>
}


/**
 *
 * @param state The current state of the wizard
 * @param action The action to be performed
 * @returns The new state of the wizard
 * Reduces the state of the wizard based on the action. It modifies the activeStepIndex and the steps
 */
const reducer = (state: WizardStepperReducerState, action: Action): WizardStepperReducerState => {
    const {steps, activeStepIndex} = state;

    switch (action.type) {
        case 'NEXT_PAGE':
            // eslint-disable-next-line no-case-declarations
            const newIndex = activeStepIndex + 1;
            if (newIndex < steps.length) {
                return {...state, activeStepIndex: newIndex};
            }
            return state;
        case 'PREV_PAGE':
            if (activeStepIndex > 0) {
                return {...state, activeStepIndex: activeStepIndex - 1};
            }
            return state;

        case 'GOTO_PAGE':
            // eslint-disable-next-line no-case-declarations
            const {stepId} = action.payload;
            if (activeStepIndex !== stepId && stepId < steps.length && stepId >= 0) {
                return {...state, activeStepIndex: stepId};
            }
            return state;
        case 'SET_STEP_COUNT':
            // eslint-disable-next-line no-case-declarations
            const {steps: newSteps} = action.payload;
            return {...state, steps: newSteps};

        case 'SET_REGISTER':
            // eslint-disable-next-line no-case-declarations
            const {isRegister} = action.payload;
            return {...state, isRegister};
        default:
            return state;
    }
};
const initialState: WizardStepperReducerState = {
    activeStepIndex: 0,
    steps: [],
    isRegister: false
};

// Reducer is an useState with a custom business logic
export const WizardStepProvider = ({children}: { children: React.ReactNode }) => {

    // useEffect(() => {
    //     const wizardState = localStorage.getItem('wizardStep');
    //     if (wizardState) {
    //         initialState.activeStepIndex = +wizardState;
    //         dispatch({type: 'GOTO_PAGE', payload: {stepId: +wizardState}});
    //     }
    // }, []);

    const [state, dispatch] = useReducer(reducer, initialState);

    // useEffect(() => {
    //     localStorage.setItem('wizardStep', JSON.stringify(state.activeStepIndex));
    // }, [state.activeStepIndex]);

    const {activeStepIndex, steps, isRegister} = state;

    const onNext = useCallback(
        async (cb?: () => void) => {
            if (typeof cb === 'function') {
                await cb();
            }
            dispatch({type: 'NEXT_PAGE'});
        },
        [dispatch]
    );

    const onPrevious = useCallback(() => {
        dispatch({type: 'PREV_PAGE'});
    }, [dispatch]);

    const setSteps = useCallback(
        (steps: DefaultWizardStepProps[]) => {
            dispatch({type: 'SET_STEP_COUNT', payload: {steps}});
        },
        [dispatch]
    );

    const goTo = useCallback(
        stepId => {
            dispatch({type: 'GOTO_PAGE', payload: {stepId}});
        },
        [dispatch]
    );

    const getActiveStep = useCallback(
        () => steps[activeStepIndex],
        [activeStepIndex, steps]
    );

    const setIsRegister = useCallback(
        (isRegister: boolean) => {
            dispatch({type: 'SET_REGISTER', payload: {isRegister}});
        }, [dispatch]
    );

    // useMemo only updates on the dependencies change
    const context = useMemo(
        () => ({
            activeStepIndex,
            steps,
            goTo,
            onNext,
            onPrevious,
            setSteps,
            getActiveStep,
            isRegister,
            setIsRegister,
            isFirstStep: activeStepIndex === 0,
            isLastStep: activeStepIndex >= steps.length - 1,
        }),
        [activeStepIndex, steps, goTo, onNext, onPrevious, setSteps, getActiveStep, isRegister, setIsRegister]
    );

    return (
        <WizardStepperContext.Provider value={context}>
            {children}
        </WizardStepperContext.Provider>
    );
}

export const Steps = ({children}: StepsProps) => {
    const reactChildren = Children.toArray(children);
    if (reactChildren.length === 0) {
        throw new Error('Steps müssen mindestens ein child haben!');
    }

    const index = reactChildren.findIndex(
        child => (child as JSX.Element).type !== Step
    );

    if (index !== -1) {
        throw new Error(
            `Fehler im "${index}". Alle Steps müssen vom Typ Step sein.`
        );
    }

    const {activeStepIndex, setSteps, steps} =
        useWizardStepContext<DefaultWizardStepProps>();

    // Update on every steps render based on deps
    useEffect(() => {
        if (steps.length !== reactChildren.length) {
            setSteps(
                reactChildren.map(child => ({
                    id: (child as JSX.Element).props.id,
                }))
            );
        }
    }, [setSteps, steps, reactChildren]);

    return reactChildren[activeStepIndex] as JSX.Element;
};


export const Step = ({id, children, className}: StepProps) => (
    <div id={id} className={className}>{children}</div>
);