import axios from 'axios'

import ModalEvents from '../events/ModalEvents'

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333'
})

api.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    ModalEvents.emit('currentError', error.response.data.errors[0].message)
  }
)

export default api