import {findRepeatedValuesArrays} from "../find-repeated-values-array/index";
import {retreiveAdsByCity} from "../retrieveAdsByCity";
import {retrieveAdsByType} from "../retrieveAdsByType";

export const retrieveSearchBarAds = async (typeValue, cityValue) => {
	try {
		if (typeValue && cityValue) {
			const typeMatches = await retrieveAdsByType(typeValue);
			console.log("ROOM MATCHES", typeMatches);
			const cityMatches = await retreiveAdsByCity(cityValue);
			console.log("CITY MATCHES", cityMatches);
			const idMatches = findRepeatedValuesArrays(typeMatches, cityMatches);
			return idMatches;
		} else if (typeValue === null && cityValue) {
			const cityMatches = await retreiveAdsByCity(cityValue);
			return cityMatches;
		} else if (typeValue && cityValue === null) {
			const typeMatches = await retrieveAdsByType(typeValue);
			return typeMatches;
		}
	} catch (error) {
		console.error(error);
	}
};
