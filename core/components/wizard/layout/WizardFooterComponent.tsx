"use client";
import {
    DefaultWizardStepProps,
    useWizardStepContext
} from "../../../context/WizardStepContext";
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";
import {useCallback} from "react";
import {useRouter} from "next/navigation";
import {useWizardStateContext} from "../../../context/WizardStateContext";
import {WorkspaceTypeEnum} from "../../../misc/enums/WorkspaceTypeEnum";
import {HardwareEnum} from "../../../misc/enums/HardwareEnum";

export default function WizardFooterComponent() {

    const {
        onNext,
        onPrevious,
        isFirstStep,
        isLastStep,
        steps,
        goTo,
        activeStepIndex
    } =
        useWizardStepContext<DefaultWizardStepProps>();

    const {
        name,
        surname,
        street,
        streetNumber,
        password,
        zipCode,
        email,
        city,
        operatingSystem,
        endDate,
        startDate,
        workspaceType,
        hardware,
        hardware2
    } = useWizardStateContext();

    const router = useRouter();

    const callAPI = async () => {
        try {
            const response = await fetch('/api/reserveration', {
                body: JSON.stringify({
                    name,
                    surname,
                    email,
                    password,
                    street,
                    streetNumber,
                    zipCode,
                    city,
                    startDate,
                    endDate,
                    operatingSystem,
                }),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // const data = await response.json();
            console.log(await response.text());
        } catch (error) {
            console.log(error);
        }
    }

    const isSignInOrSignUp = activeStepIndex === 6;
    const skipOsSelection = workspaceType === WorkspaceTypeEnum.SINGLE_DESK ? hardware === HardwareEnum.BYOD : hardware === HardwareEnum.BYOD && hardware2 === HardwareEnum.BYOD;

    return (
        <div
            className={`flex gap-3 mt-10 transition-opacity ease-in-out duration-300 ${steps.length == 0 && 'opacity-0'} `}>
            <button
                className={`rounded px-2 py-1.5 border-1 border-office-green-500 bg-office-green-500 text-white disabled:bg-office-gray-600 disabled:text-black transition-colors flex items-center`}
                onClick={useCallback(async (event) => {
                    event.preventDefault();
                    if (skipOsSelection && activeStepIndex == 4) {
                        goTo(2)
                    } else {
                        onPrevious();
                    }

                }, [activeStepIndex, goTo, onPrevious, skipOsSelection])}
                disabled={isFirstStep}>
                <BsArrowLeft className={"mx-2"}/> Zurück
            </button>
            <button
                type={"submit"}
                id={"formNextButton"}
                form={"form"}
                className={`${isSignInOrSignUp && "hidden"} rounded px-2 py-1.5 border-1 border-office-green-500 bg-office-green-500 text-white disabled:bg-office-gray-600 disabled:text-black transition-colors flex items-center
            `}
                onClick={useCallback(async (event) => {
                    if ((document.getElementById("form") as HTMLInputElement)?.checkValidity()) {
                        event.preventDefault();
                        if (isSignInOrSignUp) return;
                        if (skipOsSelection && activeStepIndex == 2) {
                            goTo(4);
                        } else {
                            onNext(() => console.log('Calling `onNext`'));
                        }
                        if (isLastStep) {
                            console.log("LAST STEP")
                            await callAPI();
                            router.push("#");
                        }
                    }
                }, [isSignInOrSignUp, skipOsSelection, activeStepIndex, isLastStep, goTo, onNext, callAPI, router])}>
                {isLastStep ? "Absenden" : "Weiter"} <BsArrowRight
                className={"mx-2"}/>
            </button>
        </div>
    );
}