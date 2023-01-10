"use client";
import DashedLoadingSpinner from "../core/utils/spinner/DashedLoadingSpinner";
import {useEffect, useState} from "react";

export default function Loading() {

    const [show, setShow] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setShow(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    // return spinner if show is true
    return show ? <div className={"flex items-center justify-center"}>
        <DashedLoadingSpinner stroke={"#067a46"} duration={1.6}
                              size={40}/>
    </div> : null;
}