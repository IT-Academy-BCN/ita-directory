import styled from "styled-components";
// import tw, {theme} from "twin.macro";

const StyledButton = styled.button.attrs({
	// className: "font-bold text-white py-2 px-6 rounded my-2 shadow bg-lightBlue",
})`
	display: flex;
	justify-content: center;
	align-items: center;

	&.blue-gradient {
	}
	&.orange-gradient {
	}
	&.green-gradient {
	}
	&.darkRed {
	}
	&.darkBlue {
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
