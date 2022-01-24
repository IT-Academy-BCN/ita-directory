import styled from "styled-components";
import tw from "twin.macro";

export const TextAreaStyled = styled.div.attrs({
	className: "text-grey",
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

export const TextAreaInput = styled.textarea.attrs({
	rows: 8,
	className: `textarea
				border
				w-full
				rounded
				block
				text-xs
				text-1x2
				p-3
				overflow-y-auto
				resize-none
				text-darkGray
				`,
})`
	&.error {
		${tw`border rounded text-grey border-redColor`}
	}
`;

export const StyledError = styled.small.attrs({
	className: `absolute left-0 visible text-redColor`,
})`
	&.errorProfile {
		${tw`static`};
	}
`;
