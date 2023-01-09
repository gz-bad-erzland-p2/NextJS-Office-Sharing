"use client";
import Image from "next/image";
import pc_image from "../../public/assets/img/esprimo.png";
import monitor_image from "../../public/assets/img/monitor.png";
import mise_image from "../../public/assets/img/mise.png";
import keyboard_image from "../../public/assets/img/keyboard.png";

import { useState, useEffect } from "react";
import GetTimeSlots from "../../pages/api/GetTimeSlots";

export default function HarwareMainPage() {
    return(
        <div className=" w-full">
            <div className="m-20 text-center">
            <h1 className="text-2xl m-5 ">Hardware</h1>
            <h2>Unsere Hardware</h2>
            <p>Es folgen eine Auflistung aller Hardware die bei uns zur Verfügung steht. <br></br>Standart Mäßig sind an jedem Arbeitsplatz Ein Desktop PC mit dem Monitor ...., der Maus ... und der Tastatur ... vorhanden. <br></br>Benötigen Sie weitere Hardware so shcreiben Sie das bitte im Buchungsprozess dazu.</p>
            <div>
            <div className="HardwareImage max-w-[300px]">  </div>
            <div className="HardwareDescription"><h3></h3></div>
            </div>
            </div>

            <div className="m-20 ">
                <div className="flex justify-center">
                    <div className="bg-white mr-10 w-[400px]  rounded-xl p-[10px]"><Image alt="ESPRIMO" src={pc_image}></Image></div> 
                    <div className="w-[400px] h-[300px]  flex  items-center">
                        <div>
                            <p className="text-xl">ESPRIMO P5011</p>
                            <p>Intel® Core™ i3-10105-Prozessor, 6 MB, 3.70 GHz <br/>16 GB RAM</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-20 ">
                <div className="flex justify-center">
                    <div className="bg-white mr-10 w-[400px]  rounded-xl p-[10px]"><Image alt="Monitor" src={monitor_image}></Image></div> 
                    <div className="w-[400px] h-[300px]  flex  items-center">
                        <div>
                            <p className="text-xl">Fujitsu Display B24-8 TE Pro</p>
                            <p>23,8 Zoll<br/>1.920 x 1.080 Pixel</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-20 ">
                <div className="flex justify-center">
                    <div className="bg-white mr-10 w-[400px]  rounded-xl p-[10px]"><Image alt="Monitor" src={mise_image}></Image></div> 
                    <div className="w-[400px] h-[300px]  flex  items-center">
                        <div>
                            <p className="text-xl">Maus M520</p>
                            <p>1.000 dpi </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-20 " >
                <div className="flex justify-center">
                    <div className="bg-white mr-10 w-[400px]  rounded-xl p-[10px]"><Image alt="Monitor" src={keyboard_image}></Image></div> 
                    <div className="w-[400px] h-[300px]  flex  items-center">
                        <div>
                            <p className="text-xl">Keyboard KB521</p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        

    )
}