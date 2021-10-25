import styled from "styled-components";
import Colors from "theme/Colors";

export const Container = styled.div`
	background: #ffffff 0% 0% no-repeat padding-box;
	border-radius: 10px;
	-webkit-border-radius: 10px;
	box-shadow: 0px 3px 6px #00000029;
	overflow: hidden;
	max-width: 22rem;
	margin: 1rem;
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 2.19rem;

	& > .classInput {
		margin-bottom: 0.9rem;
		position: relative;
		background: #ffffff 0% 0% no-repeat padding-box;
		border-radius: 6px;
		opacity: 1;
		text-align: left;
		font: normal normal normal 16px/32px Helvetica Neue;
		letter-spacing: 0px;
		color: #7d868b;
		opacity: 1;

		& > label {
			display: inline-block;
			margin: 0.8rem;
			font: normal normal normal 14px/22px Helvetica Neue;
		}
	}
`;

export const StyledError = styled.div`
  color: ${Colors.redColor}
  font-weight: 800;
  margin: 0 0 40px 0;
`;
