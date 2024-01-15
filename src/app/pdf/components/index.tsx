import { PDF_NAVBAR_BG } from "@/constants/bg.constants"
import { PdfNavbar } from "./Navbar"
import { PdfTable } from "./PdfTable"
import { ScopeOfWork } from "./ScopeOfWork"
import { Approval } from "./approval"
import { PdfInfo } from "./info"
import { PdfData } from "../type"
import { forwardRef } from "react"

type Props = {
    data: PdfData;
}
export const PdfComponent = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
    return (<div ref={ref}>
        <PdfNavbar />
        <div className="container content mx-auto">
            <PdfInfo pdfData={data} />
            <ScopeOfWork scope={data.scope} />
            <PdfTable totalAmount={data.totalAmount} items={data.items} />
            <Approval />
        </div>

        <footer className={`h-3 ${PDF_NAVBAR_BG} w-full fixed bottom-0`} />
    </div>)
})
PdfComponent.displayName = "PdfComponent"; // Add display name

