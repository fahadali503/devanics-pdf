import { TEXT_COLOR } from "@/constants/color.constants";
import { twMerge } from "tailwind-merge";

type Props = {
    text: string;
    className?: string;
}

export function Text({ text, className = "" }: Props) {
    return <p
        className={twMerge(`text-sm ${TEXT_COLOR}`, className)}
    >
        {text}
    </p>
}