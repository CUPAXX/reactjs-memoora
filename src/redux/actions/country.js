import {http} from '../../helpers/http'

const countryApi = "https://api.printful.com/countries"

export const getCountry = () => {
  return async (dispatch) => {
    const {data} = await http().get(`${countryApi}`)
    dispatch({
      type: 'COUNTRY_GET',
      payload: data.result
    })
  }
}