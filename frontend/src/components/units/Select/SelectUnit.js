import React from "react";
import AsyncSelect from "react-select/async";

const SelectUnit = ({
	options,
	handleOnChange,
	customStyles,
	components,
	loadOptions,
	placeholder,
}) => {
	return (
		<AsyncSelect
			options={options}
			onChange={handleOnChange}
			styles={customStyles}
			isMulti={false}
			components={components}
			loadOptions={loadOptions}
			placeholder={placeholder}
		/>
	);
};

export default SelectUnit;
