import {HardwareEnum} from "../utils/enums/HardwareEnum";

export const Hardware = [
    {
        processor: 'Intel Core i7-9700K',
        memory: '32GB',
        graphics: 'NVIDIA GeForce RTX 2080 Ti',
        storage: '1TB SSD'
    }
]

export const Price = {
    pc: 22.50,
    laptop: 22.50,
    barebone: 22.50,
    byod: 18
};


export const HardwareList = [
    {
        name: "Laptop",
        img: "assets/svg/laptop.svg",
        category: "hardware",
        value: HardwareEnum.Laptop,
        info: "hardware#laptop",
        price: Price.laptop

    },
    {
        name: "Desktop PC",
        img: "assets/svg/desktop.svg",
        category: "hardware",
        value: HardwareEnum.PC,
        info: "hardware#pc",
        price: Price.pc
    },
    {
        name: "Barebone",
        img: "assets/svg/barebone.svg",
        category: "hardware",
        value: HardwareEnum.BAREBONE,
        info: "hardware#barebone",
        price: Price.barebone
    },
    {
        name: "Eigenes Gerät",
        img: "assets/svg/devices.svg",
        category: "hardware",
        value: HardwareEnum.BYOD,
        price: Price.byod,
    },
]

