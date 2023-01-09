"use client";
import {
    DefaultWizardStepProps,
    useWizardContext
} from "../../context/WizardContext";
import {BsArrowRight} from "react-icons/bs";
import {SlArrowLeft} from "react-icons/sl";
import {useCallback} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function NavigationComponent() {

    const {onNext, onPrevious, isFirstStep, isLastStep, activeStepIndex} =
        useWizardContext<DefaultWizardStepProps>();

    const router = useRouter();

    return (
        <div className={"flex gap-3 mt-10"}>
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
                    onClick={useCallback((event) => {
                        if ((document.getElementById("form") as HTMLInputElement)?.checkValidity()) {
                            event.preventDefault();
                            onNext(() => console.log('Calling `onNext`'));
                            if(isLastStep){
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