export const IntroductionComponent = () => {
    return (
        <form id={"form"}
              className={"w-full h-full flex flex-col justify-center"}>
            <div
                className={"m-auto min-w-400 flex justify-center flex-col min-w-[50%]"}>
                <h1 className={"text-2xl font-bold text-center"}>
                    Willkommen bei dem Office-Sharing-Buchungsprozess
                </h1>
                <p className={"text-center mt-4"}>
                    Bitte füllen Sie die folgenden Schritte aus, um ein
                    Büro zu mieten.
                </p>
            </div>
        </form>
    );
}