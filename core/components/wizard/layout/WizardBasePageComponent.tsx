import React from "react";

export default function WizardBasePageComponent({
                                              children,
                                              heading
                                          }: { children: React.ReactNode, heading: string }) {
    return (
        <div className={"flex-1 flex flex-col h-full"}>
            <h1 className={"text-2xl font-bold flex justify-center mt-5"}>{heading}</h1>
            {children}
        </div>
    )
}