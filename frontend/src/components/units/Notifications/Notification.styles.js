import styled, {keyframes} from "styled-components";

// @todo: Modify to implement tailwind and add mobile first responsive

const showUp = keyframes`
  from {
	right: -40%;
  }

  to {
	right: 0;
  }
`;

export const NotificationStyled = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	z-index: 9999;

	div {
		animation: ${showUp} 0.5s cubic-bezier(0.19, 0.94, 0.83, 0.67) 1;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
		//background-color: ${(props) => (props.isSuccess === "success" ? "#317126" : "#bc3434")};
		background-color: white;
		p {
			font-size: 0.9rem;
			font-weight: 300;
			color: white;
			line-height: 1.2;
			padding-left: 15px;
			color: black;
		}

		button {
			color: black;
			margin: 0 auto;
		}
	}
`;
