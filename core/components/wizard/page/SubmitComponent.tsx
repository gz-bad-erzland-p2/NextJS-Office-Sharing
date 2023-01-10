import PdfLinkComponent from "./pdf/PdfLinkComponent";

export const SubmitComponent = () => {
    return (
        <div className={"h-full w-full"}>
            <PdfLinkComponent fileName={"test.pdf"}/>
        </div>
    );
}