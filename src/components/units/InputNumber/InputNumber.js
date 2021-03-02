import React from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {StyledError, StyledInput, StyledContainer, StyledIcon} from "./stylesInputNumber";

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
	errorText,
	errorStyles,
	error,
	disabled,
    step,
	icon,
}) => {
    return(
        <StyledContainer class="container">
			<StyledIcon class="icon"><FontAwesomeIcon icon={ icon}/></StyledIcon>
            <StyledInput
				type="number"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onFocus={onFocus}
				onBlur={onBlur}
				className={`${className} ${error ? "error" : ""}`}
				id={id}
				name={name}
				disabled={disabled}
				min={min}
                max={max}
                step={step}
				/>
			<StyledError
				dangerouslySetInnerHTML={{__html: error ? errorText : null}}
				className={className}
			/>
        </StyledContainer>
    );
}

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
	error: PropTypes.bool,
    step: PropTypes.number,
};

export default InputNumber;