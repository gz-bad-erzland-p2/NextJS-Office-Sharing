import {Step} from "../../../context/WizardContext";
import BasePageComponent from "../BasePageComponent";

export const WorkstationPageComponent = ({id, key}: { id: string, key: string }) => {
    return (
        <Step id={id} key={key}>
            <BasePageComponent heading={"Arbeitsplatz"}>
                <div>
                    Test
                </div>
            </BasePageComponent>
        </Step>
    );
}