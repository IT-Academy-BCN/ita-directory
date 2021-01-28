import styled from 'styled-components'
// import Colors from "theme/Colors";

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
	& > h1 {
		text-align: center;
		font: normal normal normal 30px/36px Helvetica Neue;
		letter-spacing: 0px;
		color: #7D868B;
		opacity: 1;
	}
`

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
`