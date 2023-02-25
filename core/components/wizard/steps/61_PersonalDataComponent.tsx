"use client";
import {useWizardStateContext} from "../../../context/WizardStateContext";
import RegisterComponent from "../../RegisterComponent";
import React from "react";
import {useWizardStepContext} from "../../../context/WizardStepContext";
import {BsArrowRight} from "react-icons/bs";

export const PersonalDataComponent = () => {
    const {
        setName,
        name,
        setSurName,
        surname,
        setStreet,
        street,
        setStreetNumber,
        streetNumber,
        setCity,
        city,
        setEmail,
        email,
        setZipCode,
        zipCode,
        setPassword,
        password,
        gender,
        setGender,
    } = useWizardStateContext();

    const {setIsRegister} = useWizardStepContext();

    return (
        <div className={"w-full"}>
            <div
                className={"m-auto w-auto flex justify-center flex-col"}>
                <RegisterComponent
                    className={"w-full"}
                    setName={setName}
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
                    gender={gender}
                    setGender={setGender}
                />

                <button
                    type={"submit"}
                    className={"w-full text-white bg-office-green-500 text-center hover:bg-office-green-800 font-medium rounded-lg p-2 flex items-center transition-colors justify-center ease-in-out"}>
                    Registrieren <BsArrowRight className={"mx-2"}/>
                </button>

                <button
                    className={"w-1/2 flex self-center justify-center mt-2 text-office-green-500 text-center hover:bg-office-gray-400 rounded-lg p-1 transition-colors ease-in-out duration-500"}
                    onClick={() => setIsRegister(false)}>
                    oder Anmelden
                </button>
            </div>
        </div>
    );
}