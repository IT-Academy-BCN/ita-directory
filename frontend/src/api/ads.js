/* eslint-disable consistent-return */
import axiosInstance from '../utils/axiosInstance'

export async function getAds(filters) {
  try {
    const params = {}
    if (filters) {
      if (filters.priceMin) {
        params.monthlyRent_gte = parseInt(filters.priceMin, 10)
      }
      if (filters.priceMax) {
        params.monthlyRent_lte = parseInt(filters.priceMax, 10)
      }
      if (filters.sizeMin) {
        params.squareMeters_gte = parseInt(filters.sizeMin, 10)
      }
      if (filters.sizeMax) {
        params.squareMeters_lte = parseInt(filters.sizeMax, 10)
      }
      if (filters.billsIncluded) {
        params.expenses = 'incluido'
      }
    }

    const data = await axiosInstance.get('/ads', { params })
    const ads = await data.data
    return ads
  } catch (e) {
    throw new Error(`${e}`)
  }
}

export async function getAd(adId) {
  try {
    const response = await axiosInstance.get(`/ads/v1/ads/${adId}`)
    return response.data.data
  } catch (e) {
    throw new Error(`${e}`)
  }
}
// try {
// 	const data = await axios.get(`http://localhost:5000/ads/${adId}`);
// 	const ads = await data.data;
// 	return ads;
// } catch (e) {
// 	console.log("Error: ", e);
// }
