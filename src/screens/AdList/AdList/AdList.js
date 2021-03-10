import React, {useState, useEffect} from "react";
import AdCard from "screens/AdList/AdCard/AdCard";
import Body from "components/layout/Body/Body";
import {getAds} from "api/ads";
import {
	StyledTitle,
	StyledWrapper,
	RowWrapper,
	StyledTreeSearch,
	StyledCard,
	StyledAdList,
} from "./AdList.style.js";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import IconWithLabel from "components/units/IconWithLabel/IconWithLabel";
import {Container} from "theme/GlobalStyles.js";

const AdList = () => {
	const [ads, setAds] = useState([]);

	useEffect(() => {
		try {
			getAds().then((ads) => setAds(ads));
		} catch (e) {
			console.log(e);
		}
	}, []);
	return (
		<Body title="Pisos en Alquiler en Madrid">
			<Container row>
				<StyledAdList>
					<StyledTreeSearch>
						<label>Madrid</label>
						{">"}
						<label>Alquiler</label>
					</StyledTreeSearch>
					<RowWrapper>
						<StyledTitle>Listado de pisos</StyledTitle>
						<IconWithLabel text="Vista de mapa" icon={faMapMarkerAlt} />
					</RowWrapper>
					<StyledWrapper>
						{ads.map((ad) => {
							return (
								<StyledCard>
									<AdCard {...ad} />
								</StyledCard>
							);
						})}
					</StyledWrapper>
				</StyledAdList>
			</Container>
		</Body>
	);
};
export default AdList;
