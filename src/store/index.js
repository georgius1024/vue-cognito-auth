import Vue from 'vue'
import Vuex from 'vuex'
import AmazonCognitoVuexModule from 'amazon-cognito-vuex-module'
import config from '../config'
Vue.use(Vuex)
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    cognito: new AmazonCognitoVuexModule({
      region: config.awsRegion,
      userPoolId: config.cognitoUserPoolId,
      clientId: config.cognitoClientAppId
    })
  }
})
