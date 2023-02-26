"use client";
import {useWizardStateContext} from "../../../context/WizardStateContext";
import React, {FormEvent} from "react";
import FloatingTextFieldComponent from "../../FloatingTextFieldComponent";
import {BsArrowRight} from "react-icons/bs";
import {useWizardStepContext} from "../../../context/WizardStepContext";

export const UserLoginComponent = () => {

    const {email, setEmail, password, setPassword} = useWizardStateContext();
    const {setIsRegister, onNext} = useWizardStepContext();

    const submitHandler = (event: FormEvent) => {
         event.preventDefault();
         onNext();
     }

    return (
        <form id={"form"}
             className={"w-full h-full flex flex-col justify-center"} onSubmit={submitHandler}>
            <div
                className={"m-auto w-full flex justify-center flex-col"}>
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

                <button className={"w-1/2 flex self-center justify-center mt-2 text-office-green-500 text-center hover:bg-office-gray-400 rounded-lg p-1 transition-colors ease-in-out duration-500"} onClick={() => setIsRegister(true)}>oder
                    Registrieren
                </button>
            </div>
        </form>

    );
}