"use client";
import {
    DefaultWizardStepProps,
    useWizardContext
} from "../../context/WizardContext";
import {BsArrowRight} from "react-icons/bs";
import {SlArrowLeft} from "react-icons/sl";
import {useCallback} from "react";
import {useRouter} from "next/navigation";
import useSWR from 'swr'

export function useGetData({ url, payload, options = {}}) {
    const method = payload ? 'POST' : 'GET';
    const fetcher = async () => {
        const options = {
            method,
            ...(payload && { body: payload }),
        };

        return await fetch(url, options).then((res) => res.json());
    };
    const defaultOptions = {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    };
    const { data, mutate, error, isValidating } = useSWR(url + method, fetcher, {
        ...defaultOptions,
        ...options,
    });
    const loading = !data && !error;
    return { data, loading, error, mutate, isValidating };
}


export default function NavigationComponent() {

    const {onNext, onPrevious, isFirstStep, isLastStep, activeStepIndex} =
        useWizardContext<DefaultWizardStepProps>();

    const router = useRouter();

    const {data, loading, mutate, error, isValidating} = useGetData({url: "/api/reservation", payload: {}, options: {}});

    if(error) console.log(error);
    if(isValidating) console.log("isValidating");
    if(loading || !data) console.log("loading");

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
                    onClick={useCallback((event) => {
                        if ((document.getElementById("form") as HTMLInputElement)?.checkValidity()) {
                            event.preventDefault();
                            onNext(() => console.log('Calling `onNext`'));
                            if(isLastStep){
                                mutate({data: "test"}).then(r => console.log(r));
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