"use client";
import Link from "next/link";
import React, {useState} from "react";
import {useSelectedLayoutSegment} from "next/navigation";
import FloatingTextFieldComponent from "../other/FloatingTextFieldComponent";
import {useWizardStateContext} from "../../context/WizardStateContext";

export default function RegisterComponent(props) {



    const [passwordMatch, setPasswordMatch] = useState(false);
    const [isFirstClick, setIsFirstClick] = useState(false);

    // useEffect(() => {
    //     setCanGoNext(false);
    // }, [])

    const handleMessageHide = (): boolean => {
        if (!isFirstClick) {
            return true;
        }
        return passwordMatch;
    }
    return(
        <form id={"form"}>
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
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input id="terms" type="checkbox" value=""
                           className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focs"
                           required/>
                </div>
                <label htmlFor="terms"
                       className="ml-2 text-sm font-medium text-gray-900">Ich
                    stimme den
                    <Link href="#"
                          className="text-office-green-400 hover:underline"> AGB's
                        und der Datenschutzverordnung zu</Link>
                </label>
            </div>
        </form>
    );
}