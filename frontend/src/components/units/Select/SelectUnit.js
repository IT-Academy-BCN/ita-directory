import React from "react";
import Select from "react-select";

const SelectUnit = () => {
	const options = [
		{
			autoFocus: true,
			value: "chocolate",
			label: "Chocolate",
		},
	];

	return <Select options={options} />;
};

export default SelectUnit;
