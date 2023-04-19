import React from "react";
import { InputContainer } from "./styles";

type InputProps = {
	value?: number;
};

const Input = ({ value }: InputProps) => {
	return (
		<InputContainer>
			<input disabled value={value} />
		</InputContainer>
	);
};

export default Input;
