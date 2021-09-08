import CustomIcon from "./CustomIcon/CustomIcon";
import {IconContainer} from "./IconsSelector.styles";

const IconSelector = ({customIcons, handelOnClickIcon}) => {
	return (
		<IconContainer>
			{customIcons.map((icono) => {
				return (
					<CustomIcon
						key={icono.key}
						icono={icono}
						handelOnClickIcon={handelOnClickIcon}
					/>
				);
			})}
		</IconContainer>
	);
};

export default IconSelector;
