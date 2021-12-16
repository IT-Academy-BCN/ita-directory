import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
	margin: 0;
	padding: 0;
	min-height: 100vh;
	width: 100vw;
	text-align: center;
	font-family: sans-serif;
	background-color: #e9f2f9;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const HttpMess = styled.h1`
	font-size: 150px;
	color: #76adf5;
	text-shadow: 1px 1px 1px #192791, 2px 2px 1px #192791, 3px 3px 1px #192791, 4px 4px 1px #192791,
		5px 5px 1px #192791, 6px 6px 1px #192791, 7px 7px 1px #192791, 8px 8px 1px #192791,
		25px 25px 8px rgba(0, 0, 0, 0.2);
	@media (max-width: 550px) {
		font-size: 100px;
		font-weight: 530;
	}
`;
export const ErrorMess = styled.p`
	margin: 2rem 0;
	font-size: 20px;
	font-weight: 600;
	color: #444;
	@media (max-width: 550px) {
		font-size: 19px;
		font-weight: 530;
		display: flex;
	}
`;

export const BackHomeLink = styled(Link)`
	display: inline-block;
	color: #222;
	text-transform: uppercase;
	cursor: pointer;
	font-weight: 600;
	padding: 0.75rem 1rem 0.6rem;
	transition: all 0.2s linear;
	box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
	&:hover {
		background: #76adf5;
		color: #fff;
	}
	@media (max-width: 1024px) {
		flex-direction: column;
	}
`;
export const AskToContact = styled.p`
	margin: 2rem auto;
	font-size: 20px;
	font-weight: 600;
	color: #444;
	width: 450px;
	text-align: center;
	@media (max-width: 550px) {
		font-size: 19px;
		font-weight: 530;
	}
`;
export const ContactLink = styled(Link)`
	display: inline-block;
	/* border: 2px solid #222; */
	color: #222;
	text-transform: uppercase;
	cursor: pointer;
	font-weight: 600;
	padding: 0.75rem 1rem 0.6rem;
	transition: all 0.2s linear;
	box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
	&:hover {
		background: #76adf5;
		color: #fff;
	}
	@media (max-width: 1024px) {
		flex-direction: column;
	}
`;
