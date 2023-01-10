export const SoftwareSpecsComponent = () => {
    return (
        <form id={"form"} className={"w-full h-full flex flex-col justify-center"}>
            <label htmlFor="message"
                   className="block mb-2 text-sm font-medium text-gray-900">Ihre eigene Technik</label>
            <textarea id="message" rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                      placeholder="Weitere Spezifikationen"></textarea>
        </form>
    );
}