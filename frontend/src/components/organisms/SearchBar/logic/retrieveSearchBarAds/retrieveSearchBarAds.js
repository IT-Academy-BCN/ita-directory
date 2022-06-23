import findRepeatedValuesArrays from '../find-repeated-values-array/index'
import retreiveAdsByCity from '../retrieveAdsByCity'
import { retrieveAdsByType } from '../retrieveAdsByType'

// eslint-disable-next-line consistent-return
async function retrieveSearchBarAds(typeValue, cityValue) {
  try {
    if (typeValue && cityValue) {
      const typeMatches = await retrieveAdsByType(typeValue)
      const cityMatches = await retreiveAdsByCity(cityValue)
      const idMatches = findRepeatedValuesArrays(typeMatches, cityMatches)
      return idMatches
    }
    if (typeValue === null && cityValue) {
      const cityMatches = await retreiveAdsByCity(cityValue)
      return cityMatches
    }
    if (typeValue && cityValue === null) {
      const typeMatches = await retrieveAdsByType(typeValue)
      return typeMatches
    }
  } catch (error) {
    return error
  }
}

export default retrieveSearchBarAds
