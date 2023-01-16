"use client";
import RegisterComponent from "../../core/components/page/RegisterComponent";
import React, {FormEvent, useState} from "react";
import CenteredFormComponent
    from "../../core/components/misc/CenteredFormComponent";

export default function WizardMainPage() {

    const [name, setName] = useState();
    const [surname, setSurName] = useState();
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [streetNumber, setStreetNumber] = useState();
    const [email, setEmail] = useState();
    const [zipCode, setZipCode] = useState();
    const [password, setPassword] = useState();


    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
    }

    return (
        <CenteredFormComponent onSubmit={submitHandler}>

            <div className={"flex flex-col items-center justify-center bg-white h-full md:w-1/2 w-full min-w-0 rounded-2xl drop-shadow-2xl px-5"}>
                <h1 className={"bold text-4xl px-2"}>Registrieren</h1>
                <RegisterComponent setName={setName}
                                   name={name}
                                   setSurName={setSurName}
                                   surname={surname}
                                   setStreet={setStreet}
                                   street={street}
                                   setStreetNumber={setStreetNumber}
                                   streetNumber={streetNumber}
                                   setCity={setCity}
                                   city={city}
                                   setEmail={setEmail}
                                   email={email}
                                   setZipCode={setZipCode}
                                   zipCode={zipCode}
                                   setPassword={setPassword}
                                   password={password}
                />
                <button
                    form={"form"} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit
                </button>
            </div>
        </CenteredFormComponent>
    );
}