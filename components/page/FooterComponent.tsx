import Link from "next/link";

export default function FooterComponent() {

    return (
        <div className="bg-white sticky p-2.5" style={{top: '100vh'}}>
            <div className="mx-auto max-w-screen-xl">
                <div className="flex items-center justify-between">
                    <span
                        className="text-sm sm:text-center text-gray-400">© 2022 <Link
                        href="#" className="hover:underline">SecNetIT</Link>. All Rights Reserved.
                    </span>
                    <div className={"flex flex-col md:flex-row gap-2 justify-between text-gray-400"}>
                        <Link href="#"
                              className="hover:underline">Impressum</Link>
                        <Link href="#"
                              className="hover:underline">Datenschutz</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}