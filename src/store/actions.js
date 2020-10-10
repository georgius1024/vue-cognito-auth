import http from '../api'
export default {
  request({ commit }, payload) {
    return new Promise((resolve, reject) => {
      http(payload)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          commit('message', {
            text: error.message
          })
          reject(error)
        })
    })
  }
}
