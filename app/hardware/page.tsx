"use client";

import { useState, useEffect } from "react";
import GetTimeSlots from "../../pages/api/GetTimeSlots";

export default function WizardMainPage() {

    /*
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true);
        fetch("api/GetTimeSlots")
        .then(res => res.json())
        .then((data) => {
            setData(data);
            setLoading(false);
        })
    }, []);
*/
    const json = {
        "timeslots":
        [
            {"start":"2000-01-01T13:30:00.000Z","end":"2000-01-01T15:30:00.000Z"},
            {"start":"2000-01-01T13:45:00.000Z","end":"2000-01-01T19:30:00.000Z"},
            {"start":"2000-01-01T14:00:00.000Z","end":"2000-01-01T15:30:00.000Z"},
            {"start":"2000-01-01T14:15:00.000Z","end":"2000-01-01T18:30:00.000Z"},
        ]
    };



    return (<div>
                <h1>Hardware</h1>
                <div>

                    <select name="start" id="starttime">
                    {
                json.timeslots.map(e => {
                    const date1 = new Date(e.start);
                    const date2 = new Date(e.end);
                    var differenz = Math.abs(date1.getTime() - date2.getTime()) / 36e5;
                    
                    return (<option value={date1.getTime()}>{date1.toLocaleTimeString("de-DE")} ({differenz}h)</option>);
                })
                    }
                    </select>
                    </div>
            </div>
    );
}