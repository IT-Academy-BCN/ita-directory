import axios from "axios";

export async function getAds() {
	try {
		const data = await axios.get("http://localhost:5000/ads");
		const ads = await data.data;
		return ads;
	} catch (e) {
		console.log("Error: ", e);
	}
}
