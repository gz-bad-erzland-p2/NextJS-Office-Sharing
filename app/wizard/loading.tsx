"use client";
import DashedLoadingSpinner from "../../core/misc/spinner/DashedLoadingSpinner";

export default function Loading() {

    // return spinner if show is true
    return <div className={"flex items-center justify-center"}>
        <DashedLoadingSpinner stroke={"#067a46"} duration={1.6}
                              size={40}/>
    </div>;
}