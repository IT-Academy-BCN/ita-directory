import React, {useState} from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	StyledError,
	StyledInput,
	StyledContainer,
	StyledIcon,
	StyledLabel,
	StyledMainContainer,
	StyledContainerInputError,
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
	min,
	max,
	size,
	errorText = "Tiene que ser un número válido o no puede estar vacío",
	errorStyles,
	disabled,
	step,
	icon,
	label,
	required,
}) => {
	const [isInvalid, setIsInvalid] = useState(false);

	/*warning on behavior of input type number:
	target value is passed as empty string if the number is not interpreted as valid 
	by the browser (e.g. when "+", "-" are typed) and onChange event is not fired. 
	Consider this when managing validation on parent components!
	*/

	const handleOnChange = (e) => {
		const val = e.target.value;
		const regex = /^\d+$/;
		setIsInvalid(val === "" || !regex.test(val) ? true : false);
		onChange(e);
	};

	return (
		<React.Fragment>
			<StyledMainContainer>
				<StyledLabel htmlFor={id}>{label}</StyledLabel>
				<StyledContainerInputError>
					<StyledContainer className={`${className} ${isInvalid ? "error" : ""}`}>
						<StyledIcon>
							<FontAwesomeIcon icon={icon} />
						</StyledIcon>
						<StyledInput
							type="number"
							placeholder={placeholder}
							value={value}
							onChange={handleOnChange}
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
							required={required}
						/>
					</StyledContainer>
					<StyledError
						dangerouslySetInnerHTML={{__html: isInvalid ? errorText : null}}
						className={className}
					/>
				</StyledContainerInputError>
			</StyledMainContainer>
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
	step: PropTypes.number,
	required: PropTypes.bool,
};

export default InputNumber;
