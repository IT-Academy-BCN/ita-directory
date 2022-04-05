import styled from "styled-components";
import tw from "twin.macro";
import Colors from "../../../theme/Colors";
import {Device} from "../../../theme/mediaQueries";

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
	border-top: 1px solid ${Colors.lightGrey};
	width: 100%;
	margin: 1rem 0rem;
	padding-top: 1rem;

	@media only ${Device.maxMobileXl} {
		flex-wrap: wrap;
		justify-content: center;
		margin: 1rem 0.5rem;
	}

	@media only ${Device.maxTablet} {
		margin: 0.5rem;
	}
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	text-align: left;
	letter-spacing: 0px;
	color: ${Colors.black};
	opacity: 1;
	font-weight: bold;
	padding-bottom: 1rem;
	height: 80px;
	position: relative;

	& img {
		width: 144px;
		height: 36px;
	}

	& .directory {
		${tw`text-[15px] text-pinkRed ml-2`}
	}

	@media only ${Device.maxLaptop} {
		min-width: 10rem;
		flex: 2;
	}

	@media only ${Device.maxMobileXl} {
		text-align: center;
		flex: 4;
	}
`;

export const Information = styled.div`
	text-align: right;
	letter-spacing: 0;
	opacity: 1;
	list-style-type: none;
	font: normal normal normal 0.7rem Arial;
	margin: 0px;
	padding-left: 0;
	color: ${Colors.grey};

	@media only ${Device.minLaptop} {
		min-width: 10rem;
		flex: 3;
	}
	@media only ${Device.minLaptop} {
		margin: 0px;
		min-width: 10rem;
		flex: 3;
	}
	@media only ${Device.maxMobileXl} {
		text-align: left;
		margin-top: 0.5rem;
		flex: 4;
	}
`;

export const Credits = styled(Information)`
	${tw`absolute bottom-0 left-0`}
	& p {
		color: ${Colors.black};
		text-align: left;
	}
	& span {
		color: ${Colors.redPink};
	}
`;

export const Rights = styled.div`
	margin: 3px;
	color: #000;
`;

export const Legal = styled.div`
	margin: 3px;
	white-space: nowrap;
`;

export const Anchor = styled.a`
	color: ${Colors.redPink};
	text-decoration: none;
	list-style-type: none;
	padding: 2px;
	&:hover {
		color: ${Colors.lightGrey};
	}
`;
