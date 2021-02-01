import React from "react";
import {Checkbox, Anchor, Label} from "./styles";

const PrivacyPolicy = () => {
	return (
		<Checkbox>
			<input type="checkbox" id="check" value="0" required name="privacy" />
			<Label>
				Acepto <Anchor href="#"> politica de Privacidad</Anchor>
			</Label>
		</Checkbox>
	);
};

export default PrivacyPolicy;
