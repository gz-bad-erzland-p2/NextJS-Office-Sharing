import {PDFViewer, usePDF} from "@react-pdf/renderer";
import {OverviewDocument} from "../../../../utils/pdf/OverviewDocument";
import Link from "next/link";

export default function PdfLinkComponent({fileName}: { fileName: string }) {

    const [instance, updateInstance] = usePDF({document: <OverviewDocument />});

    if (instance.loading) return <div>Pdf wird generiert ...</div>;

    if (instance.error) return <div>Ein Fehler ist
        aufgetreten: {instance.error}</div>;

    return (
        <div className={"h-full w-full"}>
            <PDFViewer className={"w-full h-full"}>
                <OverviewDocument/>
            </PDFViewer>
            <Link href={instance.url || ''} download={fileName}>
                Download
            </Link>
        </div>
    );

}