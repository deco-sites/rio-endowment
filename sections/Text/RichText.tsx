import { RichText as TextProps } from "apps/admin/widgets.ts";

export interface Props {
    /** @title Texto */
    text: TextProps;
}

const RichText = ({ text }: Props) => (
    <div dangerouslySetInnerHTML={{ __html: text }} />
);

export default RichText;