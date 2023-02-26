"use client";
import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState
} from "react";
import {WorkspaceTypeEnum} from "../misc/enums/WorkspaceTypeEnum";
import {OperatingSystemEnum} from "../misc/enums/OperatingSystemEnum";
import {HardwareEnum} from "../misc/enums/HardwareEnum";
import {nanoid} from "nanoid";

interface WizardStateContextProps {
    gender: string;
    setGender: (gender: string) => void;
    workspaceType: WorkspaceTypeEnum;
    setWorkspaceType: (workspaceType: WorkspaceTypeEnum) => void;
    operatingSystem: OperatingSystemEnum;
    setOperatingSystem: (operatingSystem: OperatingSystemEnum) => void;
    operatingSystem2: OperatingSystemEnum;
    setOperatingSystem2: (operatingSystem: OperatingSystemEnum) => void;
    hardware: HardwareEnum;
    setHardware: (hardware: HardwareEnum) => void;
    hardware2: HardwareEnum;
    setHardware2: (hardware2: HardwareEnum) => void;
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
    briefing: boolean;
    setBriefing: (briefing: boolean) => void;
    specification: string;
    setSpecification: (specification: string) => void;
    uuid: string,
}

export interface DefaultWizardStateProps {
    gender: string,
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
    hardware: HardwareEnum,
    hardware2: HardwareEnum,
    operatingSystem: OperatingSystemEnum,
    operatingSystem2: OperatingSystemEnum,
    startDate: Date,
    endDate: Date,
    briefing: boolean,
    specification: string,
    uuid: string,
    timestamp: number,
}

const initialState: DefaultWizardStateProps = {
    gender: "",
    workspaceType: WorkspaceTypeEnum.SINGLE_DESK,
    hardware: HardwareEnum.PC,
    hardware2: HardwareEnum.PC,
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
    endDate: new Date(new Date().setUTCHours(new Date().getHours(), 0, 0, 0)),
    briefing: false,
    specification: "",
    uuid: nanoid(11),
    timestamp: new Date().getTime()
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

        const returnState = savedState ? JSON.parse(savedState) : initialState;
        // Check if timestamp is older than 15 minutes
        if (returnState.timestamp + 900000 < new Date().getTime()) {
            return initialState;
        }
        return returnState;
        // return initialState;
    });

    // Save the data of the wizard in the state of the context provider in local storage to persist the data
    useEffect(() => {
        localStorage.setItem("wizardState", JSON.stringify(state));
    }, [state]);

    const {
        workspaceType,
        gender,
        name,
        city,
        operatingSystem,
        operatingSystem2,
        hardware,
        hardware2,
        street,
        streetNumber,
        password,
        surname,
        zipCode,
        phone,
        email,
        startDate,
        endDate,
        briefing,
        specification,
        uuid,
        timestamp
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
    const setHardware = useCallback(
        (hardwareEnum: HardwareEnum) => {
            setState({...state, hardware: hardwareEnum});
        }, [state]);
    const setHardware2 = useCallback(
        (hardwareEnum: HardwareEnum) => {
            setState({...state, hardware2: hardwareEnum});
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

    const setBriefing = useCallback(
        (briefing: boolean) => {
            setState({...state, briefing: briefing});
        }, [state]);

    const setSpecification = useCallback(
        (specification: string) => {
            setState({...state, specification: specification});
        }, [state]);

    const setGender = useCallback(
        (gender: string) => {
            setState({...state, gender: gender});
        }, [state]);

    // useMemo only updates on the dependencies change
    const context = useMemo(
        () => ({
            workspaceType,
            name,
            gender,
            city,
            operatingSystem,
            operatingSystem2,
            hardware,
            hardware2,
            street,
            streetNumber,
            password,
            surname,
            zipCode,
            phone,
            email,
            startDate,
            endDate,
            briefing,
            specification,
            setWorkspaceType,
            setGender,
            setName,
            setCity,
            setOperatingSystem,
            setOperatingSystem2,
            setHardware,
            setHardware2,
            setStreet,
            setStreetNumber,
            setPassword,
            setSurName,
            setZipCode,
            setPhone,
            setEmail,
            setStartDate,
            setEndDate,
            setBriefing,
            setSpecification,
            uuid,
            timestamp
        }),
        // eslint-disable-next-line max-len
        [workspaceType, name, gender, city, operatingSystem, operatingSystem2, hardware, hardware2, street, streetNumber, password, surname, zipCode, phone, email, startDate, endDate, briefing, specification, setWorkspaceType, setGender, setName, setCity, setOperatingSystem, setOperatingSystem2, setHardware, setHardware2, setStreet, setStreetNumber, setPassword, setSurName, setZipCode, setPhone, setEmail, setStartDate, setEndDate, setBriefing, setSpecification, uuid, timestamp]
    );

    return (
        <WizardStateContext.Provider value={context}>
            {children}
        </WizardStateContext.Provider>
    );
}