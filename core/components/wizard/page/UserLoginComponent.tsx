"use client";
import {useWizardStateContext} from "../../../context/WizardStateContext";
import React from "react";
import FloatingTextFieldComponent from "../../misc/FloatingTextFieldComponent";
import {BsArrowRight} from "react-icons/bs";
import {useWizardStepContext} from "../../../context/WizardStepContext";

export const UserLoginComponent = () => {

    const {email, setEmail, password, setPassword} = useWizardStateContext();
    const {setIsRegister} = useWizardStepContext();
    const {goTo} = useWizardStepContext();

    // const submitHandler = (event: FormEvent) => {
    //      event.preventDefault();
    //  }

    return (
        <form id={"form"}
             className={"w-full h-full flex flex-col justify-center"}>
            <div
                className={"m-auto min-w-400 flex justify-center flex-col min-w-[50%]"}>
                <div className={"relative w-full mb-6"}>
                    <FloatingTextFieldComponent name={"email"} label={"E-Mail"}
                                                type={"email"} value={email}
                                                onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className={"relative w-full mb-6"}>
                    <FloatingTextFieldComponent name={"password"}
                                                label={"Passwort"}
                                                type={"password"}
                                                value={password}
                                                onChange={(event) => setPassword(event.target.value)}/>
                </div>

                <button
                    type={"submit"}
                    className={"text-white bg-office-green-500 text-center hover:bg-office-green-800 font-medium rounded-lg p-2 flex items-center transition-colors justify-center ease-in-out"}>
                    Anmelden <BsArrowRight className={"mx-2"}/>
                </button>

                <button className={"mt-4"} onClick={() => setIsRegister(true)}>oder
                    Registrieren
                </button>
            </div>
        </form>

    );
}