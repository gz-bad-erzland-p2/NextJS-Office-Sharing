"use client";
import React, {useState} from "react";
import FloatingTextFieldComponent from "./FloatingTextFieldComponent";
import {CheckboxComponent} from "./CheckboxComponent";
import Link from "next/link";

export default function RegisterComponent(props) {

    const [passwordMatch, setPasswordMatch] = useState(false);
    const [isFirstClick, setIsFirstClick] = useState(false);

    const handleMessageHide = (): boolean => {
        if (!isFirstClick) {
            return true;
        }
        return passwordMatch;
    }
    return (
        <form id={"form"} className={props.className} {...props.attributes}>
            <div className="relative z-0 w-full mb-5">
                <select
                    name="genderSelect"
                    id="genderSelect"
                    defaultValue={props.gender}
                    required={true}
                    onChange={(event) => {
                        console.log(event.target.value)
                        props.setGender(event.target.value)
                    }}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300
                    appearance-none focus:outline-none focus:ring-0 focus:border-office-green-600 peer"
                >
                    <option value="" disabled hidden></option>
                    <option value="Herr">Herr</option>
                    <option value="Frau">Frau</option>
                    <option value="Divers">Divers</option>
                </select>
                <label htmlFor="genderSelect"
                       className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-office-green-600 peer-placeholder-shown:scale-100
                     peer-valid:-translate-y-6 peer-valid:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Anrede</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <FloatingTextFieldComponent label={"Vorname"} name={"name"}
                                            required={false}
                                            type={"text"}
                                            value={props.name}
                                            onChange={(event) => props.setName(event.target.value)}/>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <FloatingTextFieldComponent label={"Nachname"} name={"surname"}
                                            type={"text"}
                                            value={props.surname}
                                            onChange={(event) => props.setSurName(event.target.value)}/>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <FloatingTextFieldComponent label={"E-Mail"} name={"email"}
                                            type={"email"}
                                            value={props.email}
                                            onChange={(event) => props.setEmail(event.target.value)}/>
            </div>
            <div className={"grid md:grid-cols-4 md:gap-6"}>
                <div className="relative z-0 mb-6 w-full group md:col-span-3">
                    <FloatingTextFieldComponent label={"Straße"} name={"street"}
                                                type={"text"}
                                                value={props.street}
                                                onChange={(event) => props.setStreet(event.target.value)}/>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <FloatingTextFieldComponent label={"Hausnummer"}
                                                name={"streetNumber"}
                                                type={"text"}
                                                value={props.streetNumber}
                                                onChange={(event) => props.setStreetNumber(event.target.value)}/>
                </div>
            </div>
            <div className={"grid md:grid-cols-4 md:gap-6"}>
                <div className="relative z-0 mb-6 w-full group md:col-span-3">
                    <FloatingTextFieldComponent label={"Ort"} name={"city"}
                                                type={"text"}
                                                value={props.city}
                                                onChange={(event) => props.setCity(event.target.value)}/>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <FloatingTextFieldComponent label={"Postleitzahl"}
                                                name={"zipCode"}
                                                value={props.zipCode || ''}
                                                pattern={"^((^00000(|-0000))|(\\d{5}(|-\\d{4})))$"}
                                                title={"Bitte geben Sie eine gültige Postleitzahl ein"}
                                                type={"text"} // use string to check for pattern
                                                onChange={(event) => props.setZipCode(event.target.value)}/>
                </div>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <FloatingTextFieldComponent label={"Passwort"} name={"password"}
                                            type={"password"}
                                            value={props.password}
                                            onChange={(event) => {
                                                props.setPassword(event.target.value)
                                            }}/>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <FloatingTextFieldComponent label={"Passwort bestätigen"}
                                            name={"passwordRepeat"}
                                            type={"password"}
                                            onClick={() => setIsFirstClick(true)}
                                            onChange={(event) => {
                                                setPasswordMatch(event.target.value === props.password)
                                            }}
                                            classNameLabel={`${!passwordMatch && "peer-focus:text-red-500"}`}
                                            classNameInput={`${!passwordMatch && "focus:border-red-500"}`}/>
                <p className="mt-2 text-sm text-red-500 transition-all"
                   hidden={handleMessageHide()}>
                       <span className="font-medium">
                       Achtung!
                       </span> Dein Passwort muss übereinstimmen!
                </p>
            </div>
            <CheckboxComponent
                label={
                    <span>Ich stimme der
                        <Link href="/datenschutz"
                              target={"_blank"}
                              className="text-office-green-400 hover:underline"> Datenschutzverordnung </Link>
                    zu.
                    </span>
                }
                id={"terms"}
                required={true}
            />
        </form>
    );
}