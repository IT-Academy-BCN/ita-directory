import React from "react";
import Select from "react-select";

const SelectUnit = ({options, handleOnChange, customStyles, components, placeholder, value}) => {
	return (
		<Select
			options={options}
			onChange={handleOnChange}
			styles={customStyles}
			isMulti={false}
			components={components}
			placeholder={placeholder}
			value={value}
			autoFocus={true}
			isClearable={true}
			isDisabled={false}
			isLoading={false}
			isRtl={false}
			isSearchable={true}
			isOptionSelected={true}
			onSelectResetsInput={false}
		/>
	);
};

export default SelectUnit;
