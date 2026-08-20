import { HEADING_COLOR } from "@/constants/color.constants";
import { twMerge } from 'tailwind-merge'

type Props = {
    text: string;
    className?: string;
}

export function Heading({ text, className = "" }: Props) {
    return <p className={twMerge(`text-base font-semibold ${HEADING_COLOR}`, className)}>
        {text}
    </p>
}