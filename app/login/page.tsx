"use client";
import {BsArrowRight} from "react-icons/bs";
import {FormEvent, useState} from "react";
import CenteredFormComponent from "../../components/other/CenteredFormComponent";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        console.log(email);
        console.log(password);
    }

    return (
        // <div className={"flex-1 flex flex-col w-full"}>
        <CenteredFormComponent onSubmit={submitHandler}>
            <div className={"flex flex-col items-center bg-white p-52 rounded-2xl drop-shadow-2xl"}>
                <h1 className={"mb-10 bold text-4xl"}>Login</h1>
                <div className={"mb-2.5"}>
                    <p>Benutzername oder E-Mail</p>
                    <input type={"text"} className={"rounded-md p-2 border-2"} value={email}
                           onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div>
                    <p>Passwort</p>
                    <input type={"password"} className={"rounded-md p-2 border-2"} value={password}
                           onChange={(event) => setPassword(event.target.value)}/>
                </div>

                <button
                    type={"submit"}
                    className={"text-white bg-office-green-500 hover:bg-office-green-800 font-medium rounded-lg px-7 py-2 mt-5 flex items-center transition-colors ease-in-out"}>
                    Login <BsArrowRight className={"mx-2"}/>
                </button>
            </div>
        </CenteredFormComponent>
    );
}