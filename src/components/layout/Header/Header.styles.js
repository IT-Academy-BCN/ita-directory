import styled from "styled-components";

export const HeaderWrapper = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const StyledHeader = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	left: 0px;
	font: normal normal normal 26px/32px Helvetica Neue;
	letter-spacing: 0px;
	color: #7d868b;
	background: var(--unnamed-color-e6f2f2) 0% 0% no-repeat padding-box;
	background: #e6f2f2 0% 0% no-repeat padding-box;
	opacity: 1;
	border: 1px solid #b5dddd;
	max-width: 100%;
	height: 5rem;
	& h1 {
		text-align: center;
		font: normal normal normal 30px/36px Helvetica Neue;
		font-size: clamp(1.5rem, 1.25rem + 1.5vw, 2em);
		letter-spacing: 0px;
		color: #7d868b;
		opacity: 1;
		margin: 0;
	}

	&.logged {
		justify-content: left;
	}
`;

export const Logo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 5rem;
	color: #823434;
	font: normal normal normal 15px/15px Korb-Bold;
	letter-spacing: 0px;
	text-transform: uppercase;
	opacity: 1;

	&.logged {
		justify-content: left;
	}
`;

export const StyledMiPerfil = styled.div`
	position: relative;
	display: inline-block;
`;

export const StyledLogo = styled.div`
	text-align: left;
	max-width: 50%;
	font: normal normal normal 18px Korb-Bold;
	letter-spacing: 0px;
	color: #005593;
	text-transform: uppercase;
	opacity: 1;
	justify-content: flex-end;
	min-width: 10rem;
	padding-top: 1rem;
`;

export const StyledImg = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	margin-left: 0px;
	margin-right: 5px;
`;

export const StyledText = styled.h6`
	text-align: left;
	font: normal normal normal 12px Helvetica Neue;
	letter-spacing: 0px;
	color: #707070;
	margin-left: 4px;
	opacity: 1;
`;

export const Dropdown = styled.ul`
	position: absolute;
	right: 0;
	list-style-type: none;
	padding: 0px;
	margin-top: 10px;
	position: absolute;
	background-color: white;
	box-shadow: 0px 4px 10px #00000029;
	border-radius: 6px;
	border: 1px solid #ddd;
	width: 180px;

	li {
		border-bottom: 1px solid #ddd;

		&:last-child {
			border-bottom: none;
		}

		a {
			display: inline-block;
			width: 100%;
			padding: 1rem 1rem;
			color: #999;
			text-decoration: none;
			&:hover {
				background-color: #ddd;
			}
		}
	}
`;

export const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
	border: none;
	border-radius: 10px;
	opacity: 1;
	min-width: 6rem;
	width: 120px;
	height: 50px;

	&:focus {
		outline: none;
	}

	&:hover {
		cursor: pointer;
	}

	&.selected {
		box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
	}
`;
