import { Heading } from "@/components/heading/Heading";
import { Text } from "@/components/text/Text"
import { FC } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
    title: string;
}
export const Signature: FC<Props> = ({ title }) => {
    return <div className="space-y-5">
        <Heading text={title} />
        <div className="flex space-x-3">
            <Child text="Signature" className="w-64" />
            <Child text="Date" />
        </div>
    </div>
}

const Child: FC<{ text: string, className?: string }> = ({ text, className = "" }) => {
    return <div className="space-y-2">
        <div className={twMerge("w-52 border-b border-dashed border-black", className)} />
        <Text text="Date" />
    </div>
}