import DatePicker, {registerLocale} from 'react-datepicker'
import React, {useEffect} from 'react'
import {
    addDays,
    addHours,
    addYears,
    differenceInHours,
    eachDayOfInterval,
    format, setDay,
    setHours,
    subDays
} from 'date-fns'
import {de} from 'date-fns/locale';
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import {useWizardStateContext} from "../../../context/WizardStateContext";
import {
    BUSINESS_HOURS_END,
    BUSINESS_HOURS_START,
    MIN_DURATION
} from "../../../misc/Constatns";

registerLocale('deDE', de);

export const AppointmentSelectionComponent = () => {
    const bookedDates = [
        {
            startDate: new Date(2023, 3, 1, 8, 0),
            endDate: new Date(2023, 3, 15, 10, 0)
        },
        {
            startDate: new Date(2023, 2, 1, 8, 0),
            endDate: new Date(2023, 2, 1, 14, 0)
        }
    ];

    const isInBookedRange = (date) => {
        return bookedDates.some((bookedDate) => {
            return date.getTime() >= bookedDate.startDate.getTime() && date.getTime() <= bookedDate.endDate.getTime();
        });
    }

    const findDateAfterBookedRange = (date) => {
        const dates = bookedDates.find((bookedDate) => {
            return date.getTime() >= bookedDate.endDate.getTime();
        });
        return {
            startDate: subDays(dates?.startDate || new Date(), 1).toLocaleString([], {
                dateStyle: 'short',
                timeStyle: 'short'
            }),
            endDate: addDays(dates?.endDate || new Date(), 1).toLocaleString([], {
                dateStyle: 'short',
                timeStyle: 'short'
            })
        }
    }


    const isCrossingBookedRange = (startDate, endDate) => {
        return bookedDates.some((bookedDate) => {
            return startDate.getTime() <= bookedDate.endDate.getTime() && endDate.getTime() >= bookedDate.startDate.getTime();
        });
    }

    const isNotMinDuration = (startDate, endDate) => {
        return differenceInHours(endDate, startDate) < MIN_DURATION;
    }

    const highlightBookedDateRanges =
        bookedDates.map((bookedDate) => {
            const dates =
                eachDayOfInterval({
                    start: bookedDate.startDate,
                    end: bookedDate.endDate
                });
            if (dates.length > 1) {
                return {
                    "react-datepicker__day--highlighted-custom-1": dates
                }
            }
            return {};
        });


    const {
        startDate,
        setStartDate,
        endDate,
        setEndDate
    } = useWizardStateContext();

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
            if (diffHours - 12 >= MIN_DURATION) return;

            // Calculate hours left until end of business day
            const hoursLeft = BUSINESS_HOURS_END - startDate.getHours();
            // Set end date to next day at 7am and add the hours left
            setEndDate(addHours(setHours(addDays(startDate, 1), BUSINESS_HOURS_START), MIN_DURATION - hoursLeft));
        }
    }, [startDate]);

    useEffect(() => {
        (document.getElementById("formNextButton") as HTMLButtonElement).disabled = isCrossingBookedRange(startDate, endDate) || isNotMinDuration(startDate, endDate);
    }, [startDate, endDate]);

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
                        className={`${props.prevMonthButtonDisabled && 'cursor-not-allowed opacity-50'} inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-office-green-500`}>
                        <BsChevronLeft className="w-5 h-5 text-gray-600"/>
                    </button>

                    <button
                        onClick={props.increaseMonth}
                        disabled={props.nextMonthButtonDisabled}
                        type="button"
                        className={`${props.nextMonthButtonDisabled && 'cursor-not-allowed opacity-50'} inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-office-green-500`}>
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
        const disabled = !(selected.getHours() < 7 || selected.getHours() > 20);

        // Check if the selected time is in a booked range on the same day and disable it
        if (isInBookedRange(selected)) return false;

        return disabled;
    }

    const filterDate = (date) => {
        // Check if the time is a weekend and disable it
        return !(date.getDay() === 0 || date.getDay() === 6);
    }

    useEffect(() => {
        // Set start date
        let date = startDate;
        // Check if it is a weekend
        if (date.getDay() === 0 || date.getDay() === 6) {
            // Set start date to next monday
            date = addDays(date, date.getDay() === 0 ? 1 : 2);
        }
        // Check if the date is within the business hours
        if (date.getHours() < BUSINESS_HOURS_START || date.getHours() > BUSINESS_HOURS_END) {
            // Set start date to 7am
            date = setHours(date, BUSINESS_HOURS_START);
            // if(new Date().getDay() == startDate.getDay() && new Date().getHours() > BUSINESS_HOURS_START) {
            //     date = addDays(date, 1);
            // }
        }
        setStartDate(date);
    }, []);


    return (
        <form id={"form"} className="w-full h-full">
            <h4 className={"font-medium"}>Bitte wählen Sie den Mietzeitraum
                aus</h4>
            <p className={"mb-2"}>(Der Buchungszeitraum muss mindestens 2
                Stunden und maximal 365 Tage umfassen.)</p>
            <div
                className="mx-auto w-full">
                <div className={"sm:grid-cols-2 grid-cols-1 grid w-full gap-4"}>
                    <div className="relative w-full">
                        <h4>Von</h4>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            locale={"deDE"}
                            showTimeSelect
                            timeCaption="Zeit"
                            timeIntervals={60}
                            shouldCloseOnSelect={false}
                            minDate={new Date()}
                            minTime={setHours(new Date(), 6)}
                            maxTime={setHours(new Date(), 20)}
                            filterTime={filterTime}
                            filterDate={filterDate}
                            excludeDates={new Date().getHours() >= BUSINESS_HOURS_END ? [new Date()] : []}
                            excludeDateIntervals={bookedDates.map(item => {
                                return {
                                    start: item.startDate,
                                    end: item.endDate
                                }
                            })
                            }
                            // filterDate={filterStartDate}
                            popperClassName="react-datepicker-left"
                            timeFormat="HH:mm"
                            dateFormat="dd.MM.yyyy HH:mm"
                            renderCustomHeader={CustomDateHeader}
                            highlightDates={highlightBookedDateRanges}
                        />
                    </div>
                    <div className="relative w-full">
                        <h4>Bis</h4>
                        <DatePicker
                            selected={endDate}
                            onChange={setEndDate}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            locale={"deDE"}
                            shouldCloseOnSelect={false}
                            dateFormat="dd.MM.yyyy HH:mm"
                            showTimeSelect
                            timeIntervals={60}
                            minTime={setHours(new Date(), 6)}
                            maxTime={setHours(new Date(), 20)}
                            minDate={startDate}
                            maxDate={addYears(new Date(), 1)}
                            filterTime={filterTime}
                            filterDate={filterDate}
                            excludeDateIntervals={bookedDates.map(item => {
                                return {
                                    start: item.startDate,
                                    end: item.endDate
                                }
                            })
                            }
                            timeCaption="Zeit"
                            popperClassName="react-datepicker-right"
                            renderCustomHeader={CustomDateHeader}
                            highlightDates={highlightBookedDateRanges}
                        />
                    </div>
                </div>
            </div>
            {
                isCrossingBookedRange(startDate, endDate) &&
                <div
                    className={"text-center flex flex-col justify-center h-1/3"}>
                <span className={"text-office-green-500 font-bold"}>Die von ihnen Gewählte
                    Zeitraum, überschneidet sich mit einer bereits vorhanden
                    Buchung.</span>
                    <span>Ihre Buchung muss am {findDateAfterBookedRange(endDate).startDate} Enden
                        oder am {findDateAfterBookedRange(endDate).endDate} starten!</span>
                </div>
            }

            {
                isNotMinDuration(startDate, endDate) &&
                <div
                    className={"text-center flex flex-col justify-center h-1/3"}>
                    <span className={"text-office-green-500 font-bold"}>Der Buchungszeitrum muss mindestens 2 Stunden umfassen!</span>
                </div>
            }
        </form>
    )
}
