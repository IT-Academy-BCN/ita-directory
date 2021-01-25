import React, {useState} from "react";
// import {logout} from "utils";

// components
import Input from "components/units/Input/Input";

const validateEmail = (email) => {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

//checks 1 letter, 1 number, length greater than 3.
const validatePassword = (password) => {
	var re = /[a-z]\d|\d[a-z]/i;
	return re.test(password) && password.length > 3;
};

const Login = () => {
	//Button
	const [disabled, setDisabled] = useState(false);
	const handleClick = () => {
		setDisabled(true);
		setTimeout(() => {
			setDisabled(false);
		}, 5000);
	};

	// value - handleChange
	const [isEmailError, setIsEmailError] = useState(false);
	const [emailValue, setEmailValue] = useState("");
	const [isPassError, setIsPassError] = useState(false);
	const [passValue, setPassValue] = useState("");

	console.log(`value:  ${emailValue}`);
	console.log(`value:  ${passValue}`);

	const handleInputOnChange = (e) => {
		const val = e.target.value;
		const isEmail = validateEmail(val);
		setEmailValue(val);
		setIsEmailError(!isEmail);
	};

	const handleInputPassOnChange = (e) => {
		const valPass = e.target.value;
		const isPass = validatePassword(valPass);
		setPassValue(valPass);
		setIsPassError(!isPass);
	};

	console.log(isEmailError);
	console.log(isPassError);

	const handleFocus = () => {
		console.log("He pinchado dentro");
	};

	const handleBlur = () => {
		console.log("He pinchado fuera");
	};

	return (
		<div>
			<form>
				<label htmlFor="emailName"></label>
				<Input
					type="email"
					placeholder="Introduce tu email"
					value={emailValue}
					onChange={handleInputOnChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					id="emailName"
					name="emailName"
					error={isEmailError}
					disabled={disabled}
				/>
				<br></br>
				<label htmlFor="passName"></label>
				<Input
					type="password"
					placeholder="Introduce tu contraseña"
					value={passValue}
					onChange={handleInputPassOnChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					id="passName"
					name="passName"
					error={isPassError}
					disabled={disabled}
				/>
				<br></br>
				<button onClick={handleClick}>Submit</button>
			</form>
		</div>
	);
};

export default Login;
