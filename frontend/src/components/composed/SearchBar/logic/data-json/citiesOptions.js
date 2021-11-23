export const citiesOptions = [
	{
		value: "Barcelona",
		label: "Barcelona",
	},
	{
		value: "Berlin",
		label: "Berlin",
	},
	{
		value: "Rotterdam",
		label: "Rotterdam",
	},
	{
		value: "Mallorca",
		label: "Mallorca",
	},
	{
		value: "Lyon",
		label: "Lyon",
	},
	{
		value: "Braga",
		label: "Braga",
	},
	{
		value: "Napoli",
		label: "Napoli",
	},
	{
		value: "Paris",
		label: "Paris",
	},
	{
		value: "London",
		label: "London",
	},
];
// export const fetchCities = async () => {
// 	const apiRequest = await fetch(`http://localhost/:10091/ads/v1/ads`, {
// 		method: "GET"
// 	})

// 	const rawData = await apiRequest.json()

// 	const data = rawData.data

// 	const citiesArray = []

// 	let repeated

// 	data.map(ad => {

// 		for (let i = 0; i < citiesArray.length; i++) {
// 			if (citiesArray[i].city === ad.city) {
// 				repeated = true
// 				return repeated
// 			}
// 		}

// 		if (repeated === false) {
// 			citiesArray.push(ad)
// 		}
// 		repeated = false

// 		return citiesArray
// 	})
// }
