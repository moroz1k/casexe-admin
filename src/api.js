import axios from 'axios'

import {
  getDataFromObject,
  getResultsFromData
} from 'js/utils'

const URL = 'https://randomuser.me/api/'

class API {
  static fetchList () {
    return axios.get(URL, {
      params: {
        results: 10
      }
    })
      .then(getDataFromObject)
      .then(getResultsFromData)
      .catch((error) => console.log('++error fetch:', error.message))
  }
  static fetchProfile () {
    return axios.get(URL, {
      params: {
        results: 1
      }
    })
      .then(getDataFromObject)
      .then(getResultsFromData)
      .catch((error) => console.log('++error fetch:', error.message))
  }
}

export default API
