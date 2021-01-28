import React from "react";
import Body from "components/layout/Body/Body";
import AsyncButton from "components/units/AsyncButton/AsyncButton";
import Input from "components/units/Input/Input";
import {
	StyledFormProfile,
	StyledPhotoWrapper,
	StyledInputsWrapper,
	StyledSaveWrapper,
} from "./styles";

const Profile = () => {
	return (
		<Body>
			<StyledFormProfile>
				<StyledPhotoWrapper>
					<AsyncButton
						text="Subir"
						loadingText="Subiendo"
						type="submit"
						className="blueGradient"
						// onClick={handleClick}
						isLoading={false}
						// disabled={disabled}
					/>
				</StyledPhotoWrapper>
				<StyledInputsWrapper>
					<Input />
					<Input />
				</StyledInputsWrapper>
				<StyledInputsWrapper>
					<Input />
					<Input />
				</StyledInputsWrapper>
				<StyledSaveWrapper>
					<AsyncButton
						text="Guardar"
						loadingText="Guardando"
						type="submit"
						className="greenGradient"
						// onClick={handleClick}
						isLoading={false}
						// disabled={disabled}
					/>
				</StyledSaveWrapper>
			</StyledFormProfile>
		</Body>
	);
};

export default Profile;
