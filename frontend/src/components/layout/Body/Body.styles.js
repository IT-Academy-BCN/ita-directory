import styled from "styled-components";

export const StyledBody = styled.div`
	margin: 0;
	background-position: center;
	background-repeat: no-repeat;
	background-size: 100%;
	min-height: 100vh;
	width: 100vw;
`;

export const Childrens = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 3.5rem;
	padding-top: 1rem;
	min-height: 70vh;

	&.accessRegister {
		padding-top: 3.5rem;
	}

	&.profile {
		padding-top: 1rem;
	}
`;
