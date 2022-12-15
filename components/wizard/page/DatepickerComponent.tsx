import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function DatepickerComponent(){
    const [year, setyear] = useState(new Date().getFullYear() );
    const [month, setmonth] = useState(new Date().getMonth() );
    const [day, setday] = useState(new Date().getDay() );
    const [mothl, setmonthl] = useState(69);
    const [offset, setoffset] = useState(2);
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    const weekdays = ["Mo","Di","Mi","Do","Fr","Sa","So"];

    function updateMonth(add){
        setmonth(month+add)
        const tempMonth = month + add
        if(tempMonth >12 ){
            setmonth(1)
            setyear(year+1)
        }
        if(tempMonth <1 ){
            setmonth(12)
            setyear(year-1)
        }
    }

    return(
        <div className="w-80 bg-white ">
            <div className="flex justify-between">
                <button onClick={()=> updateMonth(-1)}> <SlArrowLeft /> </button>
                <h2>{monthNames[month-1]} {month} {year}</h2>
                <button onClick={()=> updateMonth(+1)}> <SlArrowRight /> </button>
            </div>
            <div>
                <table>
                    
                </table>
            </div>
        </div>
    )
}