import React from "react";
import Select from "react-select";

const SelectUnit = ({
	options,
	handleOnChange,
	className,
	components,
	placeholder,
	value,
	containerValue,
	customStyles,
	loadOptions,
}) => {
	return (
		<Select
			options={options}
			onChange={handleOnChange}
			isMulti={false}
			styles={customStyles}
			components={components}
			placeholder={placeholder}
			value={value}
			containerValue={containerValue}
			autoFocus={true}
			isClearable={true}
			isDisabled={false}
			isLoading={false}
			isRtl={false}
			isSearchable={true}
			isOptionSelected={true}
			onSelectResetsInput={false}
			className={`header-select ${className}`}
		/>
	);
};

export default SelectUnit;
