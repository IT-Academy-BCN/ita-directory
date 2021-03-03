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
	margin-top: 1.5rem;
	border-top: 1px solid ${Colors.lightGrey};
	width: 100%;

	@media only screen and (max-width: 468px) {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 1rem;
	}
`;

export const Logo = styled.div`
	@media only screen and (min-width: 1020px) {
		text-align: left;
		font: normal normal normal 20px/20px Korb-Bold;
		letter-spacing: 0px;
		color: ${Colors.black};
		opacity: 1;
		font-weight: bold;
	}
	@media only screen and (max-width: 1019px) {
		text-align: left;
		font: normal normal normal 20px/20px Korb-Bold;
		letter-spacing: 0px;
		color: ${Colors.black};
		opacity: 1;
		font-weight: bold;
		min-width: 10rem;
		flex: 2;
	}
	@media only screen and (max-width: 468px) {
		text-align: center;
		font: normal normal normal 20px/20px Korb-Bold;
		letter-spacing: 0px;
		color: ${Colors.black};
		opacity: 1;
		font-weight: bold;
		padding: 0 25% 0 25%;
		flex: 4;
	}
`;

export const Information = styled.div`
	text-align: right;
	@media only screen and (min-width: 1020px) {
		text-align: right;
		font: normal normal normal 16px Helvetica Neue;
		letterspacing: 0;
		color: #4a4a4a;
		opacity: 1;
		list-style-type: none;
		margin: 0px;
		padding-left: 0;
		min-width: 10rem;
		flex: 3;
	}
	@media only screen and (min-width: 1019px) {
		text-align: right;
		font: normal normal normal 16px Helvetica Neue;
		letterspacing: 0;
		color: #4a4a4a;
		opacity: 1;
		list-style-type: none;
		margin: 0px;
		padding-left: 0;
		min-width: 10rem;
		flex: 3;
	}
	@media only screen and (max-width: 468px) {
		text-align: center;
		font: normal normal normal 16px Helvetica Neue;
		letterspacing: 0;
		color: #4a4a4a;
		opacity: 1;
		list-style-type: none;
		margin-top: 0.5rem;
		padding-left: 0;
		flex: 4;
	}
`;
export const Copyright = styled.div`
	@media only screen and (min-width: 1020px && max-width:468px) {
		margin: 3px;
	}
`;
export const Rights = styled.div`
	@media only screen and (min-width: 1020px && max-width:468px) {
		margin: 3px;
	}
`;

export const Legal = styled.div`
	@media only screen and (min-width: 1020px && max-width:468px) {
		margin: 3px;
	}
`;

export const Anchor = styled.a`
	color: #4a4a4a;
	text-decoration: none;
	list-style-type: none;
	padding: 2px;
	&:hover {
		color: #0578e7;
	}
`;
