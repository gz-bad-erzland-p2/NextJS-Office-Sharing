import {OperatingSystemEnum} from "../utils/enums/OperatingSystemEnum";

export const OperatingSystemList = [
    {
        name: "Windows 10 Pro",
        img: "assets/svg/windows.svg",
        category: "os",
        value: OperatingSystemEnum.WINDOWS,
    },
    {
        name: "Debian 9 LTS",
        img: "assets/svg/linux_debian.svg",
        category: "os",
        value: OperatingSystemEnum.DEBIAN,
    },
    {
        name: "Ubuntu 22.04.1 LTS",
        img: "assets/svg/linux_ubuntu.svg",
        category: "os",
        value: OperatingSystemEnum.UBUNTU,
    },
    {
        name: "Linux Mint 21.1 LTS",
        img: "assets/svg/linux_mint.svg",
        category: "os",
        value: OperatingSystemEnum.LINUX_MINT,
    },
]