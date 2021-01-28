import React from "react";
import Body from "components/layout/Body/Body";
import AsyncButton from "components/units/AsyncButton/AsyncButton";
import Input from "components/units/Input/Input";
import {StyledFormProfile, StyledPhotoSpace, StyledInputsSpace, StyledSaveSpace} from "./styles";

const Profile = () => {
	return (
		<Body>
			<StyledFormProfile>
				<StyledPhotoSpace>
					<AsyncButton
						text="Subir"
						loadingText="Subiendo"
						type="submit"
						className="blueGradient"
						// onClick={handleClick}
						isLoading={false}
						// disabled={disabled}
					/>
				</StyledPhotoSpace>
				<StyledInputsSpace>
					<Input />
					<Input />
				</StyledInputsSpace>
				<StyledInputsSpace>
					<Input />
					<Input />
				</StyledInputsSpace>
				<StyledSaveSpace>
					<AsyncButton
						text="Guardar"
						loadingText="Guardando"
						type="submit"
						className="greenGradient"
						// onClick={handleClick}
						isLoading={false}
						// disabled={disabled}
					/>
				</StyledSaveSpace>
			</StyledFormProfile>
		</Body>
	);
};

export default Profile;
