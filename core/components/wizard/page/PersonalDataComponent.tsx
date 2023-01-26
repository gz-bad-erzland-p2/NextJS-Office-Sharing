"use client";
import {useWizardStateContext} from "../../../context/WizardStateContext";
import RegisterComponent from "../../layout/RegisterComponent";
import React from "react";
import {useWizardStepContext} from "../../../context/WizardStepContext";

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
        password
    } = useWizardStateContext();

    const {setIsRegister} = useWizardStepContext();

    return (
        <div>
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
            <button className={"mt-4"} onClick={() => setIsRegister(false)}>oder
                Anmelden
            </button>
        </div>
    );
}