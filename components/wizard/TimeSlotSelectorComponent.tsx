export default function TimeSlotSelectorComponent() {

    return (
        <div className="flex justify-between gap-4">

            <div>
                <h2>Mietdatum:</h2>
                <input className="bg-white rounded-lg w-[252px] h-[40px] p-2 border-2 text-center" type="date"
                       id="start" name="trip-start"
                       value="2022-07-22"></input>
            </div>
            <div>
                <h2>Startzeit auswählen:</h2>
                <select className="bg-white rounded-lg w-[252px] h-[40px] p-2 border-2 text-center" name="cars"
                        id="cars">
                    <option defaultValue="10:00">10:00</option>
                    <option defaultValue="11:00">11:00</option>
                    <option defaultValue="12:00">13:00</option>
                    <option defaultValue="13:00">14:00</option>
                </select>
                <h2>Endzeit auswählen:</h2>
                <select className="bg-white rounded-lg w-[252px] h-[40px] p-2 border-2 text-center" name="cars"
                        id="cars">
                    <option defaultValue="10:00">10:00</option>
                    <option defaultValue="11:00">11:00</option>
                    <option defaultValue="12:00">13:00</option>
                    <option defaultValue="13:00">14:00</option>
                </select>

            </div>
        </div>

    )
}