import styled from "styled-components";

// @todo: Modify to implement tailwind and add mobile first responsive
export const NotificationStyled = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	z-index: 999;

	div {
		position: fixed;
		bottom: 0;
		right: 0;
		margin: 2rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 1rem;
		width: min(22rem);
		height: min(4rem);
		border-radius: 6px;
		background-color: ${(props) => (props.isSuccess === "success" ? "#317126" : "#bc3434")};

		p {
			font-size: 0.9rem;
			font-weight: 300;
			color: white;
			line-height: 1.2;
			padding-left: 15px;
		}

		button {
			color: white;
			align-self: baseline;
		}
	}
`;
