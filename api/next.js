import axios from 'axios'

const URL = 'https://api.github.com/repos/zeit/next.js'

export const fetchNextDataAPI = () => {
  return axios
    .get(`${URL}`, {})
    .then(response => {
      return response.data
    })
    .catch(error => {
      throw error
    })
}
