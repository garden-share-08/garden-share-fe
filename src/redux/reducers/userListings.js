const userListingsInitialState = {
  listings: [],
  newListing: {},
  error: []
}

const userListings = (state = userListingsInitialState, action) => {
  switch (action.type) {
    case 'CREATE_LISTING':
      return {
        ...state,
        newListing: action.data,
        error: action.error
      }

    case 'GET_USER_LISTINGS':
      return {
        ...state,
        listings: action.data,
        error: action.error
      }

    case 'ACCEPT_OFFER':
      return {
        ...state,
        listings: action.data,
        error: action.error
      }

    case 'DECLINE_OFFER':
      return {
        ...state,
        listings: action.data,
        error: action.error
      }

    case 'SET_ERROR':
      return {
        ...state,
        error: action.error
      }

    default:
      return state
  }
}

export default userListings;