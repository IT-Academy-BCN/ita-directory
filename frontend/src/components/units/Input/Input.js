import React from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {InputContainerStyled, InputStyled, ErrorStyled} from "./Input.styles";

const Input = ({
	type,
	placeholder,
	onFocus,
	onBlur,
	inputStyles,
	className,
	id,
	name,
	minlength,
	maxlength,
	size,
	errorStyles,
	error,
	disabled,
	label,
	required,
	icon,
	minMarginTop,
	register,
	onChange,
	ref
}) => {
	const hasIcon = icon ? true : false;
	return (
		<>
			<InputContainerStyled
				className="w-full input-container"
				type={type}
				minMarginTop={minMarginTop}
			>
				{hasIcon && <FontAwesomeIcon icon={icon} />}
				{label && type !== "checkbox" && <label>{label}</label>}
				<InputStyled
					type={type}
					placeholder={placeholder}
					onFocus={onFocus}
					onBlur={onBlur}
					className={`${className} ${error ? "error" : ""}`}
					id={id}
					name={name}
					disabled={disabled}
					minLength={minlength}
					maxLength={maxlength}
					size={size}
					error={error}
					required={required}
					style={inputStyles}
					onChange={onChange}
					ref={ref}
					{...(register && register)}
				/>
			</InputContainerStyled>
			<ErrorStyled styles={errorStyles}>{error}</ErrorStyled>
		</>
	);
};

Input.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
	textStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	inputStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	labelStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	className: PropTypes.string,
	id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	minlength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	maxlength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	size: PropTypes.number,
	disabled: PropTypes.bool,
	errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	errorStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	success: PropTypes.bool,
	inputContainerClassName: PropTypes.string,
	required: PropTypes.bool,
	minMarginTop: PropTypes.bool,
	onChange: PropTypes.func,
	ref: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Input;
