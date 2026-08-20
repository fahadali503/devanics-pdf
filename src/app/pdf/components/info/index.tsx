import { PdfData } from "../../type";
import { InfoContainer } from "./InfoContainer";

type Props = {
    pdfData: PdfData;
}

export function PdfInfo({ pdfData }: Props) {

    return <div className="mt-4">
        <div className="grid grid-cols-3 gap-16">
            <InfoContainer
                title="Proposal ID"
                description={pdfData.proposalID}
            />
            <InfoContainer
                title="Recipient"
                description={pdfData.recipient}
            />
            <InfoContainer
                title="Job Site"
                description={pdfData.jobSite}
            />
            <InfoContainer
                title="Property Name"
                description={pdfData.propertyName}
            />
            <InfoContainer
                title="Company Name"
                description={pdfData.companyName}
            />
            <InfoContainer
                title="Project name"
                description={pdfData.projectName}
            />

        </div>
    </div>
}