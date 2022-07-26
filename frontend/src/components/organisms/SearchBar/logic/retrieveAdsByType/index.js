/* eslint-disable consistent-return */
// import {firstLetterUpperCase} from "../firstLetterUpperCase"

// eslint-disable-next-line import/prefer-default-export
export const retrieveAdsByType = async (type) => {
  // Depèn de com pugin les dades els de backend
  // const capitalizedCity = firstLetterUpperCase(city)
  try {
    const filteredArrayByQuery = []
    const petition = await fetch(`${import.meta.env.VITE_API_URL}/ads`, {
      method: 'GET',
    })
    const data = await petition.json()

    const adData = await data.data

    if (type) {
      for (let i = 0; i < adData.length; i += 1) {
        if (adData[i].n_rooms === type) {
          if (filteredArrayByQuery.includes(adData[i]) === false) {
            filteredArrayByQuery.push(adData[i])
          }
        }
      }
    }

    return filteredArrayByQuery
  } catch (error) {
    // console.error(error)
  }
}
