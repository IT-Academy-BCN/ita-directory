import React from "react";
import {PrivacyPolicyStyled, Anchor} from "./PrivacyPolicy.styles";

const PrivacyPolicy = () => {
	return (
		<PrivacyPolicyStyled>
			<input type="checkbox" id="check" value="0" required name="privacy" />
			<label>
				Acepto<Anchor href="#">politica de Privacidad</Anchor>
			</label>
		</PrivacyPolicyStyled>
	);
};

export default PrivacyPolicy;
