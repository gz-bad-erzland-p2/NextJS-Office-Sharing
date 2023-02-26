import {HardwareEnum} from "./enums/HardwareEnum";
import pc_image from "../../public/assets/img/esprimo.png";
import laptop_image from "../../public/assets/img/laptop.jpg";
import barebone_image from "../../public/assets/img/barebone.jpg";
import monitor_image from "../../public/assets/img/monitor.png";
import maus_image from "../../public/assets/img/mise.png";
import keyboard_image from "../../public/assets/img/keyboard.png";

export const HARDWARE_LIST = [
    {
        id: "pc",
        enum: HardwareEnum.PC,
        name: "ESPRIMO P5011",
        info: "hardware#pc",
        specs: [
            "Intel® Core™ i3-10105-Prozessor, 6 MB, 3.70 GHz",
            "16 GB DDR4 RAM",
            "256 GB SSD",
            "WLAN 802.11ax (2x2) PCIe x1 FH und Bluetooth 5.2",
            "2 x USB 2.0, 2 x USB 3.2 Gen 1"
        ],
        image: pc_image,
        svg: "assets/svg/desktop.svg",
        link: "https://gzhls.at/blob/ldb/c/a/2/c/66c0df85942d132e4cc53cda789efe4a8556.pdf",
        price: 8.50,
        show: true
    },
    {
        id: "laptop",
        name: "LIFEBOOK E4511",
        enum: HardwareEnum.Laptop,
        info: "hardware#laptop",
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
        svg: "assets/svg/laptop.svg",
        link: "https://sp.ts.fujitsu.com/dmsp/Publications/public/ds-LIFEBOOK-E4511-de.pdf",
        price: 3.50,
        show: true
    },
    {
        id: "barebone",
        name: "ESPRIMO Q556",
        enum: HardwareEnum.BAREBONE,
        info: "hardware#barebone",
        specs: [
            "Intel® Core™ i5-6400T-Prozessor 4 Kerne , 2.20 GHz",
            "8 GB DDR4 RAM",
            "256 GB SSD",
            "WLAN 802.11ax (2x2) PCIe x1 FH und Bluetooth 5.2",
            "2 x USB 2.0, 2 x USB 3.2 Gen 1"
        ],
        image: barebone_image,
        svg: "assets/svg/barebone.svg",
        link: "https://www.proton.net/Q556.pdf",
        price: 5.50,
        show: true
    },
    {
        id: "byod",
        name: "Eigenes Gerät",
        enum: HardwareEnum.BYOD,
        svg: "assets/svg/devices.svg",
        image: "assets/svg/devices.svg",
        link: "",
        specs: [],
        price: 0.0,
        show: false
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
        link: "https://sp.ts.fujitsu.com/dmsp/Publications/public/ds-display-b24-8-te-pro-de.pdf",
        show: true
    },
    {
        id: "mouse",
        name: "Fujitsu Maus M520",
        specs: [
            "Optische Maus",
            "USB-Anschluss",
            "3 Tasten",
            "1.000 dpi"
        ],
        image: maus_image,
        link: "https://sp.ts.fujitsu.com/dmsp/Publications/public/ds-Mouse-M520-grey-de.pdf",
        show: true
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
        link: "https://asset.re-in.de/add/160267/c1/-/de/001665687DS00/DA_Fujitsu-KB521-USB-Tastatur-Deutsch-QWERTZ-Windows-Grau-Spritzwassergeschuetzt.pdf",
        show: true
    }
]