export default {
  user: state => state.user,
  authorization: state => state.authorization,
  isAuthenticated: state => Boolean(state.cognito.authenticated)
}
