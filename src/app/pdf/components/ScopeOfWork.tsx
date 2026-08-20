import { Heading } from "@/components/heading/Heading";
import { Text } from "@/components/text/Text";

type Props = {
    scope: string;
}
export function ScopeOfWork({ scope }: Props) {
    return <div className="mt-16 space-y-3">
        <Heading
            className="text-center"
            text={"SCOPE OF WORK"} />

        <Text
            text={scope}
            className="text-center w-[719px] mx-auto"
        />
    </div>
}