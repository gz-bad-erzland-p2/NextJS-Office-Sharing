// export const OperatingSystemEnum: { [x: string]: 'WINDOWS' | 'LINUX'} = {
//     WINDOWS: 'WINDOWS',
//     LINUX: 'LINUX'
// }
//
//
// export type OperatingSystemEnum = typeof OperatingSystemEnum[keyof typeof OperatingSystemEnum]

export enum OperatingSystemEnum {
    WINDOWS = "WINDOWS",
    LINUX = "LINUX",
    LINUXMINT = "LINUXMINT"
}