import styled from "styled-components";
// import Colors from "theme/Colors";

const StyledFooter = styled.footer`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	gap: 0px 0px;
	position: absolute;
	bottom: 0;
	padding: 0 0 2rem 0;
	width: 100%;
	border-top: 1px solid #707070;
	opacity: 1;
	align: center;

	& > .information {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		float: right;
		padding: 1rem;
		color: #999999;
	}

	a {
		text-decoration-line: none;
		color: #999999;
	}

	& > .logo {
		padding: 1rem;
		// font-family: Korb-Bold;
		font-size: 15px;
	}
`;

export default StyledFooter;
