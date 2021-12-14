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
	margin-bottom: 2rem;
`;

export const ProfileForm = styled.form`
	display: flex;
	justify-content: center;
	flex-direction: row;
	gap: 2rem 2rem;
	color: #4a4a4a;

	& > div,
	& > button {
		align-items: center;
		row-gap: 1.5rem;

		@media only screen and (min-width: 768px) {
			align-items: flex-start;
		}
	}

	&:not(:first-of-type) {
		padding-top: 2rem;
	}

	&:not(:last-of-type) {
		border-bottom: 1px solid ${Colors.lightGray};
		padding-bottom: 2rem;
	}

	&.uploadphoto-modal {
		align-items: center;
	}
	&.profile-photo {
		flex-direction: column;
		align-items: center;

		@media only screen and (min-width: 768px) {
			flex-direction: row;
			justify-content: flex-start;
			column-gap: 3rem;
		}

		& + div {
			height: fit-content;
		}

		& p {
			font-size: 0.75em;
			font-weight: 300;
			text-align: center;

			@media only screen and (min-width: 768px) {
				text-align: left;
				font-size: 0.9em;
			}
		}

		& .info-photo-uploaded {
			padding-left: 1em;
			color: ${Colors.darkRed};
			font-style: italic;
		}
	}

	&.profile-data {
		flex-direction: column;

		> div {
			display: flex;
			margin: 0;

			flex-direction: column;
			justify-content: stretch;
			row-gap: 1rem;

			@media only screen and (min-width: 768px) {
				flex-direction: row;
				column-gap: 2rem;
			}

			> div {
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
			}
		}

		label,
		label p {
			width: 100%;
			font-size: 0.8em;
		}

		label p {
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
