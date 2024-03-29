"use client";
import Link from "next/link";
import React from "react";
import {useSelectedLayoutSegment} from "next/navigation";
import logo_img from "../../../public/assets/img/logo.png";
import Image from "next/image";

export default function HeaderComponent() {

    // See https://beta.nextjs.org/docs/api-reference/use-selected-layout-segment
    const segment = useSelectedLayoutSegment();

    const links = [
        {name: "Home", path: '#'},
        {name: "Buchung", path: 'wizard'},
        {name: "Support", path: 'support'},
        {name: "Hardware", path: 'hardware'}
    ];

    function toggleMenu(){
        const mobile_menu = document.getElementById("mobile_menu");
        mobile_menu?.classList.toggle("show_menu");
        const toggle_button = document.getElementById("toggle_button");
        toggle_button?.classList.toggle("display_toggle_button");
      }

    return (
        <div>
            <nav
                className="bg-white border-gray-200 px-4 md:px-4 py-2.5 drop-shadow-md z-50 min-h-20">
                <div
                    className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="#" className="flex items-center">
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap flex items-center">
                                <Image  alt="logo" src={logo_img}
                           className="h-[20px] w-auto mr-2 border" placeholder={"blur"} quality={"25"}></Image>
                                Office Sharing</span>

                    </Link>
                    <div className="hidden flex items-center md:order-2 md:block" >
                        <Link href="/signin"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 focus:outline-none">
                            Anmelden
                        </Link>
                        <Link href="/signup"
                            className="text-white bg-office-green-500 hover:bg-office-green-800 focus:ring-4 focus:ring-office-green-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 focus:outline-none">
                            Registrieren
                        </Link>
                    </div>
                        <button data-collapse-toggle="mega-menu" type="button" onClick={toggleMenu}
                                className="inline-flex items-center px-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                            <svg className="w-6 h-6" fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </button>
                    <div id="mega-menu"
                        className="hidden justify-between items-center w-full text-sm md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                            {
                                links.map((link, index) => {
                                    return (
                                        <li key={index}>
                                            <Link
                                                href={`/${link.path.toLowerCase()}`}
                                                className={`${(segment == null ? '#' : segment) == link.path ? `text-office-green-500` : `text-gray-700`} block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-office-green-500 md:p-0`}>
                                                {link.name}
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="toggle_button" onClick={toggleMenu}></div>
            <div id="mobile_menu">
                    <div className=" pr-3 mt-2 flex items-center justify-end">
                        <button data-collapse-toggle="mega-menu" type="button" onClick={toggleMenu}
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100">
                            <span className="sr-only">Öffne Navigation</span>
                            <svg className="w-6 h-6" fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                <div className="flex flex-col">
                    <ul onClick={toggleMenu} className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 link_list_mobile">
                        {
                            links.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <Link
                                            href={`/${link.path.toLowerCase()}`}
                                            className={`${(segment == null ? '#' : segment) == link.path ? `text-office-green-500` : `text-gray-700`} block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-office-green-500 md:p-0`}>
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <Link onClick={toggleMenu} href="/signin"
                        className="text-gray-800 m-3 text-center bg-slate-200 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5">
                            Anmelden
                    </Link>
                    <Link onClick={toggleMenu} href="/signup" className="text-white m-3 mt-0 text-center bg-office-green-500 hover:bg-office-green-800 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5">
                        Registrieren
                    </Link>
                </div>
            </div>
        </div>
    );
}
