import { http } from '../../helpers/http'
// const URL = "http://localhost:5000"
const { REACT_APP_BACKEND_URL: URL } = process.env


export const authLogin = (email, password) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
    form.append('email', email)
    form.append('password', password)
    try {
      const { data } = await http().post(`${URL}/api/login`, form.toString())
      dispatch({
        type: 'AUTH_LOGIN',
        payload: data.results.token
      })
      setTimeout(() => {
        dispatch({type: 'AUTH_RESET'});
      }, 3000);
    } catch (err) {
      dispatch({
        type: 'AUTH_LOGIN_FAILED',
        payload: err.response.data.message
      })
      setTimeout(() => {
        dispatch({type: 'AUTH_RESET'});
      }, 3000);
    }
    
  }
}

export const authRegister = (name, email, country, password) => {
  return async (dispatch) => {
    const from = new URLSearchParams()
    from.append('name', name)
    from.append('email', email)
    from.append('country', country)
    from.append('password', password)
    try {
      const { data } = await http().post(`${URL}/api/register`, from.toString())
      dispatch({
        type: 'AUTH_REGISTER',
        payload: data.message
      })
      setTimeout(() => {
        dispatch({type: 'AUTH_RESET'});
      }, 3000);
    } catch (err) {
      dispatch({
        type: 'AUTH_REGISTER_FAILED',
        payload: err.response.data.message
      })
      setTimeout(() => {
        dispatch({type: 'AUTH_RESET'});
      }, 3000);
    }
    
  }
}

export const authLogout = () => ({
  type: 'AUTH_LOGOUT'
})

