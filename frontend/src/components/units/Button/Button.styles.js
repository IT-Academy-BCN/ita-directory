import styled from "styled-components";
import tw, {theme} from "twin.macro";

const StyledButton = styled.button.attrs({
	className: "font-bold text-white py-2 px-6 rounded my-2 shadow bg-lightBlue",
})`
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: ${theme`boxShadow.button-shadow`};

	&.blue-gradient {
		${tw`text-white opacity-100 bg-gradient-to-r from-lightBlue to-darkBlue hover:opacity-90`}
	}
	&.orange-gradient {
		${tw`text-white opacity-100 bg-gradient-to-r from-lightOrange to-darkOrange hover:opacity-90`}
	}
	&.green-gradient {
		${tw`w-36 text-white opacity-100 bg-gradient-to-r from-lightGreen to-darkGreen hover:opacity-90`}
	}
	&.darkRed {
		${tw`w-36 text-white opacity-100 bg-darkRed hover:opacity-90`}
	}
	&.darkBlue {
		${tw`w-28 text-white opacity-100 bg-darkBlue hover:opacity-90 m-1`}
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
