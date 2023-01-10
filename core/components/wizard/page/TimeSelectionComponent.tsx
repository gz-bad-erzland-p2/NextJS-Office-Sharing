import TimeSlotSelectorComponent from "../TimeSlotSelectorComponent";
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import {useState} from "react";
import DateRangePicker from "../DateRangePicker";


export const TimeSelectionComponent = () => {

    function fakeRequest(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Uncomment below to trigger error:
                // return reject('Error: KABOOM!');
                resolve({
                    status: 'ok',
                    scheduled: data
                });
            }, 2e3);
        });
    }

    const [isScheduling, setIsScheduling] = useState(false);
    const [isScheduled, setIsScheduled] = useState(false);
    const [scheduleErr, setScheduleErr] = useState('');
    const handleScheduled = date => {
        setIsScheduling(true);
        setScheduleErr('');
        fakeRequest(date)
            .then(json => {
                setScheduleErr('');
                setIsScheduled(true);
                console.log('fake response: ', json);
            })
            .catch(err => {
                setScheduleErr(err);
            })
            .finally(() => {
                setIsScheduling(false);
            });
    }

    return (
        <div className="flex justify-between gap-4 w-full">
            {/*<DayTimePicker*/}
            {/*    timeSlotSizeMinutes={15}*/}
            {/*    isLoading={isScheduling}*/}
            {/*    isDone={isScheduled}*/}
            {/*    err={scheduleErr}*/}
            {/*    onConfirm={handleScheduled}*/}
            {/*/>*/}
            <DateRangePicker />
            {/*<TimeSlotSelectorComponent />*/}
        </div>
    )
}