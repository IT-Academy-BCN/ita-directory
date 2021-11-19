import {firstLetterUpperCase} from "../firstLetterUpperCase";

export const retreiveAdsByCity = async (city) => {
	try {
		let filteredArrayByQuery = [];
		const petition = await fetch(`http://localhost:10091/ads/v1/ads`, {
			method: "GET",
		});
		const data = await petition.json();

		const adData = await data.data;

		if (city) {
			const capitalizedCity = firstLetterUpperCase(city);
			for (let i = 0; i < adData.length; i++) {
				if (adData[i].city === capitalizedCity) {
					if (filteredArrayByQuery.includes(adData[i].id) === false) {
						filteredArrayByQuery.push(adData[i].id);
					}
				}
			}
		}

		return filteredArrayByQuery;
	} catch (error) {
		console.error(error);
	}
};
