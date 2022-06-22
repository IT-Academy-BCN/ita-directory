import { firstLetterUpperCase } from '../firstLetterUpperCase'

// eslint-disable-next-line import/prefer-default-export
async function retreiveAdsByCity(city) {
  try {
    const filteredArrayByQuery = []
    const petition = await fetch(`http://localhost:10091/ads/v1/ads`, {
      method: 'GET',
    })
    const data = await petition.json()
    const adData = await data.data

    if (city) {
      const capitalizedCity = firstLetterUpperCase(city)
      for (let i = 0; i < adData.length; i += 1) {
        if (adData[i].city === capitalizedCity) {
          if (filteredArrayByQuery.includes(adData[i]) === false) {
            filteredArrayByQuery.push(adData[i])
          }
        }
      }
    }

    return filteredArrayByQuery
  } catch (error) {
    return error
  }
}

export default retreiveAdsByCity
