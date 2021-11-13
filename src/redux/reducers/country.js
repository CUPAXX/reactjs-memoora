/* eslint-disable default-case */
const initialState = {
  data: []
}

const country = (state = initialState, action) => {
  switch(action.type) {
    case 'COUNTRY_GET': {
      return {
        ...state,
        data: action.payload
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default country