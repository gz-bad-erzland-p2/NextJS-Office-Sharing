import '../../../../app/global.css';
import {
    DefaultWizardStepProps,
    useWizardStepContext
} from "../../../context/WizardStepContext";
import {useWizardStateContext} from "../../../context/WizardStateContext";
import {HardwareEnum} from "../../../misc/enums/HardwareEnum";
import {WorkspaceTypeEnum} from "../../../misc/enums/WorkspaceTypeEnum";
import {useSelectedLayoutSegment} from "next/navigation";

export default function WizardHeaderComponent() {

    const {
        activeStepIndex,
        steps,
    } = useWizardStepContext<DefaultWizardStepProps>();
    const {workspaceType, hardware, hardware2} = useWizardStateContext();
    const segment = useSelectedLayoutSegment();

    const getProgressWidth = () => {
        const isOwnHardware = workspaceType === WorkspaceTypeEnum.SINGLE_DESK ? hardware === HardwareEnum.BYOD : hardware === HardwareEnum.BYOD && hardware2 === HardwareEnum.BYOD;
        const stepLength = steps.length - (isOwnHardware ? 1 : 0);
        const activeIndex = activeStepIndex + (!isOwnHardware && activeStepIndex > 3 ? 1 : 0) + (isOwnHardware && activeStepIndex < 3 ? 1 : 0);
        return steps.length && (100 / stepLength) * activeIndex + "%";
    }

    return (
        <div hidden={segment?.endsWith('success')}
            className={`w-full bg-office-gray-600 rounded-full bg-office-gray-600 transition-opacity ease-in-out duration-300 ${steps.length == 0 && 'opacity-0'}`}>
            <div
                className="bg-office-green-600 h-2.5 rounded-full transition-width ease-in-out duration-500"
                style={{width: getProgressWidth()}}></div>
        </div>
    );
}
