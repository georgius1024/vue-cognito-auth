import { store, destroy } from '../utils/store'

export default {
  setUser: (state, user) => {
    state.user = user
    store('user', state.user)
  },
  setAuthorization: (state, authorization) => {
    state.authorization = authorization
    store('authorization', state.authorization)
  },
  logout: state => {
    state.user = {}
    state.authorization = undefined
    destroy('user')
    destroy('authorization')
  },
  message: (state, message) => {
    state.lastMessage = message
  },
  error: (state, error) => {
    state.lastError = error
  }
}
