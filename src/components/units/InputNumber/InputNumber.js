import React, {useState} from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	StyledError,
	StyledInput,
	StyledContainer,
	StyledIcon,
	StyledLabel,
	StyledLabelContainer,
	StyledEmptyLabel,
} from "./stylesInputNumber";

const InputNumber = ({
	placeholder,
	value,
	onChange,
	onFocus,
	onBlur,
	textStyles,
	inputStyles,
	labelStyles,
	className,
	id,
	name,
	min = -90,
	max,
	strictMode = true,
	size,
	errorText,
	errorStyles,
	disabled,
	step,
	icon,
	label,
}) => {
	const [isInvalid, setIsInvalid] = useState(false);

	const handleOnChange = (e) => {
		if (!strictMode) {
			validateIsInteger(e.target.value);
		}
		onChange(e);
	};

	const validateIsInteger = (val) => {
		console.log(val);
		const regex = /^[0-9]+$/;
		setIsInvalid(!(val === "" || regex.test(val)));
	};

	const validateStrictMode = (e) => {
		const val = e.keyCode;
		console.log(val);
		if (val) {
			const validKeyCodes = [
				8,
				13,
				35,
				36,
				37,
				38,
				39,
				40,
				46,
				48,
				49,
				50,
				51,
				52,
				53,
				54,
				55,
				56,
				57,
			]; //controls for all digits, canc, enter, backspace and arrows
			const regex = /^[0-9]+$/;
			setIsInvalid(!validKeyCodes.includes(val) || !regex.test(value));
		} else {
			setIsInvalid(false);
		}
	};

	const handleBlur = (e) => {
		console.log("on blur");
		validateIsInteger(value);
	};

	return (
		<React.Fragment>
			<StyledLabelContainer>
				<StyledLabel htmlFor="label">{label}</StyledLabel>
				<StyledContainer className="container" className={`${className} ${isInvalid ? "error" : ""}`}>
					<StyledIcon>
						<FontAwesomeIcon icon={icon} />
					</StyledIcon>
					<StyledInput
						type={strictMode ? "number" : "text"}
						placeholder={placeholder}
						value={value}
						onChange={handleOnChange}
						onBlur={handleBlur}
						onKeyUp={strictMode ? validateStrictMode : null}
						onFocus={onFocus}
						className={`${className} ${isInvalid ? "error" : ""}`}
						id={id}
						name={name}
						disabled={disabled}
						min={min}
						max={max}
						step="1"
					/>
				</StyledContainer>
			</StyledLabelContainer>
			<StyledLabelContainer>
				<StyledEmptyLabel htmlFor="emptyLabel">{label}</StyledEmptyLabel>
				<StyledError
					dangerouslySetInnerHTML={{__html: isInvalid ? errorText : null}}
					className={className}
				/>
			</StyledLabelContainer>
		</React.Fragment>
	);
};

InputNumber.propTypes = {
	placeholder: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
	textStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	inputStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	labelStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	className: PropTypes.string,
	id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	min: PropTypes.number,
	max: PropTypes.number,
	size: PropTypes.number,
	disabled: PropTypes.bool,
	errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	errorStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	strictMode: PropTypes.bool,
	step: PropTypes.number,
};

export default InputNumber;
