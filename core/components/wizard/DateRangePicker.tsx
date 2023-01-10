import DatePicker, {registerLocale} from 'react-datepicker'
import {useEffect, useState} from 'react'
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import {addDays, addHours, addYears, differenceInHours, format, setHours, subDays} from 'date-fns'
import {de} from 'date-fns/locale';
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";

registerLocale('deDE', de);

export default function DateRangePicker() {
    const MIN_DURATION = 2; // Minimale Buchungsdauer in Stunden
    const BUSINESS_HOURS_START = 7; // Geschäftszeitbeginn
    const BUSINESS_HOURS_END = 20; // Geschäftszeitende

    const [startDate, setStartDate] = useState(new Date(new Date().setUTCHours(new Date().getHours(), 0, 0, 0)));
    const [endDate, setEndDate] = useState(new Date(startDate));

    useEffect(() => {
        if (startDate.getTime() > endDate.getTime()) {
            setEndDate(new Date(startDate));
        }

        let diffHours = differenceInHours(endDate, startDate);

        if (MIN_DURATION >= diffHours) {
            setEndDate(addHours(endDate, MIN_DURATION - diffHours));
        }

        if (addHours(startDate, 1).getHours() >= BUSINESS_HOURS_END) {
            diffHours = differenceInHours(endDate, startDate);

            if(diffHours - 12 >= MIN_DURATION) return;


            // Calculate hours left until end of business day
            const hoursLeft = BUSINESS_HOURS_END - startDate.getHours();
            // Set end date to next day at 7am and add the hours left
            setEndDate(addHours(setHours(addDays(startDate, 1), BUSINESS_HOURS_START), MIN_DURATION - hoursLeft));
        }
    }, [startDate])

    const CustomDateHeader = (props) => {
        return (
            <div className="flex items-center justify-between px-2 py-2">
                <span
                    className="text-lg text-gray-700 font-bold">
                    {format(props.date, 'MMMM yyyy', {locale: de})}
                </span>

                <div className="space-x-2">
                    <button
                        onClick={props.decreaseMonth}
                        disabled={props.prevMonthButtonDisabled}
                        type="button"
                        className={`${props.prevMonthButtonDisabled && 'cursor-not-allowed opacity-50'} inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500`}>
                        <BsChevronLeft className="w-5 h-5 text-gray-600"/>
                    </button>

                    <button
                        onClick={props.increaseMonth}
                        disabled={props.nextMonthButtonDisabled}
                        type="button"
                        className={`${props.nextMonthButtonDisabled && 'cursor-not-allowed opacity-50'} inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500`}>
                        <BsChevronRight className="w-5 h-5 text-gray-600"/>
                    </button>
                </div>
            </div>);
    }

    const filterTime = (time) => {
        const selected = new Date(time);
        const current = new Date();

        // Check if the selected time is in the same day as the current time
        if (selected.toDateString() === current.toDateString()) {
            // Check if the selected time is after the current time
            if (selected.getTime() < current.getTime()) return false;
        }

        // Check if the selected time is before 7am or after 8pm
        return !(selected.getHours() < 7 || selected.getHours() > 20);
    }

    return (
        <div className="flex flex-col w-full">
            <div
                className="flex items-center justify-center py-5 mx-auto space-x-4 w-full">
                {/*<span*/}
                {/*    className="font-medium text-gray-900">Default Components:</span>*/}
                <div className="relative w-full">
                    <DatePicker
                        selected={startDate}
                        onChange={setStartDate}
                        selectsStart
                        locale={"deDE"}
                        showTimeSelect
                        timeCaption="Zeit"
                        timeIntervals={60}
                        startDate={startDate}
                        endDate={endDate}
                        shouldCloseOnSelect={false}
                        minDate={new Date()}
                        minTime={setHours(new Date(), 6)}
                        maxTime={setHours(new Date(), 20)}
                        filterTime={filterTime}
                        // filterDate={filterStartDate}
                        popperClassName="react-datepicker-left"
                        timeFormat="HH:mm"
                        dateFormat="dd.MM.yyyy HH:mm"
                        renderCustomHeader={CustomDateHeader}
                    />
                </div>
                <div className="relative w-full">
                    <DatePicker
                        selected={endDate}
                        onChange={setEndDate}
                        selectsEnd
                        locale={"deDE"}
                        shouldCloseOnSelect={false}
                        dateFormat="dd.MM.yyyy HH:mm"
                        showTimeSelect
                        startDate={startDate}
                        timeIntervals={60}
                        minTime={setHours(new Date(), 6)}
                        maxTime={setHours(new Date(), 20)}
                        minDate={startDate}
                        maxDate={addYears(new Date(), 1)}
                        filterTime={filterTime}
                        // filterDate={filterEndDate}
                        endDate={endDate}
                        timeCaption="Zeit"
                        popperClassName="react-datepicker-right"
                        renderCustomHeader={CustomDateHeader}
                    />
                </div>
            </div>
        </div>
    )
}