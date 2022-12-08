import {useEffect, useState} from "react";
import styles from './[Wizard].module.css'

export default function Wizard() {

    const [counter, setCounter] = useState(0);

    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div>
            <h1>              {date.toLocaleTimeString()}</h1>
            <h1>{counter == 0 ? "TEST" : counter}</h1>
            <button onClick={() => {
                setCounter(counter + 1);
            }}>Click Me
            </button>
        </div>
    );
}