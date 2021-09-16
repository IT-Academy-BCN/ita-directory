import styled from "styled-components";
import tw, {theme} from "twin.macro";

const StyledButton = styled.button.attrs({
	className: "font-bold py-2 px-4 rounded mt-2 shadow",
})`
	box-shadow: ${theme`boxShadow.button-shadow`};

	&.blueGradient {
		${tw`text-white opacity-100 bg-gradient-to-r from-lightBlue to-darkBlue hover:opacity-90  p-1`}
	}
	&.orangeGradient {
		${tw`text-white opacity-100 bg-gradient-to-r from-lightOrange to-darkOrange hover:opacity-90  p-1`}
	}
	&.blueGradientProfile {
		${tw`w-28 text-white opacity-100 bg-gradient-to-r from-lightBlue to-darkBlue hover:opacity-90  p-1`}
	}
	&.greenGradient {
		${tw`w-36 text-white opacity-100 bg-gradient-to-r from-lightGreen to-darkGreen hover:opacity-90  p-1`}
	}
	&.darkRed {
		${tw`w-36 text-white opacity-100 bg-darkRed hover:opacity-90  p-1`}
	}
	&.darkBlue {
		${tw`w-28 text-white opacity-100 bg-darkBlue hover:opacity-90 m-1 py-1 px-2`}
	}
	&.disabled {
		cursor: not-allowed;
		opacity: 0.57;
	}
	&.animated {
		svg {
			animation: rotation 0.8s ease-in-out infinite;
		}
	}
	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

export default StyledButton;
