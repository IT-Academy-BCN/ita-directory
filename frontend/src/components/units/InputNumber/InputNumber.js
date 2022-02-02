import React, {useState} from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {InputNumberStyled, StyledError, StyledInput, StyledContainer} from "./InputNumber.styles";

const InputNumber = ({
	placeholder,
	onFocus,
	onBlur,
	textStyles,
	inputStyles,
	labelStyles,
	className,
	id,
	name,
	min,
	max,
	size,
	error,
	errorStyles,
	disabled,
	step,
	icon,
	label,
	register,
	type,
}) => {
	const [isInvalid, setIsInvalid] = useState(false);

	/*warning on behavior of input type number:
	target value is passed as empty string if the number is not interpreted as valid 
	by the browser (e.g. when "+", "-" are typed) and onChange event is not fired. 
	Consider this when managing validation on parent components!
	*/

	return (
		<InputNumberStyled>
			<label htmlFor={id}>{label}</label>
			<div className="inputsContainer">
				<StyledContainer className={`${className} ${isInvalid ? "error" : ""}`}>
					<div className="styledIcon">
						<FontAwesomeIcon icon={icon} />
					</div>
					<StyledInput
						type={type}
						placeholder={placeholder}
						onFocus={onFocus}
						onBlur={onBlur}
						className={`${className} ${isInvalid ? "error" : ""}`}
						id={id}
						name={name}
						min={min}
						max={max}
						disabled={disabled}
						step={step}
						textStyles={textStyles}
						inputStyles={inputStyles}
						labelStyles={labelStyles}
						size={size}
						errorStyles={errorStyles}
						error={error}
						{...(register && register)}
					/>
				</StyledContainer>
				<StyledError className={className}>{error}</StyledError>
			</div>
		</InputNumberStyled>
	);
};

InputNumber.propTypes = {
	placeholder: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
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
	step: PropTypes.number,
	required: PropTypes.bool,
};

export default InputNumber;
