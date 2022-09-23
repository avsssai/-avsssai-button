import { ReactNode } from "react";
interface IButtonProps {
    typeOfButton: "primary" | "ghost" | "outline";
    color: string;
    children: string | ReactNode;
}
export default function Button({ typeOfButton, color, children }: IButtonProps): JSX.Element;
export {};
