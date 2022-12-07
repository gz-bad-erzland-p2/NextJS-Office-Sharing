import Image from "next/image";
import workspace_Image from "../public/assets/img/workspaces.png";

import {BsArrowRight} from "react-icons/bs";

export default function HomePage() {
    return (
        <div className={"bg-o-white rounded m-5 p-5 overflow-hidden"}>
            <div className={"relative z-20"}>
                <h1 className={"text-6xl m-5 text-o-green"}>office sharing.</h1>
                <p className={"text-o-green font-inter font-normal text-sm max-w-md"}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua.
                </p>
                <button className={"bg-o-white border-2 border-o-green p-1 text-o-green rounded-lg flex items-center my-5"}>
                    <BsArrowRight className={"mx-1"}/> book your table
                </button>
            </div>
            <Image src={workspace_Image} alt={"Workspaces"} placeholder={"blur"} width={1400} height={860} className={"relative z-10 -mt-96"}/>
        </div>
    )
}