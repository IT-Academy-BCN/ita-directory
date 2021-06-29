import React from "react";
import {CheckboxStyled, Anchor} from "./PrivacyPolicy.styles";

const PrivacyPolicy = () => {
	return (
		<CheckboxStyled>
			<input type="checkbox" id="check" value="0" required name="privacy" />
			<label>
				Acepto<Anchor href="#">politica de Privacidad</Anchor>
			</label>
		</CheckboxStyled>
	);
};

export default PrivacyPolicy;
