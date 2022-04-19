import styled from "styled-components";
// import tw from "twin.macro";
import Colors from "../../../theme/Colors";
import {Device} from "../../../theme/mediaQueries";

// export const Wrapper = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	width: 100%;
// 	max-width: 600px;
// 	margin: 0 auto;
// 	padding-left: 30px;
// 	padding-right: 30px;

// 	hr {
// 		width: 100%;
// 		display: block;
// 		height: 1px;
// 		background-color: black;
// 	}
// `;

export const StyledFooter = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-top: 1px solid ${Colors.lightGrey};
	width: 100%;
	padding: 1rem 0 1.5rem 0;
	font-size: 0.65rem;

	@media only ${Device.Tablet} {
		flex-wrap: wrap;
		justify-content: center;

		flex-direction: row;
	}
`;

export const Logo = styled.div`
	cursor: default;
	display: flex;
	flex-direction: column;
	align-items: start;
	text-align: left;
	letter-spacing: 0px;
	color: ${Colors.black};
	opacity: 1;

	.footer__logo {
		display: flex;
		align-items: center;
	}

	& .footer__logo-image {
		width: 144px;
		height: 36px;
	}

	& .footer__logo-text {
		font-family: monospace;
		font-size: 1rem;
		font-weight: bold;
		margin-left: 5px;
		width: 77px;
		letter-spacing: -1.5px;
		color: ${Colors.redPink};
		min-width: 10rem;
		display: flex;
		flex: 2;
	}

	@media only ${Device.Tablet} {
		text-align: start;
		display: flex;
		flex: 4;
	}
`;

export const Information = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	text-align: left;
	letter-spacing: 0;
	list-style-type: none;
	margin: 0px;
	padding-left: 0;
	color: ${Colors.grey};

	@media only ${Device.Tablet} {
		text-align: right;
	}
`;

// ${tw`absolute bottom-0 left-0`}
// font-size: 0.65rem;
export const Credits = styled(Information)`
	padding: 0.3rem 0;

	& p {
		color: ${Colors.black};
		text-align: left;
	}
	& span {
		color: ${Colors.redPink};
	}
`;

export const Rights = styled.div`
	margin: 0px 0;
	color: #000;
`;

export const Legal = styled.div`
	margin: 2px 0;
	white-space: nowrap;
`;

export const Anchor = styled.a`
	color: ${Colors.redPink};
	text-decoration: none;
	list-style-type: none;
	padding: 2px 0;
	&:hover {
		color: ${Colors.lightGrey};
	}
`;
