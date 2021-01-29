import styled from "styled-components";
// import Colors from "theme/Colors";

export const StyledFooter = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	position: absolute;
	bottom: 0;
	padding: 2rem;
	width: 100%;
	border-top: 1px solid #707070;
	opacity: 1;
	background-color: white;
`;

export const Logo = styled.div`
	width: 50%;
`;

export const LogoText = styled.h2`
	font-size: 30px;
	font-weight: bold;
`;

export const Information = styled.div`
	display: flex;
	align-items: flex-end;
	flex-direction: column;
	padding: 1rem;
	color: #999999;
`;
export const Copyright = styled.div`
	margin: 3px;
`;
export const Rights = styled.div`
	margin: 3px;
`;

export const Legal = styled.div`
	margin: 3px;
`;

export const Anchor = styled.a`
	color: #999999;
	text-decoration: none;
	padding: 2px 5px;
	&:hover {
		color: blue;
	}
`;
