import React from "react";
import PropTypes from "prop-types";
import {TextAreaStyled, TextAreaError, TextAreaInput, StyledError} from "./TextArea.styles";

const TextArea = ({
	placeholder,
	value,
	onChange,
	onFocus,
	onBlur,
	textAreaStyles,
	labelStyles,
	className,
	id,
	name,
	minLength,
	maxLength,
	disabled,
	required = false,
	rows,
	cols,
	errorText,
	errorStyles,
	error,
	label,
	inputContainerClassName,
}) => {
	return (
		<TextAreaStyled className={inputContainerClassName}>
			<label style={labelStyles} htmlFor={id}>
				{label}
			</label>
			<TextAreaError className={inputContainerClassName}>
				<TextAreaInput
					style={textAreaStyles}
					placeholder={placeholder}
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
					className={`${className} ${error ? "error" : ""}`}
					id={id}
					name={name}
					disabled={disabled}
					maxLength={maxLength}
					minLength={minLength}
					rows={rows}
					cols={cols}
					required={required}
					value={value}
				/>
				<StyledError
					dangerouslySetInnerHTML={{__html: error ? errorText : null}}
					className={className}
					style={errorStyles}
				/>
			</TextAreaError>
		</TextAreaStyled>
	);
};

TextArea.propTypes = {
	placeholder: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	onChange: PropTypes.func.isRequired,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,

	textStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	textAreaStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	label: PropTypes.string,
	labelStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

	className: PropTypes.string,
	id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	minLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	maxLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	disabled: PropTypes.bool,
	isRequired: PropTypes.bool,
	rows: PropTypes.number,
	cols: PropTypes.number,
	errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	errorStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	error: PropTypes.bool,
};

export default TextArea;
