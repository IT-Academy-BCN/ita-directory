import styled from "styled-components";
import Colors from "theme/Colors";

export const CardStyled = styled.div`
	display: flex;
	background: ${Colors.white} 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #00000029;
	border: 1px solid ${Colors.extraLightGrey};
	border-radius: 6px;
	opacity: 1;
	align-items: center;

	@media only screen and (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}

	img {
		min-width: 35%;
		overflow: hidden;
		border-radius: 6px;

		@media only screen and (max-width: 1024px) {
			min-width: 40%;
		}
	}

	.info {
		margin-left: 0.75;
		padding: 1rem;
	}

	h3 {
		color: ${Colors.grey};
		font-size: 16px;
		text-align: left;
		padding-bottom: 1rem;
		letter-spacing: 0px;
		opacity: 1;
	}

	.description {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-right: 0.2rem;

		@media only screen and (max-width: 1280px) {
			flex-direction: column;
			align-items: flex-start;
		}
	}

	p {
		text-align: left;
		display: flex;
		letter-spacing: 0px;
		opacity: 1;
		padding-bottom: 0;
	}

	.footer {
		display: flex;
	}
`;
