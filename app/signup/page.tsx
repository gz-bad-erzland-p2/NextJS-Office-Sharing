"use client";
import RegisterComponent from "../../core/components/layout/RegisterComponent";
import React, {FormEvent, useState} from "react";

export default function WizardMainPage() {

    const [gender, setGender] = useState("");
    const [name, setName] = useState();
    const [surname, setSurName] = useState();
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [streetNumber, setStreetNumber] = useState();
    const [email, setEmail] = useState();
    const [zipCode, setZipCode] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <RegisterComponent
                setGender={setGender}
                gender={gender}
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
            />
            <button
                form={"form"} type="submit"
                className="text-white bg-office-green-500 hover:bg-office-green-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Registieren
            </button>
        </div>
    );
}