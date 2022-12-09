import ProgressWizard from "../progresswizard";

export default function WizardMainPage() {
    return (
      <div>
        <ProgressWizard prog={2} anzahl={5}/>
      </div>
    );
}