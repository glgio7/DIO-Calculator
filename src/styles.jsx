import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	height: 36px;
	background-color: #001fa4;
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		font-weight: bold;
		color: #fff;
		font-size: 1.5rem;
	}
`;

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	background: #0048a4;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 80%;
	height: 80%;
	padding: 0 1rem;
	border-radius: 10px;
	background-color: #008bff;

	.wrapper {
		height: 70%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`;

export const Row = styled.div`
	display: flex;
	height: 25%;

	&:first-child button {
		background-color: #252525;

		&:hover {
			color: #252525;
			background-color: #fff;
		}
	}
`;
