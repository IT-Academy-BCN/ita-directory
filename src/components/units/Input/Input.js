import React from "react";
import PropTypes from "prop-types";
import StyledInput from "./styles";

const Input = ({
	type,
	placeholder,
	value,
	onChange,
	onFocus,
	onBlur,
	divStyles,
	labelText,
	labelStyles,
	textStyles,
	inputStyles,
	className,
	id,
	name,
	minlength,
	maxlength,
	size,
	success,
	errorText,
	errorStyles,
	error,
	disabled,
	minLength,
}) => {
	return (
		<div style={{...divStyles}}>
			<label htmlFor={name} style={{...labelStyles}} id={id}>
        {"introduce un email valido"}
        {labelText}
			</label>
			<StyledInput
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onFocus={onFocus}
				onBlur={onBlur}
				divStyles={divStyles}
				disabled={disabled}
				size={size}
				id={id}
				name={name}
				minLength={minlength}
				className={`${className} ${error ? "error" : ""} ${disabled ? "disabled" : ""}`}
			/>
			// add error styling
		</div>
	);
};

Input.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	onChange: PropTypes.func.isRequired,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
	divStyles: PropTypes.object,
	size: PropTypes.number,
	textStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	inputStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	labelStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	className: PropTypes.string,
	id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	minlength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	maxlength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	disabled: PropTypes.bool,
	errorText: PropTypes.string,
	errorStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	error: PropTypes.bool,
};

export default Input;

//check input props
