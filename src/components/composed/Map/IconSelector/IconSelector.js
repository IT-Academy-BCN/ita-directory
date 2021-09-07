import CustomIcon from "./CustomIcon/CustomIcon";
import {IconContainer} from "./IconsSelector.styles";

const IconSelector = ({customIcons, handelOnClickIcon, reRender}) => {
	return (
		<IconContainer>
			{customIcons.map((icono) => {
				return (
					<CustomIcon
						key={icono.key}
						icono={icono}
						handelOnClickIcon={handelOnClickIcon}
						reRender={reRender}
					/>
				);
			})}
		</IconContainer>
	);
};

export default IconSelector;
