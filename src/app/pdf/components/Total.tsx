import { HEADING_COLOR, TEXT_COLOR } from "@/constants/color.constants";

type Props = {
    amount: number;
}
export const TotalAmount: React.FC<Props> = ({ amount }) => {
    return <div className="py-3 items-center flex justify-end space-x-4">
        <p className={`text-sm text-right ${TEXT_COLOR}`}>
            Total:
        </p>
        <p className={`text-2xl ${HEADING_COLOR}`}> ${amount}</p>
    </div>
}