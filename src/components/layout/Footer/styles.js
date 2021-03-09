import styled from "styled-components";
import Colors from "theme/Colors";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 600px;
	margin: 0 auto;
	padding-left: 30px;
	padding-right: 30px;

	hr {
		width: 100%;
		display: block;
		height: 1px;
		background-color: black;
	}
`;

export const StyledFooter = styled.footer`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	border-top: 1px solid ${Colors.grey};
	width: 100%;
	margin: 1rem 0rem;
	padding-top: 1rem;

	@media only screen and (max-width: 468px) {
		flex-wrap: wrap;
		justify-content: center;
		margin: 1rem 0.5rem;
	}

	@media only screen and (max-width: 600px) {
		margin: 2rem;
	}
`;

export const Logo = styled.div`
	text-align: left;
	font: normal normal normal 15px/15px Korb-Bold;
	letter-spacing: 0px;
	color: ${Colors.black};
	opacity: 1;
	font-weight: bold;
	text-transform: uppercase;
	padding-top: 3px;
	padding-bottom: 1rem;

	@media only screen and (max-width: 1019px) {
		min-width: 10rem;
		flex: 2;
	}

	@media only screen and (max-width: 468px) {
		text-align: center;
		flex: 4;
	}
`;

export const Information = styled.div`
	text-align: right;
	letter-spacing: 0;
	opacity: 1;
	list-style-type: none;
	font: normal normal normal 0.9rem Helvetica Neue;
	margin: 0px;
	padding-left: 0;
	color: ${Colors.grey};

	@media only screen and (min-width: 1020px) {
		min-width: 10rem;
		flex: 3;
	}
	@media only screen and (min-width: 1019px) {
		margin: 0px;
		min-width: 10rem;
		flex: 3;
	}
	@media only screen and (max-width: 468px) {
		text-align: center;
		margin-top: 0.5rem;
		flex: 4;
	}
`;
export const Copyright = styled.div`
	margin: 3px;
`;
export const Rights = styled.div`
	margin: 3px;
`;

export const Legal = styled.div`
	margin: 3px;
	white-space: nowrap;
`;

export const Anchor = styled.a`
	color: ${Colors.grey};
	text-decoration: none;
	list-style-type: none;
	padding: 2px;
	&:hover {
		color: ${Colors.lightGrey};
	}
`;
