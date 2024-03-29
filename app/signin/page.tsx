"use client";
import {BsArrowRight} from "react-icons/bs";
import React, {FormEvent, useState} from "react";
import CenteredFormComponent
    from "../../core/components/CenteredFormComponent";
import FloatingTextFieldComponent
    from "../../core/components/FloatingTextFieldComponent";

export default function SignInPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
    }

    return (
        <CenteredFormComponent onSubmit={submitHandler}>
            <div
                className={"flex flex-col items-center justify-center bg-white h-full max-w-screen-xl w-full min-w-0 rounded-2xl drop-shadow-2xl px-5"}>
                <h1 className={"px-2"}>Office Sharing</h1>
                <h2 className={"mb-10"}>Manager</h2>
                <div className="relative z-0 mb-6 md:w-1/2 w-full group">
                    <FloatingTextFieldComponent name={"email"} label={"E-Mail"}
                                                type={"email"} value={email}
                                                onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className={"relative md:w-1/2 w-full mb-6"}>
                    <FloatingTextFieldComponent name={"password"}
                                                label={"Passwort"}
                                                type={"password"}
                                                value={password}
                                                onChange={(event) => setPassword(event.target.value)}/>
                </div>

                <button
                    type={"submit"}
                    className={"text-white bg-office-green-500 hover:bg-office-green-800 font-medium rounded-lg p-2 flex items-center transition-colors ease-in-out"}>
                    Anmelden <BsArrowRight className={"mx-2"}/>
                </button>
            </div>
        </CenteredFormComponent>
    );
}