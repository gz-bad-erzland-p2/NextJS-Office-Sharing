export default function FooterComponent() {

    return (
        // <div className="flex-wrap justify-between items-center">

            <div className="bg-white sticky p-5" style={{top: '100vh'}}>
                <div className="mx-auto max-w-screen-xl">
                <div className="md:flex md:justify-between">
                    {/*<div className="mb-6 md:mb-0">*/}
                    {/*    <a href="https://flowbite.com/" className="flex items-center">*/}
                    {/*        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8"*/}
                    {/*             alt="FlowBite Logo"/>*/}
                    {/*        <span*/}
                    {/*            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase text-gray-700">Links</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="/" className="hover:underline">Home</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/hardware" className="hover:underline">Hardware</a>
                                </li>
                                <li>
                                    <a href="/support" className="hover:underline">Support</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase text-gray-700">Anmeldung</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite"
                                       className="hover:underline ">Anmelden</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Registrieren</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Ausloggen</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase text-gray-700">Rechtsschutz</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Impressum</a>
                                </li>
                                <li >
                                    <a href="#" className="hover:underline">Datenschutz</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm  sm:text-center dark:text-gray-400">© 2022 <a
                        href="https://flowbite.com/" className="hover:underline">SecNetIT</a>. All Rights Reserved.        </span>
                    
                </div>
                </div>
            </div>
        // </div>
    );
}