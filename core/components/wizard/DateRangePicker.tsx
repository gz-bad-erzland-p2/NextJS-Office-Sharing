import DatePicker, {registerLocale} from 'react-datepicker'
import {useEffect, useState} from 'react'
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import {addDays, addHours, addYears, format, setHours, subDays} from 'date-fns'
import {de} from 'date-fns/locale';
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import {useWizardStateContext} from "../../context/WizardStateContext";

registerLocale('deDE', de);

export default function DateRangePicker() {
    const MIN_DURATION = 2; // Minimale Buchungsdauer in Stunden
    const BUSINESS_HOURS_START = 7; // Geschäftszeitbeginn
    const BUSINESS_HOURS_END = 20; // Geschäftszeitende

    const [startDate, setStartDate] = useState(new Date(new Date().setUTCHours(new Date().getHours(), 0, 0, 0)));
    const [endDate, setEndDate] = useState(new Date(startDate));

    // useEffect(() => {
    //     if (startDate.getTime() > endDate.getTime()) setStartDate(new Date(endDate))
    //     if (startDate.getTime() > endDate.getTime()) setEndDate(startDate)
    //
    //     if (endDate.getTime() - startDate.getTime() < 2 * 60 * 60 * 1000) {
    //         setEndDate(new Date(startDate.getTime() + 2 * 60 * 60 * 1000))
    //     }
    //
    //     if (startDate.getHours() < 7 || startDate.getHours() > 20) {
    //         setStartDate(new Date(startDate.setHours(7)))
    //     }
    //
    //     if (endDate.getHours() < 7 || endDate.getHours() > 20) {
    //         setEndDate(new Date(endDate.setHours(20)))
    //     }
    // }, [endDate, startDate])


    // useEffect(() => {
    //     if (startDate.getTime() > endDate.getTime()) {
    //         setStartDate(new Date(endDate));
    //     } else if (endDate.getTime() - startDate.getTime() < 7200000) { // 2 hours in milliseconds
    //         const newEndDate = new Date(startDate);
    //         newEndDate.setHours(newEndDate.getHours() + 2);
    //         if (newEndDate.getHours() > 20 || newEndDate.getHours() < 7) {
    //             newEndDate.setDate(newEndDate.getDate() + 1);
    //             newEndDate.setHours(7);
    //         }
    //         setEndDate(newEndDate);
    //     }
    // }, [endDate, startDate])

    useEffect(() => {


        if(startDate.getTime() > endDate.getTime()) {
            setStartDate(new Date(endDate));
        }

        // Return if the minimum duration is fulfilled inside the business hours (7-20) hours outside of the business hours not counted


        if(addHours(startDate, 2).getHours() >= BUSINESS_HOURS_END) {
            // Calculate hours left until end of business day
            const hoursLeft = BUSINESS_HOURS_END - startDate.getHours();
            // Set end date to next day at 7am and add the hours left
            setEndDate(addHours(setHours(addDays(startDate, 1), BUSINESS_HOURS_START), MIN_DURATION - hoursLeft));
        }

        //
        // // setEndDate(addHours(startDate, 2));
        // if (addHours(startDate, 2).getHours() < BUSINESS_HOURS_START || addHours(startDate, 2).getHours() >= BUSINESS_HOURS_END) {
        //     const nextDay = new Date(endDate);
        //     nextDay.setDate(endDate.getDate() + 1);
        //     nextDay.setHours(BUSINESS_HOURS_START, 0, 0, 0);
        //     setEndDate(new Date(nextDay.getTime() + MIN_DURATION * 60 * 60 * 1000));
        // }
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


    /* TODO
     * - Add initial time selection logic of minimum 2 hours -> select new day when time is greater than 20:00
     * - Add time selection logic for each individual day
     * - Check minimum time span for each selection
     */

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



    // filter start date to only allow future dates and only dates that are lower than the end date
    const filterStartDate = (date) => {
        return date.getTime() >= subDays(new Date(), 1).getTime() && date.getTime() <= new Date(endDate).getTime()
    }
    // filter end date to only allow future dates and only dates that are higher than the start date
    const filterEndDate = (date) => {
        return date.getTime() >= subDays(startDate, 1).getTime() && date.getTime() >= subDays(new Date(), 1).getTime()
    }

    const onStartDateChange = (date) => {
        setStartDate(date);
    }

    const onEndDateChange = (date) => {
        setEndDate(date);
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
                        onChange={onStartDateChange}
                        selectsStart
                        locale={"deDE"}
                        showTimeSelect
                        timeCaption="Zeit"
                        timeIntervals={60}
                        startDate={startDate}
                        endDate={endDate}
                        shouldCloseOnSelect={false}
                        minDate={new Date()}
                        maxDate={endDate}
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
                        onChange={onEndDateChange}
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