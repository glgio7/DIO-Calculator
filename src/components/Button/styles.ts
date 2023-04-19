import styled from "styled-components";

export const ButtonContainer = styled.button`
	width: 25%;
	text-align: center;
	margin: 3px;

	cursor: pointer;

	border: none;
	border-radius: 6px;

	background-color: #00c3ff;
	color: #ffffff;

	font-size: 24px;
	font-weight: 700;

	transition: all 300ms;

	&:hover {
		background-color: rgba(25, 161, 240, 0.85);
	}

	&:nth-of-type(4n) {
		background-color: #252525;

		&:hover {
			color: #252525;
			background-color: #ffffff;
		}
	}

	@media screen and (max-width: 900px) {
		padding: 0;
		flex: initial;
		width: 25%;
		text-align: center;
	}
`;
