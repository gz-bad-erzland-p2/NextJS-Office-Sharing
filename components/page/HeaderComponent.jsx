import Link from "next/link";
import React from "react";

export default function HeaderComponent() {
    return (
        <div className="relative w-full float-left bg-gray-100 mb-5 z-30">
            <div className="text-gray-800 px-4 py-2 m-2 float-left">Office-Sharing Bad-Erzland</div>
            <ul className={"relative list-none "}>
                <li className={"float-right text-gray-800 bg-gray-300 px-4 py-2 m-2 block"}>
                    <Link href={"/"}>
                        Abmelden
                    </Link>
                </li>
            </ul>
        </div>
    );
}