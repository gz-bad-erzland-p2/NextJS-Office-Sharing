"use client";
import FloatingTextFieldComponent from "../../other/FloatingTextFieldComponent";
import {
    useWizardStateContext
} from "../../../context/WizardStateContext";
import {useState} from "react";
import Link from "next/link";
import RegisterComponent from "../../page/register";

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

    return(

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

    );
}