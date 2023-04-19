import styled from "styled-components";

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: calc(100vh - 36px);
`;

export const Content = styled.div`
	margin: 0 auto;
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
