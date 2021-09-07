import CustomIcon from "./CustomIcon";
import {IconContainer} from "./IconsSelector.styles";

const IconSelector = (props) => {
	const {customIcons, handleOnClickIcon} = props;
	console.log(customIcons);
	console.log(handleOnClickIcon);
	return (
		<IconContainer>
			{customIcons.map((icono) => {
				return (
					<CustomIcon key={icono.key} icono={icono} handleOnClick={handleOnClickIcon} />
				);
			})}
		</IconContainer>
	);
};

export default IconSelector;
