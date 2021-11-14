import { http } from '../../helpers/http'
const URL = "http://localhost:5000"


export const getProfile = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await http(token).get(`${URL}/api/user/profile`,)
      dispatch({
        type: 'GET_PROFILE',
        payload: data.results
      })
    } catch (err) {
      dispatch({
        type: 'GET_PROFILE_FAILED',
        payload: err.response.data.message
      })
      setTimeout(() => {
        dispatch({type: 'USER_RESET'});
      }, 3000);
    }
    
  }
}

export const getFile = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await http(token).get(`${URL}/api/files`,)
      dispatch({
        type: 'GET_FILE',
        payload: data.results
      })
    } catch (err) {
      dispatch({
        type: 'GET_FILE_FAILED',
        payload: err.response.data.message
      })
      setTimeout(() => {
        dispatch({type: 'USER_RESET'});
      }, 3000);
    }
    
  }
}