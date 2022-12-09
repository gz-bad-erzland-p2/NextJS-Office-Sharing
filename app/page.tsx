import Image from "next/image";
import workspace_Image from "../public/assets/img/workspaces.png";

import {BsArrowRight} from "react-icons/bs";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className={"overflow-hidden"}>
            <div className={"relative z-20"}>
                <h1 className={"text-6xl m-5 text-o-green"}>office sharing.</h1>
                <p className={"text-o-green font-inter font-normal text-sm max-w-md"}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua.
                </p>
                <Link href={'/wizard'}><button className={"bg-o-white border-2 border-o-green p-1 text-o-green rounded-lg flex items-center my-5"}>
                    <BsArrowRight className={"mx-1"}/> book your table
                </button>
                </Link>
            </div>
            <Image src={workspace_Image} alt={"Workspaces"} placeholder={"blur"} className={"relative z-0 lg:-mt-96 md:-mt-44 sm:m-0 object-contain"}/>
        </div>
    )
}