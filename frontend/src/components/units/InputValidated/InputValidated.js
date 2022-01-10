import {useState, useEffect} from "react";

// Components
import Input from "components/units/Input/Input";

// Utilities
import {validateEmail, validatePassword, msgs, validateName} from "utils/userFlow";
// import {tsPropertySignature} from "@babel/types";

const InputValidated = (props) => {
	const [isValid, setIsValid] = useState(false);
	useEffect(() => {
		setIsValid(() => {
			switch (props.name) {
				case "name":
					return validateName(props.value);
				case "lastname":
					return validateName(props.value);
				case "email":
					return validateEmail(props.value);
				case "password":
					return validatePassword(props.value);
				default:
					return null;
			}
		});
	}, [setIsValid, props.name, props.value]);

	useEffect(() => {
		if (props.valid) props.valid(isValid);
	}, [props, isValid]);

	return (
		<>
			<Input
				success={props.value !== "" && isValid}
				error={props.value !== "" && !isValid}
				errorText={props.errorText || msgs[`${props.name}Error`]}
				{...props}
			/>
		</>
	);
};

export default InputValidated;
