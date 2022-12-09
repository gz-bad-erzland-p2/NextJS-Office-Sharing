import Link from "next/link";
import React from "react";

export default function HeaderComponent() {
    return (

        <nav className="bg-white border-gray-200 px-2 md:px-4 py-2.5 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link href="https://flowbite.com" className="flex items-center">
                    <img className="mr-3 h-6 sm:h-9"
                         alt="Flowbite Logo"/>
                    <span
                        className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </Link>
                <div className="flex items-center md:order-2">
                    <Link href="/login"
                       className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</Link>
                    <Link href="/signup"
                       className="text-white bg-o-green hover:bg-o-green-dark focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-o-green focus:outline-none dark:focus:ring-blue-800">Sign
                        up</Link>
                    <button data-collapse-toggle="mega-menu" type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mega-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div id="mega-menu"
                     className="hidden justify-between items-center w-full text-sm md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                        <li>
                            <Link href="/"
                               className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent text-o-green md:border-0 md:hover:text-o-green md:p-0 dark:text-o-green md:dark:hover:text-o-green dark:hover:bg-gray-700 dark:hover:text-o-green md:dark:hover:bg-transparent dark:border-gray-700"
                               aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="/support"
                               className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-o-green md:p-0 dark:text-gray-400 md:dark:hover:text-o-green dark:hover:bg-gray-700 dark:hover:text-o-green md:dark:hover:bg-transparent dark:border-gray-700">Support</Link>
                        </li>
                        <li>
                            <Link href="/hardware"
                               className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-o-green md:p-0 dark:text-gray-400 md:dark:hover:text-o-green dark:hover:bg-gray-700 dark:hover:text-o-green md:dark:hover:bg-transparent dark:border-gray-700">Hardware</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}