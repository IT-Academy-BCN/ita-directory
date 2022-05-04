import React, {useState, useEffect} from "react";
import AdCard from "./AdCard/AdCard.jsx";
import Body from "../../components/layout/Body/Body";
// import {getUserAds} from "api/user";
import {StyledCard, StyledUserAds} from "./UserAds.style.js";
import {Container} from "../../theme/GlobalStyles.js";

const REQ_STATUS = {
	INITIAL: "INITIAL",
	LOADING: "LOADING",
	SUCCESS: "SUCCESS",
	FAILURE: "FAILURE",
};

const UserAds = () => {
	// const USER_ID = 1; //TODO change when login works
	const [ads, setAds] = useState([]);
	const [fetchStatus, setFetchStatus] = useState(REQ_STATUS.INITIAL);

	useEffect(() => {
		setFetchStatus(REQ_STATUS.LOADING);
		fetch("https://api-casas.kevinmamaqi.com/api-casas")
			.then((res) => res.json())
			.then((ads) => {
				setAds(ads.slice(0, 3));
				setFetchStatus(REQ_STATUS.SUCCESS);
			})
			.catch((e) => {
				setFetchStatus(REQ_STATUS.FAILURE);
				console.error(e);
			});
	}, []);

	return (
		<Body title="Mis anuncios" isLoggedIn={true}>
			<Container row>
				<StyledUserAds>
					{fetchStatus === REQ_STATUS.INITIAL || fetchStatus === REQ_STATUS.LOADING ? (
						"loading..."
					) : fetchStatus === REQ_STATUS.SUCCESS ? (
						<>
							{ads.map((ad, i) => (
								<StyledCard key={i}>
									<AdCard
										key={ad.id}
										ad={ad}
										containerClassName="cardContainer"
									/>
								</StyledCard>
							))}
						</>
					) : (
						"Ha habido un error con tu petición"
					)}
				</StyledUserAds>
			</Container>
		</Body>
	);
};
export default UserAds;
