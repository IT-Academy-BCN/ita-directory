import styled from "styled-components";
import Colors from "theme/Colors";

export const StyledFooter = styled.footer`
	@media only screen and (min-width: 1020px) {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 2px 15vw;
		border-top: 2px solid #707070;
		margin: 15vw;
		margin-bottom: 3rem;
		margin-top: 1rem;
	}
	@media only screen and (max-width: 1019px) {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 2px 15vw;
		border-top: 2px solid #707070;
		margin: 15vw;
		margin-bottom: 2rem;
		margin-top: 1rem;
	}
	@media only screen and (max-width: 468px) {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		border-top: 2px solid #707070;
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
