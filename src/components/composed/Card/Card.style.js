import styled from "styled-components";
import Colors from "theme/Colors";

export const CardBox = styled.div`
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
`;

export const CardInfo = styled.div`
	margin-left: 0.75;
	padding: 1rem;
`;

export const StyledTitle = styled.div`
	color: ${Colors.grey};
	font-size: 16px;
	text-align: left;
	padding-bottom: 1rem;
	letter-spacing: 0px;
	opacity: 1;
`;

export const StyledImage = styled.img`
	min-width: 35%;
	overflow: hidden;
	border-radius: 6px;
	@media only screen and (max-width: 1024px) {
		min-width: 40%;
	}
`;

export const StyledDescription = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-right: 0.2rem;

	@media only screen and (max-width: 1280px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;
export const StyledText = styled.p`
	text-align: left;
	display: flex;
	letter-spacing: 0px;
	opacity: 1;
	padding-bottom: 0;
`;

export const StyledFooter = styled.div`
	display: flex;
`;
