import styled from "styled-components";
import Colors from "theme/Colors";

export const ProfileWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	padding: 3rem;
	background-color: ${Colors.extraLightGrey};
	border-radius: 0.5em;
`;

export const ProfileForm = styled.form`
	display: flex;
	justify-content: center;
	flex-direction: row;
	gap: 2rem 3rem;
	color: #4a4a4a;

	&:not(:first-of-type) {
		padding-top: 3rem;
	}

	&:not(:last-of-type) {
		border-bottom: 1px solid ${Colors.lightGray};
		padding-bottom: 3rem;
	}

	&.profile-photo {
		justify-content: flex-start;

		& p {
			font-size: 0.9em;
			font-weight: 300;
		}
	}

	&.profile-data {
		flex-direction: column;

		& > div {
			display: flex;
			flex-direction: row;
			column-gap: 2rem;
			margin: 0;
		}

		& label,
		& label p {
			font-size: 0.8em;
		}

		& label p {
			font-weight: 300;
		}
	}
`;

export const ProfileImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 10rem;
	object-fit: cover;
	background-color: white;
	border-radius: 0.25rem;
	box-shadow: 0 2px 7px ${Colors.darkerShadow};
	padding: 0.5rem;
`;

export const ProfileUploadPhoto = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	p:first-of-type {
		font-size: 1.3em;
		margin-bottom: 0.4rem;
	}
`;

export const ProfileLabel = styled.label`
	display: flex;
	flex-direction: column;
	width: 50%;

	p {
		font-style: italic;
		font-size: 0.7em;
		margin-top: 0.5em;

		a {
			color: ${Colors.darkRed};

			&:hover {
				color: ${Colors.darkBlue};
			}
		}
	}
`;

export const StyledInputsWrapper = styled.div`
	display: flex;
`;
