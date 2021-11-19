import React from "react";
import Select from "react-select";

const SelectUnit = ({
	options,
	handleOnChange,
	customStyles,
	components,
	placeholder,
	value,
	containerValue,
}) => {
	return (
		<Select
			options={options}
			onChange={handleOnChange}
			styles={customStyles}
			isMulti={false}
			components={components}
			placeholder={placeholder}
			value={value}
			defaultValue={options[0]}
			containerValue={containerValue}
			// autoFocus={true}
			// isClearable={true}
			// isDisabled={false}
			// isLoading={false}
			// isRtl={false}
			isSearchable={true}
			// isOptionSelected={true}
			// onSelectResetsInput={false}
		/>
	);
};

export default SelectUnit;
