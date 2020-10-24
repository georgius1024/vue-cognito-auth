import http from '../api'
export default {
  request(context, payload) {
    return new Promise((resolve, reject) => {
      http(payload)
        .then(response => {
          console.log(response.data, response.body)
          resolve(response.data)
        })
        .catch(reject)
    })
  }
}
