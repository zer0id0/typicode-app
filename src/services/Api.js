import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency',
    withCredentials: false,
    headers: {
      'X-CMC_PRO_API_KEY': '23e3416c-048d-4419-9595-90b9df6d60dc',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
}
