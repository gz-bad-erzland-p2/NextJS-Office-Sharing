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
import {ItEnum} from "../utils/enums/ItEnum";

interface WizardStateContextProps {
    workspaceType: WorkspaceTypeEnum;
    setWorkspaceType: (workspaceType: WorkspaceTypeEnum) => void;
    operatingSystem: OperatingSystemEnum;
    setOperatingSystem: (operatingSystem: OperatingSystemEnum) => void;
    operatingSystem2: OperatingSystemEnum;
    setOperatingSystem2: (operatingSystem: OperatingSystemEnum) => void;
    ITSystem: ItEnum;
    setITSystem: (IT: ItEnum) => void;
    ITSystem2: ItEnum;
    setITSystem2: (IT: ItEnum) => void;
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
    startDate: Date;
    setStartDate: (startDate: Date) => void;
    endDate: Date;
    setEndDate: (endDate: Date) => void;
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
    ITSystem: ItEnum,
    ITSystem2: ItEnum,
    operatingSystem: OperatingSystemEnum,
    operatingSystem2: OperatingSystemEnum,
    startDate: Date,
    endDate: Date,
}

const initialState: DefaultWizardStateProps = {
    workspaceType: WorkspaceTypeEnum.SINGLE_DESK,
    ITSystem: ItEnum.PC,
    ITSystem2: ItEnum.PC,
    operatingSystem: OperatingSystemEnum.WINDOWS,
    operatingSystem2: OperatingSystemEnum.WINDOWS,
    name: "",
    surname: "",
    email: "",
    password: "",
    phone: undefined,
    street: "",
    streetNumber: "",
    zipCode: undefined,
    city: "",
    startDate: new Date(new Date().setUTCHours(new Date().getHours(), 0, 0, 0)),
    endDate: new Date(new Date().setUTCHours(new Date().getHours(), 0, 0, 0))

};

const WizardStateContext = createContext({});

export const useWizardStateContext = () => {
    return useContext(WizardStateContext) as Readonly<WizardStateContextProps>;
}


// Reducer is an useState with a custom business logic
export const WizardStateProvider = ({children}: { children: React.ReactNode }) => {

    // Save the data of the wizard in the state of the context provider in local storage to persist the data
    const [state, setState] = useState(() => {
        if (typeof window === "undefined") return initialState;
        const savedState = localStorage.getItem("wizardState");
        // convert date string to date object
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            return {
                ...parsedState,
                startDate: new Date(parsedState.startDate),
                endDate: new Date(parsedState.endDate),
            };
        }

        return savedState ? JSON.parse(savedState) : initialState;
        // return initialState;
    });

    // Save the data of the wizard in the state of the context provider in local storage to persist the data
    useEffect(() => {
        localStorage.setItem("wizardState", JSON.stringify(state));
    }, [state]);

    const {
        workspaceType,
        name,
        city,
        operatingSystem,
        operatingSystem2,
        ITSystem,
        ITSystem2,
        street,
        streetNumber,
        password,
        surname,
        zipCode,
        phone,
        email,
        startDate,
        endDate,
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
    const setOperatingSystem2 = useCallback(
        (operatingSystem: OperatingSystemEnum) => {
            setState({...state, operatingSystem2: operatingSystem});
        }, [state]);
    const setITSystem = useCallback(
        (itSystem: ItEnum) => {
            setState({...state, ITSystem: itSystem});
        }, [state]);
    const setITSystem2 = useCallback(
        (itSystem: ItEnum) => {
            setState({...state, ITSystem2: itSystem});
        }, [state]);
    const setStreet = useCallback(
        (street: string) => {
            setState({...state, street: street});
        }, [state]);
    const setStreetNumber = useCallback(
        (streetNumber: string) => {
            setState({...state, streetNumber: streetNumber});
        }, [state]);
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

    const setStartDate = useCallback(
        (startDate: Date) => {
            setState({...state, startDate: startDate});
        }, [state]);

    const setEndDate = useCallback(
        (endDate: Date) => {
            setState({...state, endDate: endDate});
        }, [state]);

    // useMemo only updates on the dependencies change
    const context = useMemo(
        () => ({
            workspaceType,
            name,
            city,
            operatingSystem,
            operatingSystem2,
            ITSystem,
            ITSystem2,
            street,
            streetNumber,
            password,
            surname,
            zipCode,
            phone,
            email,
            startDate,
            endDate,
            setWorkspaceType,
            setName,
            setCity,
            setOperatingSystem,
            setOperatingSystem2,
            setITSystem,
            setITSystem2,
            setStreet,
            setStreetNumber,
            setPassword,
            setSurName,
            setZipCode,
            setPhone,
            setEmail,
            setStartDate,
            setEndDate,
        }),
        // eslint-disable-next-line max-len
        [workspaceType, name, city, operatingSystem, operatingSystem2, ITSystem, ITSystem2, street, streetNumber, password, surname, zipCode, phone, email, startDate, endDate, setWorkspaceType, setName, setCity, setOperatingSystem, setOperatingSystem2, setITSystem, setITSystem2, setStreet, setStreetNumber, setPassword, setSurName, setZipCode, setPhone, setEmail, setStartDate, setEndDate]
    );

    return (
        <WizardStateContext.Provider value={context}>
            {children}
        </WizardStateContext.Provider>
    );
}