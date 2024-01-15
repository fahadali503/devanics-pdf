import { HEADING_COLOR, TEXT_COLOR } from "@/constants/color.constants"
import React from "react"
import { TotalAmount } from "./Total"

type Props = {
    items: {
        description: string
        quantity: string
        totalPrice: string
    }[];
    totalAmount: number;
}
export function PdfTable({ items, totalAmount }: Props) {
    return <div>
        <div className="mt-14 border p-5 rounded-md">
            <table className="w-full rounded-md border border-separate border-spacing-0 text-sm">
                <thead className="bg-[#F9F5FF] border border-[#F9F5FF]">
                    <tr>
                        <THeading text="Item / Description" />
                        <THeading text="Quantity" />
                        <THeading text="Total Price" />
                    </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                    {items.map((item, index) => {
                        return <tr key={index}>
                            <TBodyColumn text={item.description} />
                            <TBodyColumn text={item.quantity} />
                            <TBodyColumn text={item.totalPrice} />
                        </tr>

                    })}
                </tbody>
            </table>
        </div>
        <TotalAmount amount={totalAmount} />

    </div>
}

function THeading({ text }: { text: string }) {
    return <th className={`h-12 px-4 text-left align-middle font-medium ${HEADING_COLOR}`}>
        {text}
    </th>
}

function TBodyColumn({ text, ...props }: { text: string } & React.HTMLProps<HTMLTableDataCellElement>) {
    return <td className={`p-4 align-middle ${TEXT_COLOR}`} {...props}>
        {text}
    </td>
}