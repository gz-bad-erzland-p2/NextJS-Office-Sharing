import React from "react";

export default function BasePageComponent({children, heading}: { children: React.ReactNode, heading: string }) {
    return (
        <div className={"flex-1 flex flex-col h-full"}>
            <h1 className={"text-2xl font-bold bg-red-100 flex justify-center"}>{heading}</h1>
            {children}
        </div>
    )
}