import {useState, useEffect} from "react";

// Components
import Input from "components/units/Input/Input";

// Utilities
import {validateEmail, validatePassword, msgs} from "utils/userFlow";

const InputValidated = ({...props}) => {
	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		setIsValid(() => {
			switch (props.type) {
				case "email":
					return validateEmail(props.value);
				case "password":
					return validatePassword(props.value);
				default:
					return null;
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.value]);

	useEffect(() => {
		if (props.valid) props.valid(isValid);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isValid]);

	return (
		<>
			<Input
				type="email"
				success={props.value !== "" && isValid}
				error={props.value !== "" && !isValid}
				errorText={props.errorText || msgs[`${props.type}Error`]}
				{...props}
			/>
		</>
	);
};

export default InputValidated;
