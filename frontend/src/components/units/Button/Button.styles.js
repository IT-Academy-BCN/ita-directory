import styled from "styled-components";
import tw, {theme} from "twin.macro";

const StyledButton = styled.button.attrs({
	className: "font-bold py-2 px-4 rounded mt-2 shadow",
})`
	box-shadow: ${theme`boxShadow.button-shadow`};

	&.blueGradient {
		${tw`text-white bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 p-1`}
	}
	&.orangeGradient {
		${tw`text-white bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 p-1`}
	}
	&.blueGradientProfile {
		${tw`w-28 text-white bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 p-1`}
	}
	&.greenGradient {
		${tw`w-36 text-white bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 p-1`}
	}
	&.darkRed {
		${tw`w-36 text-white bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 p-1`}
	}
	&.darkBlue {
		${tw`w-28 text-white bg-blue-800 hover:bg-blue-600 m-1 py-1 px-2`}
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
