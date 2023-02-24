import '../../../../app/global.css';
import {
    DefaultWizardStepProps,
    useWizardStepContext
} from "../../../context/WizardStepContext";
import {useWizardStateContext} from "../../../context/WizardStateContext";
import {HardwareEnum} from "../../../utils/enums/HardwareEnum";
import {WorkspaceTypeEnum} from "../../../utils/enums/WorkspaceTypeEnum";

export default function WizardHeaderComponent() {

    const {
        activeStepIndex,
        steps
    } = useWizardStepContext<DefaultWizardStepProps>();
    const {workspaceType, hardware, hardware2} = useWizardStateContext();

    const getProgressWidth = () => {
        const isOwnHardware = workspaceType === WorkspaceTypeEnum.SINGLE_DESK ? hardware === HardwareEnum.BYOD : hardware === HardwareEnum.BYOD && hardware2 === HardwareEnum.BYOD;
        const stepLength = steps.length - (isOwnHardware ? 1 : 0);
        const activeIndex = activeStepIndex + (isOwnHardware && activeStepIndex < 2 ? 1 : 0);
        return steps.length && (100 / stepLength) * activeIndex + "%";
    }

    return (
        <div
            className={`w-full bg-office-gray-600 rounded-full bg-office-gray-600 transition-opacity ease-in-out duration-300 ${steps.length == 0 && 'opacity-0'}`}>
            <div
                className="bg-office-green-600 h-2.5 rounded-full transition-width ease-in-out duration-500"
                style={{width: getProgressWidth()}}></div>
        </div>
    );
}
