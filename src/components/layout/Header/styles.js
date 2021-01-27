import styled from 'styled-components'
// import Colors from "theme/Colors";

export const StyledHeader = styled.header`
	font: normal normal normal 26px/32px Helvetica Neue;
	letter-spacing: 0px;
	color: #7d868b;
	opacity: 1;
	background: #e6f2f2 0% 0% no-repeat padding-box;
	border: 1px solid #b5dddd;
	max-width: 100%;
	text-align: center;
`

export const Logo = styled.div`
	display: flex;
	justify-content: center;
	background: white;
	width: 100%;
	height: 5rem;
	color: #823434;
`

export const Routes = styled.div`
	& > a {
		text-decoration: none;
		color: #7d868b;
		margin-left: 2rem;
	}
`
