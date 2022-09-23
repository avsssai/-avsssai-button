import React, { ReactNode } from "react";
import styled from "styled-components";

interface IButtonProps {
	typeOfButton: "primary" | "ghost" | "outline";
	color: string;
	children: string | ReactNode;
}

const ButtonWrapper = styled.button`
	padding: 1rem 1.5rem;
	background-color: ${(p: IButtonProps) =>
		p.typeOfButton === "primary" ? "tomato" : p.typeOfButton === "outline" ? "white" : "#eeeee"};
	color: ${(p: IButtonProps) => p.color};
	border: none;
	border-radius: 10px;
	font-size: 1.3rem;
	&:focus {
		outline: 1px solid black;
		outline-offset: 2px;
		-moz-outline-radius: 1em;
	}
	&:hover {
		opacity: 0.7;
	}
`;
export default function Button({ typeOfButton = "primary", color = "black", children }: IButtonProps): JSX.Element {
	return (
		<ButtonWrapper typeOfButton={typeOfButton} color={color}>
			{children}
		</ButtonWrapper>
	);
}
