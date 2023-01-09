export default function TimeSlotSelectorComponent() {

    return (
        <div className="flex justify-between gap-4">

            <div>
                <h2>Mietdatum:</h2>
                <input
                    className="input-field"
                    type="date"
                    id="start" name="trip-start"
                    value="2022-07-22"></input>
            </div>
            <div>
                <h2>Startzeit auswählen:</h2>
                <select
                    className="input-field"
                    name="cars"
                    id="cars">
                    <option defaultValue="10:00">10:00</option>
                    <option defaultValue="11:00">11:00</option>
                    <option defaultValue="12:00">13:00</option>
                    <option defaultValue="13:00">14:00</option>
                </select>
                <h2>Endzeit auswählen:</h2>
                <select
                    className="input-field"
                    name="cars"
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