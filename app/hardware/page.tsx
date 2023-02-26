import Image from "next/image";
import {HARDWARE_LIST} from "../../core/misc/HardwareMocks";

export default function HarwareMainPage() {

    return (
        <div className="w-full">
            <div className="m-10 text-center">
                <h1 className="m-10">Hardware</h1>
                <div className={"text-xl"}>
                    Es folgen eine Auflistung aller Hardware die bei uns zur
                    Verfügung steht.
                    <br />
                    Benötigen Sie weitere Hardware so
                    ergänzen Sie diese bitte im Buchungsprozess.
                </div>
            </div>

            {
                HARDWARE_LIST.map((item, index) => {
                    return (
                        <section id={item.id} className="m-10 pb-5 border-b-2" key={index}>
                            <div
                                className="flex justify-center flex-col md:flex-row">
                                <Image alt={item.name} src={item.image}
                                       className={"mix-blend-multiply w-full max-w-md mr-10 rounded-xl object-scale-down"}
                                       placeholder={"blur"} quality={"75"} />
                                <div
                                    className="sm:w-[400px] flex items-center">
                                    <div className={"sm:mb-20"}>
                                        <h4>{item.name}</h4>
                                        {
                                            item.specs.map((spec, index) => {
                                                return (
                                                    <li key={index}>{spec}
                                                    </li>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                })
            }
        </div>
    )
}