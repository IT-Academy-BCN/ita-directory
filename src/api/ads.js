import axios from "axios";

export async function getAds(filters) {
	try {
		const params = {};
		if (filters) {
			if (filters.priceMin) {
				params.monthlyRent_gte = parseInt(filters.priceMin);
			}
			if (filters.priceMax) {
				params.monthlyRent_lte = parseInt(filters.priceMax);
			}
			if (filters.sizeMin) {
				params.squareMeters_gte = parseInt(filters.sizeMin);
			}
			if (filters.sizeMax) {
				params.squareMeters_lte = parseInt(filters.sizeMax);
			}
			if (filters.billsIncluded) {
				params.expenses = "incluido";
			}
		}

		const data = await axios.get("http://localhost:5000/ads", {params});
		const ads = await data.data;
		return ads;
	} catch (e) {
		console.log("Error: ", e);
	}
}

export async function getAd(adId) {
	try {
		const data = await axios.get(`http://localhost:5000/ads/${adId}`);
		const ads = await data.data;
		return ads;
	} catch (e) {
		console.log("Error: ", e);
	}
}
