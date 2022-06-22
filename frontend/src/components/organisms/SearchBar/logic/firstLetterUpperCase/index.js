/* eslint-disable consistent-return */
// eslint-disable-next-line import/prefer-default-export
export const firstLetterUpperCase = (word) => {
  try {
    if (word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }
  } catch (error) {
    return error
  }
}
