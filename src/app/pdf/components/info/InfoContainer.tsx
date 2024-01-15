import { Heading } from "@/components/heading/Heading";
import { Text } from "@/components/text/Text";

type Props = {
    title: string;
    description: string;
}

export function InfoContainer({ description, title }: Props) {
    return <div className="space-y-3">
        <Heading text={title} />
        <Text text={description} />
    </div>
}