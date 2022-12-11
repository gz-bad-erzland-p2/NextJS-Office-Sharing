import React from "react";

export default function CenteredFormComponent({children, onSubmit}: { children: React.ReactNode, onSubmit: React.FormEventHandler<HTMLFormElement> }) {
    return (
        <form className={"flex-1 flex flex-col items-center justify-center my-5"} onSubmit={onSubmit}>
            {children}
        </form>
    );
}