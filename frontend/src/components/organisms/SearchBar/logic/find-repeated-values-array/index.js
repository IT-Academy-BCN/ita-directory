function findRepeatedValuesArrays(array1, array2) {
  try {
    const newArrayWithRepeatedValues = []

    if (array1.length >= array2.length) {
      for (let i = 0; i < array1.length; i += 1) {
        for (let k = 0; k < array2.length; k += 1) {
          if (array1[i].id === array2[k].id && !newArrayWithRepeatedValues.includes(array1[i])) {
            newArrayWithRepeatedValues.push(array1[i])
          }
        }
      }
    }
    if (array2.length >= array1.length) {
      for (let i = 0; i < array2.length; i += 1) {
        for (let k = 0; k < array1.length; k += 1) {
          if (array2[i].id === array1[k].id && !newArrayWithRepeatedValues.includes(array2[i])) {
            newArrayWithRepeatedValues.push(array2[i])
          }
        }
      }
    }

    return newArrayWithRepeatedValues
  } catch (error) {
    return error
  }
}

export default findRepeatedValuesArrays
