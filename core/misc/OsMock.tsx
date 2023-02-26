import {OperatingSystemEnum} from "./enums/OperatingSystemEnum";

export const OperatingSystemList = [
    {
        name: "Windows 10 Pro",
        img: "assets/svg/windows.svg",
        enum: OperatingSystemEnum.WINDOWS,
    },
    {
        name: "Debian 9 LTS",
        img: "assets/svg/linux_debian.svg",
        enum: OperatingSystemEnum.DEBIAN,
    },
    {
        name: "Ubuntu 22.04.1 LTS",
        img: "assets/svg/linux_ubuntu.svg",
        enum: OperatingSystemEnum.UBUNTU,
    },
    {
        name: "Linux Mint 21.1 LTS",
        img: "assets/svg/linux_mint.svg",
        enum: OperatingSystemEnum.LINUX_MINT,
    },
]