import axios from 'axios'

export const http = (token = null) => {
  const headers = {}
  if (token) {
    headers.authorization = `Bearer ${token}`
  }
  return axios.create({
    headers
  })
}
