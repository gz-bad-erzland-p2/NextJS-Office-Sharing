import React from "react";

export const CheckboxComponent = (props) => {
    return (
        <div className={`flex items-start mb-6 ${props.className}`}>
            <div className="flex items-center h-5">
                <input id={props.id} type="checkbox" value=""
                       defaultChecked={props.checked}
                       onChange={props.onChange}
                       required={props.required}
                       className="w-4 h-4 bg-gray-50 rounded border border-gray-300"/>
            </div>
            <label htmlFor={props.id}
                   className={`${props.classNameLabel ? props.classNameLabel : "ml-2 text-sm font-medium text-gray-900"}`}>{props.label}
            </label>
        </div>
    );
}