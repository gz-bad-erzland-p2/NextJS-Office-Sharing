"use client";
import {
    DefaultWizardStepProps,
    useWizardContext
} from "../../context/WizardContext";
import {BsArrowRight} from "react-icons/bs";
import {SlArrowLeft} from "react-icons/sl";
import {useCallback} from "react";
import {useRouter} from "next/navigation";
import {useWizardStateContext} from "../../context/WizardStateContext";

export default function NavigationComponent() {

    const {onNext, onPrevious, isFirstStep, isLastStep, activeStepIndex} =
        useWizardContext<DefaultWizardStepProps>();

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
        workspaceType,
        endDate,
        startDate
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


    return (
        <div className={"flex gap-3 mt-10"}>
            <div className={"bg-red-500"}>ERROR</div>
            <button
                className={`rounded px-2 py-1.5 border-1 border-office-gray-500 bg-office-green-500 text-white disabled:bg-office-gray-600 disabled:text-black transition-colors`}
                onClick={onPrevious} disabled={isFirstStep}>
                <SlArrowLeft/>
            </button>
            {/*<Link href={isLastStep ? "/wizard/summary" : "#"}>*/}
            <button
                type={"submit"}
                form={"form"}
                className={`rounded px-2 py-1.5 border-1 border-office-green-500 bg-office-green-500 text-white disabled:bg-office-gray-600 disabled:text-black transition-colors flex items-center
            `}
                onClick={useCallback(async (event) => {
                    if ((document.getElementById("form") as HTMLInputElement)?.checkValidity()) {
                        event.preventDefault();
                        onNext(() => console.log('Calling `onNext`'));
                        if (isLastStep) {
                            console.log("LAST STEP")
                            //await callAPI();
                            router.push("#");
                        }
                    }
                }, [isLastStep, onNext, router])}>
                {isLastStep ? "Absenden" : "weiter"} <BsArrowRight
                className={"mx-2"}/>
            </button>
            {/*</Link>*/}
        </div>
    );
}