"use client";
import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState
} from "react";
import {WorkspaceTypeEnum} from "../utils/enums/WorkspaceTypeEnum";
import {OperatingSystemEnum} from "../utils/enums/OperatingSystemEnum";

interface WizardStateContextProps {
    workspaceType: WorkspaceTypeEnum;
    setWorkspaceType: (workspaceType: WorkspaceTypeEnum) => void;
    operatingSystem: OperatingSystemEnum;
    setOperatingSystem: (operatingSystem: OperatingSystemEnum) => void;
    name: string;
    setName: (name: string) => void;
    surname: string;
    setSurName: (surname: string) => void;
    street: string;
    setEmail: (email: string) => void;
    email: string;
    setStreet: (street: string) => void;
    streetNumber: string;
    setStreetNumber: (streetNumber: string) => void;
    city: string;
    setCity: (city: string) => void;
    zipCode: string;
    setZipCode: (zipCode: string) => void;
    password: string;
    setPassword: (password: string) => void;
}

interface DefaultWizardStateProps {
    name: string,
    surname: string,
    email: string,
    password: string,
    phone: number | undefined,
    street: string,
    streetNumber: string,
    zipCode: number | undefined,
    city: string,
    workspaceType: WorkspaceTypeEnum;
    operatingSystem: OperatingSystemEnum,
}

const initialState: DefaultWizardStateProps = {
    workspaceType: WorkspaceTypeEnum.SINGLE_DESK,
    operatingSystem: OperatingSystemEnum.WINDOWS,
    name: "",
    surname: "",
    email: "",
    password: "",
    phone: undefined,
    street: "",
    streetNumber: "",
    zipCode: undefined,
    city: "",
};

const WizardStateContext = createContext({});

export const useWizardStateContext = () => {
    return useContext(WizardStateContext) as Readonly<WizardStateContextProps>;
}


// Reducer is an useState with a custom business logic
export const WizardStateProvider = ({children}: { children: React.ReactNode }) => {

    // Save the data of the wizard in the state of the context provider in local storage to persist the data
    const [state, setState] = useState(() => {
    //     if (typeof window === "undefined") return initialState;
    //     const savedState = localStorage.getItem("wizardState");
    //     return savedState ? JSON.parse(savedState) : initialState;
        return initialState;
    });

    // Save the data of the wizard in the state of the context provider in local storage to persist the data
    // useEffect(() => {
    //     localStorage.setItem("wizardState", JSON.stringify(state));
    // }, [state]);

    const {
        workspaceType,
        name,
        city,
        operatingSystem,
        street,
        streetNumber,
        password,
        surname,
        zipCode,
        phone,
        email
    } = state;

    const setWorkspaceType = useCallback(
        (workspaceType: WorkspaceTypeEnum) => {
            setState({...state, workspaceType: workspaceType});
        }, [state]);

    // generate setters for each field
    const setName = useCallback(
        (name: string) => {
            setState({...state, name: name});
        }, [state]);

    const setCity = useCallback(
        (city: string) => {
            setState({...state, city: city});
        }, [state]);

    const setOperatingSystem = useCallback(
        (operatingSystem: OperatingSystemEnum) => {
            setState({...state, operatingSystem: operatingSystem});
        }, [state]);
    const setStreet = useCallback(
        (street: string) => {
            setState({...state, street: street});
        }, [state]);
    const setStreetNumber = useCallback(
        (streetNumber: string) => {
            setState({...state, streetNumber: streetNumber});
        },
        [state]
    );
    const setPassword = useCallback(
        (password: string) => {
            setState({...state, password: password});
        }, [state]);
    const setSurName = useCallback(
        (surname: string) => {
            setState({...state, surname: surname});
        }, [state]);
    const setZipCode = useCallback(
        (zipCode: number) => {
            setState({...state, zipCode: zipCode});
        }, [state]);
    const setPhone = useCallback(
        (phone: number) => {
            setState({...state, phone: phone});
        }, [state]);
    const setEmail = useCallback(
        (email: string) => {
            setState({...state, email: email});
        }, [state]);

    // useMemo only updates on the dependencies change
    const context = useMemo(
        () => ({
            workspaceType,
            name,
            city,
            operatingSystem,
            street,
            streetNumber,
            password,
            surname,
            zipCode,
            phone,
            email,
            setWorkspaceType,
            setName,
            setCity,
            setOperatingSystem,
            setStreet,
            setStreetNumber,
            setPassword,
            setSurName,
            setZipCode,
            setPhone,
            setEmail
        }),
        // eslint-disable-next-line max-len
        [workspaceType, name, city, operatingSystem, street, streetNumber, password, surname, zipCode, phone, email, setWorkspaceType, setName, setCity, setOperatingSystem, setStreet, setStreetNumber, setPassword, setSurName, setZipCode, setPhone, setEmail]
    );

    return (
        <WizardStateContext.Provider value={context}>
            {children}
        </WizardStateContext.Provider>
    );
}