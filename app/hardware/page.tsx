import Image from "next/image";
import pc_image from "../../public/assets/img/esprimo.png";
import laptop_image from "../../public/assets/img/laptop.jpg";
import bareboen_image from "../../public/assets/img/barebone.jpg";

import monitor_image from "../../public/assets/img/monitor.png";
import maus_image from "../../public/assets/img/mise.png";
import keyboard_image from "../../public/assets/img/keyboard.png";

export default function HarwareMainPage() {

    const hardware = [
        {
            id: "pc",
            name: "ESPRIMO P5011",
            specs: [
                "Intel® Core™ i3-10105-Prozessor, 6 MB, 3.70 GHz",
                "16 GB DDR4 RAM",
                "256 GB SSD",
                "WLAN 802.11ax (2x2) PCIe x1 FH und Bluetooth 5.2",
                "2 x USB 2.0, 2 x USB 3.2 Gen 1"
            ],
            image: pc_image,
            link: "https://gzhls.at/blob/ldb/c/a/2/c/66c0df85942d132e4cc53cda789efe4a8556.pdf"
        },
        {
            id: "laptop",
            name: "LIFEBOOK E4511",
            specs: [
                "Intel® Core™ i5-1135G7-Prozessor 8 Kerne 4,20GHz",
                "8 GB DDR4 RAM",
                "256 GB SSD",
                "WLAN 802.11ax (2x2) PCIe x1 FH und Bluetooth 5.2",
                "USB-A (3), USB-C (1) mit Thunderbolt™ 4",
                "Integriertes Display mit 1920 x 1080 Pixel",
                "Laufzeit bis zu 8 Stunden"
            ],
            image: laptop_image,
            link: "https://sp.ts.fujitsu.com/dmsp/Publications/public/ds-LIFEBOOK-E4511-de.pdf"
        },
        {
            id: "barebone",
            name: "ESPRIMO Q556",
            specs: [
                "Intel® Core™ i5-6400T-Prozessor 4 Kerne , 2.20 GHz",
                "8 GB DDR4 RAM",
                "256 GB SSD",
                "WLAN 802.11ax (2x2) PCIe x1 FH und Bluetooth 5.2",
                "2 x USB 2.0, 2 x USB 3.2 Gen 1"
            ],
            image: bareboen_image,
            link: "https://www.proton.net/Q556.pdf"
        },
        {
            id: "monitor",
            name: "Fujitsu Display B24-8 TE Pro",
            specs: [
                "Bildschirmgröße: 23,8 Zoll (1920 x 1080 Pixel)",
                "Höhenverstellbar: 150 mm",
                "5-in-1-Standfuß",
                "DisplayPort, HDMI, VGA, DVI, 3,5 mm Klinke"
            ],
            image: monitor_image,
            link: "https://sp.ts.fujitsu.com/dmsp/Publications/public/ds-display-b24-8-te-pro-de.pdf"
        },
        {
            id: "maus",
            name: "Fujitsu Maus M520",
            specs: [
                "Optische Maus",
                "USB-Anschluss",
                "3 Tasten",
                "1.000 dpi"
            ],
            image: maus_image,
            link: "https://sp.ts.fujitsu.com/dmsp/Publications/public/ds-Mouse-M520-grey-de.pdf"
        },
        {
            id: "keyboard",
            name: "Fujitsu Tastatur KB521",
            specs: [
                "USB-Anschluss",
                "QWERTZ-Layout",
                "Deutsch",
                "12 Funktionstasten inkl. Nummernblock",
            ],
            image: keyboard_image,
            link: "https://asset.re-in.de/add/160267/c1/-/de/001665687DS00/DA_Fujitsu-KB521-USB-Tastatur-Deutsch-QWERTZ-Windows-Grau-Spritzwassergeschuetzt.pdf"
        }
    ]

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
                hardware.map((item, index) => {
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