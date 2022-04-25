// Components
import Input from "../Input/Input";

// Styled Components
import {CheckBoxContainer} from "./CheckBox.styles";

const CheckBox = ({...props}) => {
	return (
		<CheckBoxContainer className="CheckBoxContainer">
			<Input type="checkbox" className="Input" {...props} />
		</CheckBoxContainer>
	);
};

export default CheckBox;
