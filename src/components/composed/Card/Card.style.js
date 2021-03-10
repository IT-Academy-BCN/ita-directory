import styled from "styled-components";
import Colors from "theme/Colors";

export const Container = styled.div`
	width: 43rem;
	height: 14rem;
	display: flex;
	background: ${Colors.white} 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #00000029;
	border: 1px solid ${Colors.extraLightGrey};
	border-radius: 6px;
	opacity: 1;

	@media only screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 70vw;
		height: auto;
	}

	@media only screen and (max-width: 460px) {
		width: 90vw;
	}
`;

export const CardInfo = styled.div`
	margin-left: 0.75;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

export const StyledTitle = styled.div`
	color: ${Colors.grey};
	font-size: 16px;
	text-align: left;
	padding-bottom: 1rem;
	letter-spacing: 0px;
	font: normal normal normal 14px/16px Arial;
	opacity: 1;
`;

export const StyledImage = styled.img`
	height: auto;
	min-width: 40%;
	max-width: 100%;
	overflow: hidden;
	border-radius: 6px;
`;

export const StyledDescription = styled.div`
	text-align: left;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: flex-end;
	font: normal normal normal 14px/10px Arial;
	text-align: center;

	@media only screen and (max-width: 460px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;
export const StyledText = styled.p`
	text-align: left;
	display: inline-block;
	font: normal normal normal 14px/21px Arial;
	letter-spacing: 0px;
	opacity: 1;
	padding-bottom: 0;
`;

export const StyledFooter = styled.div`
	margin-top: auto;
	display: flex;
`;
