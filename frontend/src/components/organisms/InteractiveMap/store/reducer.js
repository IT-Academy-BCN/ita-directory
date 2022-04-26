export const MAP_ACTIONS = {
  LIT_NEIGHBORHOOD: 'LIT_NEIGHBORHOOD',
  LIT_DISTRICT: 'LIT_DISTRICT',
}

export const reducer = (state, action) => {
  switch (action.type) {
    case MAP_ACTIONS.LIT_NEIGHBORHOOD:
      return {
        neighborhoodID: action.payload,
      }
    case MAP_ACTIONS.LIT_DISTRICT:
      return {
        districtID: action.payload,
      }

    default:
      return state
  }
}
