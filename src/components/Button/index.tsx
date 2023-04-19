import React from "react";
import { ButtonContainer } from "./styles";

type ButtonProps = {
	label: string;
	onClick: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => {
	return (
		<ButtonContainer onClick={onClick} type="button">
			{label}
		</ButtonContainer>
	);
};

export default Button;
