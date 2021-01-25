/* import { types } from '@babel/core'; */
import React from 'react'
// Style
import StyledInput from "./styles";
import PropTypes from 'prop-types';
/* import {faAsterisk} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; */



const Input = ({
    type, 
    value, 
    onChange, 
    minlength, 
    disabled, 
    onKeyPress,
    onFocus, 
    onBlur, 
    placeholder, 
    required, 
    size,
    id,
    name, 
    text, 
    textStyles,
    inputStyles,
    labelStyle, 
    errorText,
    errorStyles,
    className
   
}) => {
    

        return (
        <>
            <label style={{...labelStyle}} id={id}>
                <span style={{...textStyles}}>{text} 
                 </span>   
                <StyledInput
                type={type}  
                value={value} 
                onChange={onChange}
                minLength={minlength}
                disabled={disabled} 
                onKeyPress={onKeyPress} 
                onFocus={onFocus} 
                onBlur={onBlur} 
                placeholder={placeholder} 
                required={required} 
                size={size} 
                id={id}
                name={name}
                style={{...inputStyles}}
                className={`${className} {"success"}`}
                />
                <span style={{...errorStyles}}
              
                >{errorText}</span>
            </label>
        </>
    )

    Input.propTypes ={
        type: PropTypes.string.isRequired, 
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        onChange:PropTypes.func.isRequired, 
        minlength: PropTypes.number.isRequired, 
        disabled: PropTypes.bool.isRequired,
        onClick:PropTypes.func.isRequired,
        onFocus:PropTypes.func.isRequired, 
        onBlur: PropTypes.func.isRequired,
        placeholder: PropTypes.string.isRequired,
        required: PropTypes.bool.isRequired,
        size: PropTypes.number.isRequired, 
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        text: PropTypes.string.isRequired, 
        textStyles: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        inputStyles:PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        labelStyles:PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        errorText: PropTypes.string.isRequired, 
        errorStyles: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        className: PropTypes.string, 
    } 


}
export default Input
