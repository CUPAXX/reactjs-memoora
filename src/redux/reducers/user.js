const initialState = {
  data: {},
  dataFile: {},
  errMsg: '',
  succMsg: ''
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROFILE': {
      return {
        ...state,
        data: action.payload,
        errMsg: ''
      }
    }
    case 'GET_PROFILE_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      }
    }
    case 'GET_FILE': {
      return {
        ...state,
        dataFile: action.payload
      }
    }
    case 'GET_FILE_FAILED': {
      return {
        ...state,
        errMsg: action.payload
      }
    }
    case 'USER_RESET': {
      return {
        ...state,
        errMsg: '',
        succMsg: ''
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default user
