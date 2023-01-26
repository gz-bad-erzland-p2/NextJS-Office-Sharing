import Image from "next/image";
import Link from "next/link";
import {BsInfoCircle} from "react-icons/bs";

export default function SelectOption(props) {

    return (
        <li className={"w-full h-10 md:h-40 relative"} onClick={() => {
            props.setter(props.value);
        }}>
            <input type="radio" id={props.name + props.id} name={props.category}
                   className="hidden peer"
                   defaultChecked={props.getter === props.value}/>

            <label htmlFor={props.name + props.id}
                   className="colorBg relative inline-flex justify-center items-center h-full w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-office-green-500 peer-checked:text-office-green-500 hover:text-gray-600 hover:bg-gray-100">
                <div
                    className={"flex flex-row md:flex-col w-full h-full items-center justify-left md:justify-between"}>
                    <Image src={props.img}
                           alt={props.name}
                           className={"flex-grow md:w-full h-full !max-w-[90px] md:max-w-none"}
                           width={24} height={24}/>
                    <div className="text-lg font-semibold">

                        <div className="flex flex-row-reverse md:flex-col ">
                            {props.price &&
                                <p className="!text-s !mb-0 relative inherit !ml-3 md:!ml-0 md:text-center">{props.price}€/h</p>
                            }
                            <p className="text-center text-lg font-medium !mb-0">{props.name}</p>
                        </div>
                    </div>
                </div>
                {props.infoUrl &&
                    <Link href={props.infoUrl} target="_blank" className={"has-tooltip"}>
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