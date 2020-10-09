import Vue from 'vue'
import Vuex from 'vuex'
import AmazonCognitoVuexModule from 'amazon-cognito-vuex-module'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    cognito: new AmazonCognitoVuexModule({
      region: process.env.VUE_APP_AWS_REGION,
      userPoolId: process.env.VUE_APP_COGNITO_USER_POOL_ID,
      clientId: process.env.VUE_APP_COGNITO_CLIENT_APP_ID
    })
  }
})
