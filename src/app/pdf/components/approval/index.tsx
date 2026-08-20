import { Heading } from "@/components/heading/Heading"
import { Text } from "@/components/text/Text"
import { Signature } from "./Signature"

export const Approval = () => {
    return <div className="py-4 space-y-8">
        <Signature title="Client Approval" />
        <Signature title="Company (company name should be automatic) Approval" />
    </div>
}