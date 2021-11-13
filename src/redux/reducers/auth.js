const initialState = {
  token: null,
  errMsg: '',
  succMsg: ''
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN': {
      return {
        ...state,
        token: action.payload,
        errMsg: ''
      }
    }
    case 'AUTH_REGISTER': {
      return {
        ...state,
        succMsg: action.payload
      }
    }
    case 'AUTH_REGISTER_FAILED': {
      return {
        ...state,
        errMsg: action.payload
      }
    }
    case 'AUTH_LOGIN_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
        token: null
      }
    }
    case 'AUTH_LOGOUT': {
      return {
        ...state,
        token: null,
        errMsg: '',
        succMsg: ''
      }
    }
    case 'AUTH_RESET': {
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

export default auth
