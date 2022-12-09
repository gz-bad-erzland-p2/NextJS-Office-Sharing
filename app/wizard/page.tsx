import ProgressWizard from "../progresswizard";

export default function WizardMainPage() {
    return (
      <div >
        sdasd
        <div className="wizard-container"> 
          <div className="container"> 
            <button className="button border-1 border-o-gray text-o-gray"> zurück </button>
            <button className="button border-1 border-o-green-light bg-o-green-light text-o-white ">nächster</button>

          </div>
          <ProgressWizard prog={2} anzahl={5}/>
        </div>
      </div>
    );
}