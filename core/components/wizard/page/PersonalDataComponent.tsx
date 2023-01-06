import FloatingTextFieldComponent from "../../other/FloatingTextFieldComponent";
import {
    useWizardStateContext
} from "../../../context/WizardStateContext";
import {useState} from "react";
import Link from "next/link";

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

    return (
        <form id={"form"}>
            <div className="relative z-0 mb-6 w-full group">
                <FloatingTextFieldComponent label={"Vorname"} name={"name"}
                                            required={false}
                                            type={"text"}
                                            value={name}
                                            onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <FloatingTextFieldComponent label={"Nachname"} name={"surname"}
                                            type={"text"}
                                            value={surname}
                                            onChange={(event) => setSurName(event.target.value)}/>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <FloatingTextFieldComponent label={"E-Mail"} name={"email"}
                                            type={"email"}
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div className={"grid md:grid-cols-4 md:gap-6"}>
                <div className="relative z-0 mb-6 w-full group md:col-span-3">
                    <FloatingTextFieldComponent label={"Straße"} name={"street"}
                                                type={"text"}
                                                value={street}
                                                onChange={(event) => setStreet(event.target.value)}/>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <FloatingTextFieldComponent label={"Hausnummer"}
                                                name={"streetNumber"}
                                                type={"text"}
                                                value={streetNumber}
                                                onChange={(event) => setStreetNumber(event.target.value)}/>
                </div>
            </div>
            <div className={"grid md:grid-cols-4 md:gap-6"}>
                <div className="relative z-0 mb-6 w-full group md:col-span-3">
                    <FloatingTextFieldComponent label={"Ort"} name={"city"}
                                                type={"text"}
                                                value={city}
                                                onChange={(event) => setCity(event.target.value)}/>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <FloatingTextFieldComponent label={"Postleitzahl"}
                                                name={"zipCode"}
                                                value={zipCode || ''}
                                                pattern={"^((^00000(|-0000))|(\\d{5}(|-\\d{4})))$"}
                                                title={"Bitte geben Sie eine gültige Postleitzahl ein"}
                                                type={"text"} // use string to check for pattern
                                                onChange={(event) => setZipCode(event.target.value)}/>
                </div>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <FloatingTextFieldComponent label={"Passwort"} name={"password"}
                                            type={"password"}
                                            value={password}
                                            onChange={(event) => {
                                                setPassword(event.target.value)
                                            }}/>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <FloatingTextFieldComponent label={"Passwort bestätigen"}
                                            name={"passwordRepeat"}
                                            type={"password"}
                                            onClick={() => setIsFirstClick(true)}
                                            onChange={(event) => {
                                                setPasswordMatch(event.target.value === password)
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
                    <Link href="core/components/wizard/page#"
                          className="text-office-green-400 hover:underline"> AGB's
                        und der Datenschutzverordnung zu</Link>
                </label>
            </div>
            {/*<button type="submit"*/}
            {/*        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit*/}
            {/*</button>*/}
        </form>

    );
}