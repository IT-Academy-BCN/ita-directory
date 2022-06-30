import axios from 'axios'

// eslint-disable-next-line import/prefer-default-export
export async function getUserAds(userId) {
  try {
    const params = {
      userId,
    }
    const data = await axios.get('http://localhost:5000/ads', { params })
    const ads = await data.data
    return ads
  } catch (e) {
    // console.log('Error: ', e)
    return e
  }
}
