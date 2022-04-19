import styled from "styled-components";
// import tw from "twin.macro";
import Colors from "../../../theme/Colors";
import {Device} from "../../../theme/mediaQueries";

export const TextAreaStyled = styled.div.attrs({
	className: "text-grey mt-4",
})`
	& {
		&.textAreaCreateNewAd {

			@media ${Device.Tablet} {

			}
		}

		label {

		}
	}
`;

export const TextAreaError = styled.div.attrs({
	className: `w-full justify-center`,
})`
	&.textAreaCreateNewAd {

	}
`;

export const TextAreaInput = styled.textarea.attrs((props) => ({
	rows: 8,
	className: `textarea
				border
				
				rounded
				block
				text-xs
				text-1x2
				p-3
				overflow-y-auto
				resize-none
				text-darkGray
				`,
}))`
	width: 93%;
	display: flex;
	margin: 0 auto;
	justify-self: center;

	@media ${Device.Tablet} {
		margin: 0;
	}

	&.error {
		border: 1px solid #fecaca !important;
	}
	&:focus {
		outline: 0 none;
		border: 1px solid ${(props) => (props.error ? "red" : Colors.darkBlue)} !important;
	}
`;

export const StyledError = styled.small.attrs({
	className: ` visible text-redColor mb-9`,
})`
	display: inline-block;
	&.errorProfile {

	}
`;
