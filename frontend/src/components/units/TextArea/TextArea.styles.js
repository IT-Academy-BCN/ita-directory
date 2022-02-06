import styled from "styled-components";
import tw from "twin.macro";
import Colors from "theme/Colors";

export const TextAreaStyled = styled.div.attrs({
	className: "text-grey mt-4",
})`
	& {
		&.textAreaCreateNewAd {
			${tw`mb-4 max-w-xl `}
			@media screen and (max-width: 600px) {
				${tw`flex-col`}
			}
		}

		label {
			${tw`py-3 pr-14 flex-grow text-grey font-bold`}
		}
	}
`;

export const TextAreaError = styled.div.attrs({
	className: `w-full`,
})`
	&.textAreaCreateNewAd {
		${tw`border rounded text-grey`}
	}
`;

export const TextAreaInput = styled.textarea.attrs((props) => ({
	rows: 8,
	className: `textarea
				border
				w-full
				rounded
				block
				text-xs
				text-1x2
				p-3
				mb-9
				overflow-y-auto
				resize-none
				text-darkGray
				${props.error ? "border-red-200" : "border-gray-200"}
				`,
}))`
	&:focus {
		outline: 0 none;
		border: 1px solid ${(props) => (props.error ? "red" : Colors.darkBlue)};
	}
`;

export const StyledError = styled.small.attrs({
	className: `absolute visible text-redColor`,
})`
	bottom: 70px;
	&.errorProfile {
		${tw`static`};
	}
`;
