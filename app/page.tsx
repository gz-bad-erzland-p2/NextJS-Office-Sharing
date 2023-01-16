import Image from "next/image";
import workspace_Image from "../public/assets/img/workspaces.png";

import {BsArrowRight} from "react-icons/bs";
import Link from "next/link";

export default function HomePage() {
    return (
        <div
            className={"overflow-hidden flex flex-wrap justify-between items-center mx-auto pt-5 max-w-screen-xl"}>
            <div className={"relative z-20"}>
                <h1 className={"text-6xl m-5 ml-0 text-office-green-500"}>office
                    sharing.</h1>
                <p className={"text-office-green-500 font-inter font-normal text-sm max-w-md"}>
                    {/* eslint-disable-next-line max-len */}
                Willkommen auf unserer Office Sharing Plattform. Hier haben Sie die Möglichkeit, Arbeitsplätze auf Zeit zu reservieren. Durch eine Buchung bei uns erhalten Sie Zugang zu modern ausgestatteten Büromöglichkeiten, schnellem Internet und einer produktiven Arbeitsumgebung.
                </p>
                <Link href={'/wizard'}>
                    <button
                        className={"bg-office-gray-500 border-2 ml-1.5 border-office-green-500 p-1 text-office-green-500 rounded-lg flex items-center my-5 hover:bg-office-green-500 hover:text-office-gray-500 transition duration-300 ease-in-out hover:scale-105"}>
                        <BsArrowRight className={"mx-1"}/> Arbeitsplatz buchen
                    </button>
                </Link>
            </div>
            <Image src={workspace_Image} alt={"Workspaces"}
                   className={"relative z-0 lg:-mt-96 md:-mt-44 sm:m-0 object-contain"}/>
        </div>
    )
}