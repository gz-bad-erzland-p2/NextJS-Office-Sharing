"use client";

export default function HarwareMainPage() {
    return (
        <div className=" w-full">
            <div className="m-20 text-center">
                <h1 className="text-2xl m-5 ">Hardware</h1>
                <h2>Unsere Hardware</h2>
                <p>Es folgen eine Auflistung aller Hardware die bei uns zur
                    Verfügung steht. <br></br>Standart Mäßig sind an jedem
                    Arbeitsplatz Ein Desktop PC mit dem Monitor ...., der Maus
                    ... und der Tastatur ... vorhanden. <br></br>Benötigen Sie
                    weitere Hardware so shcreiben Sie das bitte im
                    Buchungsprozess dazu.</p>
                <div>
                    <div className="HardwareImage"><img src=""/></div>
                    <div className="HardwareDescription"><h3></h3></div>
                </div>
            </div>

            <div className="m-20 ">
                <div className="flex justify-center">
                    <div className="bg-white mr-10 w-[400px] h-[300px]">bild
                    </div>
                    <div className="w-[400px] h-[300px]  flex  items-center">
                        <div>
                            <p className="text-xl">Monitor</p>
                            <p>140x13px <br/>voll groß</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}