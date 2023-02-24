import Image from "next/image";
import Link from "next/link";
import {BsInfoCircle} from "react-icons/bs";

export default function SelectOption(props) {

    return (
        <li className={"w-full h-full max-h-44 relative"} onClick={() => {
            props.setter(props.value);
        }}>
            <input type="radio" id={props.name + props.id} name={props.category}
                   className="hidden peer"
                   defaultChecked={props.value === props.getter}/>

            <label htmlFor={props.name + props.id}
                   className="relative inline-flex justify-center h-full w-full items-center text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-office-green-500 peer-checked:text-office-green-500 hover:text-gray-600 hover:bg-gray-100">
                <div
                    className={"flex flex-row flex-col items-center justify-left justify-between h-full w-full"}>
                    <Image src={props.img}
                           alt={props.name}
                           className={"flex-grow object-contain mt-2 h-[96] w-[96]"}
                           width={96} height={96}/>
                    <div className="text-lg font-semibold">
                        <p className="text-center text-lg font-medium !mb-0">{props.name}</p>
                        {props.price &&
                            <p className="text-s mb-0 relative inherit ml-3 ml-0 text-center">{props.price}€/h</p>
                        }
                    </div>
                </div>
                {props.infoUrl &&
                    <Link href={props.infoUrl} target="_blank"
                          className={"has-tooltip"}>
                        <span
                            className='tooltip rounded shadow-lg p-1 bg-office-green-700 text-office-gray-500 -mt-14 -m-40'>Mehr Information</span>
                        <BsInfoCircle
                            className="absolute top-0 right-0 mt-2 mr-2 transition"/>
                    </Link>
                }
            </label>
        </li>

    )
}