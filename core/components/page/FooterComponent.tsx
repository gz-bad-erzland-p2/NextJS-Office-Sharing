import Link from "next/link";

export default function FooterComponent() {

    return (
        <div className="bg-white p-2.5">
            <div className="mx-auto max-w-screen-xl">
                <div className="md:flex md:justify-between">
                    <div className="grid grid-cols-2 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-3 text-sm font-semibold uppercase text-gray-700">Rechtsschutz</h2>
                            <div className="text-gray-600 flex flex-row gap-4">
                                <Link href="/impressum"
                                      className="hover:underline">Impressum</Link>
                                <Link href="/datenschutz"
                                      className="hover:underline">Datenschutz</Link>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-200 sm:mx-auto my-3"/>
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <Link
                        href="/" className="hover:underline">SecNetIT</Link>. All Rights Reserved.</span>
                </div>
            </div>
        </div>
    );
}