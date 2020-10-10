import axios from 'axios'
import { stored } from '../lib/Utils'
import config from '../config'

function createAuthInterceptor(instance) {
  function setAuthHeaders(config) {
    const authorization = stored('authorization')
    if (authorization) {
      config.headers.Authorization = `${encodeURIComponent(authorization)}` // No cyrillic, please
    } else {
      delete config.headers['Authorization']
    }
    return config
  }
  instance.interceptors.request.use(setAuthHeaders)
  return instance
}
export default createAuthInterceptor(
  axios.create({
    baseURL: config.apiEndPoint,
    timeout: 5000
  })
)
