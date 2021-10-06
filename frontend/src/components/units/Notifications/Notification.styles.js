import styled from "styled-components";

// @todo: Modify to implement tailwind
export const NotificationStyled = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	@media (min-width: 767px) {
		justify-content: flex-end;
	}
	div {
		position: fixed;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 0rem 1rem 0rem 1rem;
		width: min(17rem);
		height: 4rem;
		border-radius: 6px;
		background-color: ${(props) => (props.isSuccess ? "#317126" : "#bc3434")};
		z-index: 10;
		margin-top: 1rem;
		margin-right: min(10%);

		/*
		margin-top: 6.5rem;
		margin-right: 0;
		
		@media (min-width: 768px) {
			margin-top: 1rem;
			margin-right: min(2%);
		}
		@media (min-width: 931px) {
			margin-right: min(10%);
		}

		*/
		p {
			color: white;
			line-height: 1.2;
			padding-left: 15px;
		}
	}
`;
