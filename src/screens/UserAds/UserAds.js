import React, {useState, useEffect} from "react";
import AdCard from "screens/UserAds/AdCard/AdCard.js";
import Body from "components/layout/Body/Body";
// import {getUserAds} from "api/user";
import {StyledCard, StyledAdList} from "./UserAds.style.js";
import {Container} from "theme/GlobalStyles.js";

const UserAds = () => {
	// const USER_ID = 1; //TODO change when login works
	const [ads, setAds] = useState([]);

	useEffect(() => {
		fetch("https://api-casas.kevinmamaqi.com/api-casas")
			.then((res) => res.JSON)
			.then((ads) => setAds(ads))
			.catch((e) => console.log(e));
	}, []);

	return (
		<Body title="Mis anuncios" isLoggedIn={true}>
			<Container row>
				<StyledAdList>
					{ads.map((ad, i) => (
						<StyledCard key={i}>
							<AdCard key={ad.id} ad={ad} containerClassName="cardContainer" />
						</StyledCard>
					))}
				</StyledAdList>
			</Container>
		</Body>
	);
};
export default UserAds;
