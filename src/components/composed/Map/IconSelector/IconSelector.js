import CustomIcon from "./CustomIcon";
import {IconContainer} from "./IconsSelector.styles";

const IconSelector = (props) => {
	const {customIcons, handelOnClickIcon} = props;
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
