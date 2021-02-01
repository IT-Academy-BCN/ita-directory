import React from "react";
import {Label, Anchor} from "./styles";

const ForgotPassword = () => {
	return (
		<div className="changepassword" id="changepassword">
			<Label htmlFor="forgotpassword">
				<Anchor href="#">Has olvidado tu contraseña?</Anchor>
			</Label>
		</div>
	);
};

export default ForgotPassword;
